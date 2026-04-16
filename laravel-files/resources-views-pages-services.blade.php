@extends('layouts.app')

@section('title', 'Services')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
    <!-- Wave background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <svg class="absolute top-0 left-0 w-full h-96 opacity-20"
             viewBox="0 0 1200 120"
             preserveAspectRatio="none">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
                  fill="url(#grad1)" />
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>

    <div class="pt-32 pb-20 px-6 relative z-10">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-20">
                <h1 class="text-5xl md:text-6xl font-bold text-white dark:text-slate-100 mb-6">
                    Layanan Cloud Profesional
                </h1>
                <p class="text-slate-300 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    Pilih paket yang sempurna untuk kebutuhan infrastruktur cloud Anda. Semua paket
                    dilengkapi dengan garansi uptime 99.9%, keamanan tingkat enterprise, dan dukungan
                    pelanggan 24/7 yang siap membantu.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="space-y-12">
                <!-- First Row - 3 products -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($products->slice(0, 3) as $product)
                        @include('partials.product-card', [
                            'product' => $product,
                            'first_row' => true
                        ])
                    @endforeach
                </div>

                <!-- Second Row - 3 products -->
                @if(count($products) > 3)
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        @foreach($products->slice(3) as $product)
                            @include('partials.product-card', [
                                'product' => $product,
                                'first_row' => false
                            ])
                        @endforeach
                    </div>
                @endif
            </div>

            <!-- Bottom CTA -->
            <div class="mt-24 text-center">
                <div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 dark:border-blue-600/40 rounded-2xl p-12">
                    <h2 class="text-3xl font-bold text-white dark:text-slate-100 mb-4">
                        Perlu Solusi Kustom?
                    </h2>
                    <p class="text-slate-300 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Tim ahli kami siap membantu Anda merancang solusi cloud yang
                        sempurna untuk kebutuhan spesifik bisnis Anda.
                    </p>
                    <a href="/contact"
                       class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                        Hubungi Tim Sales
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
