"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Wrench, 
  Download, 
  Users, 
  BookOpen,
  Target,
  Zap,
  Award
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Step-by-Step Video Tutorials",
      description: "Follow along with high-quality video content that breaks down complex automation concepts into digestible lessons.",
      color: "text-accent-500",
      bgColor: "bg-accent-50 dark:bg-accent-900/20"
    },
    {
      icon: Wrench,
      title: "Hands-on Projects with AI Tools",
      description: "Build real-world automation projects using cutting-edge AI tools and frameworks like OpenAI, LangChain, and more.",
      color: "text-primary-500",
      bgColor: "bg-primary-50 dark:bg-primary-900/20"
    },
    {
      icon: Download,
      title: "Downloadable Cheat Sheets",
      description: "Get quick reference guides, code snippets, and templates to accelerate your automation development process.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of automation enthusiasts, share your projects, and get help when you need it.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Target,
      title: "Real-World Applications",
      description: "Learn automation techniques that solve actual business problems and increase productivity in various industries.",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: Zap,
      title: "Fast-Track Learning Path",
      description: "Structured curriculum designed to take you from beginner to advanced automation developer in the shortest time possible.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access to extensive documentation, code repositories, and additional reading materials for deeper understanding.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn recognized certificates upon completion of courses to showcase your automation skills to employers.",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Master Automation</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, resources, and support 
            you need to become an AI automation expert.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="card p-6 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Icon */}
                <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className={`h-1 ${feature.color.replace('text-', 'bg-')} rounded-full w-12`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Ready to transform your workflow with AI automation?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              Explore All Features
            </button>
            <button className="btn-outline">
              View Course Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;