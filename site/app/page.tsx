// app/page.tsx - Home page replicating static content with dynamic project cards.
import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

export default function Page() {
  return (
    <main id="main" className="px-6">
      {/* Enhanced Hero Section */}
      <section className="relative mx-auto max-w-7xl pt-20 pb-32 md:pt-32 md:pb-40">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block gradient-text">
                  Vaibhav
                </span>
                <span className="block text-text">
                  Dharmik
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-secondary">
                Building performant web experiences
              </p>
            </div>
            
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-muted">
              I craft clean, accessible user interfaces and design scalable architecture. 
              Continuously exploring new technologies to deliver fast, resilient products 
              that delight users and grow with business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-accent-gradient px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-ring"
              >
                <span>View Projects</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/50 px-8 py-4 text-base font-semibold text-text backdrop-blur-sm hover:bg-surface hover:border-indigo-500/50 transition-all duration-300 focus-ring"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Enhanced Avatar */}
          <div className="justify-self-center animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gradient rounded-full blur-xl opacity-30 animate-glow"></div>
              <Image 
                src="/avatar.jpg" 
                alt="Vaibhav Dharmik avatar" 
                width={280} 
                height={280} 
                className="relative rounded-full border-2 border-white/20 shadow-2xl object-cover hover-lift"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative mx-auto max-w-7xl py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A showcase of my recent work and technical explorations
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {projects.map((p, index) => (
            <div key={p.title} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="relative mx-auto max-w-7xl py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text">
            Technical Skills
          </h2>
          <p className="text-lg text-muted">
            Technologies I work with to build amazing experiences
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { category: 'Frontend', skills: ['TypeScript', 'React', 'Next.js'] },
            { category: 'Backend', skills: ['Node.js', 'REST APIs'] },
            { category: 'Styling', skills: ['Tailwind', 'CSS3'] },
            { category: 'Tools', skills: ['GitHub Actions', 'Vite'] }
          ].map((group, index) => (
            <div key={group.category} className="p-6 rounded-2xl bg-surface/50 border border-border/50 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="text-lg font-semibold text-secondary mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                    <div className="w-2 h-2 rounded-full bg-accent-gradient"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative mx-auto max-w-7xl py-24">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              Let's Build Something
            </h2>
            <p className="text-xl text-secondary">
              Ready to collaborate on your next project?
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center gap-3 rounded-xl bg-surface border border-border px-8 py-4 text-base font-medium hover:bg-surface-alt hover:border-indigo-500/50 transition-all duration-300 focus-ring hover-lift"
            >
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              your.email@example.com
            </a>
            
            <a 
              href="https://github.com/Vaibhav-Dharmik" 
              target="_blank" 
              rel="noopener" 
              className="inline-flex items-center gap-3 rounded-xl bg-surface border border-border px-8 py-4 text-base font-medium hover:bg-surface-alt hover:border-indigo-500/50 transition-all duration-300 focus-ring hover-lift"
            >
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              @Vaibhav-Dharmik
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
