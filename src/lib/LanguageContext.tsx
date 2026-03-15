"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Language } from "./i18n";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved) setLang(saved);
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}