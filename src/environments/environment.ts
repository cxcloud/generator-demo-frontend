// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import 'zone.js/dist/zone-error';

export const environment = {
  production: false,
  siteName: 'CXCloud DEV',
  commerceApiUrl: 'https://dev.cxcloud.com/api/v1',
  contentfulApiUrl: 'https://dev.cxcloud.com/api/v1',
  cognitoApiUrl: 'https://dev.cxcloud.com/api/v1',
  algoliaApiUrl: 'https://dev.cxcloud.com/api/v1',
  apiUrl: 'https://dev.cxcloud.com/api/v1',
  commerceIndexName: 'dev_COMMERCE',
  contentIndexName: 'dev_CONTENT'
};
