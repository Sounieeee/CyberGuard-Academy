import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'first-step',
    title: 'First Step',
    description: 'Complete your first lesson.',
    icon: '🌱',
    condition: (completedLessons) => completedLessons.length >= 1,
  },
  {
    id: 'halfway-there',
    title: 'Halfway There',
    description: 'Complete half of all lessons.',
    icon: '🏃',
    condition: (completedLessons, allLessons) => completedLessons.length >= allLessons.length / 2,
  },
  {
    id: 'malware-master',
    title: 'Malware Master',
    description: 'Complete the Malware Attacks lesson.',
    icon: '👾',
    condition: (completedLessons) => completedLessons.includes('malware-attacks'),
  },
  {
    id: 'phishing-phenom',
    title: 'Phishing Phenom',
    description: 'Complete the Social Engineering & Phishing lesson.',
    icon: '🎣',
    condition: (completedLessons) => completedLessons.includes('social-engineering-phishing'),
  },
    {
    id: 'network-ninja',
    title: 'Network Ninja',
    description: 'Complete the Network & Web Application Attacks lesson.',
    icon: '🌐',
    condition: (completedLessons) => completedLessons.includes('network-web-application-attacks'),
  },
  {
    id: 'cyber-sleuth',
    title: 'Cyber Sleuth',
    description: 'Complete the Cybercrime Categories lesson.',
    icon: '🕵️',
    condition: (completedLessons) => completedLessons.includes('cybercrime-categories'),
  },
  {
    id: 'grand-master',
    title: 'Cyber Grand Master',
    description: 'Complete all available lessons.',
    icon: '🏆',
    condition: (completedLessons, allLessons) => completedLessons.length === allLessons.length,
  },
];
