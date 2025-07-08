const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, join } = require('path')

const webpackConfig = {
    mode: "development",
    //entry: resolve(__dirname, 'src', 'index.js'),
    entry: {
        index: resolve(__dirname, 'src', 'index.js'),
        app: resolve(__dirname, 'src', 'components', 'App.js'),
        appHader: resolve(__dirname, 'src', 'components', 'Header.js'),
        appButton: resolve(__dirname, 'src', 'components', 'Button.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true })
    ],
    devServer: {
        static: {
            directory: join(__dirname, 'public')
        },
        compress: true,
        port: 3000
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}
module.exports = webpackConfig