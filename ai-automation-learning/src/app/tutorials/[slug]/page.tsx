"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Code, 
  CheckCircle2,
  Circle,
  Clock,
  User,
  Star,
  PlayCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  videoUrl: string;
  rating: number;
  enrolledCount: number;
  chapters: Chapter[];
  resources: Resource[];
  quiz?: Quiz;
  demo?: Demo;
}

interface Chapter {
  id: string;
  title: string;
  content: string;
  videoTimestamp?: number;
  completed?: boolean;
}

interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'code' | 'template';
  url: string;
  size?: string;
}

interface Quiz {
  questions: QuizQuestion[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Demo {
  title: string;
  description: string;
  codeSnippet: string;
  liveUrl?: string;
}

export default function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { } = useAuth();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slug, setSlug] = useState<string>('');

  // Resolve params
  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  // Mock tutorial data - in real app, fetch from database
  useEffect(() => {
    if (!slug) return;
    
    const mockTutorial: Tutorial = {
      id: slug,
      title: "Automate Excel with AI: Complete Beginner's Guide",
      description: "Learn how to automate Excel tasks using AI-powered tools and Python. Transform your spreadsheet workflows with practical examples.",
      instructor: "Sarah Chen",
      duration: 480, // 8 hours
      difficulty: 'beginner',
      category: 'Data Automation',
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Demo URL
      rating: 4.8,
      enrolledCount: 3420,
      chapters: [
        {
          id: '1',
          title: 'Introduction to Excel Automation',
          content: `
# Introduction to Excel Automation

Welcome to the world of Excel automation! In this chapter, we'll cover the fundamentals of automating Excel tasks using AI and Python.

## What You'll Learn

- Understanding Excel automation concepts
- Setting up your development environment
- Introduction to Python libraries for Excel
- AI-powered data processing techniques

## Why Automate Excel?

Excel automation saves time, reduces errors, and enables you to process large datasets efficiently. With AI integration, you can:

- Automatically categorize data
- Generate insights from spreadsheets
- Create dynamic reports
- Perform complex calculations

Let's start by setting up our development environment...
          `,
          videoTimestamp: 0,
          completed: false
        },
        {
          id: '2',
          title: 'Setting Up Python Environment',
          content: `
# Setting Up Python Environment

In this chapter, we'll prepare your development environment for Excel automation.

## Required Tools

1. **Python 3.8+**
2. **pandas** - For data manipulation
3. **openpyxl** - For Excel file handling
4. **xlsxwriter** - For creating Excel files
5. **openai** - For AI integration

## Installation Steps

\`\`\`bash
# Install Python packages
pip install pandas openpyxl xlsxwriter openai

# Verify installation
python -c "import pandas; print('Setup complete!')"
\`\`\`

## Project Structure

Create the following folder structure:
\`\`\`
excel-automation/
├── data/
│   ├── input/
│   └── output/
├── scripts/
└── templates/
\`\`\`
          `,
          videoTimestamp: 120,
          completed: false
        },
        {
          id: '3',
          title: 'Reading and Writing Excel Files',
          content: `
# Reading and Writing Excel Files

Learn how to programmatically read from and write to Excel files using Python.

## Reading Excel Files

\`\`\`python
import pandas as pd

# Read Excel file
df = pd.read_excel('data/input/sample.xlsx')

# Read specific sheet
df = pd.read_excel('data/input/sample.xlsx', sheet_name='Sheet1')

# Read with custom headers
df = pd.read_excel('data/input/sample.xlsx', header=1)
\`\`\`

## Writing Excel Files

\`\`\`python
# Write DataFrame to Excel
df.to_excel('data/output/result.xlsx', index=False)

# Write multiple sheets
with pd.ExcelWriter('data/output/multi_sheet.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Data', index=False)
    df2.to_excel(writer, sheet_name='Summary', index=False)
\`\`\`

## Best Practices

- Always handle file paths properly
- Use context managers when possible
- Validate data before processing
- Include error handling
          `,
          videoTimestamp: 300,
          completed: false
        }
      ],
      resources: [
        {
          id: '1',
          title: 'Excel Automation Cheat Sheet',
          type: 'pdf',
          url: '/resources/excel-automation-cheat-sheet.pdf',
          size: '2.3 MB'
        },
        {
          id: '2',
          title: 'Python Code Templates',
          type: 'code',
          url: '/resources/excel-automation-templates.zip',
          size: '1.1 MB'
        },
        {
          id: '3',
          title: 'Sample Excel Files',
          type: 'template',
          url: '/resources/sample-excel-files.zip',
          size: '856 KB'
        }
      ],
      quiz: {
        questions: [
          {
            id: '1',
            question: 'Which Python library is most commonly used for Excel automation?',
            options: ['pandas', 'numpy', 'matplotlib', 'requests'],
            correctAnswer: 0,
            explanation: 'pandas is the most popular library for Excel automation as it provides powerful data manipulation and Excel integration capabilities.'
          },
          {
            id: '2',
            question: 'What is the advantage of using AI in Excel automation?',
            options: [
              'Faster file processing',
              'Automatic data categorization and insights',
              'Better file compression',
              'Improved security'
            ],
            correctAnswer: 1,
            explanation: 'AI enables automatic data categorization, pattern recognition, and intelligent insights that would be difficult to achieve with traditional automation.'
          }
        ]
      },
      demo: {
        title: 'Interactive Excel Automation Demo',
        description: 'Try this live demo to see Excel automation in action. Upload a CSV file and watch as AI automatically categorizes and processes your data.',
        codeSnippet: `
import pandas as pd
import openai

def automate_excel_with_ai(file_path):
    # Read the Excel file
    df = pd.read_excel(file_path)
    
    # AI-powered data categorization
    for column in df.columns:
        if df[column].dtype == 'object':
            # Use AI to categorize text data
            categories = categorize_with_ai(df[column].tolist())
            df[f'{column}_category'] = categories
    
    # Generate summary statistics
    summary = df.describe()
    
    # Save processed data
    with pd.ExcelWriter('output.xlsx') as writer:
        df.to_excel(writer, sheet_name='Processed_Data')
        summary.to_excel(writer, sheet_name='Summary')
    
    return df

# Example usage
result = automate_excel_with_ai('input.xlsx')
print("Automation complete!")
        `,
        liveUrl: '/demo/excel-automation'
      }
    };

    setTutorial(mockTutorial);
  }, [slug]);

  const handleVideoProgress = () => {
    // Video progress tracking would be implemented here
  };

  const handleQuizAnswer = (questionId: string, answer: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    // Here you would typically save the quiz results to the database
  };

  const toggleChapterCompletion = (chapterIndex: number) => {
    if (!tutorial) return;
    
    const updatedTutorial = {
      ...tutorial,
      chapters: tutorial.chapters.map((chapter, index) => 
        index === chapterIndex 
          ? { ...chapter, completed: !chapter.completed }
          : chapter
      )
    };
    setTutorial(updatedTutorial);
  };

  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                     <nav className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
             <Link href="/" className="hover:text-primary-600">Home</Link>
             <ChevronRight className="h-4 w-4" />
             <Link href="/courses" className="hover:text-primary-600">Courses</Link>
             <ChevronRight className="h-4 w-4" />
             <span className="text-neutral-900 dark:text-neutral-100">{tutorial.title}</span>
           </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tutorial Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {tutorial.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{tutorial.instructor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {Math.floor(tutorial.duration / 60)}h {tutorial.duration % 60}m
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {tutorial.rating} ({tutorial.enrolledCount.toLocaleString()} students)
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tutorial.difficulty === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                  tutorial.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                </span>
              </div>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                {tutorial.description}
              </p>
            </motion.div>

            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black rounded-xl overflow-hidden mb-8 aspect-video"
            >
              <ReactPlayer
                url={tutorial.videoUrl}
                width="100%"
                height="100%"
                playing={isPlaying}
                onProgress={handleVideoProgress}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={true}
              />
            </motion.div>

            {/* Chapter Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-neutral-100">
                  {tutorial.chapters[activeChapter]?.title}
                </h2>
                <button
                  onClick={() => toggleChapterCompletion(activeChapter)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    tutorial.chapters[activeChapter]?.completed
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                  }`}
                >
                  {tutorial.chapters[activeChapter]?.completed ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Circle className="h-4 w-4" />
                  )}
                  <span className="text-sm">
                    {tutorial.chapters[activeChapter]?.completed ? 'Completed' : 'Mark Complete'}
                  </span>
                </button>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ 
                  __html: tutorial.chapters[activeChapter]?.content.replace(/\n/g, '<br />') || ''
                }} />
              </div>

              {/* Chapter Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                  disabled={activeChapter === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Chapter {activeChapter + 1} of {tutorial.chapters.length}
                </span>

                <button
                  onClick={() => setActiveChapter(Math.min(tutorial.chapters.length - 1, activeChapter + 1))}
                  disabled={activeChapter === tutorial.chapters.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* Interactive Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Quiz Section */}
              {tutorial.quiz && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    Knowledge Check
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    Test your understanding with this quick quiz.
                  </p>
                  <button
                    onClick={() => setShowQuiz(!showQuiz)}
                    className="btn-primary w-full"
                  >
                    {showQuiz ? 'Hide Quiz' : 'Take Quiz'}
                  </button>
                  
                  {showQuiz && (
                    <div className="mt-6 space-y-6">
                      {tutorial.quiz.questions.map((question, index) => (
                        <div key={question.id} className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                            {index + 1}. {question.question}
                          </h4>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <label
                                key={optionIndex}
                                className="flex items-center space-x-2 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  value={optionIndex}
                                  onChange={() => handleQuizAnswer(question.id, optionIndex)}
                                  className="text-primary-600"
                                />
                                <span className="text-neutral-700 dark:text-neutral-300">{option}</span>
                              </label>
                            ))}
                          </div>
                          
                          {quizSubmitted && (
                            <div className={`mt-3 p-3 rounded-lg ${
                              quizAnswers[question.id] === question.correctAnswer
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                            }`}>
                              <p className="text-sm">
                                {quizAnswers[question.id] === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect.'}
                              </p>
                              <p className="text-sm mt-1">{question.explanation}</p>
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {!quizSubmitted && (
                        <button
                          onClick={submitQuiz}
                          className="btn-secondary w-full"
                          disabled={Object.keys(quizAnswers).length !== tutorial.quiz.questions.length}
                        >
                          Submit Quiz
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Interactive Demo */}
              {tutorial.demo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {tutorial.demo.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {tutorial.demo.description}
                  </p>
                  <button
                    onClick={() => setShowDemo(!showDemo)}
                    className="btn-secondary w-full mb-4"
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    {showDemo ? 'Hide Demo' : 'Try Demo'}
                  </button>

                  {showDemo && (
                    <div className="space-y-4">
                      <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{tutorial.demo.codeSnippet}</code>
                        </pre>
                      </div>
                      {tutorial.demo.liveUrl && (
                        <a
                          href={tutorial.demo.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Code className="h-4 w-4" />
                          <span>Open Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 mb-6 sticky top-8"
            >
              <h3 className="text-lg font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tutorial.chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapter(index)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeChapter === index
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {chapter.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Circle className="h-4 w-4" />
                      )}
                      <span className="text-sm">{chapter.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-lg font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Resources
              </h3>
              <div className="space-y-3">
                {tutorial.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    download
                    className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                        {resource.type === 'pdf' && <BookOpen className="h-4 w-4 text-primary-600" />}
                        {resource.type === 'code' && <Code className="h-4 w-4 text-primary-600" />}
                        {resource.type === 'template' && <Download className="h-4 w-4 text-primary-600" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          {resource.title}
                        </p>
                        {resource.size && (
                          <p className="text-xs text-neutral-500">{resource.size}</p>
                        )}
                      </div>
                    </div>
                    <Download className="h-4 w-4 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}