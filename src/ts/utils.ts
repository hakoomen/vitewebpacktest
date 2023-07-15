//export * as Extra from "./extra"; // will be dropped as dead code unless we mark it as a sideEffect
//export {useLess} from "./extra"; // will be dropped as dead code unless we mark it as a sideEffect
//import "./extra";
// REMEMBER TO CHANGE PACKAGE.JSON SIDE-EFFECTS

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
