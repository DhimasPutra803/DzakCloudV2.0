@extends('layouts.app')

@section('title', 'About')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold text-white dark:text-slate-100 mb-6">Tentang DzakCloud</h1>
        
        <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-8">
            <div class="prose prose-invert dark:prose-dark max-w-none">
                <p class="text-lg text-slate-300 dark:text-slate-400 leading-relaxed mb-6">
                    DzakCloud adalah penyedia layanan cloud computing terkemuka yang berkomitmen untuk memberikan solusi infrastruktur yang andal, aman, dan skalabel kepada bisnis dari segala ukuran.
                </p>

                <h2 class="text-2xl font-bold text-white dark:text-slate-100 mt-8 mb-4">Misi Kami</h2>
                <p class="text-slate-300 dark:text-slate-400 leading-relaxed mb-6">
                    Misi kami adalah membuat teknologi cloud computing dapat diakses oleh semua orang dengan harga yang terjangkau dan layanan pelanggan yang luar biasa.
                </p>

                <h2 class="text-2xl font-bold text-white dark:text-slate-100 mt-8 mb-4">Visi Kami</h2>
                <p class="text-slate-300 dark:text-slate-400 leading-relaxed mb-6">
                    Kami bermimpi menjadi penyedia cloud computing pilihan utama di Indonesia dengan infrastruktur berkelas dunia.
                </p>

                <h2 class="text-2xl font-bold text-white dark:text-slate-100 mt-8 mb-4">Nilai-Nilai Kami</h2>
                <ul class="list-disc list-inside text-slate-300 dark:text-slate-400 space-y-2 mb-6">
                    <li>Keandalan dan Konsistensi</li>
                    <li>Keamanan Data Pelanggan</li>
                    <li>Inovasi Berkelanjutan</li>
                    <li>Dukungan Pelanggan yang Responsif</li>
                    <li>Transparansi dan Integritas</li>
                </ul>

                <h2 class="text-2xl font-bold text-white dark:text-slate-100 mt-8 mb-4">Tim Kami</h2>
                <p class="text-slate-300 dark:text-slate-400 leading-relaxed">
                    Tim kami terdiri dari para profesional berpengalaman di bidang cloud computing, networking, dan layanan pelanggan yang berdedikasi untuk kesuksesan Anda.
                </p>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-blue-600/20 to-blue-700/20 dark:from-blue-900/30 dark:to-blue-900/40 border border-blue-500/30 dark:border-blue-700/50 rounded-lg p-6 text-center">
                <div class="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div class="text-slate-300 dark:text-slate-400">Uptime Terjamin</div>
            </div>
            <div class="bg-gradient-to-br from-purple-600/20 to-purple-700/20 dark:from-purple-900/30 dark:to-purple-900/40 border border-purple-500/30 dark:border-purple-700/50 rounded-lg p-6 text-center">
                <div class="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div class="text-slate-300 dark:text-slate-400">Dukungan Pelanggan</div>
            </div>
            <div class="bg-gradient-to-br from-green-600/20 to-green-700/20 dark:from-green-900/30 dark:to-green-900/40 border border-green-500/30 dark:border-green-700/50 rounded-lg p-6 text-center">
                <div class="text-4xl font-bold text-green-400 mb-2">5000+</div>
                <div class="text-slate-300 dark:text-slate-400">Pelanggan Puas</div>
            </div>
        </div>
    </div>
</div>
@endsection
