import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goto-button',
  templateUrl: './goto-button.component.html',
  styleUrls: ['./goto-button.component.scss']
})
export class GotoButtonComponent implements OnInit {
  @Input('name') name: string;
  @Input('disabled') disabled: boolean;
  constructor() {}

  ngOnInit() {}

}
