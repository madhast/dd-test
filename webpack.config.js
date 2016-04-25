var CopyWebpack = require('copy-webpack-plugin');
var HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devServer: {
        // This is required for webpack-dev-server. The path should
        // be an absolute path to your build destination.
        outputPath: './build'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: /index\.html$/,
                loader: 'ngtemplate?relativeTo=' + (__dirname) + '/!html'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]',
                    prefixize: true,
                    angularBaseWorkaround: true
                })
            },
            { test: /\.css$/, exclude: /\.useable\.css$/, loader: 'style!css' },
            { test: /\.useable\.css$/, loader: 'style/useable!css' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template: './src/index.html'
        }),
        new CopyWebpack([
            { from: 'assets/api', to: 'api' },
            { from: 'assets/avatar', to: 'avatar' }
        ])
    ]
};
