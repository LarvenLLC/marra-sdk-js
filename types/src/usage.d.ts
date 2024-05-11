/**
 * Get customer usage
 * @param {import('./types').Customer['id']} customerID
 * @returns {Usage[]}
 */
export function getUsageByCustomer(customerID: import('./types').Customer['id']): Usage[];
/**
 * Log a usage
 * @param {import('./types').Usage} usage
 * @returns {import('./types').Usage} - The logged usage
 */
export function createUsage(usage: import('./types').Usage): import('./types').Usage;
