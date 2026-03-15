"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as "en" | "zh" | "jp")}
      className="rounded border border-gray-300 bg-white px-2 py-1 text-sm text-slate-700 outline-none transition hover:border-sky-500"
      aria-label="選擇語言"
    >
      <option value="en">EN</option>
      <option value="zh">中文</option>
      <option value="jp">日本語</option>
    </select>
  );
}