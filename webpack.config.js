/* eslint-env node */
var webpack = require('webpack')

var getBaseWebpackConfig = require('./getBaseWebpackConfig')

var minifiedConfig = getBaseWebpackConfig()
minifiedConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true
}))
minifiedConfig.entry = {
    'workfront-cookie.min': './index'
}

var unminifiedConfig = getBaseWebpackConfig()
unminifiedConfig.entry = {
    'workfront-cookie': './index'
}

module.exports = [
    minifiedConfig,
    unminifiedConfig
]
