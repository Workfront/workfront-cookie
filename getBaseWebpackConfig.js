/* eslint-env node */
var path = require('path')

function getBaseWebpackConfig() {
    return {
        context: __dirname,
        output: {
            libraryTarget: 'umd',
            library: 'WorkfrontCookie',
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
            devtoolModuleFilenameTemplate: 'workfront-cookie:///[resource-path]'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'eslint-loader'
                    }
                }
            ]
        },
        plugins: [
        ]
    }
}

module.exports = getBaseWebpackConfig
