const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    resume: './resume.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0', 'react']
            }
          }
        ]
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        // loader: 'style-loader?singleton!css-loader?sourceMap&modules&localIdentName=[local]__[name]___[hash:base64:5]!postcss-loader!resolve-url?silent&keepQuery!sass-loader?sourceMap!sass-resources-loader',

        loaders: [
          'style-loader?singleton',
          'css-loader?sourceMap&modules&localIdentName=[local]__[name]___[hash:base64:5]',
          'postcss-loader',
          'resolve-url?silent&keepQuery',
          'sass-loader?sourceMap',
          // {
          //   loader: 'sass-resources-loader', 
          //   options: {
          //     resources: ['./common/styles/base.scss']
          //   }
          // }
        ],

        // use: [
        //   'style-loader',
        //   'css-loader?importLoaders=1&modules&localIdentName=[local]__[name]__[path]__[hash:base64:5]',
        //   // 'css-loader',
        //   'sass-loader',
        // ]
      },
      {
        test: /\.(ico|jpg|png|gif|webp|ttf|otf|eot|svg|woff|woff2)(\?.*)?$/,
        loader: 'file'
        // loader: 'url-loader?name=fonts/[name].[ext]'
      },
      { test: /\.json$/, loader: 'json-loader'},
    ]
  },

  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
}

