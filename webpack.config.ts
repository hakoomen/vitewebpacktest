import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/ts/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
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
      },
    ],
  },
  resolve: {
    // modify how imports work
    alias: {
      scss: ["/src/scss"],
    },
    extensions: [".ts", ".js", ".scss"], // omit extension in imports(if multiple files exist by the same name a.js and a.ts it will go for a.ts because its precding .js in the list)
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization:{
    usedExports: true
  }
};

export default config;
