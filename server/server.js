const express = require('express');
import path from 'path';

import webpack from 'webpack';
import config from '../webpack.config.js';

const compiler = webpack(config);

const port = 3000;
const app = express();

app.listen(port, function(err) {
  if(err) {
    console.log(err)
  }
})

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
