
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
      <h1 className="text-4xl font-extrabold text-white text-center mb-6">Terms of Use</h1>
      <p className="text-lg text-text-secondary text-center mb-12">
         Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="space-y-8 text-text-primary leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using CyberGuard Academy (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">2. Use of Content</h2>
          <p>
            All content on this Website, including text, graphics, images, and information, is for educational and informational purposes only. The content is not intended to be a substitute for professional cybersecurity advice. You are encouraged to use the information presented here as a foundation for further learning and to consult with qualified professionals for specific security needs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">3. User Conduct</h2>
          <p>
            You agree not to use the Website in any way that is unlawful, or harms CyberGuard Academy, its service providers, its suppliers, or any other user.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">4. Disclaimer of Warranties</h2>
          <p>
            The Website is provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">5. Limitation of Liability</h2>
          <p>
            In no event shall CyberGuard Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if we have been notified orally or in writing of the possibility of such damage.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">6. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will post the most current version of these terms on the Website. Your continued use of the Website after any changes indicates your acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
