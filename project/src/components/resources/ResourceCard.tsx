import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../../types';
import { Heart, MessageCircle, Download, ExternalLink, FileText, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

interface ResourceCardProps {
  resource: Resource;
  onLike?: (id: string) => void;
  currentUserId?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onLike, currentUserId }) => {
  const isLiked = currentUserId ? resource.likes.includes(currentUserId) : false;

  const getResourceIcon = () => {
    switch (resource.type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'link':
        return <ExternalLink className="w-5 h-5 text-blue-500" />;
      case 'notes':
        return <FileText className="w-5 h-5 text-green-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLike) {
      onLike(resource._id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            {getResourceIcon()}
            <span className="text-sm font-medium text-gray-600 capitalize">
              {resource.type}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(resource.createdAt), 'MMM d, yyyy')}</span>
          </div>
        </div>

        {/* Title and Description */}
        <Link to={`/resources/${resource._id}`} className="block group">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {resource.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {resource.description}
          </p>
        </Link>

        {/* Tags */}
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
            {resource.tags.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                +{resource.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Author */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">
              {resource.author.fullName.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-gray-600">
            by {resource.author.fullName}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 text-sm transition-colors ${
                isLiked
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{resource.likes.length}</span>
            </button>

            <Link
              to={`/resources/${resource._id}`}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{resource.comments.length}</span>
            </Link>
          </div>

          {resource.type === 'pdf' && resource.fileUrl && (
            <a
              href={resource.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          )}

          {resource.type === 'link' && resource.linkUrl && (
            <a
              href={resource.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;