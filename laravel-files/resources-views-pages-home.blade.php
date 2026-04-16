@extends('layouts.app')

@section('title', 'Home')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
    <!-- Wave backgrounds -->
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
        <svg class="absolute bottom-20 left-0 w-full h-96 opacity-15"
             viewBox="0 0 1200 120"
             preserveAspectRatio="none">
            <path d="M0,70 Q300,120 600,70 T1200,70 L1200,0 L0,0 Z"
                  fill="url(#grad2)" />
            <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>

    <!-- Hero Section -->
    <div class="pt-32 pb-20 px-6 flex items-center justify-center relative z-10">
        <div class="text-center max-w-2xl">
            <h1 class="text-6xl md:text-7xl font-bold text-white dark:text-slate-100 mb-6">
                DzakCloud For All
            </h1>
            <p class="text-xl text-slate-300 dark:text-slate-400 mb-12 leading-relaxed">
                Nikmati layanan cloud kami tanpa khawatir dengan keamanan tingkat enterprise dan dukungan 24/7.
            </p>

            <div class="flex gap-4 justify-center flex-wrap">
                <a href="/services"
                   class="px-8 py-6 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:translate-y-[-2px] inline-block">
                    Lihat Paket
                </a>
                <a href="/about"
                   class="px-8 py-6 text-base bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/50 hover:translate-y-[-2px] border border-slate-600 hover:border-slate-500 inline-block">
                    Pelajari Lebih Lanjut
                </a>
            </div>
        </div>
    </div>

    <!-- Services Section -->
    <div class="py-20 px-6 relative z-10">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-white dark:text-slate-100 mb-4">
                    Layanan yang Kami Sediakan
                </h2>
                <p class="text-slate-400 dark:text-slate-500">
                    Solusi cloud computing terpadu untuk bisnis Anda
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                @foreach($services as $service)
                    <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-4px]">
                        <div class="text-blue-400 mb-4 text-3xl">
                            @switch($service['icon'])
                                @case('cloud')
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5.5 13a3 3 0 01-.369-5.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                                    </svg>
                                    @break
                                @case('shield')
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    @break
                                @case('zap')
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0110 2v5H6a1 1 0 00-.82 1.573l7 10A1 1 0 0016 17v-5h4a1 1 0 00.82-1.573l-7-10a1 1 0 00-1.66.146z" clip-rule="evenodd"></path>
                                    </svg>
                                    @break
                                @case('headset')
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM14 7a1 1 0 011 1v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5a1 1 0 011-1h2zM9 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v6a4 4 0 004 4h8a4 4 0 004-4v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v2H7V6a2 2 0 012-2z"></path>
                                    </svg>
                                    @break
                                @default
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5.5 13a3 3 0 01-.369-5.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                                    </svg>
                            @endswitch
                        </div>
                        <h3 class="text-white dark:text-slate-100 font-semibold text-lg mb-2">
                            {{ $service['title'] }}
                        </h3>
                        <p class="text-slate-300 dark:text-slate-400 text-sm leading-relaxed">
                            {{ $service['description'] }}
                        </p>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
