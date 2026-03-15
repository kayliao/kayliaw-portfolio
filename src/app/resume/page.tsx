"use client";

import { motion } from "framer-motion";
import DownloadPDFButton from "@/components/DownloadPDFButton";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { resumeData } from "@/app/data/resume";

export default function ResumePage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const data = resumeData[lang] ?? resumeData.en!;
  return (
    <div className="min-h-screen bg-white text-slate-800 px-4 pt-10 pb-24 md:px-10 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <h1 className="scroll-mt-28 text-3xl font-bold tracking-tight">{t.resume.title}</h1>
          <DownloadPDFButton />
        </div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-10">
          <motion.section initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">{t.resume.experience}</h2>
            <div className="space-y-6">
              {data.experience.map((exp, idx) => (
                <motion.article key={idx} whileHover={{ scale: 1.01 }} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-[0_18px_38px_rgba(14,165,233,0.1)]">
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-800">{exp.title} — {exp.company}</h3>
                    <span className="text-sm text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-slate-500 mb-2">{exp.location}</p>
                  <ul className="list-disc ml-6 mt-2 text-slate-600 space-y-1">
                    {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tech.map((item) => (
                      <span key={item} className="rounded-full bg-sky-100 px-2.5 py-1 text-xs text-sky-700">{item}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">{t.resume.education}</h2>
            <div className="space-y-3">
              {data.education.map((edu, idx) => (
                <motion.div key={idx} whileHover={{ x: 5 }} className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-[0_8px_20px_rgba(14,165,233,0.12)]">
                  <p className="font-semibold text-slate-800">{edu.degree}</p>
                  <p className="text-slate-500">{edu.school}</p>
                  <p className="text-slate-500">{edu.period}</p>
                  {edu.thesisLink ? (
                    <p className="text-sm mt-1">
                      <a
                        href={edu.thesisLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-cyan-700 hover:text-cyan-900 transition" 
                      >
                        {edu.thesis ? edu.thesis : t.resume.thesisLink}
                      </a>
                    </p>
                  ) : (
                    edu.thesis && <p className="text-sm text-sky-700 mt-2">{edu.thesis}</p>
                  )}
                  {edu.publicationLink && (
                    <p className="text-sm mt-1">
                      <a
                        href={edu.publicationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-cyan-700 hover:text-cyan-900 transition"
                      >
                        {t.resume.publicationLink}
                      </a>
                    </p>
                  )}
                  {edu.tech?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.tech.map((item: string) => (
                        <span key={`${idx}-${item}`} className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}