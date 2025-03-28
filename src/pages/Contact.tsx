import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import resumeData from '../data/resumeData';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <Section title="Contact Me">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-space-blue rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-space-accent">Get In Touch</h3>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the channels below!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-space-purple flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-lg font-medium text-neon">Email</p>
                  <a
                    href={`mailto:${resumeData.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {resumeData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-space-purple flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-lg font-medium text-neon">Phone</p>
                  <a
                    href={`tel:${resumeData.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {resumeData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-space-purple pt-6">
              <h3 className="text-xl font-bold mb-4 text-space-accent">Connect With Me</h3>
              <div className="flex space-x-6 mt-4">
                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="h-14 w-14 rounded-full bg-space-purple flex items-center justify-center group-hover:bg-neon transition-colors duration-300">
                    <svg className="w-7 h-7 text-white group-hover:text-space-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </div>
                  <span className="block text-center mt-2 text-gray-300 group-hover:text-neon transition-colors duration-300">LinkedIn</span>
                </a>

                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="h-14 w-14 rounded-full bg-space-purple flex items-center justify-center group-hover:bg-neon transition-colors duration-300">
                    <svg className="w-7 h-7 text-white group-hover:text-space-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="block text-center mt-2 text-gray-300 group-hover:text-neon transition-colors duration-300">GitHub</span>
                </a>

                <a
                  href={resumeData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="h-14 w-14 rounded-full bg-space-purple flex items-center justify-center group-hover:bg-neon transition-colors duration-300">
                    <svg className="w-7 h-7 text-white group-hover:text-space-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <span className="block text-center mt-2 text-gray-300 group-hover:text-neon transition-colors duration-300">Instagram</span>
                </a>

                {/* You can add more social media links here */}
              </div>
            </div>

            <div className="mt-10 bg-space-purple/30 p-6 rounded-lg border border-space-purple text-center">
              <p className="text-white text-lg">
                Looking forward to connecting with you!
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;