import { Injectable } from '@angular/core';
import { ILogPublisher, LogConsole, LogLoggly, LogPublisherConfig } from './log-publishers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';
import 'rxjs/observable/throw';

const PUBLISHERS_FILE = 'assets/log-publishers.json';

@Injectable()
export class LogPublishersService {

  publishers: ILogPublisher[] = [];

  constructor(private http: HttpClient) {
    this.buildPublishers();
  }

  buildPublishers(): void {
    let logPub: ILogPublisher;

    this.getLoggers().subscribe(response => {
      for (const pub of response.filter(p => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case 'console':
            logPub = new LogConsole();
            break;
          case 'loggly':
            logPub = new LogLoggly();
            break;
        }

        this.publishers.push(logPub);
      }
    });
  }

  getLoggers(): Observable<LogPublisherConfig[]> {
    return this.http.get<LogPublisherConfig[]>(PUBLISHERS_FILE)
      .catch(this.handleErrors);
  }

  private handleErrors(error: any): Observable<any> {
    const errors: string[] = [];
    let msg = '';

    msg = 'Status: ' + error.status;
    msg += ' - Status Text: ' + error.statusText;
    if (error.json()) {
      msg += ' - Exception Message: ' + error.json().exceptionMessage;
    }

    errors.push(msg);

    console.error('An error occurred', errors);

    return Observable.throw(errors);
  }
}
