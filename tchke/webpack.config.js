const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
                            presets: ["es2015", "react"],
                            plugins: [
                                "transform-class-properties",
                                "transform-object-rest-spread"
                            ]
                        }
                    }
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract([
            //         {
            //             loader: 'css-loader',
            //             options: { url: false }
            //         },
            //         {
            //             loader: 'sass-loader'
            //         }
            //     ])
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 context: path.resolve(__dirname, "source/"),
            //                 outputPath: path.resolve(__dirname, 'build/assets'),
            //                 name: '[path][name].[ext]',
            //                 publicPath: 'public/'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "assets/index.html"
        })
    //     new ExtractTextPlugin({
    //         filename: '../css/style.css',
    //         allChunks: true
    //     })
    ]
}
