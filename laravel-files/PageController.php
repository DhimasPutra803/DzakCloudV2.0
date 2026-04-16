<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class PageController extends Controller
{
    /**
     * Home page
     */
    public function home(): View
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

        return view('pages.home', ['services' => $services]);
    }

    /**
     * Services page
     */
    public function services(): View
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

        return view('pages.services', ['products' => $products]);
    }

    /**
     * About page
     */
    public function about(): View
    {
        return view('pages.about');
    }

    /**
     * Contact page
     */
    public function contact(): View
    {
        return view('pages.contact');
    }

    /**
     * Dashboard page (protected)
     */
    public function dashboard(): View
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
            [
                'id' => '3',
                'type' => 'upgrade',
                'title' => 'Upgrade Paket',
                'description' => 'Upgrade dari VPS Lite ke VPS Pro',
                'timestamp' => now()->subDays(30)->toIso8601String(),
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
            [
                'id' => '2',
                'date' => now()->subMonths(2)->format('Y-m-d'),
                'amount' => 50000,
                'amountLabel' => 'Rp 50,000',
                'package' => 'VPS Pro',
                'status' => 'paid',
                'invoiceId' => 'INV-2024-002',
            ],
            [
                'id' => '3',
                'date' => now()->subMonths(3)->format('Y-m-d'),
                'amount' => 25000,
                'amountLabel' => 'Rp 25,000',
                'package' => 'VPS Lite',
                'status' => 'paid',
                'invoiceId' => 'INV-2024-003',
            ],
        ];

        $stats = [
            'activeServices' => 3,
            'totalSpent' => 'Rp 1.500.000',
            'uptime' => '99.95%',
        ];

        return view('pages.dashboard', [
            'profile' => $profile,
            'activities' => $activities,
            'payments' => $payments,
            'stats' => $stats,
        ]);
    }
}
