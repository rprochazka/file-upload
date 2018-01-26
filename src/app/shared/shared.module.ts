import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToasterModule, ToasterService } from 'angular2-toaster';
import { NgbModule as BootstrapModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectListComponent } from './select-list/select-list.component';
import { SelectListItemModel } from './select-list/select-list-item.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToasterModule,
    HttpClientModule
  ],
  declarations: [SelectListComponent],
  exports: [
    SelectListComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule,
    BootstrapModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ToasterService
  ]
})
export class SharedModule { };
