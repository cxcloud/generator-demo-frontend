# CX Cloud Frontend Demo Template

[![Build Status](https://travis-ci.org/cxcloud/demo-frontend-angular.svg?branch=master)](https://travis-ci.org/cxcloud/frontend-accelerator)

This Angular demo template is used by CX Cloud CLI generator for demo purposes only. Demo Frontend is implemented using Angular 7 and demonstrates CX Cloud capabilities. It uses various CX Cloud API services such as Commerce Tools for demonstrating commerce capabilities, Contentful for managing content and Algolia for search. Authentication for the demo is implemented via Commerce core module. 

CX Cloud CLI Tools allows you to generate a frontend demo to test the concept with end-to-end functionality. Read more how to generate and deploy frontend demo using CX Cloud CLI [here](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend).

## Run demo locally
For quick testing, you can also install and run the demo locally. In order to explore/modify demo frontend locally, it is required to clone the repository, install required `npm` packages and run the project:

```sh
$ git clone git@github.com:cxcloud/generator-demo-frontend.git
$ cd generator-demo-frontend
$ npm install
$ npm run dev
```

By default the demo will be available at [http://localhost:4200/](http://localhost:4200/).
The app will be automatically reloaded if changes of source files have been made.

> **Note:** In order to connect to different APIs, some [changes in configuration files](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend#configuration) might be required.

> **Note:** Before getting started you might need to [install Angular CLI](https://github.com/angular/angular-cli/wiki).
