import React, { useEffect, memo, PureComponent } from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import produce from 'immer'

// export default memo(() => {
//   const {
//     goBack,
//     goForward,
//     listen,
//   } = useHistory();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unlisten = listen((route) => {
//       // console.log('action', useHistory().action);
//       console.log('listen', route);
//       dispatch(setLyricHide());
//     });
//     return () => {
//       unlisten && unlisten();
//     };
//   }, []);

// });

@withRouter
export default class extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      gostack: [],
      backstack: [],
    }
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((route) => {
      // console.log('action', useHistory().action);
      // switch (this.props.history.action) {
      //   case 'POP':
      //     return this.setState(produce((draft) => {
      //       draft.pop.push(draft.push.pop())
      //     }))
      //   case "push":
      //     return this.setState(produce((draft) => {
      //       draft.gostack.push()
      //     }))
      // }
      console.log('listen', this.props.history);
      // dispatch(setLyricHide());
    });
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return (
      <div className="domHeader_page flex space-x-2">
        <button
          type="button"
          onClick={() => this.props.history.goBack()}
          className={classNames("focus:outline-none bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10")}
        >
          <IconChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => this.props.history.goForward()}
          className={classNames("focus:outline-none bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10")}
        >
          <IconChevronRight size={16} />
        </button>
      </div>
    );
  }
}
