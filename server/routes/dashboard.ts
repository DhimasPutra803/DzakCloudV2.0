import { RequestHandler } from "express";
import { DashboardResponse } from "@shared/api";

export const handleGetDashboard: RequestHandler = (req, res) => {
  const dashboardData: DashboardResponse = {
    profile: {
      id: "user-123",
      name: "Dhimas Putra Irawan",
      email: "dhimas@example.com",
      phone: "+62 812 3456 7890",
      company: "PT Dhimas Digital",
      package: "VPS Pro",
      joinDate: "15 Januari 2026",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dhimas",
      status: "active",
    },
    activities: [
      {
        id: "1",
        type: "upgrade",
        title: "Upgrade Paket VPS",
        description: "Berhasil upgrade dari VPS Lite ke VPS Pro",
        timestamp: "13 April 2026, 10:30",
        status: "success",
      },
      {
        id: "2",
        type: "payment",
        title: "Pembayaran Berhasil",
        description: "Pembayaran Rp 50.000 untuk VPS Pro",
        timestamp: "13 April 2026, 09:15",
        status: "success",
      },
      {
        id: "3",
        type: "deployment",
        title: "Deployment Aplikasi",
        description: "Deploy aplikasi Node.js ke server",
        timestamp: "12 April 2026, 14:45",
        status: "success",
      },
      {
        id: "4",
        type: "maintenance",
        title: "Maintenance Server",
        description: "Update keamanan dan patch sistem",
        timestamp: "11 April 2026, 02:00",
        status: "success",
      },
      {
        id: "5",
        type: "support",
        title: "Support Ticket Resolved",
        description: "Masalah DNS sudah teratasi",
        timestamp: "10 April 2026, 11:20",
        status: "success",
      },
    ],
    payments: [
      {
        id: "pay-001",
        date: "13 April 2026",
        amount: 50000,
        amountLabel: "Rp 50.000",
        package: "VPS Pro",
        status: "paid",
        invoiceId: "INV-2026-001",
      },
      {
        id: "pay-002",
        date: "13 Maret 2026",
        amount: 50000,
        amountLabel: "Rp 50.000",
        package: "VPS Pro",
        status: "paid",
        invoiceId: "INV-2026-002",
      },
      {
        id: "pay-003",
        date: "13 Februari 2026",
        amount: 25000,
        amountLabel: "Rp 25.000",
        package: "VPS Lite",
        status: "paid",
        invoiceId: "INV-2026-003",
      },
      {
        id: "pay-004",
        date: "15 Mei 2026",
        amount: 50000,
        amountLabel: "Rp 50.000",
        package: "VPS Pro",
        status: "pending",
        invoiceId: "INV-2026-004",
      },
    ],
    stats: {
      activeServices: 3,
      totalSpent: "Rp 175.000",
      uptime: "99.8%",
    },
  };

  res.json(dashboardData);
};
