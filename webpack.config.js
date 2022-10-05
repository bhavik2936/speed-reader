const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const config = {
  entry: "./src/index.js",
  mode: isProd ? 'production' : 'development',

  module: {
    rules: [
      // ES6 and JSX rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // CSS rule
      // allows CSS import with camelCase
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localConvention: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // Generate index.html on base of src/index.html
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),

    // Allows libraries to be used without requiring an `import` or `require()` call.
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],

  // Allows us to import modules without needing to add their extensions
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js']
  },

  output: {
    // Delete previous builds when starting a new build
    clean: true,
    // Base path for asset URL links
    publicPath: '/',
    // Destination for built files
    path: path.resolve(__dirname, 'dist'),
    // Name pattern for build files
    filename: '[name].[chunkhash].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        // Create chunks for stylesheets
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all'
        },

        // Create vendor chunk for node_modules
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  },
}

if (isDev) {
  const host = 'localhost';
  const port = process.env.PORT || 8080;

  config.output.publicPath = `http://${host}:${port}/`;
  config.devServer = {
    port: port,
    host: host,
    // Enable Hot Module Replacement (HMR)
    hot: true,

    static: {
      directory: path.resolve(__dirname, 'public'),
    },

    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
}

module.exports = config;
