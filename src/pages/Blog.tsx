import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Advancements in Exoplanet Detection Techniques',
    date: 'May 15, 2023',
    excerpt: 'Exploring the latest methods and technologies used in the search for planets beyond our solar system.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Astronomy', 'Exoplanets', 'Research'],
  },
  {
    id: 2,
    title: 'The Future of CubeSats in Space Exploration',
    date: 'April 3, 2023',
    excerpt: 'How small satellite technology is revolutionizing our approach to studying the cosmos.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['CubeSats', 'Space Technology', 'Engineering'],
  },
  {
    id: 3,
    title: 'Sustainable Fuels: Bridging Chemistry and Aerospace',
    date: 'March 12, 2023',
    excerpt: 'Examining the intersection of chemical engineering and aerospace in developing eco-friendly propellants.',
    image: 'https://images.unsplash.com/photo-1559066653-edfd1e4d9118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Chemical Engineering', 'Sustainability', 'Aerospace'],
  },
  {
    id: 4,
    title: 'Machine Learning Applications in Astronomy',
    date: 'February 28, 2023',
    excerpt: 'How AI and machine learning are transforming the way we analyze astronomical data and make discoveries.',
    image: 'https://images.unsplash.com/photo-1542777283-7c0c6f9a8bbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Machine Learning', 'Astronomy', 'Data Science'],
  },
];

const Blog: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <Section title="Blog & Thoughts">
        <p className="text-gray-300 mb-10 max-w-3xl">
          Sharing insights and experiences from my journey through space technology, research, and engineering. 
          These articles reflect my thoughts on current trends, personal projects, and the fascinating 
          intersection of chemical engineering and aerospace.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="bg-space-blue rounded-lg overflow-hidden shadow-lg hover:shadow-neon/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-space-purple text-xs rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-sm text-gray-400 block mb-2">{post.date}</time>
                <h3 className="text-xl font-bold mb-3 text-neon space-font">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <button className="text-space-accent hover:text-neon transition-colors duration-300 font-medium">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Want to discuss a topic or collaborate on an article?
          </p>
          <motion.button 
            className="px-6 py-3 bg-space-accent text-white rounded-md hover:bg-neon hover:text-space-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Suggest a Topic
          </motion.button>
        </div>
      </Section>
    </div>
  );
};

export default Blog;