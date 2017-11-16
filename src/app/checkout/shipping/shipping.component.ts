import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@cxcloud/ct-types/common';
import { Cart } from '@cxcloud/ct-types/carts';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
