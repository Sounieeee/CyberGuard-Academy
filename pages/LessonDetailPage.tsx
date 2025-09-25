import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cybersecurityData } from '../data/cybersecurityData';
import Quiz from '../components/Quiz';
import Tooltip from '../components/Tooltip';
import { useProgress } from '../contexts/ProgressContext';

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

const LessonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lessonIndex = cybersecurityData.findIndex(l => l.id === id);
  const lesson = lessonIndex !== -1 ? cybersecurityData[lessonIndex] : undefined;

  const { completeLesson, isLessonComplete } = useProgress();

  if (!lesson) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-500 font-display">Lesson not found!</h1>
        <Link to="/lessons" className="mt-4 inline-block text-accent hover:underline">
          &larr; Back to all lessons
        </Link>
      </div>
    );
  }
  
  const handleQuizPass = () => {
    completeLesson(lesson.id);
  };

  const completed = isLessonComplete(lesson.id);
  const prevLesson = lessonIndex > 0 ? cybersecurityData[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < cybersecurityData.length - 1 ? cybersecurityData[lessonIndex + 1] : null;

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Lesson Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display">{lesson.title}</h1>
        <p className="mt-4 text-lg text-text-secondary">
          {lesson.id === 'malware-attacks' 
           ? <>
              <Tooltip term="Malware" /> (malicious software) is code designed to infiltrate, damage, or gain unauthorized access to a computer system or network. Malware types differ in how they propagate, what they do once inside, and how stealthy they are.
             </>
           : lesson.description
          }
        </p>
        {lesson.sources.length > 0 && <p className="mt-2 text-sm text-text-secondary">Sources: {lesson.sources.join(', ')}</p>}
        {completed && (
           <div className="mt-4 inline-block bg-highlight/10 text-highlight font-bold py-2 px-4 rounded-full text-sm border border-highlight/20">
               ✓ Lesson Completed
           </div>
        )}
      </section>

      {/* Attack Types Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6 font-display">Types, Examples & Prevention</h2>
        <div className="space-y-8">
            {lesson.attackTypes.map(type => (
                <div key={type.type} className="bg-secondary rounded-lg border border-border-color shadow-lg overflow-hidden md:grid md:grid-cols-5 md:gap-x-8">
                    <div className="md:col-span-2">
                      <img src={type.imageUrl} alt={type.type} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:col-span-3 p-6 space-y-4">
                        <h3 className="text-2xl font-bold text-accent font-display">{type.type}</h3>
                        <div>
                            <h4 className="font-semibold text-text-primary">Description & Behavior</h4>
                            <p className="text-text-secondary leading-relaxed whitespace-pre-line">{type.description}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-text-primary">Example / Case</h4>
                            <p className="text-text-secondary leading-relaxed whitespace-pre-line">{type.example}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-text-primary">Prevention & Mitigation</h4>
                            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                              {lesson.id === 'network-web-application-attacks' && type.type === 'SQL Injection'
                               ? <>The primary defense is to use prepared statements (with <Tooltip term="Parameterized Queries" />). This separates the SQL code from the user-supplied data, ensuring the data is treated as data, not as executable code. Also, validate and sanitize all user input and follow the principle of least privilege for database accounts.</>
                               : type.prevention
                              }
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* References */}
      {lesson.references.length > 0 && (
          <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-display">Further Reading</h2>
              <ul className="space-y-3">
                  {lesson.references.map((ref, index) => (
                      <li key={index} className="bg-secondary p-4 rounded-lg border border-border-color">
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-accent hover:underline">
                              <span>{ref.text}</span>
                              <ExternalLinkIcon className="ml-2 w-4 h-4 flex-shrink-0" />
                          </a>
                      </li>
                  ))}
              </ul>
          </section>
      )}

      {/* Interactive Quiz */}
      <section>
        <Quiz questions={lesson.quiz} onQuizPass={handleQuizPass} />
      </section>

      {/* Lesson Navigation */}
      <section className="flex justify-between items-center bg-secondary p-4 rounded-lg border border-border-color">
        {prevLesson ? (
            <Link to={`/lessons/${prevLesson.id}`} className="text-accent hover:underline">
                &larr; Previous: {prevLesson.title}
            </Link>
        ) : <div />}
        {nextLesson ? (
            <Link to={`/lessons/${nextLesson.id}`} className="text-accent hover:underline">
                Next: {nextLesson.title} &rarr;
            </Link>
        ) : <div />}
      </section>
    </div>
  );
};

export default LessonDetailPage;