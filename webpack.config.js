const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',

		// Runtime code for hot module replacement
		hot: 'webpack/hot/dev-server.js',
		// Dev server client for web socket transport, hot and live reload logic
		client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							['@babel/preset-react', { runtime: 'automatic' }],
							'@babel/preset-typescript',
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Five Rooms In Space',
		}),
		// Plugin for hot module replacement
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: './dist',
		// Dev server client for web socket transport, hot and live reload logic
		hot: false,
		client: false,
	},
	optimization: {
		runtimeChunk: 'single',
	},
	mode: 'development',
};
