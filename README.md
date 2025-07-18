## Young Adult Medicine Website

A modern, mobile-first Astro site for Young Adult Medicine, styled with Tailwind CSS and deployed on Vercel.

---

## 🛠️ Developer Setup & Local Development

This project is designed with developer happiness in mind. Here's how to get it up and running locally with minimal friction — whether you're fixing a bug, exploring the stack, or contributing a new feature.

---

### ✅ Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/) — v18 or later (LTS preferred)
- [npm](https://www.npmjs.com/) — comes with Node.js
- [Git](https://git-scm.com/)
- (Recommended) [VS Code](https://code.visualstudio.com/) with:
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

### 🚀 Cloning and Running the Project Locally

````bash
# 1. Clone the repo
git clone https://github.com/YOUR-ORG/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Then update the values in `.env.local` if needed

# 4. Start the development server
npm run dev

### 🧪 Testing Setup (Developer Notes)

#### ✅ Unit & Component Testing
- **Framework**: [`vitest`](https://vitest.dev/)
- **Renderer**: [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/)
- **Extensions**: `.test.tsx`, `.test.ts`
- **Targets**:
  - Preact components
  - Utility functions

#### ✅ API Integration Testing
- **Tool**: [`vitest`](https://vitest.dev/) (also)
- **Strategy**:
  - Mock API routes and environment variables
  - Test POST requests (e.g. `/api/contact`)

#### ✅ E2E Testing (Optional)
- **Tool**: [`Playwright`](https://playwright.dev/) or [`Cypress`](https://cypress.io)
- Not required yet, but planned for high-traffic pages

---

### 🛠 Local Development
Run the dev server:
```bash
npm run dev
````

Run all tests:

```bash
npm run test
```

---

Happy testing! 🧪✨
