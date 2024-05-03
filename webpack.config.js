const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
	},
	module: {
		rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
			{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }			,
			{
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		static: '../dist',
		hot: true,
		historyApiFallback: true, 
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Startup',
			template: './src/index.html'
		}),
		new VueLoaderPlugin(),
	],
}
