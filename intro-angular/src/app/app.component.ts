import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: `<div>
    <pm-products></pm-products>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-angular';
}
