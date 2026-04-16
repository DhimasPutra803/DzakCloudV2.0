@extends('layouts.app')

@section('title', 'Sign Up')

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

    <div class="pt-32 pb-20 px-6 flex items-center justify-center relative z-10 min-h-screen">
        <div class="w-full max-w-md">
            <!-- Card Container -->
            <div class="bg-slate-800/50 dark:bg-slate-900/50 border border-slate-700 dark:border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                <h1 class="text-3xl font-bold text-white dark:text-slate-100 text-center mb-2">
                    Daftar Akun
                </h1>
                <p class="text-center text-slate-400 dark:text-slate-500 mb-8">
                    Buat akun DzakCloud baru Anda
                </p>

                <!-- Error Message -->
                @if($errors->any())
                    <div class="mb-6 bg-red-500/20 dark:bg-red-600/20 border border-red-500/50 dark:border-red-700/50 rounded-lg p-4 flex items-start gap-3">
                        <svg class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="text-red-300 text-sm">
                            @foreach($errors->all() as $error)
                                <p>{{ $error }}</p>
                            @endforeach
                        </div>
                    </div>
                @endif

                <form action="/sign-up" method="POST" class="space-y-6">
                    @csrf

                    <!-- Name Input -->
                    <div>
                        <label class="block text-white dark:text-slate-100 font-medium mb-2">
                            Nama Lengkap
                        </label>
                        <input type="text"
                               name="name"
                               value="{{ old('name') }}"
                               placeholder="Nama Anda"
                               required
                               class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <!-- Email Input -->
                    <div>
                        <label class="block text-white dark:text-slate-100 font-medium mb-2">
                            Email
                        </label>
                        <input type="email"
                               name="email"
                               value="{{ old('email') }}"
                               placeholder="nama@email.com"
                               required
                               class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <!-- Password Input -->
                    <div>
                        <label class="block text-white dark:text-slate-100 font-medium mb-2">
                            Password
                        </label>
                        <input type="password"
                               name="password"
                               placeholder="Minimal 6 karakter"
                               required
                               class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <!-- Confirm Password Input -->
                    <div>
                        <label class="block text-white dark:text-slate-100 font-medium mb-2">
                            Konfirmasi Password
                        </label>
                        <input type="password"
                               name="password_confirmation"
                               placeholder="Konfirmasi password"
                               required
                               class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <!-- Sign Up Button -->
                    <button type="submit"
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg">
                        Daftar Sekarang
                    </button>
                </form>

                <!-- Divider -->
                <div class="flex items-center gap-4 my-6">
                    <div class="flex-1 h-px bg-slate-600 dark:bg-slate-700"></div>
                    <span class="text-slate-400 dark:text-slate-500 text-sm">atau</span>
                    <div class="flex-1 h-px bg-slate-600 dark:bg-slate-700"></div>
                </div>

                <!-- Login Link -->
                <p class="text-center text-slate-400 dark:text-slate-500">
                    Sudah punya akun?
                    <a href="/login"
                       class="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        Login di sini
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>
@endsection
