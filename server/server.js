const express = require('express');
import path from 'path';
import axios from 'axios';
import webpack from 'webpack';
import config from '../webpack.config.js';
const fs = require('fs');
import {
  loadEntirePage,
  parseTable,
  parseSummary
} from './serverUtility';


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

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/article/:title', function(req,res) {
  var name = req.params.title;
  loadEntirePage('https://en.wikipedia.org/w/api.php?action=parse&&page=tron&format=json')
    .then(function(response){
      console.log(response)
    })
  res.json({success:name})
})


