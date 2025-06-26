import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Send an email using a service like SendGrid, AWS SES, etc.
      // 2. Store the message in a database
      // 3. Send a confirmation email to the user
      
      console.log("Contact form submission:", validatedData);
      
      // For now, we'll just log the submission and return success
      res.json({ 
        message: "Contact form submitted successfully",
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Serve resume PDF
  app.get("/attached_assets/Resume_Shuja_1750795062850.pdf", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "Resume_Shuja_1750795062850.pdf");
    res.download(resumePath, "Shujaullah_Ahsan_Resume.pdf", (err) => {
      if (err) {
        res.status(404).json({ message: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
