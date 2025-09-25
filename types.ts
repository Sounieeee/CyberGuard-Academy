export interface AttackType {
  type: string;
  description: string;
  example: string;
  prevention: string;
  imageUrl: string;
}

export interface Reference {
  text: string;
  url: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  sources: string[];
  attackTypes: AttackType[];
  references: Reference[];
  quiz: QuizQuestion[];
  imageUrl: string;
  readingTime: number; // in minutes
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji or identifier
  condition: (completedLessons: string[], allLessons: Lesson[]) => boolean;
}