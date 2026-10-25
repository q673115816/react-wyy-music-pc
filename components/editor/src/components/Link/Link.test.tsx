import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import React from "react";
import Link from "./Link";

test("Link renders its children", () => {
  const html = renderToStaticMarkup(
    <Link page="http://antfu.me">Anthony Fu</Link>
  );
  expect(html).toContain("Anthony Fu");
});
