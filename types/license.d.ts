/**
 * @function getLicense Get a single license
 * @param {import('./types').License['id'] | import('./types').License['reference']} identifier - The license identifier
 * @returns {import('./types').License}
 */
export function getLicense(identifier: import('./types').License['id'] | import('./types').License['reference']): import('./types').License;
/**
 * @function createLicense Create a license
 * @param {import('./types').License} license
 * @returns {import('./types').License} license - The created license
 */
export function createLicense(license: import('./types').License): import('./types').License;
/**
 * @function updateLicense Update a license
 * @param {import('./types').License} updates - The values to update
 * @param {import('./types').License} license
 */
export function updateLicense(identifier: any, updates: import('./types').License): Promise<void>;
/**
 * @function deleteLicense Delete a license
 * @param {string} identifier - The license identifier
 */
export function deleteLicense(identifier: string): Promise<void>;
