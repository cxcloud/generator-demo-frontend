import { Component, OnInit } from '@angular/core';
import { Order } from '@cxcloud/ct-types/orders';
import { Address } from '@cxcloud/ct-types/common';
import { CartService } from '../core/cart/cart.service';
import { OrderService } from '../core/order/order.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: Order = {
    type: 'Order',
    id: '7a84a5dc-1b58-4762-bee6-1163553c916a',
    orderNumber: 123456,
    version: 1,
    customerId: 'fc69ff07-9ba8-47dc-b7ca-d1429dca3198',
    customerEmail: 'sallar@kaboli.org',
    createdAt: '2017-11-29T12:20:56.677Z',
    lastModifiedAt: '2017-11-29T12:20:56.677Z',
    totalPrice: { currencyCode: 'EUR', centAmount: 14875 },
    taxedPrice: {
      totalNet: { currencyCode: 'EUR', centAmount: 12500 },
      totalGross: { currencyCode: 'EUR', centAmount: 14875 },
      taxPortions: [
        {
          rate: 0.19,
          amount: { currencyCode: 'EUR', centAmount: 2375 },
          name: 'standard'
        }
      ]
    },
    orderState: 'Open',
    syncInfo: [],
    returnInfo: [],
    shippingInfo: {
      shippingMethodName: 'default',
      price: { currencyCode: 'EUR', centAmount: 0 },
      shippingRate: {
        price: { currencyCode: 'EUR', centAmount: 599 },
        freeAbove: { currencyCode: 'EUR', centAmount: 10000 },
        tiers: []
      },
      taxRate: {
        name: 'standard',
        amount: 0.19,
        includedInPrice: true,
        country: 'DE',
        id: 'pqgIXgoJ',
        subRates: []
      },
      taxCategory: {
        typeId: 'tax-category',
        id: '67ef855a-a1d3-4466-a843-4a118722997d'
      },
      deliveries: [],
      shippingMethod: {
        typeId: 'shipping-method',
        id: '61e5748d-e005-4d5f-90f0-103b6e2d4902'
      },
      taxedPrice: {
        totalNet: { currencyCode: 'EUR', centAmount: 0 },
        totalGross: { currencyCode: 'EUR', centAmount: 0 }
      },
      shippingMethodState: 'MatchesCart'
    },
    taxMode: 'Platform',
    inventoryMode: 'None',
    taxRoundingMode: 'HalfEven',
    taxCalculationMode: 'LineItemLevel',
    lineItems: [
      {
        id: '9f5b71f8-338a-4db3-8a74-907f6f938d6e',
        productId: 'dc6f308a-65f0-4590-9b49-ecd7e8863a05',
        name: {
          en: 'Snood Altea dark blue',
          de: 'Schlauchschal Altea dunkelblau'
        },
        productType: {
          typeId: 'product-type',
          id: '021022d8-3d52-476f-9ead-39953eb59a2f',
          version: 1
        },
        productSlug: {
          en: 'altea-scarf-1550081-darkblue',
          de: 'altea-schal-1550081-dunkelblau'
        },
        variant: {
          id: 1,
          sku: 'A0E20000000251Y',
          prices: [
            {
              value: { currencyCode: 'EUR', centAmount: 14875 },
              id: '2448ff4c-e6db-4be3-bfe7-e83d496fd378'
            },
            {
              value: { currencyCode: 'EUR', centAmount: 9754 },
              id: 'c138a19f-cb8d-46c1-b30e-ea63c3a73b07',
              customerGroup: {
                typeId: 'customer-group',
                id: '7bd113cf-e862-48df-9cbd-c46dea2dfbab'
              }
            },
            {
              value: { currencyCode: 'EUR', centAmount: 11900 },
              id: '6cbad280-8cb1-4474-a75c-b1c4298be707',
              country: 'DE'
            },
            {
              value: { currencyCode: 'EUR', centAmount: 11900 },
              id: '69e502a1-fbb6-400a-84dc-7a5455de77b8',
              country: 'IT'
            },
            {
              value: { currencyCode: 'EUR', centAmount: 11900 },
              id: '805c9dbb-8eec-4663-b365-f225271f52d3',
              country: 'GB'
            }
          ],
          images: [
            {
              url:
                'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081086_1_medium.jpg',
              dimensions: { w: 0, h: 0 }
            }
          ],
          attributes: [
            { name: 'articleNumberManufacturer', value: '1550081 1' },
            { name: 'articleNumberMax', value: '81086' },
            { name: 'matrixId', value: 'A0E20000000251Y' },
            { name: 'baseId', value: '81086' },
            { name: 'designer', value: { label: 'Altea', key: 'altea' } },
            { name: 'madeInItaly', value: { label: 'yes', key: 'yes' } },
            { name: 'completeTheLook', value: [''] },
            {
              name: 'commonSize',
              value: { label: 'one Size', key: 'oneSize' }
            },
            { name: 'size', value: 'one size' },
            {
              name: 'color',
              value: {
                label: { de: 'blau', it: 'blu', en: 'blue' },
                key: 'blue'
              }
            },
            {
              name: 'colorFreeDefinition',
              value: { en: 'dark blue', de: 'dunkelblau' }
            },
            { name: 'style', value: { label: 'sporty', key: 'sporty' } },
            { name: 'gender', value: { label: 'Herren', key: 'men' } },
            { name: 'season', value: 's15' },
            { name: 'isOnStock', value: true },
            { name: 'lookProducts', value: [''] }
          ],
          assets: []
        },
        price: {
          value: { currencyCode: 'EUR', centAmount: 14875 },
          id: '2448ff4c-e6db-4be3-bfe7-e83d496fd378'
        },
        quantity: 1,
        discountedPricePerQuantity: [],
        taxRate: {
          name: 'standard',
          amount: 0.19,
          includedInPrice: true,
          country: 'DE',
          id: 'pqgIXgoJ',
          subRates: []
        },
        state: [
          {
            quantity: 1,
            state: {
              typeId: 'state',
              id: '7331f2be-5864-44d5-b389-8f6846bcf809'
            }
          }
        ],
        priceMode: 'Platform',
        totalPrice: { currencyCode: 'EUR', centAmount: 14875 },
        taxedPrice: {
          totalNet: { currencyCode: 'EUR', centAmount: 12500 },
          totalGross: { currencyCode: 'EUR', centAmount: 14875 }
        },
        lineItemMode: 'Standard'
      }
    ],
    shippingAddress: {
      firstName: 'q',
      lastName: 'q',
      streetName: 'sdsdf edefv',
      postalCode: '123456',
      city: 'Munich',
      region: '',
      country: 'DE',
      phone: '',
      email: 'a@b.com',
      additionalAddressInfo: 'weew'
    },
    billingAddress: {
      firstName: 'q',
      lastName: 'q',
      streetName: 'sdsdf edefv',
      postalCode: '123456',
      city: 'Munich',
      region: '',
      country: 'DE',
      phone: '',
      email: 'a@b.com',
      additionalAddressInfo: 'weew'
    },
    customLineItems: [],
    transactionFee: true,
    discountCodes: [],
    lastMessageSequenceNumber: 1,
    cart: { typeId: 'cart', id: 'ad58774d-6495-48ab-b87f-c83bb579052f' }
  };
  shippingAddress: Address;
  billingAddress: Address;
  columns: Array<string> = ['Description', 'Quantity', 'Price', 'Total'];

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    // this.orderService.order.subscribe(order => {
    //   if (order === null) {
    //     return;
    //   }
    //   this.order = order;
    // });
    this.shippingAddress = this.order.shippingAddress;
    this.billingAddress = this.order.billingAddress;
  }
}
