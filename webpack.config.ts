import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    entry: "./src/ts/index.ts",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        alias: {
            scss: ["/src/scss"],
        },
        extensions: [".ts", ".js", ".scss"],
    },
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            minSize: 0,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
        }),
    ],
};

export default config;
