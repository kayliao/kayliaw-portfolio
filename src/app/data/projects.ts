import { Language } from "@/lib/i18n";

export type ProjectData = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
};

export const projects: Record<Language, ProjectData[]> = {
  en: [
    {
      title: "GitHub Issue Page Mocking",
      description:
        "A GitHub issue management simulation with OAuth login, markdown editor, CRUD operations, and Firebase deployment.",
      tech: [
        "React",
        "TypeScript",
        "RTK Query",
        "Firebase",
        "Supabase",
        "Tailwind"
      ],
      image: "/projects/github-mock.jpg",
      link: "https://kay-github-mock-issues.web.app/"
    },
    {
      title: "Stylish React App",
      description:
        "RWD e-commerce application with payment integration (TapPay) and Facebook OAuth.",
      tech: ["React", "Styled-Components", "Firebase", "RESTful API"],
      image: "/projects/stylish-react-preview.jpg",
      link: "https://stylish-kay.web.app/"
    },
    {
      title: "NLP Sentiment Prediction Research",
      description:
        "Cross-domain sentiment generalization using transformer-based deep learning models.",
      tech: ["Python", "Deep Learning", "Transformer", "Streamlit"],
      image: "/projects/nlp-compare.png",
      link: "https://github.com/kayliao/nlp-project-sentiment-prediction"
    }
  ],

  zh: [
    {
      title: "GitHub Issue 頁面模擬專案",
      description:
        "模擬 GitHub Issue 管理系統，包含 OAuth 登入、Markdown 編輯器、CRUD 操作以及 Firebase 部署。",
      tech: [
        "React",
        "TypeScript",
        "RTK Query",
        "Firebase",
        "Supabase",
        "Tailwind"
      ],
      image: "/projects/github-mock.jpg",
      link: "https://kay-github-mock-issues.web.app/"
    },
    {
      title: "Stylish React 電商網站",
      description:
        "具備 RWD 的電商網站，整合 TapPay 付款系統與 Facebook OAuth 登入。",
      tech: ["React", "Styled-Components", "Firebase", "RESTful API"],
      image: "/projects/stylish-react-preview.jpg",
      link: "https://stylish-kay.web.app/"
    },
    {
      title: "NLP 情感分析預測大模型比較",
      description:
        "使用 Transformer 架構的深度學習模型，研究跨領域情感分析的泛化能力。",
      tech: ["Python", "Deep Learning", "Transformer", "Streamlit"],
      image: "/projects/nlp-compare.png",
      link: "https://github.com/kayliao/nlp-project-sentiment-prediction"
    }
  ],
  jp: [
  {
    title: "GitHub Issue ページモック",
    description:
      "OAuthログイン、Markdownエディタ、CRUD操作、Firebaseデプロイを備えた GitHub Issue 管理のシミュレーション。",
    tech: [
      "React",
      "TypeScript",
      "RTK Query",
      "Firebase",
      "Supabase",
      "Tailwind"
    ],
    image: "/projects/github-mock.jpg",
    link: "https://kay-github-mock-issues.web.app/"
  },
  {
    title: "Stylish React ECサイト",
    description:
      "RWD対応のECサイトで、TapPay決済システムとFacebook OAuthログインを統合。",
    tech: ["React", "Styled-Components", "Firebase", "RESTful API"],
    image: "/projects/stylish-react-preview.jpg",
    link: "https://stylish-kay.web.app/"
  },
  {
    title: "NLP 感情分析予測モデル研究",
    description:
      "Transformerベースの深層学習モデルを使用して、クロスドメインの感情分析汎化能力を研究。",
    tech: ["Python", "Deep Learning", "Transformer", "Streamlit"],
    image: "/projects/nlp-compare.png",
    link: "https://github.com/kayliao/nlp-project-sentiment-prediction"
  }
]
};