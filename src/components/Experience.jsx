import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800">Experience</h2>
        <div className="mt-2 mb-12 h-1 w-12 bg-blue-600 rounded" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-blue-100">
              <span className="absolute -left-[5px] top-1.5 block w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    {job.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-600">
                    {job.company}
                  </span>
                  <span className="text-sm text-slate-400"> · {job.location}</span>
                </div>
                <span className="text-sm font-medium text-slate-400 whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-1.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
