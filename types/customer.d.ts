/**
 * @function getCustomer Get a single customer
 * @param {import('./types').Customer['id'] | import('./types').Customer['reference']} identifier - The customer identifier
 * @returns {import('./types').Customer}
 */
export function getCustomer(identifier: import('./types').Customer['id'] | import('./types').Customer['reference']): import('./types').Customer;
/**
 * @function getCustomers Get many customers
 * @returns {import('./types').Customer[]}
 */
export function getCustomers(): import('./types').Customer[];
/**
 * @function createCustomer Create a customer
 * @param {import('./types').Customer} customer
 * @returns {import('./types').Customer} - The created customer
 */
export function createCustomer(customer: import('./types').Customer): import('./types').Customer;
/**
 * @function updateCustomer Update a customer
 * @param {import('./types').Customer} updates - The values to update
 * @param {import('./types').Customer} customer
 */
export function updateCustomer(identifier: any, updates: import('./types').Customer): Promise<void>;
/**
 * @function deleteCustomer Delete a customer
 * @param {string} identifier - The customer identifier
 */
export function deleteCustomer(identifier: string): Promise<void>;
