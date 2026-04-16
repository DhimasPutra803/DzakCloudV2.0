@extends('layouts.app')

@section('title', 'Contact')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-20 px-6">
    <div class="max-w-2xl mx-auto">
        <h1 class="text-5xl font-bold text-white dark:text-slate-100 mb-6 text-center">Hubungi Kami</h1>
        <p class="text-center text-slate-300 dark:text-slate-400 mb-12">
            Ada pertanyaan atau feedback? Hubungi tim kami sekarang juga.
        </p>
        
        <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-8">
            <form class="space-y-6">
                <div>
                    <label class="block text-white dark:text-slate-100 font-medium mb-2">
                        Nama Lengkap
                    </label>
                    <input type="text"
                           placeholder="Nama Anda"
                           class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>

                <div>
                    <label class="block text-white dark:text-slate-100 font-medium mb-2">
                        Email
                    </label>
                    <input type="email"
                           placeholder="nama@email.com"
                           class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>

                <div>
                    <label class="block text-white dark:text-slate-100 font-medium mb-2">
                        Subjek
                    </label>
                    <input type="text"
                           placeholder="Subjek pesan"
                           class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>

                <div>
                    <label class="block text-white dark:text-slate-100 font-medium mb-2">
                        Pesan
                    </label>
                    <textarea rows="6"
                              placeholder="Tuliskan pesan Anda di sini..."
                              class="w-full bg-slate-700/50 dark:bg-slate-800/50 border border-slate-600 dark:border-slate-700 rounded-lg px-4 py-3 text-white dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>

                <button type="submit"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    Kirim Pesan
                </button>
            </form>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-6 text-center">
                <div class="text-blue-400 text-3xl mb-3">📧</div>
                <h3 class="text-white dark:text-slate-100 font-semibold mb-1">Email</h3>
                <p class="text-slate-400 dark:text-slate-500 text-sm">
                    <a href="mailto:support@dzakcloud.com" class="hover:text-blue-400 transition-colors">
                        support@dzakcloud.com
                    </a>
                </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-6 text-center">
                <div class="text-purple-400 text-3xl mb-3">📱</div>
                <h3 class="text-white dark:text-slate-100 font-semibold mb-1">Telepon</h3>
                <p class="text-slate-400 dark:text-slate-500 text-sm">
                    <a href="tel:+62821234567" class="hover:text-purple-400 transition-colors">
                        +62 821-234-5678
                    </a>
                </p>
            </div>

            <div class="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 border border-slate-600 dark:border-slate-700 rounded-lg p-6 text-center">
                <div class="text-green-400 text-3xl mb-3">💬</div>
                <h3 class="text-white dark:text-slate-100 font-semibold mb-1">Chat</h3>
                <p class="text-slate-400 dark:text-slate-500 text-sm">
                    Tersedia via WhatsApp & Telegram
                </p>
            </div>
        </div>
    </div>
</div>
@endsection
