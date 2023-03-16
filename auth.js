import axios from 'axios';

export default async function getToken(clientID, clientSecret) {
	// get token
	const { data: { access_token: newToken, expires_in: expiresIn } } = await axios.get(`${process.env.MARRA_API}/oauth/token`, {
		params: {
			client_id: clientID,
			client_secret: clientSecret,
		},
	});

	const milliseconds = Number(expiresIn) * 1000;
	const newExpiryDate = new Date(Date.now() + milliseconds);

	return [newExpiryDate, newToken];
}
