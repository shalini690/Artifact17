# Artifact17

A minimal Node.js tutorial web server built with the Express.js framework. It serves two plaintext `GET` endpoints: a baseline `Hello world` route and a `Good evening` route.

## Prerequisites

- **Node.js version 18 or higher** — required by Express 5.
- **npm** — bundled with Node.js, used to install dependencies and run the server.

## Installation

Install the project dependencies from the repository root:

```bash
npm install
```

This installs Express (`express@^5.2.1`) along with its dependencies into the `node_modules/` directory.

## Running the Server

Start the server with:

```bash
npm start
```

This runs `node index.js`. By default the server listens on **port 3000**; you can override the port by setting the `PORT` environment variable (the server reads `process.env.PORT`).

With the server running, you can reach the endpoints using `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/good-evening
```

## Endpoints

| Method | Path | Response |
| ------ | ---- | -------- |
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |
