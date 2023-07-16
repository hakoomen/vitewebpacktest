import 'vite/modulepreload-polyfill' // should be imported to support dynamic imports https://vitejs.dev/config/build-options.html#build-modulepreload
import {log} from "./utils";
import "scss/index.scss";

log("top-level-statement");