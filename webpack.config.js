/* eslint-env node */
var getBaseWebpackConfig = require('./getBaseWebpackConfig')

var minifiedConfig = getBaseWebpackConfig()
minifiedConfig.entry = {
    'workfront-cookie.min': './index'
}
minifiedConfig.mode = 'production'

var unminifiedConfig = getBaseWebpackConfig()
unminifiedConfig.entry = {
    'workfront-cookie': './index'
}
unminifiedConfig.mode = 'development'

module.exports = [
    minifiedConfig,
    unminifiedConfig
]
