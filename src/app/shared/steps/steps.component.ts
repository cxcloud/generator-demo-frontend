import { any } from 'codelyzer/util/function';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input('steps') steps: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
