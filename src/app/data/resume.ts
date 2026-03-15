export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  tech?: string[];
  thesis?: string;
  thesisLink?: string;
  publicationLink?: string;
};

import { Language } from "@/lib/i18n";

export type ResumeData = {
  experience: Experience[];
  education: Education[];
};

export const resumeData: Partial<Record<Language, ResumeData>> = {
  en: {    
    experience: [
      {
        title: "Software Engineer",
        company: "91APP",
        period: "2022.11 – 2024.08",
        location: "Taipei, Taiwan",
        bullets: [
          "Responsible for the company's notification center, handling approximately 3-5 million notifications per hour.",
          "Responsible for user behavior data processing services, supporting data transmission with over 1000 requests per second.",
          "Designed and built SDKs and APIs, providing seamless integration solutions for internal teams and external partners.",
          "Participated in the development of modular front-end components using React and TypeScript."
        ],
        tech: ["C#", "NestJS", "React", "TypeScript", "Docker", "Kubernetes", "GCP", "AWS", "MS SQL", "RabbitMQ", "Grafana"]
      },
      {
        title: "Automation Software Engineer",
        company: "PEGATRON",
        period: "2021.09 – 2022.07",
        location: "Taipei, Taiwan",
        bullets: [
          "Using C# to build automatic systems for equipment (including TCP/IP).",
          "Using SQLite to build database.",
          "Using RC+ to write Epson robotic arm running track.",
          "Using halcon to do image recognition and image processing.",
          "Maintaining systems."
        ],
        tech: ["C#", "SQLite", "Halcon", "Robotic arms", "Automation"]
      },
      {
        title: "Research Assistant Intern",
        company: "National Center for High-Performance Computing",
        period: "2018.07 – 2018.08",
        location: "Tainan, Taiwan",
        bullets: [
          "Conducted computational research on the properties of nickel nanoparticles using molecular dynamics simulations with LAMMPS.",
          "Performed data analysis and managed simulation output files.",
          "Utilized Linux environments to operate and manage high-performance computing (HPC) systems."
        ],
        tech: ["LAMMPS", "Linux", "OVITO", "Origin"]
      }
    ],
    education: [
      {
        degree: "MSc in Signal Processing & Machine Learning",
        school: "Nanyang Technological University, Singapore",
        period: "2025.01 - 2026.01",
        tech: ["Python", "Streamlit", "Pytorch"]
      },
      {
        degree: "MSc in Materials Science",
        school: "National Taiwan University",
        period: "2019.09 – 2021.08",
        thesis: "Master Thesis: The Effects of Two-Side Extrusion on Microstructure and Precipitation of A800 Aluminum Alloy",
        thesisLink: "https://www.airitilibrary.com/Article/Detail/U0001-3007202116321800",
        publicationLink: "https://www.sciencedirect.com/science/article/abs/pii/S0925838823031742?via%3Dihub",
        tech: ["TEM", "SEM", "OSM", "EBSD", "Tensile Test"]
      },
      {
        degree: "BSc in Materials Science & Computer Science",
        school: "National Taiwan University of Science and Technology",
        period: "2015.09 – 2019.06",
        tech: ["C++", "Polymer Synthesis"]
      }
    ]
  },
  zh: {
    experience: [
      {
        title: "軟體工程師",
        company: "91APP",
        period: "2022.11 – 2024.08",
        location: "台北，台灣",
        bullets: [
          "負責公司通知中心系統，每小時處理約 300 萬至 500 萬則通知。",
          "負責使用者行為資料處理服務，支援每秒超過 1000 次請求的資料傳輸。",
          "設計並建置 SDK 與 API，為內部團隊與外部合作夥伴提供無縫整合方案。",
          "參與使用 React 與 TypeScript 開發模組化前端元件。"
        ],
        tech: ["C#", "NestJS", "React", "TypeScript", "Docker", "Kubernetes", "GCP", "AWS", "MS SQL", "RabbitMQ", "Grafana"]
      },
      {
        title: "自動化軟體工程師",
        company: "和碩聯合科技",
        period: "2021.09 – 2022.07",
        location: "台北，台灣",
        bullets: [
          "使用 C# 建立設備自動化系統（包含 TCP/IP 通訊）。",
          "使用 SQLite 建立資料庫。",
          "使用 RC+ 編寫 Epson 機械手臂的運行軌跡。",
          "使用 Halcon 進行影像辨識與影像處理。",
          "負責系統維護。"
        ],
        tech:  ["C#", "SQLite", "Halcon", "Robotic arms", "Automation"]
      },
      {
        title: "研究助理實習生",
        company: "國家高速網路與計算中心",
        period: "2018.07 – 2018.08",
        location: "台南，台灣",
        bullets: [
          "使用 LAMMPS 進行分子動力學模擬，研究鎳奈米粒子的特性。",
          "進行模擬資料分析並管理相關輸出檔案。",
          "使用 Linux 環境操作與管理高效能運算（HPC）系統。"
        ],
        tech: ["LAMMPS", "Linux", "OVITO", "Origin"]
      }
    ],
    education: [
      {
        degree: "信號處理與機器學習 碩士",
        school: "南洋理工大學",
        period: "2025.01 - 2026.01",
        tech: ["Python", "Streamlit", "Pytorch"]
      },
      {
        degree: "材料科學 碩士",
        school: "國立台灣大學",
        period: "2019.09 – 2021.08",
        thesis: "碩士論文: 兩面擠製對A800鋁合金之顯微結構及析出物之影響",
        thesisLink: "https://www.airitilibrary.com/Article/Detail/U0001-3007202116321800",
        publicationLink: "https://www.sciencedirect.com/science/article/abs/pii/S0925838823031742?via%3Dihub",
        tech: ["TEM", "SEM", "OSM", "EBSD", "Tensile Test"]
      },
      {
        degree: "材料科學 雙主修資訊工程 學士",
        school: "國立台灣科技大學 ",
        period: "2015.09 – 2019.06",
        tech: ["C++", "高分子合成"]
      }
    ]
  },
  jp: {
  experience: [
    {
      title: "ソフトウェアエンジニア",
      company: "91APP",
      period: "2022.11 – 2024.08",
      location: "台北、台湾",
      bullets: [
        "会社の通知センターシステムを担当し、1時間あたり約300万～500万件の通知を処理。",
        "ユーザー行動データ処理サービスを担当し、毎秒1000件以上のリクエストに対応。",
        "SDKおよびAPIの設計・構築を行い、社内チームおよび外部パートナー向けにシームレスな統合ソリューションを提供。",
        "ReactとTypeScriptを使用したモジュール化フロントエンドコンポーネントの開発に参加。"
      ],
      tech: ["C#", "NestJS", "React", "TypeScript", "Docker", "Kubernetes", "GCP", "AWS", "MS SQL", "RabbitMQ", "Grafana"]
    },
    {
      title: "自動化ソフトウェアエンジニア",
      company: "PEGATRON",
      period: "2021.09 – 2022.07",
      location: "台北、台湾",
      bullets: [
        "C# を使用して設備の自動化システムを構築（TCP/IP通信を含む）。",
        "SQLite を使用してデータベースを構築。",
        "RC+ を使用して Epson ロボットアームの動作軌道を作成。",
        "Halcon を使用して画像認識および画像処理を実施。",
        "システムの保守・管理を担当。"
      ],
      tech: ["C#", "SQLite", "Halcon", "Robotic arms", "Automation"]
    },
    {
      title: "研究助手インターン",
      company: "国立高速ネットワーク・計算センター",
      period: "2018.07 – 2018.08",
      location: "台南、台湾",
      bullets: [
        "LAMMPSを使用した分子動力学シミュレーションにより、ニッケルナノ粒子の特性を研究。",
        "シミュレーションデータの分析および出力ファイルの管理。",
        "Linux環境で高性能計算（HPC）システムの運用・管理を実施。"
      ],
      tech: ["LAMMPS", "Linux", "OVITO", "Origin"]
    }
  ],
  education: [
    {
      degree: "信号処理・機械学習 修士",
      school: "南洋理工大学（シンガポール）",
      period: "2025.01 - 2026.01",
      tech: ["Python", "Streamlit", "Pytorch"]
    },
    {
      degree: "材料科学 修士",
      school: "国立台湾大学",
      period: "2019.09 – 2021.08",
      thesis: "修士論文: 両面押出しがA800アルミニウム合金の微細構造および析出物に与える影響",
      thesisLink: "https://www.airitilibrary.com/Article/Detail/U0001-3007202116321800",
      publicationLink: "https://www.sciencedirect.com/science/article/abs/pii/S0925838823031742?via%3Dihub",
      tech: ["TEM", "SEM", "OSM", "EBSD", "Tensile Test"]
    },
    {
      degree: "材料科学・情報工学 ダブル専攻 学士",
      school: "国立台湾科技大学",
      period: "2015.09 – 2019.06",
      tech: ["C++", "高分子合成"]
    }
  ]
}
};