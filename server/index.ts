import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = process.env.DATABASE_URL
  ? new pg.Pool({ connectionString: process.env.DATABASE_URL })
  : null;

async function initDb() {
  if (!pool) {
    console.warn("DATABASE_URL not set — subscribe API disabled");
    return;
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      source TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      ip TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  console.log("subscribers table ready");
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.set("trust proxy", true);
  app.use(express.json());

  // Subscribe API
  app.post("/api/subscribe", async (req, res) => {
    try {
      if (!pool) {
        return res.status(500).json({ ok: false, error: "Database not configured" });
      }
      const body = req.body || {};

      // Honeypot: bots fill the hidden "website" field, humans don't
      if (body.website) {
        return res.json({ ok: true });
      }

      const email = String(body.email || "").trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ ok: false, error: "Please enter a valid email" });
      }

      await pool.query(
        `INSERT INTO subscribers (email, source, utm_source, utm_medium, utm_campaign, ip, user_agent)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (email) DO NOTHING`,
        [
          email,
          body.source || null,
          body.utm_source || null,
          body.utm_medium || null,
          body.utm_campaign || null,
          req.ip || null,
          req.get("user-agent") || null,
        ]
      );

      return res.json({ ok: true });
    } catch (err) {
      console.error("subscribe error:", err);
      return res.status(500).json({ ok: false, error: "Server error" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  await initDb().catch((err) => console.error("initDb error:", err));
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
