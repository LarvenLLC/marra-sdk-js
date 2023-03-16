import axios from './api';

/**
 * Get a single license
 * @param {License['id'] | License['reference']} identifier - The license identifier
 * @returns {License}
 */
export async function getLicense(identifier) {
	const {data} = await axios.get(`/license/${identifier}`);
	return data;
}

/**
 * Create a license
 * @param {License} license
 * @returns {License} license - The created license
 */
export async function createLicense(license) {
	await axios.post('/license', license);
	return license;
}

/**
 * Update a license
 * @param {License} updates - The values to update
 * @param {License} license
 */
export async function updateLicense(identifier, updates) {
	await axios.patch(`/license/${identifier}`, updates);
	return;
}

/**
 * Delete a license
 * @param {string} identifier - The license identifier
 */
export async function deleteLicense(identifier) {
	await axios.delete(`/license/${identifier}`);
	return;
}