const { secureRequets } = require('./api');

/**
 * Initialize Marra SDK
 * @param {import('./types').Config} configuration - Configuration with API keys to initialize SDK
 */
function Marra({ clientID, clientSecret }) {
	secureRequets(clientID, clientSecret);
}
const myModule = module.exports = Marra;

const license = require('./license');
myModule.license = license;

const project = require('./project');
myModule.project = project;

const usage = require('./usage');
myModule.usage = usage;