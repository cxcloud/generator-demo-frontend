import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {}

  checkout() {
    this.router.navigateByUrl('checkout/confirmation');
  }
}
