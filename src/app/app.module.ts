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

import { MyService } from './services/service';
import { UploadService } from './services/upload.service';

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
    HttpClientModule,
  ],
  providers: [
    MyService,
    UploadService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
