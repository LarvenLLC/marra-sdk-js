export type Customers = {
    createCustomer: typeof import("./customer")['createCustomer'];
    getCustomer: typeof import("./customer")['getCustomer'];
    getCustomers: typeof import("./customer")['getCustomers'];
    updateCustomer: typeof import("./customer")['updateCustomer'];
    deleteCustomer: typeof import("./customer")['deleteCustomer'];
};
export type Licenses = {
    createLicense: typeof import("./license")['createLicense'];
    getLicense: typeof import("./license")['getLicense'];
    getLicensesByProject: typeof import("./license")['getLicensesByProject'];
    updateLicense: typeof import("./license")['updateLicense'];
    deleteLicense: typeof import("./license")['deleteLicense'];
};
export type Projects = {
    createProject: typeof import("./project")['createProject'];
    getProject: typeof import("./project")['getProject'];
    updateProject: typeof import("./project")['updateProject'];
    deleteProject: typeof import("./project")['deleteProject'];
};
export type Usages = {
    createUsage: typeof import("./usage")['createUsage'];
    getUsageByCustomer: typeof import("./usage")['getUsageByCustomer'];
};
/**
 * @typedef Customers
 * @property {import('./customer')['createCustomer']} createCustomer
 * @property {import('./customer')['getCustomer']} getCustomer
 * @property {import('./customer')['getCustomers']} getCustomers
 * @property {import('./customer')['updateCustomer']} updateCustomer
 * @property {import('./customer')['deleteCustomer']} deleteCustomer
 */
/** @type {Customers} */
export const customers: Customers;
/**
 * @typedef Licenses
 * @property {import('./license')['createLicense']} createLicense
 * @property {import('./license')['getLicense']} getLicense
 * @property {import('./license')['getLicensesByProject']} getLicensesByProject
 * @property {import('./license')['updateLicense']} updateLicense
 * @property {import('./license')['deleteLicense']} deleteLicense
 */
/** @type {Licenses} */
export const licenses: Licenses;
/**
 * @typedef Projects
 * @property {import('./project')['createProject']} createProject
 * @property {import('./project')['getProject']} getProject
 * @property {import('./project')['updateProject']} updateProject
 * @property {import('./project')['deleteProject']} deleteProject
 */
/** @type {Projects} */
export const projects: Projects;
/**
 * @typedef Usages
 * @property {import('./usage')['createUsage']} createUsage
 * @property {import('./usage')['getUsageByCustomer']} getUsageByCustomer
 */
/** @type {Usages} */
export const usages: Usages;
