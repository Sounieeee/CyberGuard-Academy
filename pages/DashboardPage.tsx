import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { cybersecurityData } from '../data/cybersecurityData';
import { achievementsData } from '../data/achievementsData';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { completedLessons, streak, finalTestPassed } = useProgress();
  const totalLessons = cybersecurityData.length;
  const progressPercentage = totalLessons > 0 ? (completedLessons.length / totalLessons) * 100 : 0;

  const unlockedAchievements = achievementsData.filter(ach => ach.condition(completedLessons, cybersecurityData));
  const lockedAchievements = achievementsData.filter(ach => !ach.condition(completedLessons, cybersecurityData));

  const allLessonsCompleted = completedLessons.length === totalLessons;
  const nextLesson = !allLessonsCompleted ? cybersecurityData.find(lesson => !completedLessons.includes(lesson.id)) : null;

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-extrabold text-white text-center font-display">Your Dashboard</h1>
        <p className="text-lg text-text-secondary text-center mt-2">Track your progress and celebrate your achievements!</p>
      </section>

      {/* Progress & Next Step Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-secondary p-6 rounded-lg border border-border-color">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Learning Progress</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-text-primary font-medium">Lessons Completed</span>
            <span className="text-accent font-bold">{completedLessons.length} / {totalLessons}</span>
          </div>
          <div className="relative w-full bg-primary rounded-full h-8 border border-border-color overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-highlight h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
        </div>
        
        <div className="bg-secondary p-6 rounded-lg border border-border-color flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold text-white mb-2 font-display">Learning Streak</h2>
            <div className="text-5xl font-bold text-accent mb-2">🔥 {streak}</div>
            <p className="text-text-secondary">{streak > 0 ? `day${streak > 1 ? 's' : ''}! Keep it up!` : 'Complete a lesson to start!'}</p>
        </div>
      </section>
      
      {nextLesson && (
        <section className="bg-secondary p-6 rounded-lg border border-border-color flex flex-col justify-center items-center text-center">
             <h2 className="text-2xl font-bold text-white mb-3 font-display">Your Next Step</h2>
             <p className="text-text-secondary mb-4">Continue your journey with the next lesson:</p>
             <Link to={`/lessons/${nextLesson.id}`} className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105">
                 Start: {nextLesson.title}
             </Link>
        </section>
      )}

      {allLessonsCompleted && (
        <section className="bg-secondary p-8 rounded-lg border border-border-color text-center">
            {finalTestPassed ? (
                <>
                    <h2 className="text-2xl font-bold text-highlight mb-3 font-display">🏆 Final Test Passed! 🏆</h2>
                    <p className="text-text-secondary mb-4">You've mastered the fundamentals of cybersecurity. View your official certificate.</p>
                    <Link to="/completion-certificate" className="bg-highlight text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105">
                        View Your Certificate
                    </Link>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-bold text-white mb-3 font-display">Congratulations! You've completed all lessons!</h2>
                    <p className="text-text-secondary mb-4">You're ready for the final challenge. Test your knowledge to earn your certificate.</p>
                    <Link to="/final-test" className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105">
                        Take the Final Test
                    </Link>
                </>
            )}
        </section>
      )}


      {/* Achievements Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-8 font-display">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...unlockedAchievements, ...lockedAchievements].map(achievement => {
            const isUnlocked = unlockedAchievements.some(unlocked => unlocked.id === achievement.id);
            return (
              <div
                key={achievement.id}
                className={`bg-secondary p-6 rounded-lg border border-border-color text-center transition-all duration-300 ${isUnlocked ? 'shadow-lg' : 'opacity-50'}`}
                title={achievement.description}
              >
                <div className={`text-5xl mb-4 transition-transform duration-300 ${isUnlocked ? 'transform scale-110' : 'grayscale'}`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-display">{achievement.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;