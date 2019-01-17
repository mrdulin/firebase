import { createLogger, transports, format, Logger } from "winston";
import _ from "lodash";

function createAppLogger(): Logger {
  const { combine, timestamp, printf, colorize } = format;

  return createLogger({
    format: combine(
      colorize(),
      timestamp(),
      printf(
        (info: any): string => {
          const label: string = info.label ? " " + info.label + " " : "";
          let message = info.message ? info.message : info;
          if (typeof message === "object") {
            message = JSON.stringify(message);
          }
          return `${info.timestamp}${label}[${info.level}] : ${message}`;
        }
      )
    ),
    transports: [new transports.Console()]
  });
}

const logger: Logger = createAppLogger();

export { logger };
