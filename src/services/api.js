import axios from 'axios';

const api = axios.create({
baseURL: 'https://suachaveauto-api-private-c50ca254ab3a.herokuapp.com/'
// baseURL: 'http://localhost:3333/'
});

export default api;



