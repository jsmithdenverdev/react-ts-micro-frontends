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
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  devServer: {
    port: 3000,
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
      name: "host",
      remotes: [
        {
          remote_home: "remote_home@http://127.0.0.1:3001/remote.js",
        },
      ],
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
