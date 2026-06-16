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
    database/
      models/
        posts.prisma
        users.prisma
      schema.prisma
    app.ts
    server.ts
```

## Environment Variables

Create a `.env` file inside the `backend/` directory using `.env.example` as reference.

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/fs0005?schema=public
```

## Database Setup (Docker)

To run the PostgreSQL database locally via Docker, execute the following command from the **workspace root** (where `docker-compose.yml` is located):

```bash
docker compose up -d
```

To stop the database:

```bash
docker compose down
```

## Commands

Install dependencies (inside `backend/`):

```bash
bun install
```

Generate custom Prisma Client (inside `backend/`):

```bash
bunx prisma generate
```

Synchronize the database with the schemas (for prototyping - inside `backend/`):

```bash
bunx prisma db push
```

Generate and apply database migrations (inside `backend/`):

```bash
bunx prisma migrate dev --name <migration_name>
```

For example, to run the initial migration:

```bash
bunx prisma migrate dev --name init_user_model
```


Start Prisma Studio (visual database editor inside `backend/` - recommended with explicit URL to avoid Bun stream issues):

```bash
bunx --bun prisma studio --url="postgresql://postgres:postgres_password@localhost:5432/fs0005?schema=public"
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

Expected response when successfully connected to the database:

```json
{
  "status": "ok",
  "uptime": 10.5,
  "timestamp": "2026-06-16T20:16:47.997Z",
  "database": "connected"
}
```

## API Testing with Bruno

This project includes a [Bruno](https://www.usebruno.com/) API collection inside the `backend/api-collection/` directory.

To import and use it:
1. Open **Bruno**.
2. Click on **Open Collection** (esquina superior izquierda).
3. Selecciona la carpeta `backend/api-collection` de este proyecto.
4. Selecciona el entorno `Local` en el selector de entornos (esquina superior derecha, configurado para apuntar a `http://localhost:3000`).
5. Abre y ejecuta la petición `Health Check` para verificar la conectividad de la API y base de datos de manera visual.
