/** @module Customer **/

const axios = require('./api');

/**
 * @function getCustomer Get a single customer
 * @param {import('./types').Customer['id'] | import('./types').Customer['reference']} identifier - The customer identifier
 * @returns {import('./types').Customer}
 */
async function getCustomer(identifier) {
	const {data} = await axios.get(`/customer/${identifier}`);
	return data;
}

/**
 * @function getCustomers Get many customers
 * @returns {import('./types').Customer[]}
 */
async function getCustomers() {
	const {data} = await axios.get('/customer');
	return data;
}

/**
 * @function createCustomer Create a customer
 * @param {import('./types').Customer} customer
 * @returns {import('./types').Customer} - The created customer
 */
async function createCustomer(customer) {
	await axios.post('/customer', customer);
	return customer;
}

/**
 * @function updateCustomer Update a customer
 * @param {import('./types').Customer} updates - The values to update
 * @param {import('./types').Customer} customer
 */
async function updateCustomer(identifier, updates) {
	await axios.patch(`/customer/${identifier}`, updates);
	return;
}

/**
 * @function deleteCustomer Delete a customer
 * @param {string} identifier - The customer identifier
 */
async function deleteCustomer(identifier) {
	await axios.delete(`/customer/${identifier}`);
	return;
}

module.exports = {
	getCustomer,
	getCustomers,
	createCustomer,
	updateCustomer,
	deleteCustomer,
};
