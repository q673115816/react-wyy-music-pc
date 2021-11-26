const path = require("path");
const dotenv = require("dotenv");
const { root } = require("./util");

const isDev = process.env.NODE_ENV !== "production";

module.exports = () => {
  return dotenv.config({
    path: isDev
      ? path.join(root, ".env.development")
      : path.join(root, ".env.production"),
  });
};
