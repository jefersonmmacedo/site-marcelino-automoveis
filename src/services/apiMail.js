import axios from 'axios';

const apiMail = axios.create({
baseURL: 'https://api-mail-private-auto.vercel.app/'
});

export default apiMail;