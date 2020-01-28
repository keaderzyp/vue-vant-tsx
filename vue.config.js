const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
	lintOnSave:false,
	publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
	productionSourceMap: false,
	transpileDependencies: ['vuex-module-decorators'],
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			if (process.env.npm_config_report) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
			}
			config.plugins.delete('prefetch');
		}
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			return {
				plugins: [
					new CompressionPlugin({
						test: /\.js$|\.html$|\.css$/,
						threshold: 10240,
						deleteOriginalAssets: false,
					}),
				]
			}
		}
	},
}