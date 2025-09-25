
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
      <h1 className="text-4xl font-extrabold text-white text-center mb-6">About CyberGuard Academy</h1>
      <p className="text-lg text-text-secondary text-center mb-12">
        We are dedicated to demystifying cybersecurity and empowering individuals with the knowledge to protect themselves and their organizations in an increasingly digital world.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">Our Mission</h2>
          <p className="text-text-primary leading-relaxed">
            Our mission is to provide accessible, high-quality, and up-to-date cybersecurity education for everyone. We believe that security is not just for experts, but a fundamental skill for all digital citizens. We aim to break down complex topics into clear, understandable lessons that are both informative and engaging.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">Our Vision</h2>
          <p className="text-text-primary leading-relaxed">
            We envision a future where individuals and organizations can confidently navigate the digital landscape, aware of the risks and equipped with the tools to mitigate them. CyberGuard Academy strives to be a leading resource in this global effort, fostering a community of security-conscious learners who can champion best practices in their personal and professional lives.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">Our Credibility</h2>
          <p className="text-text-primary leading-relaxed">
            The content on CyberGuard Academy is curated and synthesized from reputable sources, including scholarly articles, leading cybersecurity firms, and established research institutions. We are committed to providing information that is accurate, relevant, and grounded in real-world scenarios. Each lesson includes references to our source materials, allowing learners to explore topics in greater depth and verify the information presented.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">From the Founder</h2>
          <p className="text-text-primary leading-relaxed">
            "CyberGuard Academy was founded by Shan Silvestrece with a simple yet powerful vision: to make cybersecurity education accessible to everyone. In a world where digital threats are constantly evolving, understanding how to protect ourselves is no longer a luxury, but a necessity. We are committed to providing clear, practical, and engaging content to empower you on your learning journey."
          </p>
           <p className="text-text-primary leading-relaxed mt-2">- Shan Silvestrece, Founder</p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;