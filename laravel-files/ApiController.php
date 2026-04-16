<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    /**
     * Ping endpoint
     */
    public function ping(): JsonResponse
    {
        return response()->json([
            'message' => env('PING_MESSAGE', 'ping pong'),
        ]);
    }

    /**
     * Get services
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
     * Get products
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
     * Get FAQ
     */
    public function getFaq(): JsonResponse
    {
        $faqItems = [
            [
                'id' => '1',
                'question' => 'Bagaimana cara memulai?',
                'answer' => 'Anda dapat membuat akun baru, memilih paket yang sesuai, dan mulai menggunakan layanan cloud kami dalam hitungan menit.',
            ],
            [
                'id' => '2',
                'question' => 'Apakah ada jaminan uptime?',
                'answer' => 'Ya, semua paket kami menjamin uptime 99.9% dengan dukungan teknis 24/7.',
            ],
            [
                'id' => '3',
                'question' => 'Bisakah saya mengubah paket?',
                'answer' => 'Tentu saja! Anda dapat upgrade atau downgrade paket kapan saja tanpa biaya tambahan.',
            ],
            [
                'id' => '4',
                'question' => 'Berapa lama waktu setup?',
                'answer' => 'Setup biasanya selesai dalam 5-10 menit. Tim support kami siap membantu jika diperlukan.',
            ],
        ];

        return response()->json(['items' => $faqItems]);
    }

    /**
     * Get dashboard data (protected)
     */
    public function getDashboard(): JsonResponse
    {
        $user = auth()->user();

        $profile = [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'phone' => '082-1234-5678',
            'company' => 'PT. Contoh Perusahaan',
            'package' => 'VPS Pro',
            'joinDate' => $user->created_at->format('Y-m-d'),
            'avatar' => 'https://api.dicebear.com/7.x/avataaars/svg?seed=' . $user->id,
            'status' => 'active',
        ];

        $activities = [
            [
                'id' => '1',
                'type' => 'login',
                'title' => 'Login ke Dashboard',
                'description' => 'Anda berhasil login ke dashboard',
                'timestamp' => now()->subHours(2)->toIso8601String(),
                'status' => 'success',
            ],
            [
                'id' => '2',
                'type' => 'payment',
                'title' => 'Pembayaran Paket',
                'description' => 'Pembayaran paket VPS Pro berhasil diproses',
                'timestamp' => now()->subDays(5)->toIso8601String(),
                'status' => 'success',
            ],
        ];

        $payments = [
            [
                'id' => '1',
                'date' => now()->subMonth()->format('Y-m-d'),
                'amount' => 50000,
                'amountLabel' => 'Rp 50,000',
                'package' => 'VPS Pro',
                'status' => 'paid',
                'invoiceId' => 'INV-2024-001',
            ],
        ];

        $stats = [
            'activeServices' => 3,
            'totalSpent' => 'Rp 1.500.000',
            'uptime' => '99.95%',
        ];

        return response()->json([
            'profile' => $profile,
            'activities' => $activities,
            'payments' => $payments,
            'stats' => $stats,
        ]);
    }
}
