import { LocalizedString } from '../common/i18n.model';

export interface Category {
  id: string;
  version: number;
  name: LocalizedString;
  slug: LocalizedString;
  description?: LocalizedString;
  ancestors?: any[];
  orderHint: string;
  createdAt: string;
  lastModifiedAt: string;
  assets?: any[];
  subCategories?: Category[];
  parent?: {
      typeId: string;
      id: string;
  };
  lastMessageSequenceNumber: number;
}
