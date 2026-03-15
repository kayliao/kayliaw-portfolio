# Kay Liaw Portfolio

This repository is a polished personal website built with Next.js, Tailwind CSS, and framer-motion. It supports multiple languages (English / Chinese / Japanese) and includes:

- Responsive layout (desktop + mobile)
- Fixed top navbar
- Animated Hero, project cards, and resume sections
- Resume page with experience, education, thesis link, publication link
- Project cards with image preview + tech tags + `View` multi-language link
- Language switcher as drop-down

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Location

- `src/app/page.tsx` (Home) uses `src/components/Hero.tsx`
- `src/app/projects/page.tsx` (Projects) uses `src/components/ProjectCard.tsx`
- `src/app/resume/page.tsx` (Resume)
- `src/lib/i18n.ts` (translations)
- `src/app/data/projects.ts` (project list per language)
- `src/app/data/resume.ts` (resume data)

## Add / Update Language Text

1. Update `src/lib/i18n.ts` keys:
   - `home`, `nav`, `resume` for each language key
2. For international projects data:
   - `src/app/data/projects.ts` add version under `jp` or others
3. For resume data:
   - `src/app/data/resume.ts` add version under `jp` or others
4. Language switcher dropdown:
   - `src/components/LanguageSwitcher.tsx` contains supported languages

## Build / Export / Deploy to GitHub Pages

### 1) prepare config

`next.config.ts` add:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export' };
export default nextConfig;
```

### 2) package.json

add:

```json
"homepage": "https://<YOUR_USER>.github.io/<REPO_NAME>",
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "export": "next export",
  "predeploy": "npm run build && npm run export",
  "deploy": "gh-pages -d out"
}
```

install deploy package:

```bash
npm install --save-dev gh-pages
```

### 3) deploy

```bash
npm run deploy
```

### 4) GitHub Actions（可選）

可配置 `.github/workflows/deploy.yml`，或直接用上一步 `gh-pages`。

### 5) GitHub Pages 設定

- Repository > Settings > Pages
- Source: `gh-pages` branch
- Root folder: `/`

成功後：`https://<YOUR_USER>.github.io/<REPO_NAME>`

## Git 操作範本

```bash
git add .
git commit -m "feat: update portfolio content"
git push origin main
```

## GitHub 連結範例

- Repository: `https://github.com/<YOUR_USER>/<REPO_NAME>`
- Pages: `https://<YOUR_USER>.github.io/<REPO_NAME>`

## 重要提示

- `public/resume` 放你想下載的履歷檔
- 圖片放 `public/projects/...` 和 `public/kay-profile-3.jpg`

---

## 優化建議

- 若想加演示圖，直接在 `projects.ts` 塞 `image` 路徑
- 想加暗色主題，可在 `globals.css` 新增 `dark` 模式
- 產生 SEO meta，修改 `src/app/layout.tsx` `metadata`

