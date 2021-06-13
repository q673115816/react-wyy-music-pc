import React, {memo, PureComponent} from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import produce from 'immer';

const DomBtn = memo(({handleClick = () => null, stack = 0, children}) => (
  <button
    type="button"
    onClick={handleClick}
    className={classNames('bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10', stack === 0 && 'text-opacity-25')}
  >
    {children}
  </button>
))

@withRouter
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stackIn: 0,
      stackOut: 0,
      action: 'forward'
    }
    this.handleGoPrev = this.handleGoPrev.bind(this)
    this.handleGoNext = this.handleGoNext.bind(this)
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      // console.log(route);
      switch (this.props.history.action) {
        case "PUSH":
          this.setState(produce(draft => {
            draft.stackIn += 1
            draft.stackOut = 0
          }))
          break;
        case "POP":
          this.setState(produce(draft => {
            const isForWard = draft.action === 'forward'
            draft.stackIn += isForWard ? 1 : -1
            draft.stackOut += isForWard ? -1 : 1
          }))
          break;
        case "REPLACE":
          break;
        default:
          break;
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleGoPrev() {
    if (this.state.stackIn === 0) return
    this.setState(produce(draft => {
      draft.action = 'back'
    }))
    this.props.history.goBack()
  }

  handleGoNext() {
    if (this.state.stackOut === 0) return
    this.setState(produce(draft => {
      draft.action = 'forward'
    }))
    this.props.history.goForward()
  }

  render() {
    const {stackIn, stackOut} = this.state
    return (
      <div className="domHeader_page flex space-x-2">
        <DomBtn handleClick={this.handleGoPrev} stack={stackIn}>
          <IconChevronLeft size={16} />
        </DomBtn>
        <DomBtn handleClick={this.handleGoNext} stack={stackOut}>
          <IconChevronRight size={16} />
        </DomBtn>
      </div>
    );
  }
}
