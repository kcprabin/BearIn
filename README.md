
# BearIn

A real-time chat application (backend + frontend). This repository contains a Node.js/Express backend and a Vite + React frontend.

**Quick Overview**l
- **Backend**: Node.js, Express, MongoDB, Socket.IO, JWT authentication. See [backend](backend).
- **Frontend**: Vite + React. See [frontend](frontend).

**Prerequisites**
- Node.js (16+ recommended)
- npm or yarn
- MongoDB instance (local or hosted)

**Backend — Run Locally**
- Change to the backend folder: `cd backend`
- Install dependencies: `npm install`
- Create a `.env` file with at least the database and JWT settings (e.g. `MONGO_URI`, `PORT`, `JWT_SECRET`). If you use Cloudinary add your Cloudinary credentials.
- Start in development mode (auto-restarts): `npm run dev`
- Start in production mode: `npm start`

**Frontend — Run Locally**
- Change to the frontend folder: `cd frontend`
- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production: `npm run build`

**Project Structure (top-level)**
- `backend/` — API server, routes, controllers, models, middleware, services
- `frontend/` — React app built with Vite

**Useful Paths**
- API entry: `backend/src/index.js`
- Backend routes: `backend/src/routes/`
- Frontend entry: `frontend/src/main.jsx`

**Notes**
- Start the backend before the frontend so the client can connect to the API and socket server.
- Check `backend/package.json` and `frontend/package.json` for exact script names.

If you'd like, I can: add example `.env` templates, expand the README with API docs, or add Docker compose to run both services together.
