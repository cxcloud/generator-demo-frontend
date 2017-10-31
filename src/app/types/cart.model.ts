import { Variant } from './product.model';
import { Discount, DiscountCode } from './discounts.model';
import {
  Address,
  LocalizedString,
  Money,
  Price,
  Reference,
} from './common.model';

export interface Cart {
  type: string;
  id: string;
  version: number;
  customerId: string;
  customerEmail: string;
  createdAt: string;
  lastModifiedAt: string;
  lineItems: LineItem[];
  cartState: string;
  totalPrice: Money;
  customLineItems: any[];
  discountCodes: any;
  inventoryMode: string;
  taxMode: string;
  taxRoundingMode: string;
  refusedGifts: any[];
}

export interface LineItem {
  id: string;
  productId: string;
  name: LocalizedString;
  productType: Reference;
  productSlug: LocalizedString;
  variant: Variant;
  price: Price;
  quantity: number;
  discountedPricePerQuantity: DiscountedPricePerQuantity[];
  state: LineItemState[];
  priceMode: string;
  totalPrice: Money;
  lineItemMode: string;
}

export interface LineItemState {
  quantity: number;
  state: Reference;
}

export interface DiscountedPricePerQuantity {
  quantity: number;
  discountedPrice: DiscountedPrice;
}

export interface DiscountedPrice {
  value: Money;
  includedDiscounts: IncludedDiscount[];
}

export interface IncludedDiscount {
  discount: DiscountReference;
  discountedAmount: Money;
}

export interface DiscountReference extends Reference {
  obj: Discount;
}
