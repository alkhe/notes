const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const pages = ['micro', 'macro']

function make_page(name) {
  return new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: name + '.html',
    templateParameters: { name }
  })
}

module.exports = (env, argv) => {
  const page_plugins = pages.map(make_page)

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve('./dist')
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            'html-loader',
            {
              loader: 'techdown-loader',
              options: {
                nomnoml_prelude: '#font: Source Code Variable'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.woff2$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: argv.mode === 'production' ? [new MiniCssExtractPlugin, new OptimizeCSSAssetsPlugin].concat(page_plugins) : page_plugins
  }
}

