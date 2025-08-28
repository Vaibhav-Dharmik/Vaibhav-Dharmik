// app/layout.tsx - Root layout for Next.js App Router portfolio.
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Vaibhav Dharmik – Portfolio',
  description: 'Portfolio of Vaibhav Dharmik – Building performant web experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-text antialiased font-sans selection:bg-indigo-500/30">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:bg-black focus:text-white focus:px-3 focus:py-2 rounded focus-ring">Skip to content</a>
        
        {/* Enhanced header with glass morphism */}
        <header className="sticky top-0 z-50 glass border-b border-white/10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
            <div className="text-xl font-bold tracking-wide animate-fade-in-up">
              <span className="gradient-text">
                Vaibhav Dharmik
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              <li><a className="hover:text-indigo-400 transition-colors duration-300 focus-ring rounded-md px-3 py-2" href="#projects">Projects</a></li>
              <li><a className="hover:text-indigo-400 transition-colors duration-300 focus-ring rounded-md px-3 py-2" href="#skills">Skills</a></li>
              <li><a className="hover:text-indigo-400 transition-colors duration-300 focus-ring rounded-md px-3 py-2" href="#contact">Contact</a></li>
              <li>
                <a 
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-4 py-2 text-sm font-medium hover:bg-surface hover:border-indigo-500/50 transition-all duration-300 focus-ring" 
                  href="https://github.com/Vaibhav-Dharmik" 
                  target="_blank" 
                  rel="noopener"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-surface/50 transition-colors focus-ring" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        {children}
        
        {/* Enhanced footer */}
        <footer className="relative mt-32 border-t border-border/30 bg-surface/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-pink-500/5"></div>
          <div className="relative mx-auto max-w-7xl px-6 py-12 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted">
              <span>&copy; {new Date().getFullYear()} Vaibhav Dharmik.</span>
              <span className="opacity-70">Crafted with passion.</span>
            </div>
            <div className="mt-4 flex justify-center gap-6">
              <a href="mailto:your.email@example.com" className="text-muted hover:text-indigo-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a href="https://github.com/Vaibhav-Dharmik" className="text-muted hover:text-indigo-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
