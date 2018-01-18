import { Component, ElementRef } from '@angular/core';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private elementRef: ElementRef, private global: Global) {
    const uploadUri = this.elementRef.nativeElement.getAttribute('uploadUri');
    const dataUri = this.elementRef.nativeElement.getAttribute('dataUri');
    if (uploadUri) {
      this.global.uploadEndpoint = uploadUri;
    }

    if (dataUri) {
      this.global.dataEndpoint = dataUri;
    }
  }
}
