"use client"
import React from 'react';
import { Shield, Upload, Users, ThumbsUp, FileText, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const features = 
[
  {
    icon: Shield,
    title: 'Advanced Fact Checking',
    description: 'Powered by Gemini-2.0 for accurate and reliable fact verification'
  },
  // {
  //   icon: Upload,
  //   title: 'Multiple Formats',
  //   description: 'Support for text, PDF documents, and images'
  // },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Engage with other users and validate fact checks'
  },
  {
    icon: ThumbsUp,
    title: 'Voting System',
    description: 'Upvote and downvote fact checks for better reliability'
  },
  {
    icon: FileText,
    title: 'Detailed Analysis',
    description: 'Get comprehensive verification details and accuracy scores'
  },
  // {
  //   icon: Brain,
  //   title: 'AI-Powered',
  //   description: 'State-of-the-art AI model for precise content analysis'
  // }
];

function Features() {
  return (
    <div className="min-h-screen bg-black text-white mt-5 lg:mt-5">
      
      <div className="relative container mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 lg:mb-6 bg-gradient-to-r from-white via-blue-500 to-purple-900 bg-clip-text text-transparent"
        >
          Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.001 }}
                whileHover={{ scale: 1.25, rotate: 2.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <Icon className="h-7 w-7 text-purple-800" />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
