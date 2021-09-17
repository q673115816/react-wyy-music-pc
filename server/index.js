if (typeof window === 'undefined') {
  global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');

const SSR = require('../dist/search-server');

console.log('entry ssr');
const template = fs.readFileSync(
  path.join(__dirname, '../dist/404.html'),
  'utf-8',
);

const renderMarkup = (str) => template.replace('<!--HTML_PLACEHOLDER-->', str);

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));

  app.get('/search', (req, res) => {
    console.log('SSR-----------》', SSR);
    const renderSSR = renderToString(SSR);
    console.log('renderToString(SSR)------>', renderSSR);
    const html = renderMarkup(renderSSR);
    res.status(200).send(html);
  });

  app.listen(port, () => {
    console.log(`Server is running on port：${port}`);
  });
};

const PORT = process.env.PORT || 8080;

server(PORT);
