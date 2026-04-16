import { RequestHandler } from "express";
import { FAQResponse } from "@shared/api";

export const handleGetFAQ: RequestHandler = (req, res) => {
  const faqItems: FAQResponse = {
    items: [
      {
        id: "1",
        question: "What is managed instance hosting?",
        answer: "Managed instance hosting is a service where we handle all server management, security updates, and maintenance so you can focus on your business.",
      },
      {
        id: "2",
        question: "Can I scalable it with your team?",
        answer: "Yes, absolutely. Our platform is designed to scale with your business. You can easily upgrade or downgrade your resources as needed.",
      },
      {
        id: "3",
        question: "Do you offer technical support?",
        answer: "We provide 24/7 technical support to all our customers. Our expert team is always ready to help you with any issues.",
      },
      {
        id: "4",
        question: "What are service level agreements?",
        answer: "We guarantee 99.9% uptime SLA. If we fail to meet this, we provide service credits as compensation.",
      },
      {
        id: "5",
        question: "Bagaimana cara melihat log pesan dari sistem?",
        answer: "Anda dapat mengakses log pesan pelanggan melalui dashboard Anda. Berikut contoh format log pesan:\n\n[2024-01-15 14:32:45] INFO: Customer login successful - User: John Doe (ID: 12345)\n[2024-01-15 14:33:12] SUCCESS: Service instance created - Instance: web-server-01\n[2024-01-15 14:35:20] WARNING: CPU usage at 78% - Server: db-primary-01\n[2024-01-15 14:36:45] ERROR: Failed to backup database - Error code: DB_BACKUP_FAILED\n\nSetiap log mencakup timestamp, level severity (INFO, SUCCESS, WARNING, ERROR), deskripsi aktivitas, dan detail relevan lainnya untuk membantu Anda memantau sistem.",
      },
    ],
  };

  res.json(faqItems);
};
