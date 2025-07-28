"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Data Scientist at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6fc4404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "The AI automation courses completely transformed how I approach data processing. I went from manually handling spreadsheets to building fully automated pipelines that save me 20+ hours per week.",
      rating: 5,
      course: "Python Automation Mastery"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "As someone with no coding background, I was amazed at how accessible these tutorials are. The step-by-step approach made complex AI concepts easy to understand and implement.",
      rating: 5,
      course: "AI for Beginners"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Research Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "The hands-on projects are incredible. I built a research automation tool that now handles literature reviews automatically. This platform gave me practical skills I use daily.",
      rating: 5,
      course: "Advanced AI Workflows"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Freelance Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "The community aspect is fantastic. Getting feedback on my automation projects and seeing what others are building has accelerated my learning tremendously.",
      rating: 5,
      course: "RPA with AI Integration"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Operations Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "I automated our entire invoice processing workflow after taking just two courses. The ROI was immediate - we're processing 10x more invoices with the same team size.",
      rating: 5,
      course: "Business Process Automation"
    },
    {
      id: 6,
      name: "Alex Kumar",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "The advanced courses pushed my skills to the next level. I'm now the go-to person at my company for AI automation solutions. These courses are worth every penny.",
      rating: 5,
      course: "Machine Learning Automation"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-800">
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
            What Our Students{' '}
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers 
            with our AI automation courses.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-accent-400 mb-2">4.9/5</div>
            <div className="text-neutral-600 dark:text-neutral-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-accent-400 mb-2">12,500+</div>
            <div className="text-neutral-600 dark:text-neutral-400">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-accent-400 mb-2">95%</div>
            <div className="text-neutral-600 dark:text-neutral-400">Course Completion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-accent-400 mb-2">85%</div>
            <div className="text-neutral-600 dark:text-neutral-400">Career Growth</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-6 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary-200 dark:text-neutral-700">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary-600 dark:text-accent-400 mt-1">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Start your AI automation journey today and become the next success story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                View All Testimonials
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;