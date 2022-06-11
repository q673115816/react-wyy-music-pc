module.exports = {
  '**/*.{ts,tsx,js,jsx}': [
    "eslint --cache --fix",
  ],
  "**/*.vue": [
    "eslint --cache --fix",
  ],
  "**/*.{css,scss}": [
    "stylelint --cache --fix",
  ]
}
