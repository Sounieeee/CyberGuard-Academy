import React, { useMemo } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { cybersecurityData } from '../data/cybersecurityData';
import Quiz from '../components/Quiz';
import { useProgress } from '../contexts/ProgressContext';
import { QuizQuestion } from '../types';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const FinalTestPage: React.FC = () => {
  const navigate = useNavigate();
  const { passFinalTest, completedLessons, finalTestPassed } = useProgress();
  const totalLessons = cybersecurityData.length;

  const allQuestions = useMemo(() => {
    const questions = cybersecurityData.flatMap(lesson => lesson.quiz);
    return shuffleArray(questions).slice(0, 40); // Get 40 random questions
  }, []);

  const handleQuizPass = () => {
    passFinalTest();
    navigate('/completion-certificate');
  };
  
  // Protect the route: user must complete all lessons to access the final test.
  if (completedLessons.length < totalLessons) {
    return <Navigate to="/dashboard" replace />;
  }

  // If user already passed, redirect them to their certificate
  if (finalTestPassed) {
      return <Navigate to="/completion-certificate" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display">Final Examination</h1>
        <p className="mt-4 text-lg text-text-secondary">
          This is the final challenge. Answer 40 questions drawn from all lessons to test your comprehensive knowledge. Good luck!
        </p>
      </section>

      <section>
        <Quiz questions={allQuestions} onQuizPass={handleQuizPass} />
      </section>
    </div>
  );
};

export default FinalTestPage;
