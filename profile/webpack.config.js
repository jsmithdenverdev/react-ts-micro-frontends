const path = require("path");
const webpack = require("webpack");
const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;

const {
  container: { ModuleFederationPlugin },
} = webpack;

module.exports = (env, argv) => ({
  entry: "./src/index",
  output: {
    filename: "remote-profile.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3002/",
  },
  mode: process.env.NODE_ENV || "development",
  devServer: {
    port: 3002,
    open: false,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
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
      name: "remote_profile",
      library: {
        type: "var",
        name: "remote_profile",
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
