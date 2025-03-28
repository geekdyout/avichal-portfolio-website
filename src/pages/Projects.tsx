import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import resumeData from '../data/resumeData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (id: string) => {
    setSelectedProject(id);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = resumeData.projects.find(
    project => project.id === selectedProject
  );

  return (
    <div className="pt-20 pb-16">
      <Section title="Projects">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project) => (
            <div key={project.id} onClick={() => handleProjectClick(project.id)}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && selectedProjectData && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-space-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-neon space-font">
                      {selectedProjectData.title}
                    </h3>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-white"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-300 my-4">{selectedProjectData.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-space-accent mb-2">Details</h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedProjectData.details.map((detail, index) => (
                        <li key={index} className="mb-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-space-accent mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-space-purple text-sm rounded-full text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedProjectData.link && (
                    <a
                      href={selectedProjectData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-space-accent text-white rounded-md hover:bg-neon hover:text-space-dark transition-colors duration-300"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
};

export default Projects;