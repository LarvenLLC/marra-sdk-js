import axios from "./api";

/**
 * Get customer usage
 * @param {Customer['id']} customerID
 * @returns {Usage[]}
 */
export async function getUsageByCustomer(customerID) {
  const {data} = await axios.get(`/usage`, {
    params: {
      customer_id: customerID
    }
  });
  return data;
}

/**
 * Log a usage
 * @param {Usage} usage
 * @returns {Usage} - The logged usage
 */
export async function createUsage(usage) {
  await axios.post('/usage', usage);
  return usage;
}
