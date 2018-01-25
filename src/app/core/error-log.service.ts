import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class ErrorLogService {

  constructor(private logService: LogService) { }

  logError(error: any) {
    if (error instanceof HttpErrorResponse) {
      this.logService.error(`There was an HTTP error.' ${error.message}, Status code: ${(<HttpErrorResponse>error).status}`);
    } else if (error instanceof TypeError) {
      this.logService.error(`There was a Type error. ${error.message}`);
    } else if (error instanceof Error) {
      this.logService.error(`There was a general error ${error.message}`, error.stack);
    } else {
      this.logService.error(`Nobody threw an error but something happened! ... ${error}`);
    }
  }
}
