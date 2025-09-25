import React from 'react';
import { Navigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

const SealIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071 1.071L12.233 4.7l-.693.028A7.5 7.5 0 0 0 5.25 12c0 2.482 1.205 4.695 3.085 6.035a.75.75 0 0 0 1.139-.982L8.52 15.9a6 6 0 0 1 2.94-4.654l.14-.07a.75.75 0 0 0 .14-.07L13.2 9.9l.028-.693 1.343.335a.75.75 0 0 0 .982-1.139L12.963 2.286Z" clipRule="evenodd" />
        <path d="M18.75 12a6.75 6.75 0 0 1-6.75 6.75v-1.5a5.25 5.25 0 0 0 5.25-5.25h1.5Z" />
    </svg>
);

const CompletionPage: React.FC = () => {
    const { finalTestPassed } = useProgress();

    // Protect this page
    if (!finalTestPassed) {
        return <Navigate to="/dashboard" replace />;
    }

    const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-white">Congratulations!</h1>
                <p className="mt-2 text-lg text-highlight">You've successfully passed the final exam.</p>
            </div>
            <div className="bg-secondary p-4 rounded-lg border-2 border-accent/50 shadow-2xl">
                <div className="border-2 border-border-color p-8 md:p-12 text-center space-y-6 relative">
                    <div className="absolute top-4 right-4">
                        <SealIcon className="h-16 w-16 text-accent/70" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-accent font-display tracking-wider">
                        Certificate of Completion
                    </h2>

                    <p className="text-text-secondary text-lg">This certificate is proudly presented to</p>

                    <p className="text-4xl md:text-5xl font-display text-white tracking-wide" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                        A Dedicated Learner
                    </p>

                    <p className="text-text-primary text-lg max-w-xl mx-auto">
                        for successfully completing the CyberGuard Academy curriculum and demonstrating outstanding knowledge in the field of cybersecurity by passing the final examination.
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border-color w-full">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-white font-bold tracking-wider">{completionDate}</p>
                            <p className="text-text-secondary text-sm">Date of Completion</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-white font-bold tracking-wider" style={{ fontFamily: "'Brush Script MT', cursive", fontSize: '1.75rem' }}>Shan Silvestrece</p>
                            <p className="text-text-secondary text-sm">Founder, CyberGuard Academy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletionPage;
