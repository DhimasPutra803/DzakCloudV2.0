import { RequestHandler } from "express";
import { ServicesResponse } from "@shared/api";

export const handleGetServices: RequestHandler = (req, res) => {
  const servicesResponse: ServicesResponse = {
    items: [
      {
        id: "1",
        icon: "cloud",
        title: "Cloud VPS",
        description: "Virtual Server yang powerful dengan infrastruktur cloud computing dan teknologi terdepan",
      },
      {
        id: "2",
        icon: "shield",
        title: "Keamanan",
        description: "Keamanan tingkat enterprise dengan enkripsi data dan perlindungan dari ancaman cyber",
      },
      {
        id: "3",
        icon: "zap",
        title: "Komputasi",
        description: "Performa optimal dengan resource komputasi yang dapat disesuaikan sesuai kebutuhan",
      },
      {
        id: "4",
        icon: "headset",
        title: "Support 24/7",
        description: "Tim support profesional kami siap membantu Anda kapan saja, 24 jam sehari 7 hari seminggu",
      },
    ],
  };

  res.json(servicesResponse);
};
