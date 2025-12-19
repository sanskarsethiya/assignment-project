import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
});

export const getProjects = () => api.get('/projects');
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

export const getClients = () => api.get('/clients');
export const createClient = (data) => api.post('/clients', data);
export const updateClient = (id, data) => api.put(`/clients/${id}`, data);
export const deleteClient = (id) => api.delete(`/clients/${id}`);

export const submitContact = (data) => api.post('/contact', data);
export const getContacts = () => api.get('/contact');

export const subscribeNewsletter = (email) => api.post('/subscribe', { email });
export const getSubscriptions = () => api.get('/subscribe');

export default api;
