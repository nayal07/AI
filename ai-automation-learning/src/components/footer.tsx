import React from 'react';
import Link from 'next/link';
import { BookOpen, Mail, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  const resources = [
    { name: 'Getting Started', href: '/getting-started' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community', href: '/community' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-ai-gradient p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-gradient">
                AI Automation Hub
              </span>
            </Link>
            <p className="text-neutral-400 mb-4 max-w-sm">
              Master AI-powered automation with our comprehensive courses, tutorials, 
              and hands-on projects. From beginner to advanced levels.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-r-lg transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4 group-hover:text-accent-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} AI Automation Hub. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-2 sm:mt-0">
            Built with ❤️ for the automation community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;