# 🚀 Deployment Guide

This project is prepared for deployment on platforms like **Render**, **Vercel**, or **DigitalOcean**. 

## 1. Backend (Node.js/Express)
**Recommended Platform:** [Render](https://render.com) or [Railway](https://railway.app)

### Environment Variables
Set the following in your platform's dashboard:
- `PORT`: 4000 (or leave it to platform default)
- `MONGODB_URL`: Your MongoDB Atlas connection string
- `JWT_SECRETKEY`: A long random string
- `JWT_KEY`: A long random string
- `ALLOWED_ORIGINS`: `https://your-frontend.vercel.app,https://your-admin.vercel.app`
- `CLOUDINARY_CLOUD_NAME`: From Cloudinary Dashboard
- `CLOUDINARY_API_KEY`: From Cloudinary Dashboard
- `CLOUDINARY_API_SECRET`: From Cloudinary Dashboard

## 2. Frontend & Admin Panel (Vite/React)
**Recommended Platform:** [Vercel](https://vercel.com) or [Netlify](https://netlify.com)

### Environment Variables
Set the following during build:
- `VITE_BACKEND_URL`: `https://your-backend.render.com/api/`

### Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 🛠️ Prep Work Completed
1. **Dynamic URLs:** Frontend and Admin now use `import.meta.env.VITE_BACKEND_URL`.
2. **CORS Security:** Backend now supports dynamic allowed origins via `ALLOWED_ORIGINS`.
3. **Environment Files:** Created `.env` files in both frontend and admin for local testing.
4. **Build Readiness:** Port handling in `server.js` is optimized for cloud environments.
