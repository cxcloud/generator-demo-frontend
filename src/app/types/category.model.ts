import { LocalizedString, Reference } from './common.model';

export interface Category {
  id: string;
  version: number;
  name: LocalizedString;
  slug: LocalizedString;
  description?: LocalizedString;
  ancestors: Reference[];
  orderHint: string;
  createdAt: string;
  lastModifiedAt: string;
  assets: any[];
  parent?: Reference;
  lastMessageSequenceNumber: number;
  subCategories?: Category[];
}
