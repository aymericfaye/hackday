const path = require('path')
const externals = require('webpack-node-externals');

const root = path.resolve(__dirname, '..')
const output = path.resolve(root, 'bin')
const context = path.resolve(root, 'src')
const tsconfig = path.resolve(root, 'tsconfig.json')

module.exports = {
  context: context,

  entry: ['./main.ts'],

  output: {
    filename: 'westage-hackday.js',
    path: output
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: `ts-loader?configFileName=${tsconfig}` },
    ]
  },

  resolve: {
    modules: [context, 'node_modules'],
    extensions: ['.js', '.ts']
  },

  devtool: 'source-map',
  target: 'node',
  externals: [externals()],

  node: {
    fs: 'empty'
  }
}
