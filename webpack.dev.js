const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	entry: {
		// Runtime code for hot module replacement
		hot: 'webpack/hot/dev-server.js',
		// Dev server client for web socket transport, hot and live reload logic
		client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
	},
	devServer: {
		static: './dist',
		// Dev server client for web socket transport, hot and live reload logic
		hot: false,
		client: false,
	},
	optimization: {
		chunkIds: 'named',
	},
});
