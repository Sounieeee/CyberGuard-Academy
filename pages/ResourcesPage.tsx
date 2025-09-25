
import React from 'react';
import { cybersecurityData } from '../data/cybersecurityData';

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);


const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Resources & Further Reading</h1>
        <p className="mt-4 text-lg text-text-secondary">
          A collection of all scholarly references and sources used in our lessons.
        </p>
      </div>

      <div className="space-y-10">
        {cybersecurityData.map(lesson => (
          <div key={lesson.id} className="bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
            <h2 className="text-2xl font-bold text-accent mb-4">{lesson.title}</h2>
            {lesson.references.length > 0 ? (
              <ul className="space-y-3">
                {lesson.references.map((ref, index) => (
                  <li key={index}>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-start text-text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLinkIcon className="flex-shrink-0 mr-3 mt-1 w-5 h-5" />
                      <span>{ref.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
                <p className="text-text-secondary">No external references listed for this topic.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
