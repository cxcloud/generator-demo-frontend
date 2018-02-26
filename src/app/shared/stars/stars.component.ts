import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get stars(): Array<any> {
    return Array.from(Array(5).keys());
  }

  mouseOverStarEvent($event) {
    this.highlight($event.target, '#ffba27');
  }

  mouseLeaveStarEvent($event) {
    this.highlight($event.target, '#adadad');
  }

  highlight(el, color) {
    el.style.color = color;
    if (el.previousElementSibling) {
      this.highlight(el.previousElementSibling, color);
    }
  }
}
