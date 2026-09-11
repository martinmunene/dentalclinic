import React, { useEffect } from 'react';
import { X, Clock } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenBooking }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 transform transition-all flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span className="font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary-light">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
            {post.title}
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-primary-50 p-6 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-navy-900 text-base">
                Ready to consult a Deans Dental specialist?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our clinic teams at Garden City Mall and Runda Mall are ready to assist you.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="shrink-0 px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-dark transition-colors"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
