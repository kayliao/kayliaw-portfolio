"use client";

export type Language = "en" | "zh" | "jp";

export const translations = {
  en: {
    home: {
      title: "Software Engineer · Machine Learning · Automation",
      description: "A recent graduate from Singapore and a full-stack engineer with experience in front-end development and high-traffic backend systems. Currently learning AI models and exploring their application in practical projects, with a focus on building stable and scalable end-to-end solutions.",
      tech: ["C#", "React", "TypeScript", "Python", "Pytorch", "MS SQL", "RabbitMQ", "Docker", "GCP", "AWS"]
    },
    nav: {
      home: "Home",
      projects: "Projects",
      resume: "Resume",
      view: "View",
    },
    resume: {
      title: "Resume",
      experience: "Experience",
      education: "Education",
      download: "Download PDF",
      thesisLink: "Thesis Link",
      publicationLink: "Related Publication",
    },
  },
  zh: {
    home: {
      title: "軟體工程師 · 機器學習 · 自動化",
      description: "剛從新加坡畢業的全端工程師，具備前端與高流量後端系統開發經驗。正在學習 AI 模型，並嘗試將其應用於實務專案中，專注於打造穩定且可擴展的端到端解決方案。",
      tech: ["C#", "React", "TypeScript", "Python", "Pytorch", "MS SQL", "RabbitMQ", "Docker", "GCP", "AWS"]
    },
    nav: {
      home: "首頁",
      projects: "專案",
      resume: "履歷",
      view: "檢視",
    },
    resume: {
      title: "履歷",
      experience: "工作經歷",
      education: "學歷",
      download: "下載 PDF",
      thesisLink: "論文連結",
      publicationLink: "相關出版",
    },
  },
  jp: {
    home: {
      title: "ソフトウェアエンジニア · 機械学習 · 自動化",
      description: "シンガポールを卒業したばかりのフルスタックエンジニアで、フロントエンドと高トラフィックのバックエンドシステム開発の経験があります。現在、AIモデルを学習中で、実務プロジェクトへの応用に取り組んでおり、安定かつスケーラブルなエンドツーエンドソリューションの構築に注力しています。",
      tech: ["C#", "React", "TypeScript", "Python", "Pytorch", "MS SQL", "RabbitMQ", "Docker", "GCP", "AWS"]
    },
    nav: {
      home: "ホーム",
      projects: "プロジェクト",
      resume: "履歴書",
      view: "開く",
    },
    resume: {
      title: "履歴書",
      experience: "経験",
      education: "学歴",
      download: "PDF をダウンロード",
      thesisLink: "論文リンク",
      publicationLink: "関連出版",
    },
  },
};