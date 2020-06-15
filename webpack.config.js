const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = ['micro', 'macro']

function make_page(name) {
  return new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: name + '.html',
    templateParameters: { name }
  })
}

module.exports = {
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff2$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: pages.map(make_page)
}

