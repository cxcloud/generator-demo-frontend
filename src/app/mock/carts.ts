export const CART = {
  type: 'Cart',
  id: '8b57871d-2e26-4ebd-8528-7914df1f41d9',
  version: 14,
  customerId: 'fc69ff07-9ba8-47dc-b7ca-d1429dca3198',
  customerEmail: 'sallar@kaboli.org',
  createdAt: '2017-10-31T13:07:23.845Z',
  lastModifiedAt: '2017-11-07T11:03:59.051Z',
  lineItems: [
    {
      id: 'aaefc3a3-ed05-4658-823d-517dd1fa601d',
      productId: 'bebd3f35-4c7e-4629-bbee-d6e53cbe1cb0',
      name: {
        de: 'Tasche Moschino Love rot',
        en: 'Bag Moschino Love red'
      },
      productType: {
        typeId: 'product-type',
        id: '021022d8-3d52-476f-9ead-39953eb59a2f',
        version: 1
      },
      productSlug: {
        en: 'moschinolove-bag-jc4057pp1kle090a-red',
        de: 'moschinolove-tasche-jc4057pp1kle090a-rot'
      },
      variant: {
        id: 1,
        sku: 'A0E2000000021V5',
        prices: [
          {
            value: {
              currencyCode: 'EUR',
              centAmount: 25625
            },
            id: '4521473e-afdf-44e8-8147-337f855af4cf'
          },
          {
            value: {
              currencyCode: 'EUR',
              centAmount: 16803
            },
            id: 'dbd6b2c8-f539-4812-9c17-4bbc4ab2f7b8',
            customerGroup: {
              typeId: 'customer-group',
              id: '7bd113cf-e862-48df-9cbd-c46dea2dfbab'
            }
          },
          {
            value: {
              currencyCode: 'EUR',
              centAmount: 20500
            },
            id: 'd5eeef12-54f5-40ca-9646-2b5d48cbde15',
            country: 'DE'
          },
          {
            value: {
              currencyCode: 'EUR',
              centAmount: 20500
            },
            id: 'a4189a55-7aa6-4882-971a-23b2d03322c8',
            country: 'IT'
          },
          {
            value: {
              currencyCode: 'EUR',
              centAmount: 20500
            },
            id: 'ee632332-ee53-432e-8943-16708af058b8',
            country: 'GB'
          }
        ],
        images: [
          {
            url:
              'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079375_1_large.jpg',
            dimensions: {
              w: 0,
              h: 0
            }
          }
        ],
        attributes: [
          {
            name: 'articleNumberManufacturer',
            value: 'JC4057PP1KLE090A TWINS'
          },
          {
            name: 'articleNumberMax',
            value: '79375'
          },
          {
            name: 'matrixId',
            value: 'A0E2000000021V5'
          },
          {
            name: 'baseId',
            value: '79375'
          },
          {
            name: 'designer',
            value: {
              key: 'moschinolove',
              label: 'Moschino Love'
            }
          },
          {
            name: 'madeInItaly',
            value: {
              key: 'no',
              label: 'no'
            }
          },
          {
            name: 'completeTheLook',
            value: ['']
          },
          {
            name: 'commonSize',
            value: {
              key: 'oneSize',
              label: 'one Size'
            }
          },
          {
            name: 'size',
            value: 'one size'
          },
          {
            name: 'color',
            value: {
              key: 'red',
              label: {
                de: 'rot',
                en: 'red',
                it: 'rosso'
              }
            }
          },
          {
            name: 'colorFreeDefinition',
            value: {
              de: 'rot',
              en: 'red'
            }
          },
          {
            name: 'style',
            value: {
              key: 'sporty',
              label: 'sporty'
            }
          },
          {
            name: 'gender',
            value: {
              key: 'women',
              label: 'Damen'
            }
          },
          {
            name: 'season',
            value: 's15'
          },
          {
            name: 'lookProducts',
            value: ['']
          }
        ],
        assets: []
      },
      price: {
        value: {
          currencyCode: 'EUR',
          centAmount: 25625
        },
        id: '4521473e-afdf-44e8-8147-337f855af4cf'
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
      totalPrice: {
        currencyCode: 'EUR',
        centAmount: 25625
      },
      taxedPrice: {
        totalNet: {
          currencyCode: 'EUR',
          centAmount: 21534
        },
        totalGross: {
          currencyCode: 'EUR',
          centAmount: 25625
        }
      },
      lineItemMode: 'Standard'
    }
  ],
  cartState: 'Active',
  totalPrice: {
    currencyCode: 'EUR',
    centAmount: 25625
  },
  taxedPrice: {
    totalNet: {
      currencyCode: 'EUR',
      centAmount: 21534
    },
    totalGross: {
      currencyCode: 'EUR',
      centAmount: 25625
    },
    taxPortions: [
      {
        rate: 0.19,
        amount: {
          currencyCode: 'EUR',
          centAmount: 4091
        },
        name: 'standard'
      }
    ]
  },
  shippingAddress: {
    streetName: 'Keilalahdentie',
    postalCode: '02150',
    city: 'Esbo',
    region: '',
    state: '',
    country: 'DE',
    company: 'Tieto, just Tieto',
    additionalAddressInfo: '5A'
  },
  customLineItems: [],
  discountCodes: [],
  inventoryMode: 'None',
  taxMode: 'Platform',
  taxRoundingMode: 'HalfEven',
  taxCalculationMode: 'LineItemLevel',
  refusedGifts: []
};
