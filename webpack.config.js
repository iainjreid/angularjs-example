'use strict'

// Dependencies
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

module.exports = {
  entry: {
    app: [
      './node_modules/angular',
      './node_modules/@angular/router/angular1/angular_1_router.js',
      ...glob.sync('./source/**/*.js')
    ]
  },
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/index.html'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watchOptions: {
    poll: true
  }
}
