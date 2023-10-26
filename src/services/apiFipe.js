import axios from 'axios';

const apiFipe = axios.create({
  baseURL: 'https://suachaveauto-fipe-private-b9b95f946891.herokuapp.com/'
});

export default apiFipe;