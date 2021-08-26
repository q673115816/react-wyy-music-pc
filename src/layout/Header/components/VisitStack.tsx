import React, {
  memo,
  PureComponent,
} from "react";
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';
import produce from 'immer';

interface ArrowProp {
  handleClick: () => void,
  stack: number,
}

const ArrowBtn = memo<ArrowProp>(
  ({ handleClick = () => null, stack = 0, children }) => (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        "bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10",
        stack === 0 && "text-opacity-25"
      )}
    >
      {children}
    </button>
  )
);


// @ts-ignore
@withRouter
export default class extends PureComponent<Partial<RouteComponentProps>> {
  readonly state = {
    stackIn: 0,
    stackOut: 0,
    action: "forward",
  };

  unlisten: any;

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      // console.log(route);
      switch (this.props.history.action) {
        case "PUSH":
          this.setState(
            produce((draft) => {
              draft.stackIn += 1;
              draft.stackOut = 0;
            })
          );
          break;
        case "POP":
          this.setState(
            produce((draft) => {
              const isForWard = draft.action === "forward";
              draft.stackIn += isForWard ? 1 : -1;
              draft.stackOut += isForWard ? -1 : 1;
            })
          );
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

  private handleGoPrev = () => {
    if (this.state.stackIn === 0) return;
    this.setState(
      produce((draft) => {
        draft.action = "back";
      })
    );
    this.props.history.goBack();
  };

  private handleGoNext = () => {
    if (this.state.stackOut === 0) return;
    this.setState(
      produce((draft) => {
        draft.action = "forward";
      })
    );
    this.props.history.goForward();
  };

  render() {
    const { stackIn, stackOut } = this.state;
    return (
      <div className="domHeader_page flex space-x-2">
        <ArrowBtn handleClick={this.handleGoPrev} stack={stackIn}>
          <IconChevronLeft size={16} />
        </ArrowBtn>
        <ArrowBtn handleClick={this.handleGoNext} stack={stackOut}>
          <IconChevronRight size={16} />
        </ArrowBtn>
      </div>
    );
  }
}
