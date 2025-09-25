import React, { useState, useMemo } from 'react';
import Card from '../components/Card';
import { cybersecurityData } from '../data/cybersecurityData';
import { Lesson } from '../types';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);


const LessonsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLessons = useMemo(() => {
    if (!searchTerm) {
      return cybersecurityData;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return cybersecurityData.filter(lesson =>
      lesson.title.toLowerCase().includes(lowercasedFilter) ||
      lesson.description.toLowerCase().includes(lowercasedFilter) ||
      lesson.attackTypes.some(type => type.type.toLowerCase().includes(lowercasedFilter))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-white font-display">Explore Our Lessons</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          Dive into our comprehensive library of cybersecurity topics. Use the search below to find specific content.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-text-secondary" />
            </div>
            <input
                type="text"
                placeholder="Search lessons (e.g., 'phishing', 'ransomware')..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-secondary border border-border-color rounded-lg py-3 pl-10 pr-4 text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            />
        </div>
      </div>

      {/* Lessons Grid */}
      <section>
        {filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson: Lesson) => (
              <Card
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                imageUrl={lesson.imageUrl}
                linkTo={`/lessons/${lesson.id}`}
                lessonId={lesson.id}
                readingTime={lesson.readingTime}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-secondary rounded-lg border border-border-color">
            <h3 className="text-2xl font-bold text-white font-display">No Lessons Found</h3>
            <p className="mt-2 text-text-secondary">Try adjusting your search term.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default LessonsPage;