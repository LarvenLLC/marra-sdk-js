/** @module License **/

const axios = require('./api');

/**
 * @function getLicense Get a single license
 * @param {import('./types').License['id'] | import('./types').License['reference']} identifier - The license identifier
 * @returns {import('./types').License}
 */
async function getLicense(identifier) {
	const {data} = await axios.get(`/license/${identifier}`);
	return data;
}

/**
 * @function createLicense Create a license
 * @param {import('./types').License} license
 * @returns {import('./types').License} license - The created license
 */
async function createLicense(license) {
	await axios.post('/license', license);
	return license;
}

/**
 * @function updateLicense Update a license
 * @param {import('./types').License} updates - The values to update
 * @param {import('./types').License} license
 */
async function updateLicense(identifier, updates) {
	await axios.patch(`/license/${identifier}`, updates);
	return;
}

/**
 * @function deleteLicense Delete a license
 * @param {string} identifier - The license identifier
 */
async function deleteLicense(identifier) {
	await axios.delete(`/license/${identifier}`);
	return;
}

module.exports = {
	getLicense,
	createLicense,
	updateLicense,
	deleteLicense,
};
