"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Clock, 
  PlayCircle,
  BarChart3,
  Download,
  User,
  Trophy,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

interface CourseProgress {
  id: string;
  title: string;
  thumbnail: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  lastAccessed: Date;
  nextLesson: string;
  estimatedTime: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface LearningStats {
  totalHours: number;
  coursesCompleted: number;
  currentStreak: number;
  longestStreak: number;
  certificatesEarned: number;
  skillPoints: number;
}

export default function DashboardPage() {
  const { user, userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [coursesProgress, setCoursesProgress] = useState<CourseProgress[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [learningStats, setLearningStats] = useState<LearningStats | null>(null);
  const [weeklyActivity, setWeeklyActivity] = useState<number[]>([]);

  // Mock data - in real app, fetch from database
  useEffect(() => {
    // Mock course progress
    setCoursesProgress([
      {
        id: '1',
        title: 'Python Automation Fundamentals',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        progress: 65,
        totalLessons: 12,
        completedLessons: 8,
        lastAccessed: new Date('2024-01-15'),
        nextLesson: 'Working with APIs',
        estimatedTime: 45
      },
      {
        id: '2',
        title: 'AI-Powered Web Scraping',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        progress: 30,
        totalLessons: 10,
        completedLessons: 3,
        lastAccessed: new Date('2024-01-10'),
        nextLesson: 'Advanced Scraping Techniques',
        estimatedTime: 60
      },
      {
        id: '3',
        title: 'Excel Automation with AI',
        thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        progress: 100,
        totalLessons: 8,
        completedLessons: 8,
        lastAccessed: new Date('2024-01-12'),
        nextLesson: 'Course Completed',
        estimatedTime: 0
      }
    ]);

    // Mock achievements
    setAchievements([
      {
        id: '1',
        title: 'First Steps',
        description: 'Complete your first lesson',
        icon: '🎯',
        unlockedAt: new Date('2024-01-01'),
        rarity: 'common'
      },
      {
        id: '2',
        title: 'Week Warrior',
        description: 'Learn for 7 consecutive days',
        icon: '🔥',
        unlockedAt: new Date('2024-01-08'),
        rarity: 'rare'
      },
      {
        id: '3',
        title: 'Course Master',
        description: 'Complete your first course',
        icon: '🏆',
        unlockedAt: new Date('2024-01-12'),
        rarity: 'epic'
      }
    ]);

    // Mock learning stats
    setLearningStats({
      totalHours: 24.5,
      coursesCompleted: 1,
      currentStreak: 5,
      longestStreak: 12,
      certificatesEarned: 1,
      skillPoints: 1250
    });

    // Mock weekly activity (hours per day for last 7 days)
    setWeeklyActivity([2, 1.5, 3, 2.5, 1, 4, 2]);
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300';
      case 'rare': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
      case 'epic': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400';
      case 'legendary': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Access Denied
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Please log in to access your dashboard.
          </p>
          <a href="/login" className="btn-primary">
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Dashboard Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-neutral-900 dark:text-neutral-100">
                Welcome back, {userProfile?.displayName || user.displayName || 'Student'}!
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                Continue your automation journey
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-accent-400">
                  {learningStats?.skillPoints || 0}
                </div>
                <div className="text-xs text-neutral-500">Skill Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                  {learningStats?.currentStreak || 0}
                </div>
                <div className="text-xs text-neutral-500">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'courses', label: 'My Courses', icon: BookOpen },
            { id: 'achievements', label: 'Achievements', icon: Trophy },
            { id: 'profile', label: 'Profile', icon: User }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Hours</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {learningStats?.totalHours || 0}h
                    </p>
                  </div>
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Courses Completed</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {learningStats?.coursesCompleted || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Current Streak</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {learningStats?.currentStreak || 0} days
                    </p>
                  </div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Certificates</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {learningStats?.certificatesEarned || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Continue Learning Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Continue Learning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesProgress.filter(course => course.progress < 100).map((course) => (
                  <div key={course.id} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                                             <div className="relative w-12 h-12">
                         <img
                           src={course.thumbnail}
                           alt={course.title}
                           className="w-full h-full rounded-lg object-cover"
                         />
                       </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-neutral-500">
                          {course.completedLessons}/{course.totalLessons} lessons
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-600 dark:text-neutral-400">Progress</span>
                        <span className="text-neutral-900 dark:text-neutral-100">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        Next: {course.nextLesson}
                      </div>
                      <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors">
                        <PlayCircle className="h-4 w-4" />
                        <span className="text-sm">Continue</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Weekly Activity Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Weekly Activity
              </h2>
              <div className="flex items-end space-x-2 h-32">
                {weeklyActivity.map((hours, index) => {
                  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                  const maxHours = Math.max(...weeklyActivity);
                  const height = (hours / maxHours) * 100;
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="flex-1 flex items-end">
                        <div
                          className="w-full bg-primary-600 rounded-t-sm transition-all duration-500"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                        {days[index]}
                      </div>
                      <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                        {hours}h
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100">
              My Courses
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {coursesProgress.map((course) => (
                <div key={course.id} className="card p-6">
                  <div className="flex items-start space-x-4">
                                         <div className="relative w-20 h-20">
                       <img
                         src={course.thumbnail}
                         alt={course.title}
                         className="w-full h-full rounded-lg object-cover"
                       />
                     </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        {course.title}
                      </h3>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-neutral-600 dark:text-neutral-400">Progress</span>
                            <span className="text-neutral-900 dark:text-neutral-100">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-neutral-600 dark:text-neutral-400">
                            {course.completedLessons}/{course.totalLessons} lessons completed
                          </span>
                          {course.progress === 100 && (
                            <span className="flex items-center space-x-1 text-green-600">
                              <CheckCircle2 className="h-4 w-4" />
                              <span>Completed</span>
                            </span>
                          )}
                        </div>

                        {course.progress < 100 && (
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            Next: {course.nextLesson}
                            {course.estimatedTime > 0 && (
                              <span className="ml-2">({course.estimatedTime} min)</span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-sm text-neutral-500">
                            Last accessed {course.lastAccessed.toLocaleDateString()}
                          </span>
                          <div className="flex space-x-2">
                            {course.progress === 100 && (
                              <button className="btn-outline text-sm">
                                <Download className="h-4 w-4 mr-1" />
                                Certificate
                              </button>
                            )}
                            <button className="btn-primary text-sm">
                              {course.progress === 100 ? 'Review' : 'Continue'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100">
              Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="card p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(achievement.rarity)}`}>
                      {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {achievement.unlockedAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100">
              Profile Settings
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={userProfile?.displayName || user.displayName || ''}
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email || ''}
                      disabled
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                    />
                  </div>
                  <button className="btn-primary">
                    Update Profile
                  </button>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Learning Preferences
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Daily Learning Goal
                    </label>
                    <select className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="180">3+ hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="text-primary-600" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Email notifications for new courses
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="text-primary-600" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Daily learning reminders
                      </span>
                    </label>
                  </div>
                  <button className="btn-secondary">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}