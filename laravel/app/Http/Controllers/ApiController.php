<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    /**
     * Health check endpoint
     */
    public function ping(): JsonResponse
    {
        return response()->json([
            'message' => 'Hello from Laravel API server'
        ]);
    }

    /**
     * Get services list
     */
    public function getServices(): JsonResponse
    {
        $services = [
            [
                'id' => '1',
                'icon' => 'cloud',
                'title' => 'Cloud VPS',
                'description' => 'Virtual Server yang powerful dengan infrastruktur cloud computing dan teknologi terdepan',
            ],
            [
                'id' => '2',
                'icon' => 'shield',
                'title' => 'Keamanan',
                'description' => 'Keamanan tingkat enterprise dengan enkripsi data dan perlindungan dari ancaman cyber',
            ],
            [
                'id' => '3',
                'icon' => 'zap',
                'title' => 'Komputasi',
                'description' => 'Performa optimal dengan resource komputasi yang dapat disesuaikan sesuai kebutuhan',
            ],
            [
                'id' => '4',
                'icon' => 'headset',
                'title' => 'Support 24/7',
                'description' => 'Tim support profesional kami siap membantu Anda kapan saja, 24 jam sehari 7 hari seminggu',
            ],
        ];

        return response()->json(['items' => $services]);
    }

    /**
     * Get products/pricing list
     */
    public function getProducts(): JsonResponse
    {
        $products = [
            [
                'id' => '1',
                'name' => 'VPS Lite',
                'price' => 25000,
                'priceLabel' => 'Rp 25K/bulan',
                'description' => 'Ideal untuk project kecil',
                'features' => [
                    '1 vCPU',
                    '2GB RAM',
                    '50GB Storage',
                    '1TB Bandwidth',
                    '24/7 Support',
                    'Uptime 99.9%',
                ],
                'highlighted' => false,
            ],
            [
                'id' => '2',
                'name' => 'VPS Pro',
                'price' => 50000,
                'priceLabel' => 'Rp 50K/bulan',
                'description' => 'Paling populer untuk bisnis',
                'features' => [
                    '4 vCPU',
                    '8GB RAM',
                    '250GB Storage',
                    '5TB Bandwidth',
                    'Priority Support',
                    'Auto Scaling',
                    'CDN Global',
                    'Backup Harian',
                ],
                'highlighted' => true,
            ],
            [
                'id' => '3',
                'name' => 'Web Host',
                'price' => 75000,
                'priceLabel' => 'Rp 75K/bulan',
                'description' => 'Untuk operasi besar',
                'features' => [
                    '16 vCPU',
                    '32GB RAM',
                    '1TB Storage',
                    'Unlimited Bandwidth',
                    'Dedicated Support',
                    'Premium Configuration',
                    'Managed Services',
                    'SSL Certificate',
                ],
                'highlighted' => false,
            ],
            [
                'id' => '4',
                'name' => 'Enterprise Cloud',
                'price' => 150000,
                'priceLabel' => 'Rp 150K/bulan',
                'description' => 'Solusi korporat skala besar',
                'features' => [
                    '32 vCPU',
                    '64GB RAM',
                    '2TB Storage',
                    'Unlimited Bandwidth',
                    '24/7 Dedicated Team',
                    'Load Balancing',
                    'Database Replication',
                    'DDoS Protection',
                ],
                'highlighted' => false,
            ],
            [
                'id' => '5',
                'name' => 'Managed Database',
                'price' => 35000,
                'priceLabel' => 'Rp 35K/bulan',
                'description' => 'Database management profesional',
                'features' => [
                    'PostgreSQL/MySQL',
                    'Automatic Backups',
                    'Replication',
                    '24/7 Monitoring',
                    'Performance Optimization',
                    'Point-in-time Recovery',
                ],
                'highlighted' => false,
            ],
            [
                'id' => '6',
                'name' => 'CDN Premium',
                'price' => 45000,
                'priceLabel' => 'Rp 45K/bulan',
                'description' => 'Distribusi konten global',
                'features' => [
                    '500GB/bulan Bandwidth',
                    '200+ Edge Locations',
                    'DDoS Protection',
                    'Real-time Analytics',
                    'Image Optimization',
                    'Video Streaming',
                ],
                'highlighted' => false,
            ],
        ];

        return response()->json(['items' => $products]);
    }

    /**
     * Get FAQ items
     */
    public function getFaq(): JsonResponse
    {
        $faqItems = [
            [
                'id' => '1',
                'question' => 'What is managed instance hosting?',
                'answer' => 'Managed instance hosting is a service where we handle all server management, security updates, and maintenance so you can focus on your business.',
            ],
            [
                'id' => '2',
                'question' => 'Can I scalable it with your team?',
                'answer' => 'Yes, absolutely. Our platform is designed to scale with your business. You can easily upgrade or downgrade your resources as needed.',
            ],
            [
                'id' => '3',
                'question' => 'Do you offer technical support?',
                'answer' => 'We provide 24/7 technical support to all our customers. Our expert team is always ready to help you with any issues.',
            ],
            [
                'id' => '4',
                'question' => 'What are service level agreements?',
                'answer' => 'We guarantee 99.9% uptime SLA. If we fail to meet this, we provide service credits as compensation.',
            ],
            [
                'id' => '5',
                'question' => 'Bagaimana cara melihat log pesan dari sistem?',
                'answer' => "Anda dapat mengakses log pesan pelanggan melalui dashboard Anda. Berikut contoh format log pesan:\n\n[2024-01-15 14:32:45] INFO: Customer login successful - User: John Doe (ID: 12345)\n[2024-01-15 14:33:12] SUCCESS: Service instance created - Instance: web-server-01\n[2024-01-15 14:35:20] WARNING: CPU usage at 78% - Server: db-primary-01\n[2024-01-15 14:36:45] ERROR: Failed to backup database - Error code: DB_BACKUP_FAILED\n\nSetiap log mencakup timestamp, level severity (INFO, SUCCESS, WARNING, ERROR), deskripsi aktivitas, dan detail relevan lainnya untuk membantu Anda memantau sistem.",
            ],
        ];

        return response()->json(['items' => $faqItems]);
    }

    /**
     * Get dashboard data (protected)
     */
    public function getDashboard(): JsonResponse
    {
        $dashboardData = [
            'profile' => [
                'id' => 'user-123',
                'name' => 'Dhimas Putra Irawan',
                'email' => 'dhimas@example.com',
                'phone' => '+62 812 3456 7890',
                'company' => 'PT Dhimas Digital',
                'package' => 'VPS Pro',
                'joinDate' => '15 Januari 2026',
                'avatar' => 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dhimas',
                'status' => 'active',
            ],
            'activities' => [
                [
                    'id' => '1',
                    'type' => 'upgrade',
                    'title' => 'Upgrade Paket VPS',
                    'description' => 'Berhasil upgrade dari VPS Lite ke VPS Pro',
                    'timestamp' => '13 April 2026, 10:30',
                    'status' => 'success',
                ],
                [
                    'id' => '2',
                    'type' => 'payment',
                    'title' => 'Pembayaran Berhasil',
                    'description' => 'Pembayaran Rp 50.000 untuk VPS Pro',
                    'timestamp' => '13 April 2026, 09:15',
                    'status' => 'success',
                ],
                [
                    'id' => '3',
                    'type' => 'deployment',
                    'title' => 'Deployment Aplikasi',
                    'description' => 'Deploy aplikasi Node.js ke server',
                    'timestamp' => '12 April 2026, 14:45',
                    'status' => 'success',
                ],
                [
                    'id' => '4',
                    'type' => 'maintenance',
                    'title' => 'Maintenance Server',
                    'description' => 'Update keamanan dan patch sistem',
                    'timestamp' => '11 April 2026, 02:00',
                    'status' => 'success',
                ],
                [
                    'id' => '5',
                    'type' => 'support',
                    'title' => 'Support Ticket Resolved',
                    'description' => 'Masalah DNS sudah teratasi',
                    'timestamp' => '10 April 2026, 11:20',
                    'status' => 'success',
                ],
            ],
            'payments' => [
                [
                    'id' => 'pay-001',
                    'date' => '13 April 2026',
                    'amount' => 50000,
                    'amountLabel' => 'Rp 50.000',
                    'package' => 'VPS Pro',
                    'status' => 'paid',
                    'invoiceId' => 'INV-2026-001',
                ],
                [
                    'id' => 'pay-002',
                    'date' => '13 Maret 2026',
                    'amount' => 50000,
                    'amountLabel' => 'Rp 50.000',
                    'package' => 'VPS Pro',
                    'status' => 'paid',
                    'invoiceId' => 'INV-2026-002',
                ],
                [
                    'id' => 'pay-003',
                    'date' => '13 Februari 2026',
                    'amount' => 25000,
                    'amountLabel' => 'Rp 25.000',
                    'package' => 'VPS Lite',
                    'status' => 'paid',
                    'invoiceId' => 'INV-2026-003',
                ],
                [
                    'id' => 'pay-004',
                    'date' => '15 Mei 2026',
                    'amount' => 50000,
                    'amountLabel' => 'Rp 50.000',
                    'package' => 'VPS Pro',
                    'status' => 'pending',
                    'invoiceId' => 'INV-2026-004',
                ],
            ],
            'stats' => [
                'activeServices' => 3,
                'totalSpent' => 'Rp 175.000',
                'uptime' => '99.8%',
            ],
        ];

        return response()->json($dashboardData);
    }
}
