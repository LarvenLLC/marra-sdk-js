import Axios from 'axios';
import getToken from './auth';

const MARRA_API = 'https://api.marra.software';

const axios = Axios.create({
	baseURL: MARRA_API,
});

export function secureRequets(clientID, clientSecret) {
	// Request interceptor for API calls
	axios.interceptors.request.use(
		async config => {
			const expiryDate = config.headers.expiry || null;
			if (config.headers.Authorization && expiryDate && new Date(expiryDate) > new Date()) {
				// send token to request
				return config;
			}

			const [expiry, token] = await getToken(clientID, clientSecret);
      
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			axios.defaults.headers.common['expiry'] = expiry;

			return config;
		},
		error => {
			Promise.reject(error);
		});

	// Response interceptor for API calls
	axios.interceptors.response.use((response) => {
		return response;
	}, async function (error) {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;
			const [expiry, token] = await getToken(clientID, clientSecret);
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			axios.defaults.headers.common['expiry'] = expiry;
			return axios(originalRequest);
		}
		return Promise.reject(error);
	});
}


export default axios;
