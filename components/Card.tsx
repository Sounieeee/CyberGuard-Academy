import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  lessonId: string;
  readingTime: number;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);


const Card: React.FC<CardProps> = ({ title, description, imageUrl, linkTo, lessonId, readingTime }) => {
  const { isLessonComplete } = useProgress();
  const completed = isLessonComplete(lessonId);

  return (
    <Link to={linkTo} className="block group bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-border-color">
      <div className="relative pb-[66.66%]"> {/* 2:3 aspect ratio */}
        <img className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={imageUrl} alt={title} />
        {completed && (
            <div className="absolute top-3 right-3 bg-highlight text-white rounded-full p-1 z-10 shadow-lg" title="Completed">
              <CheckIcon className="h-5 w-5" />
            </div>
        )}
        <div className="absolute bottom-3 left-3 bg-primary/70 text-white text-xs font-semibold rounded-full p-1 px-2 z-10 flex items-center gap-1 backdrop-blur-sm">
            <ClockIcon className="h-4 w-4" />
            <span>{readingTime} min read</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-200 font-display">{title}</h3>
        <p className="mt-2 text-text-secondary line-clamp-3">{description}</p>
        <div className="mt-4 text-sm font-semibold text-accent group-hover:underline">
          Learn More &rarr;
        </div>
      </div>
    </Link>
  );
};

export default Card;