@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-24 pb-10">
    <div class="max-w-7xl mx-auto px-6">
        <!-- Welcome Section -->
        <div class="mb-10">
            <h1 class="text-4xl font-bold text-white dark:text-slate-100 mb-2">
                Dashboard
            </h1>
            <p class="text-slate-300 dark:text-slate-400">
                Kelola akun dan layanan cloud Anda
            </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <!-- Active Services -->
            <div class="bg-gradient-to-br from-blue-600/20 to-blue-700/20 dark:from-blue-900/30 dark:to-blue-900/40 border border-blue-500/30 dark:border-blue-700/50 rounded-lg p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-slate-400 dark:text-slate-500 text-sm">Layanan Aktif</p>
                        <p class="text-3xl font-bold text-white dark:text-slate-100 mt-2">
                            {{ $stats['activeServices'] }}
                        </p>
                    </div>
                    <div class="w-12 h-12 bg-blue-500/20 dark:bg-blue-600/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 13a3 3 0 01-.369-5.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Total Spent -->
            <div class="bg-gradient-to-br from-purple-600/20 to-purple-700/20 dark:from-purple-900/30 dark:to-purple-900/40 border border-purple-500/30 dark:border-purple-700/50 rounded-lg p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-slate-400 dark:text-slate-500 text-sm">Total Pengeluaran</p>
                        <p class="text-3xl font-bold text-white dark:text-slate-100 mt-2">
                            {{ $stats['totalSpent'] }}
                        </p>
                    </div>
                    <div class="w-12 h-12 bg-purple-500/20 dark:bg-purple-600/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.16 2.5a1.5 1.5 0 011.68 0l2.024 1.884a1 1 0 00.612.158h2.645a1.5 1.5 0 011.464 2.059L15.728 10l1.776 3.399A1.5 1.5 0 0116.04 15.458h-2.645a1 1 0 00-.612.158L10.84 17.5a1.5 1.5 0 01-1.68 0l-2.024-1.884a1 1 0 00-.612-.158H3.96a1.5 1.5 0 01-1.464-2.059L4.272 10 2.496 6.601A1.5 1.5 0 013.96 4.542h2.645a1 1 0 00.612-.158l2.024-1.884z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Uptime -->
            <div class="bg-gradient-to-br from-green-600/20 to-green-700/20 dark:from-green-900/30 dark:to-green-900/40 border border-green-500/30 dark:border-green-700/50 rounded-lg p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-slate-400 dark:text-slate-500 text-sm">Uptime</p>
                        <p class="text-3xl font-bold text-white dark:text-slate-100 mt-2">
                            {{ $stats['uptime'] }}
                        </p>
                    </div>
                    <div class="w-12 h-12 bg-green-500/20 dark:bg-green-600/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Profile Card -->
            <div class="lg:col-span-1">
                <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-6">
                    <h2 class="text-xl font-bold text-white dark:text-slate-100 mb-4">Profil</h2>
                    
                    <div class="flex items-center gap-4 mb-6">
                        <img src="{{ $profile['avatar'] }}" alt="{{ $profile['name'] }}" class="w-12 h-12 rounded-full">
                        <div>
                            <p class="font-semibold text-white dark:text-slate-100">{{ $profile['name'] }}</p>
                            <p class="text-sm text-slate-400 dark:text-slate-500">{{ $profile['email'] }}</p>
                        </div>
                    </div>

                    <div class="space-y-3 text-sm">
                        <div class="flex justify-between">
                            <span class="text-slate-400 dark:text-slate-500">Perusahaan:</span>
                            <span class="text-white dark:text-slate-100 font-medium">{{ $profile['company'] }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400 dark:text-slate-500">Paket:</span>
                            <span class="text-white dark:text-slate-100 font-medium">{{ $profile['package'] }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400 dark:text-slate-500">Status:</span>
                            <span class="text-green-400 font-medium capitalize">{{ $profile['status'] }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400 dark:text-slate-500">Bergabung:</span>
                            <span class="text-white dark:text-slate-100 font-medium">{{ $profile['joinDate'] }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Activities & Payments -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Activities -->
                <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-6">
                    <h2 class="text-xl font-bold text-white dark:text-slate-100 mb-4">Aktivitas Terbaru</h2>
                    
                    <div class="space-y-3">
                        @foreach($activities as $activity)
                            <div class="flex items-start gap-3 pb-3 border-b border-slate-600 dark:border-slate-700 last:border-b-0">
                                <div class="w-3 h-3 rounded-full {{ $activity['status'] === 'success' ? 'bg-green-500' : 'bg-yellow-500' }} mt-1.5 flex-shrink-0"></div>
                                <div class="flex-1">
                                    <p class="text-white dark:text-slate-100 font-medium">{{ $activity['title'] }}</p>
                                    <p class="text-slate-400 dark:text-slate-500 text-sm">{{ $activity['description'] }}</p>
                                    <p class="text-slate-500 dark:text-slate-600 text-xs mt-1">
                                        {{ \Carbon\Carbon::parse($activity['timestamp'])->diffForHumans() }}
                                    </p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

                <!-- Payment History -->
                <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-6">
                    <h2 class="text-xl font-bold text-white dark:text-slate-100 mb-4">Riwayat Pembayaran</h2>
                    
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="border-b border-slate-600 dark:border-slate-700">
                                    <th class="text-left py-2 px-3 text-slate-400 dark:text-slate-500 font-medium">Tanggal</th>
                                    <th class="text-left py-2 px-3 text-slate-400 dark:text-slate-500 font-medium">Paket</th>
                                    <th class="text-left py-2 px-3 text-slate-400 dark:text-slate-500 font-medium">Jumlah</th>
                                    <th class="text-left py-2 px-3 text-slate-400 dark:text-slate-500 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($payments as $payment)
                                    <tr class="border-b border-slate-600 dark:border-slate-700 last:border-b-0">
                                        <td class="py-3 px-3 text-white dark:text-slate-100">{{ $payment['date'] }}</td>
                                        <td class="py-3 px-3 text-white dark:text-slate-100">{{ $payment['package'] }}</td>
                                        <td class="py-3 px-3 text-white dark:text-slate-100">{{ $payment['amountLabel'] }}</td>
                                        <td class="py-3 px-3">
                                            <span class="inline-block px-3 py-1 rounded-full text-xs font-medium {{ $payment['status'] === 'paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400' }}">
                                                {{ ucfirst($payment['status']) }}
                                            </span>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
