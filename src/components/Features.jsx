import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Exciting Tournaments',
    description: 'Participate in thrilling tournaments with teams from all over.',
  },
  {
    title: 'Live Score Updates',
    description: 'Get real-time updates on scores and match statistics.',
  },
  {
    title: 'Expert Commentary',
    description: 'Enjoy live commentary from cricket experts and legends.',
  },
  {
    title: 'Community Engagement',
    description: 'Join our community of cricket enthusiasts and share your passion.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-5 border rounded-lg bg-white shadow-md"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
