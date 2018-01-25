import { FileMetadataComponent } from './file-metadata/file-metadata.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgbModule as BootstrapModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileItemComponent } from './file-item/file-item.component';
import { DndModule } from 'ng2-dnd';
import { SelectListComponent } from './select-list/select-list.component';

import { CodeListService } from './services/code-list.service';
import { UploadService } from './services/upload.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UploaderMockedData } from './services/upload-mock.service';
import { environment } from '../environments/environment';

import { Global } from './global';

import { ToasterModule, ToasterService } from 'angular2-toaster';

import { LogPublishersService } from './core/log-publishers.service';
import { LogService } from './core/log.service';
import { GlobalErrorHandler } from './core/global-error-handler';
import { ErrorLogService } from './core/error-log.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    FileItemComponent,
    FileMetadataComponent,
    SelectListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BootstrapModule.forRoot(),
    DndModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    !environment.production
      ? InMemoryWebApiModule.forRoot(UploaderMockedData, {
        apiBase: 'api/mock/',
        passThruUnknownUrl: true
      })
      : []
    ,
    ToasterModule
  ],
  providers: [
    CodeListService,
    UploadService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    Global,
    LogPublishersService,
    LogService,
    ErrorLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
