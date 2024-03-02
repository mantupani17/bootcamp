import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import 'winston-daily-rotate-file'; 
import * as CloudWatchTransport from 'winston-cloudwatch';
export const WinstonLogger = (cloudWatchConfig, appEnv: string) => {

  const winstonLoggerOptions:any =  {
    transports: [
      // file on daily rotation (error only)
      new transports.DailyRotateFile({
     // %DATE will be replaced by the current date
        filename: `logs/%DATE%-error.log`, 
        level: 'error',
        format: format.combine(format.timestamp(), format.json()),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false, // don't want to zip our logs
        maxFiles: '30d', // will keep log until they are older than 30 days
      }),
      // same for all levels
      new transports.DailyRotateFile({
        filename: `logs/%DATE%-combined.log`,
        format: format.combine(format.timestamp(), format.json()),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxFiles: '30d',
      }),

      new transports.Console({
       format: format.combine(
         format.cli(),
         format.splat(),
         format.timestamp(),
         format.printf((info) => {
           return `${info.timestamp} ${info.level}: ${info.message}`;
         }),
        ),
      }),
    ],
  }
  
  // appending the aws cloudwatch if the env is not in development
  if (appEnv != 'development') {
    winstonLoggerOptions.transports.push(new CloudWatchTransport({
      ...cloudWatchConfig,
      messageFormatter: function (item) {
        return (
          item.level + ": " + item.message + " " + JSON.stringify(item.meta)
        );
      },
    }))
  }

  return WinstonModule.createLogger(winstonLoggerOptions)
}