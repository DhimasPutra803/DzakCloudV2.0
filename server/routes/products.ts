import { RequestHandler } from "express";
import { ProductsResponse } from "@shared/api";

export const handleGetProducts: RequestHandler = (req, res) => {
  const productsResponse: ProductsResponse = {
    items: [
      {
        id: "1",
        name: "VPS Lite",
        price: 25000,
        priceLabel: "Rp 25K/bulan",
        description: "Ideal untuk project kecil",
        features: [
          "1 vCPU",
          "2GB RAM",
          "50GB Storage",
          "1TB Bandwidth",
          "24/7 Support",
          "Uptime 99.9%",
        ],
        highlighted: false,
      },
      {
        id: "2",
        name: "VPS Pro",
        price: 50000,
        priceLabel: "Rp 50K/bulan",
        description: "Paling populer untuk bisnis",
        features: [
          "4 vCPU",
          "8GB RAM",
          "250GB Storage",
          "5TB Bandwidth",
          "Priority Support",
          "Auto Scaling",
          "CDN Global",
          "Backup Harian",
        ],
        highlighted: true,
      },
      {
        id: "3",
        name: "Web Host",
        price: 75000,
        priceLabel: "Rp 75K/bulan",
        description: "Untuk operasi besar",
        features: [
          "16 vCPU",
          "32GB RAM",
          "1TB Storage",
          "Unlimited Bandwidth",
          "Dedicated Support",
          "Premium Configuration",
          "Managed Services",
          "SSL Certificate",
        ],
        highlighted: false,
      },
      {
        id: "4",
        name: "Enterprise Cloud",
        price: 150000,
        priceLabel: "Rp 150K/bulan",
        description: "Solusi korporat skala besar",
        features: [
          "32 vCPU",
          "64GB RAM",
          "2TB Storage",
          "Unlimited Bandwidth",
          "24/7 Dedicated Team",
          "Load Balancing",
          "Database Replication",
          "DDoS Protection",
        ],
        highlighted: false,
      },
      {
        id: "5",
        name: "Managed Database",
        price: 35000,
        priceLabel: "Rp 35K/bulan",
        description: "Database management profesional",
        features: [
          "PostgreSQL/MySQL",
          "Automatic Backups",
          "Replication",
          "24/7 Monitoring",
          "Performance Optimization",
          "Point-in-time Recovery",
        ],
        highlighted: false,
      },
      {
        id: "6",
        name: "CDN Premium",
        price: 45000,
        priceLabel: "Rp 45K/bulan",
        description: "Distribusi konten global",
        features: [
          "500GB/bulan Bandwidth",
          "200+ Edge Locations",
          "DDoS Protection",
          "Real-time Analytics",
          "Image Optimization",
          "Video Streaming",
        ],
        highlighted: false,
      },
    ],
  };

  res.json(productsResponse);
};
