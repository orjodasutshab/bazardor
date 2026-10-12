<div align="center">

# 🛒 বাজার দর · BazarDor

### Today's market prices, at a glance.

Rice, lentils, oil, vegetables, fish, meat, dairy and spices. Price changes and market-by-market comparisons, all in one place.

<br />

![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

### 🌐 [**View the Live Demo →**](https://bazardor-tau-inky.vercel.app)

🇧🇩 [বাংলায় পড়ুন →](README.bn.md)

</div>

---

## 📑 Table of Contents

- [About](#-about)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Pages and Routes](#-pages-and-routes)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🌟 About

**BazarDor** is a responsive web application that shows today's prices of everyday essentials in Bengali. Colored badges make it easy to see at a glance whether a price has gone up or down. Signed-in users can open a product's detail page to see the minimum, maximum and average price, and compare prices across different markets.

The app works on mobile, tablet and desktop screens.

---

## ✨ Key Features

| | Feature | Description |
|---|---|---|
| 📅 | **Navbar with Bengali date** | Today's Bengali date under the logo, category links, and a highlighted active category |
| 📢 | **Live price ticker** | A continuously scrolling strip under the navbar showing product name, price and ▲/▼ change |
| 🎯 | **Hero section** | Headline, call-to-action button that smooth-scrolls to `#সব-পণ্য`, and a banner image |
| 📈 | **Prices up / down** | Top 6 risers and top 6 fallers in separate sections |
| 🧺 | **All products** | Responsive product-card grid with prices in Bengali digits and green / red / gray change badges |
| 🗂️ | **Category pages** | Products by category, loading skeletons, and an empty state for unknown categories |
| ↕️ | **Sorting** | "Default / Price: low to high / Price: high to low". Bengali numerals are sorted by numeric value |
| 🔒 | **Protected detail page** | Requires sign-in, and returns the user to the page they were trying to open |
| 🔐 | **Authentication** | Email and password sign-in and sign-up. Google and GitHub login can be enabled through configuration |
| 🔔 | **Toast notifications** | Instant feedback on sign-in, sign-up, sign-out and validation errors |
| 👤 | **Profile and name update** | A My Profile page and a separate page to update your name |
| 🚫 | **Custom 404 page** | Friendly message and a "Back to home" button for unknown routes |

---

## 🧰 Tech Stack

| Area | Technology |
|---|---|
| **Framework** | Next.js (App Router), React |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, HeroUI |
| **Authentication** | Better Auth (email/password, Google, GitHub) |
| **Database** | MongoDB Atlas |
| **Notifications** | react-hot-toast |
| **Icons** | lucide-react |
| **Ticker animation** | react-marquee-text |
| **Font** | Hind Siliguri (Bengali and Latin) |
| **Deployment** | Vercel |

---

## 🧭 Pages and Routes

| Route | Description | Sign-in required? |
|---|---|---|
| `/` | Home: hero, ticker, price rises/falls, all products | No |
| `/category/[slug]` | Products by category, with sorting | No |
| `/product/[slug]` | Product details and market-wise prices | **Yes** |
| `/signin` | Sign in | No |
| `/signup` | Sign up | No |
| `/profile` | My profile | **Yes** |
| `/profile/update` | Update name | **Yes** |
| `/privacy` | Privacy policy | No |
| Any other route | Custom 404 page | No |

---

## 🔌 API Endpoints

Product and category data comes from an external API. Its address is set with the `NEXT_PUBLIC_API_URL` variable, and if the main API fails, the app falls back to alternative APIs.

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/products` | All products |
| `GET` | `/products?category=chal` | Filter by category |
| `GET` | `/products/:id` | A single product |
| `GET` | `/categories` | All categories |
| `GET` | `/categories/:id` | A single category |

---

## 🚀 Getting Started

**Prerequisites:** Node.js (latest LTS), Git and a MongoDB Atlas account.

```bash
# 1. Clone the repository
git clone https://github.com/orjodasutshab/bazardor.git
cd bazardor

# 2. Install dependencies
npm install

# 3. Create a .env.local file (see the table below)

# 4. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the values below. This file is not tracked by Git, so your secrets stay safe.

| Variable | Required | Description |
|---|---|---|
| `BETTER_AUTH_SECRET` | ✅ | Secret key that protects login sessions. Generate your own |
| `BETTER_AUTH_URL` | ✅ | The site's address (`http://localhost:3000` locally) |
| `MONGODB_URI` | ✅ | MongoDB Atlas connection string |
| `NEXT_PUBLIC_API_URL` | ➖ | Address of the products API. A default is used if not set |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | ➖ | Enables Google login |
| `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | ➖ | Enables GitHub login |

**Command to generate your own secret key:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

> ⚠️ Never write secret keys, passwords or connection strings in the code, and never upload them to GitHub.

---

## 📁 Project Structure

```
bazardor/
├── src/
│   ├── app/
│   │   ├── api/auth/[...all]/   # Better Auth API route
│   │   ├── category/[slug]/     # Category page and sorting
│   │   ├── product/[slug]/      # Product detail page
│   │   ├── profile/             # Profile and name update
│   │   ├── privacy/             # Privacy policy
│   │   ├── signin/              # Sign in
│   │   ├── signup/              # Sign up
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── layout.tsx           # Root layout and font
│   │   └── page.tsx             # Home page
│   ├── components/              # Navbar, Hero, ProductCard, Footer, ticker and skeleton
│   ├── context/                 # AuthContext and RouterContext
│   ├── lib/                     # Better Auth server and client configuration
│   ├── services/                # Functions that fetch data from the API
│   ├── types/                   # TypeScript types
│   └── utils/                   # Helpers for Bengali digits and dates
├── package.json
└── README.md
```

---

## 🌍 Deployment

The project is deployed on **Vercel**. Pushing to the `main` branch on GitHub triggers a new build and release automatically.

On Vercel, add the required variables from the table above under **Settings → Environment Variables**, then **Redeploy** once.

<!--
## 📸 Screenshots
Put screenshots in a docs/ folder and add them here:
![Home page](docs/home.png)
-->

---

## 👨‍💻 Author

**Orjo Das Utshab**
GitHub: [@orjodasutshab](https://github.com/orjodasutshab)

---

<div align="center">

> All prices are approximate and may change depending on market conditions.

**⭐ If you like this project, don't forget to give it a Star!**

</div>
