@extends('layouts.app')

@section('title', 'Halaman Tidak Ditemukan')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-6">
    <div class="text-center">
        <div class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            404
        </div>
        <h1 class="text-4xl font-bold text-white dark:text-slate-100 mb-2">
            Halaman Tidak Ditemukan
        </h1>
        <p class="text-slate-300 dark:text-slate-400 mb-8">
            Maaf, halaman yang Anda cari tidak tersedia atau sudah dihapus.
        </p>
        <a href="/"
           class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Kembali ke Home
        </a>
    </div>
</div>
@endsection
