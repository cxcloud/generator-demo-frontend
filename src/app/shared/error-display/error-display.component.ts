import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {
  @Input() control: any;

  constructor() {}

  ngOnInit() {}
}
