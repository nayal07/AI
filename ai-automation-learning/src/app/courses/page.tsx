"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, 
  Clock, 
  Star, 
  Users, 
  Play,
  BookOpen
} from 'lucide-react';
import { formatDuration } from '@/lib/utils';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'python' | 'rpa' | 'ai-integration' | 'web-scraping' | 'data-automation';
  rating: number;
  studentsCount: number;
  price: number;
  isFree: boolean;
  thumbnail: string;
  tags: string[];
  progress?: number; // for logged-in users
}

// Mock course data
const courses: Course[] = [
    {
      id: '1',
      title: 'Python Automation Fundamentals',
      description: 'Learn the basics of automation using Python. Perfect for beginners with no prior programming experience.',
      instructor: 'Sarah Chen',
      duration: 480, // 8 hours
      difficulty: 'beginner',
      category: 'python',
      rating: 4.8,
      studentsCount: 3420,
      price: 99,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['Python', 'Automation', 'Beginner-Friendly'],
      progress: 65
    },
    {
      id: '2',
      title: 'AI-Powered Web Scraping',
      description: 'Master intelligent web scraping techniques using AI to extract data from dynamic websites.',
      instructor: 'Marcus Rodriguez',
      duration: 360, // 6 hours
      difficulty: 'intermediate',
      category: 'web-scraping',
      rating: 4.9,
      studentsCount: 2180,
      price: 149,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['Web Scraping', 'AI', 'Data Extraction']
    },
    {
      id: '3',
      title: 'RPA with UiPath and AI',
      description: 'Combine robotic process automation with artificial intelligence for enterprise-level automation solutions.',
      instructor: 'Dr. Emily Watson',
      duration: 720, // 12 hours
      difficulty: 'advanced',
      category: 'rpa',
      rating: 4.7,
      studentsCount: 1560,
      price: 249,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['RPA', 'UiPath', 'Enterprise', 'AI Integration']
    },
    {
      id: '4',
      title: 'Excel Automation with AI',
      description: 'Automate Excel tasks using AI-powered tools and Python. Transform your spreadsheet workflows.',
      instructor: 'James Thompson',
      duration: 240, // 4 hours
      difficulty: 'beginner',
      category: 'data-automation',
      rating: 4.6,
      studentsCount: 4210,
      price: 0,
      isFree: true,
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['Excel', 'Python', 'Data Processing', 'Free']
    },
    {
      id: '5',
      title: 'Advanced AI Workflows',
      description: 'Build complex automation workflows using LangChain, OpenAI API, and modern AI frameworks.',
      instructor: 'Lisa Park',
      duration: 600, // 10 hours
      difficulty: 'advanced',
      category: 'ai-integration',
      rating: 4.9,
      studentsCount: 890,
      price: 299,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['LangChain', 'OpenAI', 'Workflows', 'Advanced']
    },
    {
      id: '6',
      title: 'Chatbot Development with AI',
      description: 'Create intelligent chatbots that can handle customer service, lead generation, and more.',
      instructor: 'Alex Kumar',
      duration: 420, // 7 hours
      difficulty: 'intermediate',
      category: 'ai-integration',
      rating: 4.8,
      studentsCount: 2340,
      price: 179,
      isFree: false,
      thumbnail: 'https://images.unsplash.com/photo-1676277791608-ac54c4ece78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['Chatbots', 'AI', 'Customer Service']
    }
  ];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'python', label: 'Python Automation' },
    { value: 'rpa', label: 'RPA' },
    { value: 'ai-integration', label: 'AI Integrations' },
    { value: 'web-scraping', label: 'Web Scraping' },
    { value: 'data-automation', label: 'Data Automation' }
  ];

  const filteredCourses = useMemo(() => {
    const filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      
      return matchesSearch && matchesDifficulty && matchesCategory;
    });

    // Sort courses
    const sorted = [...filtered];
    switch (sortBy) {
      case 'popular':
        sorted.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'duration':
        sorted.sort((a, b) => a.duration - b.duration);
        break;
      case 'price':
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    return sorted;
  }, [searchTerm, selectedDifficulty, selectedCategory, sortBy]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'intermediate':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'advanced':
        return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default:
        return 'text-neutral-600 bg-neutral-100 dark:bg-neutral-800';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Explore Our{' '}
            <span className="text-gradient">AI Automation Courses</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            From beginner-friendly tutorials to advanced enterprise solutions. 
            Find the perfect course to accelerate your automation journey.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Difficulty Filter */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Shortest First</option>
                <option value="price">Price: Low to High</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card overflow-hidden h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.isFree && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FREE
                    </div>
                  )}
                  {course.progress && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1">
                        <div 
                          className="bg-accent-400 h-1 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Difficulty Badge */}
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                    by {course.instructor}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{formatDuration(course.duration)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.studentsCount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      {course.isFree ? (
                        <span className="text-2xl font-bold text-green-600">Free</span>
                      ) : (
                        <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                          ${course.price}
                        </span>
                      )}
                    </div>
                    <button className="btn-primary text-sm">
                      {course.progress ? 'Continue' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              No courses found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Try adjusting your search filters to find more courses.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDifficulty('all');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;