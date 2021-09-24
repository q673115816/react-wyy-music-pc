import {
  getCLS,
  getFCP,
  getFID,
  getLCP,
  getTTFB,
  ReportHandler,
} from "web-vitals";

const logDelta: ReportHandler = ({ name, id, delta }) => {
  console.log(`${name} matching ID ${id} changed by ${delta}`);
};
export default () => {
  getCLS(logDelta);
  getFID(logDelta);
  getLCP(logDelta);
  getFCP(logDelta);
  getTTFB(logDelta);
};
