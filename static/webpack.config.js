var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.join(__dirname, 'client');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(ROOT_PATH, 'src')
    ],
    output: {
        path: path.join(ROOT_PATH, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Legacy',
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap', include: path.join(ROOT_PATH, 'styles')},
            { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap', include: path.join(ROOT_PATH, 'styles')},
            {
                test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
                loaders: [
                  'transform-loader/cacheable?brfs',
                  'transform-loader/cacheable?packageify'
                ]
            },
            {
                test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
                loader: 'transform-loader/cacheable?ejsify'
            },
            { test: /\.json$/, loader: 'json'},
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss'],
        alias: {
          containers: path.resolve(ROOT_PATH, 'src/containers'),
          components: path.resolve(ROOT_PATH, 'src/components'),
          pages: path.resolve(ROOT_PATH, 'src/pages'),
          layouts: path.resolve(ROOT_PATH, 'src/layouts'),
          modules: path.resolve(ROOT_PATH, 'src/modules'),
          utils: path.resolve(ROOT_PATH, 'src/utils')
        },
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    eslint: {
	    formatter: require("eslint-friendly-formatter"),
	    configFile: './.eslintrc',
	    failOnError: false
	}
};
