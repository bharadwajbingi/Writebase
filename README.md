# Writebase

Writebase is a modern, full-stack blogging platform built for easy content creation and management. Administrators can log in securely, publish or unpublish blog posts, and organize content by category, while readers browse and search posts in a clean, responsive interface. The platform includes AI-powered writing suggestions via Google’s Gemini API to assist authors. The frontend is built with Next.js (React) and styled using Tailwind CSS, and the backend runs on Node.js with Express. Data is stored in MongoDB Atlas (a fully-managed cloud database), and JSON Web Tokens (JWT) are used for secure authentication.

## Screenshots
![image](https://github.com/user-attachments/assets/7e913f91-0d9c-417a-9b66-313fd433e0ed)

## Live Demo & GitHub

- **Live Demo:** [https://writebase.vercel.app/](https://writebase.vercel.app/)
- **GitHub:** [https://github.com/bharadwajbingi/Writebase](https://github.com/bharadwajbingi/Writebase)

## Tech Stack

- **Next.js (React)** – Frontend framework
- **Tailwind CSS** – Styling
- **Node.js** – Backend runtime
- **Express** – Backend framework
- **MongoDB Atlas** – Database
- **JWT** – Authentication
- **Google Gemini API** – AI-powered blog suggestions
- **Vercel** – Deployment platform

## Features

- 🔐 Secure Admin Login
- 📝 Create, Publish, Unpublish Blog Posts
- 🧠 AI-Powered Blog Suggestions (via Gemini)
- 🔎 Category and Keyword Search
- 📱 Responsive UI with Tailwind CSS

## Installation

```bash
git clone https://github.com/bharadwajbingi/Writebase.git
cd Writebase

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

## Running Locally

```bash
# Start backend
cd server
npm run server

# Start frontend in another terminal
cd ../client
npm run dev
```

## Environment Variables

**In `server/.env`:**

- `MONGODB_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `IMAGEKIT_PUBLIC_KEY`
- `IMAGEKIT_PRIVATE_KEY`
- `IMAGEKIT_URL_ENDPOINT`
- `GEMINI_API_KEY`

**In `client/.env`:**

- `VITE_BASE_URL`

## Folder Structure

```
Writebase/
├── client/             # Frontend
│   ├── src/            # React components/pages
│   └── public/         # Assets
├── server/             # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
```

## Deployment

- Push to GitHub
- Create frontend project on Vercel (`/client` root)
- Set environment variables
- Deploy backend separately or via Vercel using `vercel.json`

## Contributing

Contributions are welcome. Fork, branch, and make a pull request.

## License

This project is licensed under the MIT License.
