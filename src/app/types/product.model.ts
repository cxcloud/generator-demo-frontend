import {
  Attribute,
  Image,
  LocalizedString,
  Reference,
  Price
} from './common.model';

export interface Product {
  id: string;
  version: number;
  productType: Reference;
  name: LocalizedString;
  categories: Reference[];
  categoryOrderHints: {};
  slug: LocalizedString;
  masterVariant: Variant;
  variants: Variant[];
  searchKeywords: {};
  published: boolean;
  hasStagedChanges: boolean;
  taxCategory: Reference;
  createdAt: string;
  lastModifiedAt: string;
}

export interface Variant {
  id: number;
  sku: string;
  prices: Price[];
  images: Image[];
  attributes: Attribute[];
  assets: any[];
}
