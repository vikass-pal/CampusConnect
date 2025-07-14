// Mock data for development without backend
export interface MockUser {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  bio?: string;
  skills?: string[];
  academicYear: string;
  profilePicture?: string;
  createdAt: string;
}

export interface MockResource {
  _id: string;
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'note';
  url?: string;
  fileUrl?: string;
  tags: string[];
  author: MockUser;
  likes: string[];
  comments: Array<{
    _id: string;
    content: string;
    author: MockUser;
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface MockEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  capacity?: number;
  author: MockUser;
  attendees: string[];
  comments: Array<{
    _id: string;
    content: string;
    author: MockUser;
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

// Mock users
export const mockUsers: MockUser[] = [
  {
    _id: '1',
    username: 'alice_chen',
    email: 'alice@university.edu',
    fullName: 'Alice Chen',
    bio: 'Computer Science major passionate about AI and machine learning',
    skills: ['Python', 'JavaScript', 'React', 'Machine Learning'],
    academicYear: 'Third Year',
    profilePicture: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    username: 'bob_wilson',
    email: 'bob@university.edu',
    fullName: 'Bob Wilson',
    bio: 'Engineering student and tech enthusiast',
    skills: ['Java', 'C++', 'Data Structures', 'Algorithms'],
    academicYear: 'Second Year',
    profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    createdAt: '2024-01-10T08:30:00Z'
  },
  {
    _id: '3',
    username: 'sarah_davis',
    email: 'sarah@university.edu',
    fullName: 'Sarah Davis',
    bio: 'Design and UX enthusiast, love creating beautiful interfaces',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Frontend'],
    academicYear: 'Fourth Year',
    profilePicture: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    createdAt: '2024-01-05T14:20:00Z'
  }
];

// Mock events
export const mockEvents: MockEvent[] = [
  {
    _id: 'evt1',
    title: 'React.js Workshop: Building Modern Web Apps',
    description: 'Join us for an intensive workshop on React.js where we\'ll build a complete web application from scratch. Perfect for beginners and intermediate developers looking to enhance their frontend skills.',
    date: '2024-02-15',
    time: '14:00',
    location: 'Computer Science Building, Room 301',
    category: 'workshop',
    capacity: 30,
    author: mockUsers[0],
    attendees: ['2', '3'],
    comments: [
      {
        _id: 'c1',
        content: 'This looks amazing! Can\'t wait to attend.',
        author: mockUsers[1],
        createdAt: '2024-01-20T09:15:00Z'
      }
    ],
    createdAt: '2024-01-18T16:30:00Z',
    updatedAt: '2024-01-18T16:30:00Z'
  },
  {
    _id: 'evt2',
    title: 'AI & Machine Learning Seminar',
    description: 'Explore the latest trends in artificial intelligence and machine learning. Industry experts will share insights on career opportunities and cutting-edge research.',
    date: '2024-02-20',
    time: '18:00',
    location: 'Main Auditorium',
    category: 'seminar',
    capacity: 100,
    author: mockUsers[1],
    attendees: ['1', '3'],
    comments: [],
    createdAt: '2024-01-16T11:45:00Z',
    updatedAt: '2024-01-16T11:45:00Z'
  },
  {
    _id: 'evt3',
    title: 'Study Group: Data Structures & Algorithms',
    description: 'Weekly study group for CS students preparing for technical interviews. We\'ll solve coding problems and discuss optimal solutions together.',
    date: '2024-02-12',
    time: '19:00',
    location: 'Library Study Room B',
    category: 'study-group',
    capacity: 15,
    author: mockUsers[2],
    attendees: ['1'],
    comments: [
      {
        _id: 'c2',
        content: 'Perfect timing! I need help with tree algorithms.',
        author: mockUsers[0],
        createdAt: '2024-01-19T13:20:00Z'
      }
    ],
    createdAt: '2024-01-17T20:10:00Z',
    updatedAt: '2024-01-17T20:10:00Z'
  },
  {
    _id: 'evt4',
    title: 'Tech Career Fair Networking Event',
    description: 'Connect with recruiters from top tech companies. Bring your resume and be ready to discuss your projects and career goals.',
    date: '2024-02-25',
    time: '10:00',
    location: 'Student Center Ballroom',
    category: 'career',
    capacity: 200,
    author: mockUsers[0],
    attendees: ['2'],
    comments: [],
    createdAt: '2024-01-14T12:00:00Z',
    updatedAt: '2024-01-14T12:00:00Z'
  },
  {
    _id: 'evt5',
    title: 'Web Development Bootcamp',
    description: 'Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and modern frameworks. Perfect for beginners wanting to start their web development journey.',
    date: '2024-03-01',
    time: '09:00',
    location: 'Engineering Lab 205',
    category: 'workshop',
    capacity: 25,
    author: mockUsers[2],
    attendees: ['1', '2'],
    comments: [
      {
        _id: 'c3',
        content: 'This is exactly what I was looking for!',
        author: mockUsers[1],
        createdAt: '2024-01-21T15:30:00Z'
      }
    ],
    createdAt: '2024-01-19T09:45:00Z',
    updatedAt: '2024-01-19T09:45:00Z'
  },
  {
    _id: 'evt6',
    title: 'Pizza & Code Social Night',
    description: 'Casual meetup for computer science students. Enjoy pizza while working on personal projects and meeting fellow developers.',
    date: '2024-02-18',
    time: '17:30',
    location: 'CS Lounge',
    category: 'social',
    author: mockUsers[1],
    attendees: ['1', '3'],
    comments: [],
    createdAt: '2024-01-15T14:20:00Z',
    updatedAt: '2024-01-15T14:20:00Z'
  }
];

// Mock resources
export const mockResources: MockResource[] = [
  {
    _id: 'res1',
    title: 'Complete React.js Cheat Sheet',
    description: 'Comprehensive guide covering React hooks, components, state management, and best practices. Perfect for quick reference during development.',
    type: 'pdf',
    fileUrl: 'https://example.com/react-cheatsheet.pdf',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    author: mockUsers[0],
    likes: ['2', '3'],
    comments: [
      {
        _id: 'rc1',
        content: 'This is incredibly helpful! Thanks for sharing.',
        author: mockUsers[1],
        createdAt: '2024-01-20T10:30:00Z'
      }
    ],
    createdAt: '2024-01-18T14:15:00Z',
    updatedAt: '2024-01-18T14:15:00Z'
  },
  {
    _id: 'res2',
    title: 'Data Structures Visualization Tool',
    description: 'Interactive web tool for visualizing common data structures like trees, graphs, and hash tables. Great for understanding algorithms.',
    type: 'link',
    url: 'https://visualgo.net/en',
    tags: ['Data Structures', 'Algorithms', 'Visualization', 'Learning'],
    author: mockUsers[1],
    likes: ['1'],
    comments: [],
    createdAt: '2024-01-16T09:20:00Z',
    updatedAt: '2024-01-16T09:20:00Z'
  },
  {
    _id: 'res3',
    title: 'My Database Design Notes',
    description: 'Personal notes on database design principles, normalization, and SQL optimization techniques from CS 340.',
    type: 'note',
    tags: ['Database', 'SQL', 'Design', 'Notes'],
    author: mockUsers[2],
    likes: ['1', '2'],
    comments: [
      {
        _id: 'rc2',
        content: 'These notes saved me during the midterm!',
        author: mockUsers[0],
        createdAt: '2024-01-19T16:45:00Z'
      }
    ],
    createdAt: '2024-01-15T11:30:00Z',
    updatedAt: '2024-01-15T11:30:00Z'
  }
];