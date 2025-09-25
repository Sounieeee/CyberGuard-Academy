
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
      <h1 className="text-4xl font-extrabold text-white text-center mb-6">Privacy Policy</h1>
      <p className="text-lg text-text-secondary text-center mb-12">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="space-y-8 text-text-primary leading-relaxed">
        <p>
          CyberGuard Academy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by CyberGuard Academy.
        </p>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us. For example, we collect information when you fill out a contact form. The types of information we may collect include your name, email address, and any other information you choose to provide. We do not collect any personal information from users simply browsing our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your comments, questions, and requests, and to provide customer service. We do not use your information for marketing purposes or share it with third parties for their own marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction. However, no electronic transmission or storage of information is ever completely secure, so we cannot guarantee the absolute security of any information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">4. Cookies</h2>
          <p>
            This website does not use cookies to track user activity. We are committed to ensuring your browsing experience is private and secure.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">5. Changes to This Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the "Last updated" date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-accent mb-3">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through the form on our Contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
