import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    build: {
        rollupOptions: {
            // overwrite default .html entry
            input: "src/ts/index.ts",
            output: {
                entryFileNames: `bundle.js`,
                chunkFileNames: `bundle.js`,
            },
            manualChunks: undefined,
        },
        target: ["es2015"],
    },
    resolve: {
        alias: {
            scss: "src/scss",
        },
    },
    plugins: [cssInjectedByJsPlugin()],
});
