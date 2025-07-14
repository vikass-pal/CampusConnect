import { mockEvents, mockResources, mockUsers, MockEvent, MockResource } from './mockData';
import { SearchFilters } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock Events API
export const mockEventsAPI = {
  getAll: async (filters?: SearchFilters) => {
    await delay(500); // Simulate network delay
    
    let filteredEvents = [...mockEvents];
    
    // Apply search filter
    if (filters?.query) {
      const query = filters.query.toLowerCase();
      filteredEvents = filteredEvents.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (filters?.category) {
      filteredEvents = filteredEvents.filter(event => event.category === filters.category);
    }
    
    // Apply sorting
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case 'newest':
          filteredEvents.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'oldest':
          filteredEvents.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
          break;
        case 'popular':
          filteredEvents.sort((a, b) => b.attendees.length - a.attendees.length);
          break;
      }
    }
    
    return { data: filteredEvents };
  },
  
  getById: async (id: string) => {
    await delay(300);
    const event = mockEvents.find(e => e._id === id);
    if (!event) throw new Error('Event not found');
    return { data: event };
  },
  
  create: async (eventData: any) => {
    await delay(800);
    const newEvent: MockEvent = {
      _id: `evt${Date.now()}`,
      ...eventData,
      author: mockUsers[0], // Current user
      attendees: [],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    mockEvents.unshift(newEvent);
    return { data: newEvent };
  },
  
  rsvp: async (id: string) => {
    await delay(400);
    const event = mockEvents.find(e => e._id === id);
    if (!event) throw new Error('Event not found');
    
    const userId = '1'; // Mock current user ID
    const isAttending = event.attendees.includes(userId);
    
    if (isAttending) {
      event.attendees = event.attendees.filter(attendeeId => attendeeId !== userId);
    } else {
      event.attendees.push(userId);
    }
    
    return { data: event };
  },
  
  addComment: async (id: string, content: string) => {
    await delay(500);
    const event = mockEvents.find(e => e._id === id);
    if (!event) throw new Error('Event not found');
    
    const newComment = {
      _id: `c${Date.now()}`,
      content,
      author: mockUsers[0], // Current user
      createdAt: new Date().toISOString()
    };
    
    event.comments.push(newComment);
    return { data: newComment };
  }
};

// Mock Resources API
export const mockResourcesAPI = {
  getAll: async (filters?: SearchFilters) => {
    await delay(600);
    
    let filteredResources = [...mockResources];
    
    // Apply search filter
    if (filters?.query) {
      const query = filters.query.toLowerCase();
      filteredResources = filteredResources.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply tag filter
    if (filters?.tags && filters.tags.length > 0) {
      filteredResources = filteredResources.filter(resource =>
        filters.tags!.some(tag => resource.tags.includes(tag))
      );
    }
    
    // Apply sorting
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case 'newest':
          filteredResources.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'oldest':
          filteredResources.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
          break;
        case 'popular':
          filteredResources.sort((a, b) => b.likes.length - a.likes.length);
          break;
      }
    }
    
    return { data: filteredResources };
  },
  
  getById: async (id: string) => {
    await delay(300);
    const resource = mockResources.find(r => r._id === id);
    if (!resource) throw new Error('Resource not found');
    return { data: resource };
  },
  
  create: async (formData: FormData) => {
    await delay(1000);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const type = formData.get('type') as 'pdf' | 'link' | 'note';
    const tags = (formData.get('tags') as string).split(',').map(tag => tag.trim());
    
    const newResource: MockResource = {
      _id: `res${Date.now()}`,
      title,
      description,
      type,
      tags,
      author: mockUsers[0], // Current user
      likes: [],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    if (type === 'link') {
      newResource.url = formData.get('url') as string;
    }
    
    mockResources.unshift(newResource);
    return { data: newResource };
  },
  
  like: async (id: string) => {
    await delay(300);
    const resource = mockResources.find(r => r._id === id);
    if (!resource) throw new Error('Resource not found');
    
    const userId = '1'; // Mock current user ID
    const isLiked = resource.likes.includes(userId);
    
    if (isLiked) {
      resource.likes = resource.likes.filter(likeId => likeId !== userId);
    } else {
      resource.likes.push(userId);
    }
    
    return { data: resource };
  },
  
  addComment: async (id: string, content: string) => {
    await delay(500);
    const resource = mockResources.find(r => r._id === id);
    if (!resource) throw new Error('Resource not found');
    
    const newComment = {
      _id: `c${Date.now()}`,
      content,
      author: mockUsers[0], // Current user
      createdAt: new Date().toISOString()
    };
    
    resource.comments.push(newComment);
    return { data: newComment };
  }
};