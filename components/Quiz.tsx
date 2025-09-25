import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onQuizPass: () => void;
}

const PASS_THRESHOLD = 80; // 80%

const Quiz: React.FC<QuizProps> = ({ questions, onQuizPass }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState('');

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setFeedback(`Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`);
  }, [currentQuestionIndex, currentQuestion.question]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect.');
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setFeedback('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalScore = (score / questions.length) * 100;
      if (finalScore >= PASS_THRESHOLD) {
        onQuizPass();
      }
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const finalScorePercentage = Math.round((score / questions.length) * 100);
    const passed = finalScorePercentage >= PASS_THRESHOLD;

    return (
      <div className="bg-secondary p-8 rounded-lg border border-border-color text-center">
        <h3 className="text-2xl font-bold text-white mb-4 font-display">Quiz Complete!</h3>
        <p className="text-lg text-text-primary">
          Your score: <span className={`font-bold ${passed ? 'text-highlight' : 'text-red-500'}`}>{finalScorePercentage}%</span>
        </p>
        <p className="text-text-secondary text-sm mb-4">(You need {PASS_THRESHOLD}% to pass)</p>
        
        {passed ? (
           <p className="text-xl font-bold text-highlight">Congratulations, you passed! 🎉</p>
        ) : (
           <p className="text-xl font-bold text-red-500">Please try again to complete the lesson.</p>
        )}

        <button onClick={restartQuiz} className="mt-6 bg-accent text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-secondary p-6 sm:p-8 rounded-lg border border-border-color">
      <h3 className="text-2xl font-bold text-white mb-2 font-display">Knowledge Check</h3>
      <p className="text-text-secondary mb-6">Question {currentQuestionIndex + 1} of {questions.length}</p>
      
      <p className="text-lg text-text-primary mb-6">{currentQuestion.question}</p>

      <div className="sr-only" aria-live="assertive" role="alert">
        {feedback}
      </div>
      
      <div className="space-y-4">
        {currentQuestion.options.map(option => {
          const isSelected = selectedAnswer === option;
          const isCorrect = currentQuestion.correctAnswer === option;
          let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
          
          if (isAnswered) {
            if (isCorrect) {
              buttonClass += 'bg-green-500/20 border-green-500 text-white animate-pulseHighlight ';
            } else if (isSelected) {
              buttonClass += 'bg-red-500/20 border-red-500 text-white ';
            } else {
              buttonClass += 'border-border-color text-text-secondary ';
            }
          } else {
            buttonClass += 'border-border-color text-text-primary hover:bg-border-color hover:border-accent ';
          }
          return (
            <button key={option} onClick={() => handleAnswerSelect(option)} disabled={isAnswered} className={buttonClass}>
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-6 p-4 bg-primary rounded-lg border border-border-color animate-fadeIn">
            <p className="text-text-primary">{currentQuestion.explanation}</p>
        </div>
      )}
      
      <div className="mt-8 text-right">
        {isAnswered && (
          <button onClick={handleNextQuestion} className="bg-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500 transition-colors">
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;