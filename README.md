# PercentMaster - Modern Percentage Calculator Suite

A complete, modern, and accessible percentage calculator web platform built with **React**, **Vite**, and **Node.js / Express**.

Inspired by the comprehensive functional scope of percentage tools, redesigned from scratch with modern ergonomics, instant client-side calculation speed, step-by-step formula breakdown, and a clean user experience.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Install All Dependencies
To install dependencies for root, client, and server:
```bash
npm run install:all
```
*(Or individually in `client` and `server` folders using `npm install`)*

### 2. Start the Development Environment

- **Start React Frontend (Vite on http://localhost:3000):**
  ```bash
  npm run dev:client
  ```

- **Start Express Backend (Node on http://localhost:5000):**
  ```bash
  npm run dev:server
  ```

- **Start Both Concurrently:**
  ```bash
  npm run dev:all
  ```

### 3. Build for Production
```bash
npm run build
```

---

## 🧮 Implemented Calculators & Tools

1. **⚡ Universal Quick Solver** (Homepage)
   - Live reactive solver answering the 3 most common percentage questions as you type.
2. **Percentage of a Number** (`/percentage-of-number`)
   - "What is X% of Y?" with step-by-step arithmetic.
3. **Percentage Increase / Decrease** (`/percentage-increase-decrease`)
   - Calculate growth rate, price increases, and percentage reductions.
4. **Percentage Difference** (`/percentage-difference`)
   - Unbiased comparison between two values relative to their average.
5. **Reverse Percentage** (`/reverse-percentage`)
   - "X is Y%, find the original 100% total value".
6. **What Percentage is X of Y?** (`/what-percentage-is-x-of-y`)
   - Calculate test score percentages, ratios, and goal completion rates.
7. **Discount & Sales Tax Calculator** (`/discount-calculator`)
   - Calculate sale prices, cash savings, and optional state/local sales taxes.
8. **Tip & Bill Split Calculator** (`/tip-calculator`)
   - Split restaurant bills evenly per person with quick percentage presets (10%, 15%, 18%, 20%, 25%).
9. **Margin & Markup Calculator** (`/margin-markup-calculator`)
   - Compare gross profit margin percentages with cost markup rates.
10. **Percentage Formulas & Cheat Sheet** (`/percentage-formulas`)
    - Printable reference guide with all standard percentage formulas and mental math shortcuts.
11. **Calculation History Drawer**
    - Automatically saves recent calculations in `localStorage` with copy and CSV export capabilities.
12. **Dark / Light Mode System**
    - Seamless theme toggle with local storage persistence and system preference sync.

---

## 📂 Project Architecture

```
german-tool/
├── client/                     # Frontend React application (Vite)
│   ├── public/
│   │   ├── favicon.svg         # Percentage SVG brand icon
│   │   ├── robots.txt          # Search engine crawler instructions
│   │   └── sitemap.xml         # SEO sitemap
│   ├── src/
│   │   ├── components/
│   │   │   ├── calculator/     # CalculatorCard, HistoryDrawer
│   │   │   ├── common/         # NumberInput, ResultDisplay, FormulaExplainer, ActionToolbar
│   │   │   ├── layout/         # Navbar, Footer, Breadcrumbs
│   │   │   └── seo/            # SEOHead (Dynamic meta tags & JSON-LD schema)
│   │   ├── hooks/              # useTheme, useHistory
│   │   ├── pages/              # All page views
│   │   ├── styles/             # CSS design system (variables, global, typography)
│   │   ├── utils/              # Pure calculations & formatters
│   │   │   ├── calculations/   # Pure math functions (percentageCalculations.js)
│   │   │   └── formatters.js   # Safe rounding and localization
│   │   ├── App.jsx             # Route definitions & state wiring
│   │   └── main.jsx            # React root
│   └── package.json
│
├── server/                     # Backend Express API
│   ├── src/
│   │   ├── routes/
│   │   │   ├── shareRoutes.js  # Shareable calculation permalink generator
│   │   │   ├── exportRoutes.js # CSV export generator
│   │   │   └── feedbackRoutes.js # User feedback & inquiry submission
│   │   └── server.js           # Express entry point
│   └── package.json
│
└── package.json                # Root package for workspace orchestration
```

---

## 🛠️ How to Add a New Calculator (3 Easy Steps for Beginners)

1. **Define the pure math function:**
   Add your calculation in `client/src/utils/calculations/percentageCalculations.js`. Ensure it returns `{ isValid, result, formattedResult, formula, steps, explanation }`.
2. **Create the page component:**
   Create `client/src/pages/YourNewCalculatorPage.jsx` using `CalculatorCard`, `NumberInput`, `ResultDisplay`, and `FormulaExplainer`.
3. **Register the route:**
   Add `<Route path="/your-calculator" element={<YourNewCalculatorPage />} />` in `client/src/App.jsx` and add a link in `Navbar.jsx` / `HomePage.jsx`.

---

## 🔒 Privacy First
All calculations run 100% on the client side inside the user's browser. No private calculation data is stored on remote servers.
