# Backend Documentation

_Documentacion del backend_

## Stack

- Runtime: Bun
- Framework: Express.js
- Language: TypeScript
- Architecture: MSC (Model-Service-Controller)

## Project Structure

```text
backend/
  src/
    controllers/
    services/
    routes/
    middlewares/
    app.ts
    server.ts
```

## Environment Variables

Create a `.env` file using `.env.example` as reference.

```env
PORT=3000
NODE_ENV=development
```

## Commands

Install dependencies:

```bash
bun install
```

Run in development mode:

```bash
bun run dev
```

Build TypeScript:

```bash
bun run build
```

Run compiled build:

```bash
bun run start
```

## Health Check

```http
GET /health
```

Expected response:

```json
{
  "status": "ok",
  "uptime": 10.5,
  "timestamp": "2026-06-16T20:16:47.997Z"
}
```
