declare const NG_CONFIG: { [key: string]: any };

export const environment = {
  production: <any>'__PLACEHOLDER__',
  siteName: <any>'__PLACEHOLDER__',
  commerce: <any>'__PLACEHOLDER__',
  content: <any>'__PLACEHOLDER__',
  auth: <any>'__PLACEHOLDER__',
  search: <any>'__PLACEHOLDER__',
  ...(typeof NG_CONFIG === 'undefined' ? {} : NG_CONFIG)
};
