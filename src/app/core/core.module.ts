import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogPublishersService } from './log-publishers.service';
import { LogService } from './log.service';
import { GlobalErrorHandler } from './global-error-handler';
import { ErrorLogService } from './error-log.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    LogPublishersService,
    LogService,
    ErrorLogService]
})
export class CoreModule { };
