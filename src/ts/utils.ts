import * as Extra from "./extra"; // dropped as dead code
import "./extra";

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
