import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { cybersecurityData } from '../data/cybersecurityData';
import { useProgress } from '../contexts/ProgressContext';

const HomePage: React.FC = () => {
  const featuredLessons = cybersecurityData.slice(0, 3);
  const { completedLessons } = useProgress();
  const totalLessons = cybersecurityData.length;
  const progressPercentage = totalLessons > 0 ? (completedLessons.length / totalLessons) * 100 : 0;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-secondary p-8 md:p-12 rounded-lg border border-border-color">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Your Gateway to Understanding Cybersecurity
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          Equip yourself with the knowledge to navigate the digital world safely. Explore our expert-curated lessons on today's most critical security threats.
        </p>
        <Link
          to="/lessons"
          className="mt-8 inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Start Learning Now
        </Link>
      </section>
      
      {/* Progress Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-4 font-display">Your Progress</h2>
        <div className="max-w-2xl mx-auto bg-secondary p-6 rounded-lg border border-border-color">
            <div className="flex justify-between items-center mb-2">
                <span className="text-text-primary font-medium">Lessons Completed</span>
                <span className="text-accent font-bold">{completedLessons.length} / {totalLessons}</span>
            </div>
            <div className="relative w-full bg-primary rounded-full h-6 border border-border-color overflow-hidden">
              <div 
                className="bg-highlight h-full rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white tracking-wider">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
        </div>
      </section>

      {/* Featured Lessons */}
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8 font-display">Featured Lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLessons.map(lesson => (
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
      </section>

       {/* Why Learn Here Section */}
      <section className="bg-secondary p-8 md:p-12 rounded-lg border border-border-color">
        <h2 className="text-3xl font-bold text-center text-white mb-8 font-display">Why CyberGuard Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
                <h3 className="text-xl font-semibold text-accent mb-2 font-display">Comprehensive Content</h3>
                <p className="text-text-secondary">From malware to social engineering, our lessons cover the essential topics you need to know.</p>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-accent mb-2 font-display">Interactive Learning</h3>
                <p className="text-text-secondary">Test your knowledge with quizzes and engage with practical examples and prevention tips.</p>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-accent mb-2 font-display">Accessible to All</h3>
                <p className="text-text-secondary">Designed for beginners and enthusiasts alike, with clear, concise, and easy-to-understand materials.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;