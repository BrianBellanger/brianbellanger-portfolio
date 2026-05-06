import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ title }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
      <div className="mt-2 h-1 w-12 bg-blue-600 rounded" />
    </div>
  )
}

function ProjectCard({ project }) {
  const { title, description, tech, github, url, placeholder } = project

  return (
    <div
      className={`flex flex-col bg-white rounded-xl border p-6 shadow-sm ${
        placeholder
          ? 'border-dashed border-slate-300'
          : 'border-slate-200 hover:shadow-md transition-shadow'
      }`}
    >
      {placeholder && (
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          — Placeholder —
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {!placeholder && (
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-700 transition-colors"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
        </div>
      )}
    </div>
  )
}
