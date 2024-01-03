import axios from 'axios';

const apiFipe = axios.create({
  baseURL: 'https://api-fipe-suachaveauto.vercel.app/'
});

export default apiFipe;