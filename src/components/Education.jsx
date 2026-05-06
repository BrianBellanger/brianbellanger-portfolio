import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800">Education</h2>
        <div className="mt-2 mb-12 h-1 w-12 bg-blue-600 rounded" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-3">
                {edu.year}
              </span>
              <h3 className="text-base font-semibold text-slate-800 mb-1">
                {edu.school}
              </h3>
              <p className="text-sm text-slate-500">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
