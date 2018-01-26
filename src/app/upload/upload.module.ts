import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

import { DndModule } from 'ng2-dnd';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FileMetadataComponent } from './file-metadata/file-metadata.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileItemComponent } from './file-item/file-item.component';

import { CodeListService } from './services/code-list.service';
import { UploadService } from './services/upload.service';
import { UploaderMockedData } from './services/upload-mock.service';

import { environment } from '../../environments/environment';
import { Global } from '../global';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileItemComponent,
    FileMetadataComponent
  ],
  imports: [
    DndModule.forRoot(),
    !environment.production
      ? InMemoryWebApiModule.forFeature(UploaderMockedData, {
        apiBase: 'api/mock/',
        passThruUnknownUrl: true
      })
      : []
    ,
    CoreModule,
    SharedModule
  ],
  providers: [
    CodeListService,
    Global,
    UploadService,
  ],
  exports: [
    FileUploadComponent
  ]
})
export class UploadModule { }
