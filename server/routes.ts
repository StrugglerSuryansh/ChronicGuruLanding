import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterByEmail(data.email);
      if (existing) {
        return res.status(400).json({ 
          message: "Email already subscribed to newsletter" 
        });
      }

      const newsletter = await storage.subscribeNewsletter(data);
      res.json({ 
        message: "Successfully subscribed to newsletter",
        newsletter: { id: newsletter.id, email: newsletter.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email format",
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // Get newsletter subscribers (admin endpoint)
  app.get("/api/newsletter/subscribers", async (req, res) => {
    try {
      const newsletters = await storage.getAllNewsletters();
      res.json({ 
        subscribers: newsletters.map(n => ({ 
          id: n.id, 
          email: n.email, 
          subscribedAt: n.subscribedAt 
        })),
        count: newsletters.length
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
