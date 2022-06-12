import React from "react";
import ReactDOM from "react-dom";
import Cursor from "./Cursor"

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Cursor.Left />, div);
    ReactDOM.render(<Cursor.Right />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
