const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "client/src/index.js"),  // Updated entry path
  },
  output: {
    path: path.resolve(__dirname, "client/dist"),  // Updated output path
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "client/dist"),  // Updated static directory
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',  // Adjust the URL to match your backend server
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/, // Include both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      filename: "index.html",
      template: "client/src/template.html",  // Updated template path
    }),
  ],
};
