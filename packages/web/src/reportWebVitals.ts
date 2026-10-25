import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

const logDelta = ({ name, id, delta }: Metric) => {
  console.log(`${name} matching ID ${id} changed by ${delta}`);
};
export default () => {
  onCLS(logDelta);
  onINP(logDelta);
  onLCP(logDelta);
  onFCP(logDelta);
  onTTFB(logDelta);
};
