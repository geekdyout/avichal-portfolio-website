import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import resumeData from '../data/resumeData';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <Section title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 mb-6 text-lg">{resumeData.bio}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-space-accent">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution} | {edu.period}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-space-accent">Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <p className="text-gray-300">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-space-accent">Achievements</h3>
              <ul className="list-disc list-inside text-gray-300">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-space-blue rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-space-accent">Skills</h3>
              
              {resumeData.skills.map((skillCategory, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{skillCategory.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-space-purple text-sm rounded-full text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-space-accent">Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-neon">Email:</span> {resumeData.email}
                  </p>
                  <p>
                    <span className="text-neon">Phone:</span> {resumeData.phone}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={resumeData.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-neon transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                    <a 
                      href={resumeData.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-neon transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;