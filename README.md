# Smart Bookmark App

A simple full-stack bookmark manager built using Next.js, Supabase, Google OAuth, and Tailwind CSS.

## 🚀 Live Demo
Vercel URL: https://smart-bookmark-app-zeta-dun.vercel.app/

## 📦 GitHub Repo
https://github.com/dadijaswanth/Smart-Bookmark-App.git


---

## 📌 Features

- 🔐 Login using Google (OAuth only)
- ➕ Add bookmarks (title + URL)
- 🗑️ Delete bookmarks
- 👤 Bookmarks are private per user
- ⚡ Real-time updates across tabs
- 📱 Responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

- Next.js (App Router)
- Supabase
  - Authentication
  - PostgreSQL Database
  - Realtime subscriptions
- Tailwind CSS
- Google OAuth

---

## 🧠 How It Works

1. User logs in using Google
2. Supabase Auth returns a unique user ID
3. Bookmarks are stored with that user_id
4. Users can only see their own bookmarks
5. Supabase Realtime updates UI instantly

---

## 🗄 Database Schema

Table: `bookmarks`

| Column      | Type      |
|------------|-----------|
| id         | uuid (PK) |
| user_id    | text      |
| title      | text      |
| url        | text      |
| created_at | timestamp |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

```bash
https://github.com/dadijaswanth/Smart-Bookmark-App.git

cd smart-bookmark-app
