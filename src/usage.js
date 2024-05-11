/** @module Usage **/

import axios from '../api';

/**
 * Get customer usage
 * @param {import('./types').Customer['id']} customerID
 * @returns {Usage[]}
 */
export async function getUsageByCustomer(customerID) {
	const {data} = await axios.get('/usage', {
		params: {
			customer_id: customerID
		}
	});
	return data;
}

/**
 * Log a usage
 * @param {import('./types').Usage} usage
 * @returns {import('./types').Usage} - The logged usage
 */
export async function createUsage(usage) {
	await axios.post('/usage', usage);
	return usage;
}
