import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-goto-button',
  templateUrl: './goto-button.component.html',
  styleUrls: ['./goto-button.component.scss']
})
export class GotoButtonComponent implements OnInit {
  @Input('name') name: string;
  constructor() { }

  ngOnInit() {
  }

}
