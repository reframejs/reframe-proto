const express = require('express');
const {getApiResponse} = require('wildcard-api');

require('../api');

const server = express();
module.exports = server;

server.use(express.json());

server.all('/wildcard/*' , async (req, res) => {
  // `getApiResponse` requires the HTTP request `url`, `method`, and `body`.
  const requestProps = {
    url: req.url,
    method: req.method,
    body: req.body,
  };

  // The `requestProps` object is available in your endpoint functions as `this`.
  // For example, you can add `req.headers` to `requestProps` to be
  // able to access the HTTP headers in your endpoint functions at `this.headers`.
  requestProps.headers = req.headers;

  const responseProps = await getApiResponse(requestProps);
  res.status(responseProps.statusCode);
  res.type(responseProps.contentType);
  res.send(responseProps.body);
});
