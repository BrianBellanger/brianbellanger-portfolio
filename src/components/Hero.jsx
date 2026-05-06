import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react'
import { personal } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 pt-16"
    >
      <div className="max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/BBheadshot1.jpg"
            alt="Brian Bellanger"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover object-top ring-4 ring-slate-700 shadow-lg"
          />
        </div>
        <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
          Full Stack Developer
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {personal.name}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {personal.summary}
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors hidden sm:block"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
