const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: './.env' });
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    publicPath: dotenv.parsed.PUBLIC_PATH,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.css', '.scss'],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css)$/i,
        use: [
          'thread-loader',
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'css-modules-typescript-loader' },
          'postcss-loader',
        ],
      },
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          'thread-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // modules: true,
              modules: {
                localIdentName: '[path][name]-[local]-[hash:base64:5]',
              },
            },
          },
          { loader: 'css-modules-typescript-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'assets/',
        },
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    // new ModuleFederationPlugin({
    //   name: 'ssa-landing-page',
    //   filename: 'remoteEntry.js',
    //   exposes: {},
    //   shared: {
    //     ...deps,
    //     react: {
    //       singleton: true,
    //       requiredVersion: deps.react,
    //     },
    //     'react-dom': {
    //       singleton: true,
    //       requiredVersion: deps['react-dom'],
    //     },
    //   },
    // }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      // favicon: './src/assets/favicon.ico',
    }),
  ],
};
