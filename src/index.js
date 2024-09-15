require('dotenv').config()

/**
 * @typedef Customers
 * @property {import('./customer')['createCustomer']} createCustomer
 * @property {import('./customer')['getCustomer']} getCustomer
 * @property {import('./customer')['getCustomers']} getCustomers
 * @property {import('./customer')['updateCustomer']} updateCustomer
 * @property {import('./customer')['deleteCustomer']} deleteCustomer
 */
/** @type {Customers} */
const customers = require('./customer');

/**
 * @typedef Licenses
 * @property {import('./license')['createLicense']} createLicense
 * @property {import('./license')['getLicense']} getLicense
 * @property {import('./license')['getLicensesByProject']} getLicensesByProject
 * @property {import('./license')['updateLicense']} updateLicense
 * @property {import('./license')['deleteLicense']} deleteLicense
 */
/** @type {Licenses} */
const licenses = require('./license');

/**
 * @typedef Projects
 * @property {import('./project')['createProject']} createProject
 * @property {import('./project')['getProject']} getProject
 * @property {import('./project')['updateProject']} updateProject
 * @property {import('./project')['deleteProject']} deleteProject
 */
/** @type {Projects} */
const projects = require('./project');

/**
 * @typedef Usages
 * @property {import('./usage')['createUsage']} createUsage
 * @property {import('./usage')['getUsageByCustomer']} getUsageByCustomer
 */
/** @type {Usages} */
const usages = require('./usage');

module.exports = {
	customers,
	licenses,
	projects,
	usages,
};
