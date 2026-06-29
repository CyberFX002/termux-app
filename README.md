# KFC STREAMS

Production-ready football streaming platform scaffold with Next.js, Express, Socket.io, MySQL, Redis, HLS.js, Video.js, Tailwind, Docker, Nginx, PM2 and CI.

## Features
- Dark luxury responsive UI for home, live player, fixtures, scores, highlights, leagues, teams, players, auth, premium, payments, profile, help and admin surfaces.
- Secure REST API with Helmet, CORS, rate limiting, JWT, bcrypt, Multer upload pipeline and admin role gates.
- Realtime Socket.io score, notification, match event and live chat architecture.
- MySQL schema for users, matches, streams, teams, players, competitions, subscriptions, payments, notifications, watch history, favorites, advertisements, comments and chat messages.
- StreamService supports token-protected HLS URLs and DRM-provider integration points. No copyrighted streams are bundled.

## Quick start
```bash
cp .env.example .env
npm install
npm run dev
```

## Deployment
```bash
docker compose up --build -d
```
Mount `nginx/kfc-streams.conf` in your edge Nginx deployment, configure real payment provider secrets, point licensed HLS/DRM providers at the StreamService, and run migrations from `database/schema.sql`.
