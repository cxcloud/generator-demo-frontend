# CX Cloud Angular Demo

[![Build Status](https://travis-ci.org/cxcloud/demo-frontend-angular.svg?branch=master)](https://travis-ci.org/cxcloud/frontend-accelerator)

Demo Frontend is implemented using Angular 7 and demonstrates CX Cloud capabilities.
Demo uses various API services such as Commerce Tools, Contentful and Algolia. The authentification for the demo is implemented via Commerce core module.

## Copy repository

1. Create clone of this repository and navigate to it:

```sh
$ git clone git@github.com:cxcloud/demo-frontend-angular.git
$ cd demo-frontend-angular
```

2. Remove git tracking and create a new repository:

```sh
$ rm -rf .git
$ git init
```

3. Add and verify a new remote:

```sh
$ git remote add origin https://github.com/*user*/*repo*.git
$ git remote -v
```

4. Push to new remote:

```sh
$ git commit -am "Initial commit"
$ git push --set-upstream origin master [--force]
```

## Generate demo with CX Cloud CLI

CX Cloud CLI Tools allows you to generate a front-end demo to test the concept with end-to-end functionality.
Read more about [how to prepare the environment](https://docs.cxcloud.com/getting-started/prepare-your-environment) and [how to install CX Cloud CLI Tools](https://docs.cxcloud.com/getting-started/install-cxcloud-cli).

1. Create new repository fo the service in GitHub, named for example `frontend-demo`

```sh
$ git clone git@github.com:myorganization/frontend-demo.git
$ cd frontend-demo
$ cxcloud generate demo
```

You will go through a set of simple questions and receive an end-to-end working demo

### Configuration

In order the frontend demo works with listed above APIs, configuration files should be modified. Configuration files can be found in this project directory `/src/environments/`. To connect with existing APIs, change the value of `apiUrl` for each service (notice that environments files should be modified depending on the used environment).
```sh
export const environment = {
  production: false,
  siteName: 'CXCloud DEV',
  commerce: {
    apiUrl: 'https://<YOUR_URL>/api/v1',
    indexName: 'dev_COMMERCE'
  },
  content: {
    apiUrl: 'https://<YOUR_URL>/api/v1/content',
    indexName: 'dev_CONTENT'
  },
  auth: {
    apiUrl: 'https://<YOUR_URL>/api/v1/auth'
  },
  search: {
    apiUrl: 'https://<YOUR_URL>/api/v1/search'
  }
};
```
### Run locally

In order to explore/modify demo frontend locally, you would need to run following coomand:

```sh
$ npm run dev
```

By default the demo will be available at [http://localhost:4200/](http://localhost:4200/)

### Deployment

To deploy frontend demo run next command:

```sh
$ cxcloud deploy
```

Before deploying frontend, please check relevant documentation [how to setup a CX Cloud Project](https://docs.cxcloud.com/setting-up-a-cxcloud-project).
After deployment, you can make demo avalable to the world using [Routing Manifest](https://docs.cxcloud.com/setting-up-a-cxcloud-project/routing-manifest).
