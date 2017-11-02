import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent implements OnInit, OnChanges {
  @Output() quantityChange = new EventEmitter<number>();
  @Input() allowZeroQuantity = false;
  @Input() quantity = 1;

  private currentQuantity = 1;

  constructor() { }

  ngOnInit() {
    this.quantityChange.emit(this.currentQuantity);
  }

  increment() {
    this.currentQuantity += 1;
    this.quantityChange.emit(this.currentQuantity);
  }

  decrement() {
    if (this.decrementAllowed()) {
      this.currentQuantity -= 1;
      this.quantityChange.emit(this.currentQuantity);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentQuantity = changes.quantity.currentValue;
  }

  emitQuantity() {
    this.quantityChange.emit(this.currentQuantity);
  }

  decrementAllowed() {
    return (this.currentQuantity > 1 || (this.allowZeroQuantity && this.currentQuantity > 0));
  }


}
