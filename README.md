# Marra JS SDK

[![NPM](https://img.shields.io/npm/v/marra.svg)](https://www.npmjs.com/package/marra)
![NPM](https://img.shields.io/npm/l/marra)

Welcome to the developer documentation for the Marra JS SDK! This SDK has been created to make it easy for developers to integrate the Marra software licensing solution into their projects. The SDK provides a set of functions that can be used to manage licenses and track usage for your customers.

## Getting Started
To get started with the Marra JS SDK, you will need to have a Marra account, a client ID and Secret. If you do not have an account, you can sign up at https://marra.software/. Once you have an account, you can get a client ID and Secret from the Marra dashboard.

## Installation
You can install the Marra JS SDK using npm/yarn/pnpm:

```sh
npm install marra

yarn add marra

pnpm add marra
```

## Usage
To use the Marra JS SDK in your project, you will need to setup important env variables:

```shell
MARRA_API=https://api.marra.software
MARRA_CLIENT_ID=XXXXX
MARRA_CLIENT_SECRET=XXXXXXXXXX
```

Once you have setup the env variables, you can start using the provided functions to manage licenses, projects, and track usage.

```javascript
const { licenses, projects, usages } = require('marra');

// licenses.getLicense('');
// projects.getProject('');
// usages.getUsageByCustomer('');
```
require it and

## License Functions

- ### getLicense()

- ### createLicense()

- ### updateLicense()

- ### deleteLicense()

## Project Functions

- ### getProject()

- ### createProject()

- ### updateProject()

- ### deleteProject()

## Usage Functions

- ### getUsageByCustomer()

- ### createUsage()

<br />

## Further Documentation
For further documentation on the Marra JS SDK, please refer to the [API documentation](https://js.sdk.marra.software). The API documentation provides more detailed information on each function, including the parameters they accept and the format of the data they return.

If you have any questions or issues while using the Marra JS SDK, please don't hesitate to contact our support team at [support@marra.software](mailto:support@marra.software). We're here to help!