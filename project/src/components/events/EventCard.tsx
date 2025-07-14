import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../../types';
import { Calendar, Clock, MapPin, Users, MessageCircle, User } from 'lucide-react';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
  onRSVP?: (id: string) => void;
  currentUserId?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRSVP, currentUserId }) => {
  const isAttending = currentUserId ? event.attendees.includes(currentUserId) : false;
  const spotsLeft = event.maxAttendees ? event.maxAttendees - event.attendees.length : null;

  const handleRSVP = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onRSVP) {
      onRSVP(event._id);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'workshop': 'bg-blue-100 text-blue-800',
      'seminar': 'bg-green-100 text-green-800',
      'social': 'bg-purple-100 text-purple-800',
      'study-group': 'bg-yellow-100 text-yellow-800',
      'tech-talk': 'bg-red-100 text-red-800',
      'career': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
            {event.category.replace('-', ' ')}
          </span>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(event.date), 'MMM d, yyyy')}</span>
          </div>
        </div>

        {/* Title and Description */}
        <Link to={`/events/${event._id}`} className="block group">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {event.description}
          </p>
        </Link>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>
              {event.attendees.length} attending
              {spotsLeft !== null && spotsLeft > 0 && (
                <span className="text-green-600 ml-1">
                  ({spotsLeft} spots left)
                </span>
              )}
              {spotsLeft === 0 && (
                <span className="text-red-600 ml-1">(Full)</span>
              )}
            </span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">
              {event.author.fullName.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-gray-600">
            by {event.author.fullName}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <Link
              to={`/events/${event._id}`}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{event.comments.length}</span>
            </Link>
          </div>

          <button
            onClick={handleRSVP}
            disabled={spotsLeft === 0 && !isAttending}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isAttending
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : spotsLeft === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {isAttending ? 'Attending' : spotsLeft === 0 ? 'Full' : 'RSVP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;