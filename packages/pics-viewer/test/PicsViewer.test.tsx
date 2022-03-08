import * as React from "react";
import * as ReactDOM from "react-dom";
import { Cur } from "../src";

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Cur.Left />, div);
    ReactDOM.render(<Cur.Right />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
