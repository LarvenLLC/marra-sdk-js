const axios = require('axios');

module.exports = async function getToken() {
	// get token
	const { data: { access_token: newToken, expires_in: expiresIn } } = await axios.get(`${process.env.MARRA_API}/oauth/token`, {
		params: {
			client_id: process.env.MARRA_CLIENT_ID,
			client_secret: process.env.MARRA_CLIENT_SECRET,
		},
	});

	const milliseconds = Number(expiresIn) * 1000;
	const newExpiryDate = new Date(Date.now() + milliseconds);

	return [newExpiryDate, newToken];
};
