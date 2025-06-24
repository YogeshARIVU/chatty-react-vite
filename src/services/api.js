import axios from 'axios';
import { getToken } from '../utils/auth';

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

api.interceptors.request.use(config => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const login = creds => api.post('/auth/login', creds).then(r => r.data);
export const register = creds => api.post('/auth/register', creds).then(r => r.data);
export const getMessages = () => api.get('/chat/messages').then(r => r.data);
export const postMessage = msg => api.post('/chat/message', msg).then(r => r.data);
