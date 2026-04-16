import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleGetFAQ } from "./routes/faq";
import { handleGetProducts } from "./routes/products";
import { handleGetServices } from "./routes/services";
import { handleGetDashboard } from "./routes/dashboard";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.get("/api/faq", handleGetFAQ);
  app.get("/api/products", handleGetProducts);
  app.get("/api/services", handleGetServices);
  app.get("/api/dashboard", handleGetDashboard);

  return app;
}
