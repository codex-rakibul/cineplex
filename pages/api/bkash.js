import axios from 'axios';

export default async function handler(req, res) {
  const { method, url, data } = req.body;

  try {
    const response = await axios({
      method,
      url: `https://api.bkash.com/${url}`,
      data,
      auth: {
        username: 'YOUR_BKASH_USERNAME',
        password: 'YOUR_BKASH_PASSWORD',
      },
      headers: {
        'Content-Type': 'application/json',
        'X-APP-Key': 'YOUR_BKASH_APP_KEY',
        'X-APP-Secret': 'YOUR_BKASH_APP_SECRET',
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}