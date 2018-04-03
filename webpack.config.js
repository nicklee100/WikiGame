//

import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'app/app.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules',
        use: [{
          loader: "babel-loader",
          options: {
            "presets": [["es2015", {"modules": false}], "react"]
          }
        }
        ]

      }
    ]
  },
}
