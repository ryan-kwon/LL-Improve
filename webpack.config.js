const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/", // Ensure all paths are resolved relative to root
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Add this rule for CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  mode: "development",
  devServer: {
    historyApiFallback: true, // Fallback to index.html for all routes
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true, // Enable gzip compression for better performance
    port: 3000,
    open: true,
  },
};
