"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      {/* Background Elements */}
                      <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20"
          >
            <Sparkles className="h-4 w-4 text-accent-300" />
            <span className="text-sm font-medium">New Course: Advanced AI Workflows</span>
            <ArrowRight className="h-4 w-4 text-accent-300" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            Master{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent-300/50"
                viewBox="0 0 300 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 6 Q 150 1 295 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {' '}Automation
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            From Basics to Advanced
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Learn how to automate repetitive tasks using AI with step-by-step tutorials, 
            videos, and real-world examples. Build practical skills that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/courses"
              className="group relative bg-white text-primary-600 hover:bg-accent-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Start Learning for Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>

            <button className="group flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 min-w-[200px]">
              <div className="bg-white/20 rounded-full p-2">
                <Play className="h-5 w-5 ml-0.5" />
              </div>
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/70">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-white/70">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/70">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Fast Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span className="text-sm">Practical Skills</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;