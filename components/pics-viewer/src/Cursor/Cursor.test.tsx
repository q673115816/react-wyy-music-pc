import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import React from "react";
import Cursor from "./Cursor";

describe("Cursor", () => {
  it("renders both arrows without crashing", () => {
    expect(() => renderToStaticMarkup(<Cursor.Left />)).not.toThrow();
    expect(() => renderToStaticMarkup(<Cursor.Right />)).not.toThrow();
  });
});
