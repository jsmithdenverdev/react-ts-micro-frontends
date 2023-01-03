const path = require("path");
const webpack = require("webpack");
const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;

const {
  container: { ModuleFederationPlugin },
} = webpack;

module.exports = (env, argv) => ({
  entry: "./src/index.ts",
  output: {
    filename: "remote-home.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3001/",
  },
  mode: process.env.NODE_ENV || "development",
  devServer: {
    port: 3001,
    open: false,
    historyApiFallback: true,
  },
  resolve: {
    extension: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new DotenvWebpackPlugin({
      systemvars: true,
    }),
    new ModuleFederationPlugin({
      name: "remote_home",
      library: {
        type: "var",
        name: "remote_home",
      },
      filename: "remote.js",
      exposes: {
        "./Application": "./src/__module",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
