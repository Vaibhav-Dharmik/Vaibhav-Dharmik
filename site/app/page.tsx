// app/page.tsx - Home page replicating static content with dynamic project cards.
// Updated for CI/CD pipeline testing
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Page() {
  return (
    <main id="main" className="px-6 ">
      {/* Enhanced Hero Section */}
      <section className="relative mx-auto max-w-7xl pt-4 pb-32 md:pt-4 md:pb-40">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "-3s" }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-2">
                2.5+ Years Professional Experience
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block gradient-text">Full Stack</span>
                <span className="block text-text">Java Developer</span>
              </h1>
              <p className="text-lg md:text-xl font-semibold text-secondary">
                Spring Boot • REST APIs • Microservices Architecture
              </p>
            </div>

            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-muted">
              I design and architect production-ready backend systems using Java
              Spring Boot and modern React frontends. Specialized in
              microservices, secure REST APIs, cloud deployment (OpenShift,
              Docker), and enterprise database optimization.
            </p>

            <ul className="space-y-2 max-w-2xl">
              <li className="flex items-start gap-3 text-sm md:text-base text-muted">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 flex-shrink-0 mt-0.5">
                  <span className="text-green-400 font-bold text-xs">✓</span>
                </span>
                <span>
                  Designed 20+ production REST APIs using Java Spring Boot &
                  microservices, handling high-traffic enterprise systems
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base text-muted">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 flex-shrink-0 mt-0.5">
                  <span className="text-green-400 font-bold text-xs">✓</span>
                </span>
                <span>
                  Optimized database queries & APIs reducing latency by 30–40%
                  in enterprise Oracle systems
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base text-muted">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 flex-shrink-0 mt-0.5">
                  <span className="text-green-400 font-bold text-xs">✓</span>
                </span>
                <span>
                  Built CI/CD automation (Jenkins, Maven, Docker) cutting
                  deployment time by 50% and build failures by 35%
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-accent-gradient px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-ring"
              >
                <span>View My Projects</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/50 px-8 py-4 text-base font-semibold text-text backdrop-blur-sm hover:bg-surface hover:border-indigo-500/50 transition-all duration-300 focus-ring"
              >
                <span>Download Resume</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
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
            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold text-text">Vaibhav Dharmik</h2>
              <p className="text-sm text-secondary font-medium mt-1">
                SDE • Full Stack Engineer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative mx-auto max-w-4xl py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              About Me
            </h2>
          </div>

          <div className="space-y-6 text-muted leading-relaxed">
            <p className="text-base md:text-lg">
              I'm a{" "}
              <span className="text-secondary font-semibold">
                Full Stack Engineer with 2.5+ years
              </span>{" "}
              of professional experience at IBM and NeoUtilix, specializing in
              Java Spring Boot microservices and cloud deployment. My core
              strength lies in designing scalable backend architectures,
              developing secure REST APIs, and bridging the gap between backend
              systems and modern React frontends. I've consistently delivered
              production-ready systems that handle complex business logic,
              enterprise-scale databases, and high-traffic requirements.
            </p>

            <p className="text-base md:text-lg">
              My engineering philosophy centers on building systems that{" "}
              <span className="text-secondary font-semibold">
                scale intelligently
              </span>
              . I approach architecture decisions with a performance-first
              mindset—optimizing Oracle queries by 30–40%, implementing
              JWT-based authentication for security, and leveraging
              Docker/Kubernetes for seamless deployment. Beyond coding, I
              understand CI/CD pipelines, containerization strategies, and the
              full stack journey from development to production operations.
            </p>

            <p className="text-base md:text-lg">
              I'm actively seeking opportunities as a{" "}
              <span className="text-secondary font-semibold">
                Java Developer or Backend Engineer
              </span>{" "}
              where I can architect resilient, maintainable systems. I thrive in
              environments where technical depth is valued, debugging complex
              issues is celebrated, and collaboration across teams happens
              daily. Currently exploring advanced microservices patterns and
              cloud-native architectures. Always open to challenging problems
              that require solid engineering fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-3">
            <div className="p-4 rounded-xl bg-surface/50 border border-border/50 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                2.5+
              </div>
              <div className="text-xs md:text-sm text-muted">
                Years Experience
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface/50 border border-border/50 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                20+
              </div>
              <div className="text-xs md:text-sm text-muted">
                REST APIs Built
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface/50 border border-border/50 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                40%
              </div>
              <div className="text-xs md:text-sm text-muted">
                Faster Deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative mx-auto max-w-7xl py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Production Projects
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Enterprise-grade backend systems, microservices architecture, and
            cloud-deployed applications
          </p>
        </div>

        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {projects.map((p, index) => (
            <div
              key={p.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
            Specialized backend expertise with full-stack capabilities
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              category: "Backend",
              skills: [
                "Java",
                "Spring Boot",
                "REST APIs",
                "Microservices",
                "JWT Auth",
              ],
            },
            {
              category: "Databases",
              skills: [
                "Oracle",
                "MySQL",
                "MongoDB",
                "Hibernate ORM",
                "Query Optimization",
              ],
            },
            {
              category: "DevOps",
              skills: ["Docker", "OpenShift", "Jenkins", "Maven", "Git"],
            },
            {
              category: "Frontend",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
          ].map((group, index) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-surface/50 border border-border/50 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-secondary mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
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
              Let's Build Something Great
            </h2>
            <p className="text-xl text-secondary">
              Open to roles: Java Developer • Backend Engineer • Full Stack
              opportunities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:vaibhav05dharmik@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl bg-surface border border-border px-8 py-4 text-base font-medium hover:bg-surface-alt hover:border-indigo-500/50 transition-all duration-300 focus-ring hover-lift"
            >
              <svg
                className="w-5 h-5 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              vaibhav05dharmik@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/vaibhav-dharmik"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-xl bg-surface border border-border px-8 py-4 text-base font-medium hover:bg-surface-alt hover:border-indigo-500/50 transition-all duration-300 focus-ring hover-lift"
            >
              <svg
                className="w-5 h-5 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.05-8.789 0-9.714h3.554v1.375c.429-.662 1.196-1.608 2.905-1.608 2.121 0 3.71 1.328 3.71 4.184v5.763zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.956.77-1.715 1.958-1.715 1.187 0 1.927.759 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.538h3.891v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/Vaibhav-Dharmik"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-xl bg-surface border border-border px-8 py-4 text-base font-medium hover:bg-surface-alt hover:border-indigo-500/50 transition-all duration-300 focus-ring hover-lift"
            >
              <svg
                className="w-5 h-5 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
