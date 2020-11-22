const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [

    ]
}

module.exports = (env = {}, arvg) => {
    console.log(env);
    if (env.analyse === true) {
        config.plugins.push(new BundleAnalyzerPlugin())
    }
    return config
}
