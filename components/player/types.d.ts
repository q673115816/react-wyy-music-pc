declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
  export default ReactComponent;
}
