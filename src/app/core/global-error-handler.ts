import { ErrorHandler, Injectable } from '@angular/core';

import { ErrorLogService } from './error-log.service';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(private errorLogger: ErrorLogService) {
    super();
  }

  handleError(error: any): void {
    this.errorLogger.logError(error);
  }
}
