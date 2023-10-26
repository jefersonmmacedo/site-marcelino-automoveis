import axios from 'axios';

const apiMail = axios.create({
baseURL: 'https://suachaveauto-mail-api-private-01ccb3e42099.herokuapp.com/'
});

export default apiMail;