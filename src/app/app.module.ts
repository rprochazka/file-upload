import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { Global } from './global';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UploadModule } from './upload/upload.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    UploadModule
  ],
  providers: [
    Global,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
