import { secureRequets } from './api';

/**
 * Initialize Marra SDK
 * @param {Config} configuration - Configuration with API keys to initialize SDK
 */
export default function Marra({ clientID, clientSecret }) {
	secureRequets(clientID, clientSecret);
}