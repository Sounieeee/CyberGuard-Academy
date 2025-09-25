import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const faqData = [
  {
    question: "Who is this website for?",
    answer: "CyberGuard Academy is designed for anyone interested in learning about cybersecurity, from complete beginners to students and professionals looking to refresh their knowledge on core concepts. No prior experience is required."
  },
  {
    question: "Is the content on this website free?",
    answer: "Yes, all educational content, including lessons and quizzes, is completely free to access. Our goal is to make cybersecurity knowledge accessible to everyone."
  },
  {
    question: "How is the content created and verified?",
    answer: "Our content is carefully researched and compiled from reputable sources in the cybersecurity field, including academic papers, reports from security firms, and industry best practices. We provide references in our lessons for further reading and verification."
  },
   {
    question: "What happens when I complete all the lessons?",
    answer: "After completing all the lessons by passing their respective quizzes, you will unlock a final test on your dashboard. Passing the final test will earn you a Certificate of Completion to celebrate your achievement!"
  },
  {
    question: "How often is the content updated?",
    answer: "The world of cybersecurity is always evolving. We are committed to regularly reviewing and updating our content to reflect the latest threats, technologies, and best practices."
  },
  {
    question: "What is the difference between a virus and a worm?",
    answer: "A virus requires a host file (like a document or program) and user interaction (like opening the file) to spread. A worm is a standalone piece of malware that can replicate and spread across networks on its own, without any human action."
  },
  {
    question: "How can I protect myself from phishing attacks?",
    answer: "Be skeptical of unsolicited emails, especially those creating a sense of urgency. Always check the sender's email address. Avoid clicking links directly; instead, navigate to the website manually. Enabling Multi-Factor Authentication (MFA) provides a strong additional layer of security."
  },
   {
    question: "Can I suggest a topic for a new lesson?",
    answer: "Absolutely! We welcome suggestions from our community. Please use our Contact page to send us your ideas for new topics or improvements."
  }
];

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-text-secondary">
          Find quick answers to common questions about our platform and cybersecurity topics.
        </p>
      </div>
      <div className="bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
        {faqData.map((item, index) => (
          <Accordion key={index} title={item.question}>
            <p>{item.answer}</p>
          </Accordion>
        ))}
      </div>
      <div className="mt-12 text-center bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
        <h2 className="text-2xl font-bold text-white font-display">Still have questions?</h2>
        <p className="mt-2 text-text-secondary">If you can't find the answer you're looking for, feel free to reach out to us.</p>
        <Link 
            to="/contact" 
            className="mt-6 inline-block bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Contact Us
        </Link>
    </div>
    </div>
  );
};

export default FAQPage;