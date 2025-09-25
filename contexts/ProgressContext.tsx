import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface ProgressContextType {
  completedLessons: string[];
  completeLesson: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  streak: number;
  finalTestPassed: boolean;
  passFinalTest: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const isToday = (someDate: Date) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear();
};

const isYesterday = (someDate: Date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return someDate.getDate() === yesterday.getDate() &&
        someDate.getMonth() === yesterday.getMonth() &&
        someDate.getFullYear() === yesterday.getFullYear();
};


export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const item = window.localStorage.getItem('completedLessons');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error('Error reading completedLessons from localStorage', error);
      return [];
    }
  });
  
  const [streak, setStreak] = useState<number>(() => {
    try {
      const item = window.localStorage.getItem('learningStreak');
      return item ? JSON.parse(item) : 0;
    } catch (error) {
      console.error('Error reading streak from localStorage', error);
      return 0;
    }
  });

  const [lastCompletionDate, setLastCompletionDate] = useState<string|null>(() => {
     try {
      return window.localStorage.getItem('lastCompletionDate');
    } catch (error) {
      console.error('Error reading lastCompletionDate from localStorage', error);
      return null;
    }
  });

  const [finalTestPassed, setFinalTestPassed] = useState<boolean>(() => {
    try {
      const item = window.localStorage.getItem('finalTestPassed');
      return item ? JSON.parse(item) : false;
    } catch (error) {
      console.error('Error reading finalTestPassed from localStorage', error);
      return false;
    }
  });


  useEffect(() => {
    try {
      window.localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
      window.localStorage.setItem('learningStreak', JSON.stringify(streak));
      window.localStorage.setItem('finalTestPassed', JSON.stringify(finalTestPassed));
      if (lastCompletionDate) {
        window.localStorage.setItem('lastCompletionDate', lastCompletionDate);
      }
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, [completedLessons, streak, lastCompletionDate, finalTestPassed]);

  const completeLesson = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev;
      }
      
      const now = new Date();
      const lastDate = lastCompletionDate ? new Date(lastCompletionDate) : null;

      if (lastDate && isYesterday(lastDate)) {
        setStreak(s => s + 1);
      } else if (!lastDate || !isToday(lastDate)) {
        setStreak(1);
      }
      
      setLastCompletionDate(now.toISOString().split('T')[0]);

      return [...prev, lessonId];
    });
  }, [lastCompletionDate]);

  const passFinalTest = useCallback(() => {
    setFinalTestPassed(true);
  }, []);

  const isLessonComplete = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  return (
    <ProgressContext.Provider value={{ completedLessons, completeLesson, isLessonComplete, streak, finalTestPassed, passFinalTest }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};