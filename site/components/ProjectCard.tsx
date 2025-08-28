// components/ProjectCard.tsx - Presentational component for a single project card.
import React from 'react';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  url: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border/50 bg-surface/40 backdrop-blur-sm p-6 shadow-lg hover-lift transition-all duration-500 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer" />
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Project header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-text group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <div className="w-8 h-8 rounded-lg bg-accent-gradient/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>
        
        {/* Project description */}
        <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span 
              key={tech} 
              className="inline-flex items-center rounded-full bg-surface-alt/60 border border-border/30 px-3 py-1 text-xs font-medium text-secondary transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-500/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project link */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-300 focus-ring rounded-lg px-3 py-2"
            aria-label={`Open project ${project.title} in new tab`}
          >
            <span>View Project</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-muted">Live</span>
          </div>
        </div>
      </div>
    </article>
  );
}
