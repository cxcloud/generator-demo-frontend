export interface LocalizedString {
  en: string;
}

export interface Reference {
  typeId: string;
  id: string;
}

export interface Image {
  url: string;
  dimensions: Dimensions;
}

export interface Dimensions {
  w: number;
  h: number;
}

export interface Attribute {
  name: string;
  value: any;
}

export interface Price {
  value: Money;
  id: string;
}

export interface Money {
  currencyCode: string;
  centAmount: number;
}

export interface Address {
  id?: string;
  firstName?: string;
  streetName?: string;
  postalCode: string;
  city: string;
  region?: string;
  state?: string;
  country: string;
  company?: string;
  phone?: string;
  additionalAddressInfo?: string;
}
