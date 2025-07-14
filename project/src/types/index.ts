export interface User {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  bio?: string;
  skills: string[];
  academicYear: string;
  profilePicture?: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Resource {
  _id: string;
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'notes';
  fileUrl?: string;
  linkUrl?: string;
  content?: string;
  tags: string[];
  author: User;
  likes: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  maxAttendees?: number;
  author: User;
  attendees: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface SearchFilters {
  query?: string;
  tags?: string[];
  category?: string;
  type?: string;
  sortBy?: 'newest' | 'oldest' | 'popular';
}