import path from "path";
import fs from "fs";

import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";

import App from "./App";

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  const app = renderToString(<App />);
  const file = path.join(process.cwd(), "public/index.html");
  console.log("cwd", process.cwd());
  console.log("file", file);
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static("../public"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
