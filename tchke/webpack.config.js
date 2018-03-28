const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, "src/"),
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: './build'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jsx|js?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react", "stage-0"],
                            plugins: [
                                "transform-decorators-legacy",
                                "transform-class-properties",
                                "transform-object-rest-spread"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "assets/index.html"
        })
    ]
}
