# CX Cloud Angular Demo

[![Build Status](https://travis-ci.org/cxcloud/demo-frontend-angular.svg?branch=master)](https://travis-ci.org/cxcloud/frontend-accelerator)

Demo Frontend is implemented using Angular 7 and demonstrates CX Cloud capabilities.
Demo uses various API services such as Commerce Tools for demonstrating commerce capabilities, Contentful for managing content and Algolia for search.
Authentication for the demo is implemented via Commerce core module.
<<<<<<< HEAD

## Generate demo with CX Cloud CLI

CX Cloud CLI Tools allows you to generate a front-end demo to test the concept with end-to-end functionality.
Reead more how to generate frontend demo using CX Cloud CLI [here](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend).

## Run demo locally

> Before getting started you might need to [install Angular CLI](https://github.com/angular/angular-cli/wiki).

In order to explore/modify demo frontend locally, it is required to clone repositiory, install required `npm` packages and run demo locally:

```sh
$ git clone git@github.com:cxcloud/demo-frontend-angular.git
$ cd demo-frontend-angular
$ npm install
$ npm run dev
```

By default the demo will be available at [http://localhost:4200/](http://localhost:4200/).
The app will automatically reload if changes of source files was made.

> **Note:** in order to connect to different APIs, some [changes in configuration files](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend#configuration) might be required.
=======
>>>>>>> a97da284fb73ef7bb12ae20d73b83155e0664c85

## Generate demo with CX Cloud CLI

CX Cloud CLI Tools allows you to generate a front-end demo to test the concept with end-to-end functionality.
Reead more how to generate frontend demo using CX Cloud CLI [here](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend).

## Run demo locally

> Before getting started you might need to [install Angular CLI](https://github.com/angular/angular-cli/wiki).

In order to explore/modify demo frontend locally, it is required to follow next steps:

1. Clone repository and navigate to it:

```sh
$ git clone git@github.com:cxcloud/demo-frontend-angular.git
$ cd demo-frontend-angular
```

2. Install npm packages required for the project:

```sh
npm install
```

3. Run demo locally:

```sh
$ npm run dev
```

By default the demo will be available at [http://localhost:4200/](http://localhost:4200/).
The app will automatically reload if changes of source files was made.

<<<<<<< HEAD
=======
> **Note:** in order to connect to different APIs, some [changes in configuration files](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend#configuration) might be required.

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

>>>>>>> a97da284fb73ef7bb12ae20d73b83155e0664c85
```sh
$ git commit -am "Initial commit"
$ git push --set-upstream origin master [--force]
```
