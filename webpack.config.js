const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');
const env = require('dotenv').config();

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactRemote',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './reactRemoteApp': './src/mount-app',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(env.parsed),
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
