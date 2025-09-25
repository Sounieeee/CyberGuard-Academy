import React, { useMemo } from 'react';
import { glossaryData } from '../data/glossaryData';

const GlossaryPage: React.FC = () => {
  const sortedGlossary = useMemo(() => 
    [...glossaryData].sort((a, b) => a.term.localeCompare(b.term)), 
  []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white font-display">Cybersecurity Glossary</h1>
        <p className="mt-4 text-lg text-text-secondary">
          A quick reference for common terms and concepts in the world of cyber defense.
        </p>
      </div>

      <div className="bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
        <div className="space-y-8">
          {sortedGlossary.map((item) => (
            <div key={item.term} className="border-b border-border-color pb-4">
              <h2 className="text-2xl font-bold text-accent font-display">{item.term}</h2>
              <p className="mt-2 text-text-primary leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
