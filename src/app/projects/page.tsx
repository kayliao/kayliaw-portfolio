"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/app/data/projects";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const projectData = projects[lang] ?? projects.en;

  return (
    <div className="min-h-screen bg-white text-slate-800 px-4 pt-14 pb-24 md:px-10 md:pb-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        <h1 className="scroll-mt-28 text-4xl font-bold tracking-tight">{t.nav.projects}</h1>

        <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}