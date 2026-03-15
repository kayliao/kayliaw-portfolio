"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";


type ResumeFilesMap = Record<string, { label: string; href: string }[]>;

const resumeFilesBase: ResumeFilesMap = {
  en: [{ label: "Resume (EN)", href: "/resume/en-resume.pdf" }],
  zh: [{ label: "Resume (ZH)", href: "/resume/zh-resume.pdf" }],
  jp: [
    { label: "履歴書", href: "/resume/jp-resume-1.pdf" },
    { label: "職務経歴書", href: "/resume/jp-resume-2.pdf" },
  ],
};

export default function DownloadPDFButton() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const currentFiles = (resumeFilesBase[lang] ?? resumeFilesBase.en).map((file) => ({
    ...file,
    href: file.href,
  }));

  const [selectedFile, setSelectedFile] = useState(currentFiles[0]?.href ?? "");

  useEffect(() => {
    setSelectedFile(currentFiles[0]?.href ?? "");
  }, [lang, currentFiles]);

  return (
    <div className="flex flex-col gap-2">
      {currentFiles.length > 1 && (
        <select
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700"
        >
          {currentFiles.map((file) => (
            <option key={file.href} value={file.href}>
              {file.label}
            </option>
          ))}
        </select>
      )}

      {currentFiles.length === 1 ? (
        <Link
          href={currentFiles[0].href}
          className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.resume.download}
        </Link>
      ) : (
        <a
          href={selectedFile}
          className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.resume.download}
        </a>
      )}

      {currentFiles.length > 1 && (
        <p className="text-xs text-slate-500">
          {t.resume.download} ({currentFiles.length} files)
        </p>
      )}
    </div>
  );
}