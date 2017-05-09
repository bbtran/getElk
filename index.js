const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.set('Access-Control-Allow-Credentials', true);
  next();
});

// Get all page content and send stringified data to client
app.get('/api/page-content', (req, res) => {
  const options = {
    url: 'https://api.staging.replicated.com/cloud/v1/site/properties',
    headers: {
      EnterpriseHost: 'enterprise.staging.getelk.com',
    },
  };
  request.get(options, (err, response, body) => {
    if (err) throw err;
    res.status(200).send(JSON.stringify(body));
  });
});

// Get testimonials and send stringified data to client
app.get('/api/testimonials', (req, res) => {
  request.get('http://demo2271678.mockable.io/testimonials', (err, response, body) => {
    if (err) throw err;
    res.status(200).send(JSON.stringify(body));
  });
});


if (process.env.NODE_ENV === 'production') {
  console.log('IN PRODUCTION');
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig), {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(webpack(webpackConfig)));
}

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening on http://localhost:${port}/`);
  }
});
