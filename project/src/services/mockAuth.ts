// Mock authentication service for development
export interface MockUser {
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

export interface MockAuthResponse {
  token: string;
  user: MockUser;
}

// Mock users storage
const USERS_KEY = 'campusconnect_users';
const CURRENT_USER_KEY = 'campusconnect_current_user';

// Get users from localStorage
const getUsers = (): MockUser[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Save users to localStorage
const saveUsers = (users: MockUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Generate mock token
const generateToken = () => {
  return 'mock_token_' + Math.random().toString(36).substr(2, 9);
};

// Mock API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthAPI = {
  login: async (email: string, password: string): Promise<{ data: MockAuthResponse }> => {
    await delay(1000); // Simulate API delay
    
    const users = getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    // In a real app, you'd verify the password hash
    // For demo purposes, we'll just check if password is not empty
    if (!password) {
      throw new Error('Invalid password');
    }
    
    const token = generateToken();
    const authResponse = { token, user };
    
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(authResponse));
    
    return { data: authResponse };
  },

  register: async (userData: {
    username: string;
    email: string;
    password: string;
    fullName: string;
    academicYear: string;
  }): Promise<{ data: MockAuthResponse }> => {
    await delay(1000); // Simulate API delay
    
    const users = getUsers();
    
    // Check if user already exists
    if (users.find(u => u.email === userData.email)) {
      throw new Error('User with this email already exists');
    }
    
    if (users.find(u => u.username === userData.username)) {
      throw new Error('Username already taken');
    }
    
    // Create new user
    const newUser: MockUser = {
      _id: 'user_' + Math.random().toString(36).substr(2, 9),
      username: userData.username,
      email: userData.email,
      fullName: userData.fullName,
      bio: '',
      skills: [],
      academicYear: userData.academicYear,
      isAdmin: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    users.push(newUser);
    saveUsers(users);
    
    const token = generateToken();
    const authResponse = { token, user: newUser };
    
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(authResponse));
    
    return { data: authResponse };
  },

  getProfile: async (): Promise<{ data: MockUser }> => {
    await delay(500);
    
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    if (!currentUser) {
      throw new Error('Not authenticated');
    }
    
    const { user } = JSON.parse(currentUser);
    return { data: user };
  },

  updateProfile: async (userData: Partial<MockUser>): Promise<{ data: MockUser }> => {
    await delay(1000);
    
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    if (!currentUser) {
      throw new Error('Not authenticated');
    }
    
    const { token, user } = JSON.parse(currentUser);
    const updatedUser = { ...user, ...userData, updatedAt: new Date().toISOString() };
    
    // Update in users list
    const users = getUsers();
    const userIndex = users.findIndex(u => u._id === user._id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      saveUsers(users);
    }
    
    // Update current user
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ token, user: updatedUser }));
    
    return { data: updatedUser };
  },
};

// Check if user is currently logged in
export const getCurrentUser = (): MockAuthResponse | null => {
  const currentUser = localStorage.getItem(CURRENT_USER_KEY);
  return currentUser ? JSON.parse(currentUser) : null;
};

// Logout function
export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};