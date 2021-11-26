import React, {
  memo,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames";

export default memo(function VisitStack() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stackIn, setStackIn] = useState([]);
  const [stackOut, setStackOut] = useState([]);
  const handleGoPrev: MouseEventHandler = useCallback(() => {
    // if (stackIn.length === 0) return;
    // const last = stackIn[stackIn.length - 1];
    // setStackIn((prev) => prev.slice(-1));
    // setStackOut((prev) => [last, ...prev]);
    navigate(-1);
  }, []);
  const handleGoNext: MouseEventHandler = useCallback(() => {
    // if (stackOut.length === 0) return;
    // const next = stackOut[stackOut.length - 1];
    navigate(1);
  }, []);
  return (
    <div className="domHeader_page flex space-x-2">
      <button
        type="button"
        onClick={handleGoPrev}
        className={classNames(
          "bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10"
        )}
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={handleGoNext}
        className={classNames(
          "bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10"
        )}
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );
});

// export default class extends PureComponent<Partial<RouteComponentProps>> {
//   readonly state = {
//     stackIn: 0,
//     stackOut: 0,
//     action: "forward",
//   };

//   unlisten: any;

//   componentDidMount() {
//     this.unlisten = this.props.history.listen(() => {
//       // console.log(route);
//       switch (this.props.history.action) {
//         case "PUSH":
//           this.setState(
//             produce((draft) => {
//               draft.stackIn += 1;
//               draft.stackOut = 0;
//             })
//           );
//           break;
//         case "POP":
//           this.setState(
//             produce((draft) => {
//               const isForWard = draft.action === "forward";
//               draft.stackIn += isForWard ? 1 : -1;
//               draft.stackOut += isForWard ? -1 : 1;
//             })
//           );
//           break;
//         case "REPLACE":
//           break;
//         default:
//           break;
//       }
//     });
//   }

//   componentWillUnmount() {
//     this.unlisten();
//   }

//   private handleGoPrev = () => {
//     if (this.state.stackIn === 0) return;
//     this.setState(
//       produce((draft) => {
//         draft.action = "back";
//       })
//     );
//     this.props.history.goBack();
//   };

//   private handleGoNext = () => {
//     if (this.state.stackOut === 0) return;
//     this.setState(
//       produce((draft) => {
//         draft.action = "forward";
//       })
//     );
//     this.props.history.goForward();
//   };

//   render() {
//     const { stackIn, stackOut } = this.state;
//     return (
//       <div className="domHeader_page flex space-x-2">
//         <ArrowBtn handleClick={this.handleGoPrev} stack={stackIn}>
//           <IconChevronLeft size={16} />
//         </ArrowBtn>
//         <ArrowBtn handleClick={this.handleGoNext} stack={stackOut}>
//           <IconChevronRight size={16} />
//         </ArrowBtn>
//       </div>
//     );
//   }
// }
