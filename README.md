# PetPlace

> A modern full-stack pet adoption platform where users can list, discover, and adopt pets — built with Next.js, MongoDB, and HeroUI.

---

## 🌐 Live URL

🔗 [https://pet-place.vercel.app](https://pet-place.vercel.app)

---

## 💡 Purpose

PetPlace connects pet owners who want to re home their pets with loving families looking to adopt. Users can create an account, list pets for adoption with full details, browse available pets, and send adoption requests — all in one clean, modern interface.

---

## ✨ Features

- 🔐 **Authentication** — Secure email/password sign up and login powered by Better Auth
- 🐶 **List a Pet** — Owners can add pets with details like species, breed, age, gender, health status, vaccination status, and photos
- 🔍 **Search & Filter** — Browse all pets with real-time search by name and filter by species
- 📋 **Adoption Requests** — Users can send adoption requests; owners can view, approve, or reject them from their dashboard
- 👤 **User Profile** — Edit display name and profile photo; session-synced owner info on listings
- 🌙 **Dark / Light Mode** — Full theme support with a theme switcher
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 📄 **Pagination** — Clean paginated pet browsing with page controls
- 🗂️ **My Listings** — Dashboard to manage your own pet listings with edit and delete options
- 📬 **My Requests** — Track all adoption requests you've submitted with cancel option

---

---

## 📦 NPM Packages Used

| Package               | Purpose                                                                      |
| --------------------- | ---------------------------------------------------------------------------- |
| `next`                | React framework with App Router, SSR, and file-based routing                 |
| `react` / `react-dom` | Core UI library                                                              |
| `@heroui/react`       | Modern UI component library (Input, Button, Select, Pagination, Modal, etc.) |
| `better-auth`         | Authentication library with email/password support                           |
| `mongodb`             | Official MongoDB driver for database operations                              |
| `react-hot-toast`     | Toast notifications for success and error feedback                           |
| `react-icons`         | Icon library (FaPaw, FaMars, FaVenus, etc.)                                  |
| `next/font`           | Optimized Google Fonts loading (Baloo 2, Righteous)                          |
| `tailwindcss`         | Utility-first CSS framework for styling                                      |
| `framer-motion`       | Animation library for smooth UI transitions                                  |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/ihriyad/pet-place.git
cd pet-place

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your MongoDB URI and auth secrets

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

```env
BETTER_AUTH_URL=http://localhost:3000
AUTH_DB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/
BETTER_AUTH_SECRET=your_secret_key
```

---

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/)
- [HeroUI](https://heroui.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Better Auth](https://better-auth.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<p align="center">Made with 🐾 by I H Riyad</p>
