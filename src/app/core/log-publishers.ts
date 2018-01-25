import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LogEntry } from './log.service';

export interface ILogPublisher {
  log(record: LogEntry): void;
}

export class LogConsole implements ILogPublisher {
  log(record: LogEntry): void {
    console.log(record.buildLogString());
  }
}

export class LogLoggly implements ILogPublisher {
  private loggly: any = new LogglyTracker();

  constructor() {
    this.loggly.push({
      logglyKey: 'f6373e20-de74-40c3-a05f-c46a30d50d2a',
      sendConsoleErrors: true,
      tag: 'Bohemka-UI-logs'
    });
  }

  log(record: LogEntry): void {
    this.loggly.push(record);
  }
}

export class LogPublisherConfig {
  loggerName: string;
  isActive: boolean;
}
