"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import { withBasePath } from "@/lib/path";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 pt-10 md:pt-10">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* 左側圖片 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[280px] md:w-[420px] aspect-[3/4]">
            <Image
              src={withBasePath("/kay-profile-3.jpg")}
              alt="Kay"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* 右側內容 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl leading-tight text-slate-900">
            {t.home.title}
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            {t.home.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {t.home.tech.map((tag) => (
              <span key={tag} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA 按鈕 */}
          <div className="flex gap-6 items-center">
            <Link
              href="/resume"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2"
            >
              {t.nav.resume}
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/projects"
              className="text-white underline underline-offset-4 hover:text-cyan-400 transition"
            >
              {t.nav.projects}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}