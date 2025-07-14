import axios from 'axios';
import { AuthResponse, User, Resource, Event, ApiResponse, SearchFilters } from '../types';
import { mockEventsAPI, mockResourcesAPI } from './mockApi';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const USE_MOCK_API = true; // Set to false when backend is available

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post<AuthResponse>('/auth/login', { email, password }),
  
  register: (userData: {
    username: string;
    email: string;
    password: string;
    fullName: string;
    academicYear: string;
  }) => api.post<AuthResponse>('/auth/register', userData),
  
  getProfile: () => api.get<User>('/auth/profile'),
  
  updateProfile: (userData: Partial<User>) =>
    api.put<User>('/auth/profile', userData),
};

// Resources API
export const resourcesAPI = {
  getAll: (filters?: SearchFilters) => {
    if (USE_MOCK_API) return mockResourcesAPI.getAll(filters);
    return api.get<Resource[]>('/resources', { params: filters });
  },
  
  getById: (id: string) => {
    if (USE_MOCK_API) return mockResourcesAPI.getById(id);
    return api.get<Resource>(`/resources/${id}`);
  },
  
  create: (formData: FormData) => {
    if (USE_MOCK_API) return mockResourcesAPI.create(formData);
    return api.post<Resource>('/resources', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  update: (id: string, formData: FormData) =>
    api.put<Resource>(`/resources/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  
  delete: (id: string) => api.delete(`/resources/${id}`),
  
  like: (id: string) => {
    if (USE_MOCK_API) return mockResourcesAPI.like(id);
    return api.post(`/resources/${id}/like`);
  },
  
  addComment: (id: string, content: string) => {
    if (USE_MOCK_API) return mockResourcesAPI.addComment(id, content);
    return api.post(`/resources/${id}/comments`, { content });
  },
  
  deleteComment: (resourceId: string, commentId: string) =>
    api.delete(`/resources/${resourceId}/comments/${commentId}`),
};

// Events API
export const eventsAPI = {
  getAll: (filters?: SearchFilters) => {
    if (USE_MOCK_API) return mockEventsAPI.getAll(filters);
    return api.get<Event[]>('/events', { params: filters });
  },
  
  getById: (id: string) => {
    if (USE_MOCK_API) return mockEventsAPI.getById(id);
    return api.get<Event>(`/events/${id}`);
  },
  
  create: (eventData: Omit<Event, '_id' | 'author' | 'attendees' | 'comments' | 'createdAt' | 'updatedAt'>) => {
    if (USE_MOCK_API) return mockEventsAPI.create(eventData);
    return api.post<Event>('/events', eventData);
  },
  
  update: (id: string, eventData: Partial<Event>) =>
    api.put<Event>(`/events/${id}`, eventData),
  
  delete: (id: string) => api.delete(`/events/${id}`),
  
  rsvp: (id: string) => {
    if (USE_MOCK_API) return mockEventsAPI.rsvp(id);
    return api.post(`/events/${id}/rsvp`);
  },
  
  addComment: (id: string, content: string) => {
    if (USE_MOCK_API) return mockEventsAPI.addComment(id, content);
    return api.post(`/events/${id}/comments`, { content });
  },
  
  deleteComment: (eventId: string, commentId: string) =>
    api.delete(`/events/${eventId}/comments/${commentId}`),
};

// Users API
export const usersAPI = {
  getAll: () => api.get<User[]>('/users'),
  getById: (id: string) => api.get<User>(`/users/${id}`),
  search: (query: string) => api.get<User[]>(`/users/search?q=${query}`),
};

export default api;