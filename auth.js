import axios from 'axios';

export default async function getToken(clientID, clientSecret) {
  try {
    // get token
    const { data: { access_token: newToken, expires_in: expiresIn } } = await axios.get(`${process.env.MARRA_API}/oauth/token`, {
      params: {
        client_id: clientID,
        client_secret: clientSecret,
      },
    });

    if (!newToken) {
      return res.status(401).send({
        code: 'RESTRICTED',
        message: 'Unauthorized',
      });
    }

    const milliseconds = Number(expiresIn) * 1000;
    const newExpiryDate = new Date(Date.now() + milliseconds);

    return [newExpiryDate, newToken];
  } catch (error) {
    return res.status(500).send({ code: 'SERVER_ERROR', message: 'Internal server error' });
  }
}
