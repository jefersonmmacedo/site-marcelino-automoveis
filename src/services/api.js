import axios from 'axios';

const api = axios.create({
baseURL: 'https://api-suachaveauto-private.vercel.app/'
// baseURL: 'http://localhost:3333/'
});

export default api;



