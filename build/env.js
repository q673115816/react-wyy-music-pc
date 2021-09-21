const path = require("path");
const dotenv = require("dotenv");
const { root } = require("./util");

const isProduction = process.env.NODE_ENV === "production";

module.exports = () => {
  return dotenv.config({
    path: isProduction
      ? path.join(root, ".env.remote")
      : path.join(root, ".env.local"),
  });
};
