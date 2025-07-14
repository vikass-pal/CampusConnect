import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  Search,
  Plus
} from 'lucide-react';

const HomePage = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Students', value: '2,847', icon: Users, color: 'text-blue-600' },
    { label: 'Resources Shared', value: '1,234', icon: BookOpen, color: 'text-green-600' },
    { label: 'Events This Month', value: '89', icon: Calendar, color: 'text-purple-600' },
    { label: 'Study Groups', value: '156', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const features = [
    {
      title: 'Share Resources',
      description: 'Upload and share study materials, notes, and helpful links with your peers.',
      icon: BookOpen,
      link: '/resources',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Discover Events',
      description: 'Find workshops, seminars, and study groups happening on campus.',
      icon: Calendar,
      link: '/events',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Connect with Peers',
      description: 'Network with students who share your academic interests and goals.',
      icon: Users,
      link: '/search',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CampusConnect
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The ultimate platform for college students to share resources, discover events, 
            and connect with peers who share their academic passions.
          </p>
        </div>

        {user ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Resources
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Explore Events
            </Link>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CampusConnect provides all the tools you need to collaborate, learn, and grow with your fellow students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {feature.description}
              </p>
              <div className="text-center">
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      {user && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to contribute?
            </h2>
            <p className="text-gray-600">
              Share your knowledge and help your fellow students succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/new"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                <Plus className="w-5 h-5 mr-2" />
                Share Resource
              </Link>
              <Link
                to="/events/new"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Event
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What students are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Chen',
              year: 'Computer Science, 3rd Year',
              quote: 'CampusConnect has been a game-changer for finding study materials and connecting with classmates.',
            },
            {
              name: 'Marcus Johnson',
              year: 'Business Administration, 2nd Year',
              quote: 'The events feature helped me discover amazing workshops that boosted my career prospects.',
            },
            {
              name: 'Emily Rodriguez',
              year: 'Engineering, 4th Year',
              quote: 'I love how easy it is to share resources and help other students in my program.',
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;