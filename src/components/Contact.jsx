import { Mail, Github, Linkedin } from 'lucide-react'
import { personal } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="mt-2 mb-6 h-1 w-12 bg-blue-500 rounded mx-auto" />
        <p className="text-slate-400 mb-10">
          Open to new opportunities — feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Mail size={16} />
            {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
