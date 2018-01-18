import { FileMetadataComponent } from './file-metadata/file-metadata.component';
import { GlobalErrorHandler } from './shared/globalErrorHandler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule as BootstrapModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileItemComponent } from './file-item/file-item.component';
import { DndModule } from 'ng2-dnd';
import { SelectListComponent } from './select-list/select-list.component';

import { CodeListService } from './services/code-list.service';
import { UploadService } from './services/upload.service';

import {Global} from './global';

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
    BootstrapModule.forRoot(),
    DndModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    CodeListService,
    UploadService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }