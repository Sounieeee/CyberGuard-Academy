
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log('Form data submitted:', formData);
    // Simulate API call
    setTimeout(() => {
      setFormStatus('submitted');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-secondary p-8 rounded-lg border border-border-color shadow-lg">
        <h1 className="text-4xl font-extrabold text-white text-center mb-2">Get in Touch</h1>
        <p className="text-text-secondary text-center mb-8">Have questions, feedback, or suggestions? We'd love to hear from you!</p>
        
        {formStatus === 'submitted' ? (
          <div className="text-center p-8 bg-green-500/10 border border-green-500 rounded-lg">
            <h3 className="text-2xl font-bold text-white">Thank You!</h3>
            <p className="text-text-primary mt-2">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-border-color rounded-lg py-2 px-3 text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-border-color rounded-lg py-2 px-3 text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-border-color rounded-lg py-2 px-3 text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
