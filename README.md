<div align="center">

# Dynamic Survey

[![Last Commit](https://img.shields.io/github/last-commit/krifa-med-aziz/customer-satisfaction-survey?style=flat-square)](https://github.com/krifa-med-aziz/customer-satisfaction-survey)
[![Languages](https://img.shields.io/github/languages/count/krifa-med-aziz/customer-satisfaction-survey?style=flat-square)](https://github.com/krifa-med-aziz/customer-satisfaction-survey)
![Top Language](https://img.shields.io/github/languages/top/krifa-med-aziz/customer-satisfaction-survey)

</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white"/>
</div>

---
## Tools & Libraries

* Lucide React
* Material UI
* React-hook-form
* framer-motion
* clsx
---


## Features

- 📝 Dynamic survey questions loaded from `data.json`
- ❓ Multiple question types: Radio, Text, Number, Select, MultiSelect, Rate
- 📊 Progress bar and navigation
- 🎨 Responsive design
- ✅ Form validation with `react-hook-form`
- 🌐 Context API for global state management

## Project Structure

```
├── 📁 public/
│   ├── 🖼️ background.png
│   ├── 🖼️ cars.png
│   ├── 🖼️ illustration.png
│   └── 🖼️ logo.png
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 Question/
│   │   │   ├── 📄 MultiSelectQuestion.tsx
│   │   │   ├── 📄 NumberQuestion.tsx
│   │   │   ├── 📄 RadioQuestion.tsx
│   │   │   ├── 📄 RateQuestion.tsx
│   │   │   ├── 📄 SelectQuestion.tsx
│   │   │   └── 📄 TextQuestion.tsx
│   │   ├── 📄 Background.tsx
│   │   ├── 📄 Container.tsx
│   │   ├── 📄 EndSurvey.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 FormErrorMessage.tsx
│   │   ├── 📄 ProgressBar.tsx
│   │   ├── 📄 Survey.tsx
│   │   ├── 📄 SurveyHero.tsx
│   │   ├── 📄 SurveyIntro.tsx
│   │   └── 📄 SurveyNavigation.tsx
│   ├── 📁 context/
│   │   ├── 📄 SurveyContext.tsx
│   │   └── 📄 SurveyContextProvider.tsx
│   ├── 📁 lib/
│   │   ├── 📄 hooks.ts
│   │   └── 📄 types.ts
│   ├── 📁 util/
│   │   └── 📄 data.json
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── 🌐 index.html
├── 📄 package.json
└── 📄 vite.config.js
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

## License

This project is licensed under the MIT License.

> ✍️ Built with passion by [Krifa Med Aziz](https://github.com/krifa-med-aziz).
