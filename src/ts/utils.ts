//export * as Extra from "./extra"; // should be dropped as dead code unless we mark it as a sideEffect
export {useLess} from "./extra"; // should be dropped as dead code unless we mark it as a sideEffect
//import "./extra"; //  sideEffect only import (this should work no matter what)

console.log("utils-side-effect-are");

export enum LogLevel {
  ERROR,
  INFORMATION,
}

export function log(message: string, logLevel: LogLevel = LogLevel.INFORMATION) {
  switch (logLevel) {
    case LogLevel.ERROR:
      console.error(message);
      break;
    case LogLevel.INFORMATION:
      console.info(message);
      break;
  }
}
