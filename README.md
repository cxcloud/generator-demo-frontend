# CX Cloud Angular Demo

[![Build Status](https://travis-ci.org/cxcloud/demo-frontend-angular.svg?branch=master)](https://travis-ci.org/cxcloud/frontend-accelerator)

Angular demo is part of CX Cloud, an open source accelerator for cloud native solutions. You can read more about CX Cloud [here](https://docs.cxcloud.com/). 

Demo Frontend is implemented using Angular 7 and demonstrates CX Cloud capabilities. It uses various CX CLoud API services such as Commerce Tools for demonstrating commerce capabilities, Contentful for managing content and Algolia for search. Authentication for the demo is implemented via Commerce core module.


## Generate demo with CX Cloud CLI

CX Cloud CLI Tools allows you to generate a frontend demo to test the concept with end-to-end functionality. CLI also allows you to set up a Kubernetes cluster and deploy your frontend there. Read more how to generate and deploy frontend demo using CX Cloud CLI [here](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend).


## Run demo locally
For quick testing, you can also install and run the demo locally. In order to explore/modify demo frontend locally, it is required to clone repository, install required `npm` packages and run the project:

```sh
$ git clone git@github.com:cxcloud/demo-frontend-angular.git
$ cd demo-frontend-angular
$ npm install
$ npm run dev
```

By default the demo will be available at [http://localhost:4200/](http://localhost:4200/).
The app will automatically reload if changes of source files was made.

> **Note:** In order to connect to different APIs, some [changes in configuration files](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend#configuration) might be required.

> **Note:** Before getting started you might need to [install Angular CLI](https://github.com/angular/angular-cli/wiki).

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
