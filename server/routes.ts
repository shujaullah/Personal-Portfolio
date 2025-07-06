import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";
import nodemailer from "nodemailer";

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
      
      // Send email using Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ahsanshujasalman@gmail.com',
          pass: 'vjml qxmd hnpz vgwp',
        },
      });

      const mailOptions = {
        from: 'ahsanshujasalman@gmail.com',
        to: 'ahsanshuja1127@gmail.com',
        subject: `Portfolio Contact Form: ${validatedData.name}`,
        text: `You have a new message from your portfolio contact form.\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`,
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ 
        message: "Contact form submitted successfully and email sent!",
        data: validatedData 
      });
    } catch (error) {
      console.error('Error sending contact email:', error);
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
