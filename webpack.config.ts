import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    entry: {
        bundle: "./src/ts/index.ts",
    },
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
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // modify how imports work
        alias: {
            scss: ["/src/scss"],
        },
        extensions: [".ts", ".js", ".scss"], // omit extension in imports(if multiple files exist by the same name a.js and a.ts it will go for a.ts because its preceding .js in the list)
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/",
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: "all",
            minSize: 5,
            minRemainingSize: 0,
            minChunks: 1,
            minSizeReduction: 0,
            maxInitialRequests: Infinity,
            // cacheGroups: {
            //     initial: {
            //         name: "initial",
            //         chunks: "initial",
            //         minChunks: 2,
            //         test: /src/,
            //         priority: -5,
            //         reuseExistingChunk: true,
            //     },
            // },
        },
    },
};

export default config;
