// const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        contentBase: baseWebpackConfig.externals.path.dist,
        port: 8081,
        overlay: true
    },
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
})



