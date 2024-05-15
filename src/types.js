/**
 * @typedef Config
 * @property {string} clientID
 * @property {string} clientSecret
 */

/**
 * @typedef License
 * @property {number} id
 * @property {string} client_id
 * @property {string} client_secret
 * @property {string} project_id
 * @property {Date} expiration_date
 * @property {boolean} active
 * @property {string} reference
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {Date} deleted_at
 */

/**
 * @typedef Usage
 * @property {number} id
 * @property {string} license_id
 * @property {string} product_id
 * @property {Date} started_at
 * @property {Date} ended_at
 * @property {string} reference
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {Date} deleted_at
 */

/**
 * @typedef Product
 * @property {number} id
 * @property {string} name
 * @property {string} reference
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {Date} deleted_at
 */

/**
 * @typedef Service
 * @property {number} id
 * @property {string} product_id
 * @property {string} name
 * @property {string} code
 * @property {string} reference
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {Date} deleted_at
 */

/**
 * @typedef Project Customer project
 * @property {number} id
 * @property {string} name
 * @property {string} photo
 * @property {string} customer_id
 * @property {string} product_id
 * @property {string} reference
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {Date} deleted_at
 */

/**
 * @typedef Customer
 * @property {number} id
 * @property {string} name
 * @property {string} surname
 * @property {string} phone
 * @property {string} email
 * @property {string} reference
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {Date} deleted_at
 */

module.exports = {};