/** @module Usage **/

const axios = require('./api');

/**
 * @function getUsageByCustomer Get customer usage
 * @param {import('./types').Customer['id']} customerID
 * @returns {Usage[]}
 */
async function getUsageByCustomer(customerID) {
	const {data} = await axios.get('/usage', {
		params: {
			customer_id: customerID
		}
	});
	return data;
}

/**
 * @function createUsage Log a usage
 * @param {import('./types').Usage} usage
 * @returns {import('./types').Usage} - The logged usage
 */
async function createUsage(usage) {
	await axios.post('/usage', usage);
	return usage;
}

module.exports = {
	getUsageByCustomer,
	createUsage,
};
