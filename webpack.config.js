/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const TsconfigPathsPlugin = require('../');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'temp'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        exclude: /^node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: './tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        logLevel: 'info',
        extensions: ['.ts', '.tsx'],
        mainFields: ['browser', 'main'],
        // baseUrl: "/foo"
      }),
    ],
  },
};
