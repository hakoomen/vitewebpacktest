import * as Extra from "./extra";
import {useLess} from "./extra";

export enum LogEvel {
  ERROR,
  INFORMATION,
}

export function log(message: string, logLevel: LogEvel = LogEvel.INFORMATION) {
  switch (logLevel) {
    case LogEvel.ERROR:
      console.error(message);
      break;
    case LogEvel.INFORMATION:
      console.info(message);
      break;
  }
}
