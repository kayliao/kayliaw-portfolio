import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { withBasePath } from "@/lib/path";

type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
}: Props) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <article className="glow-card border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <div className="mb-4 h-40 overflow-hidden rounded-xl border border-slate-100">
          <img
            src={withBasePath(image)}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 mt-3">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sky-500 hover:text-sky-600 transition"
        >
          {t.nav.view} →
        </a>
      )}
    </article>
  );
}