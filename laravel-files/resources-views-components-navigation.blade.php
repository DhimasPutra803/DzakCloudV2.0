<nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">DC</span>
            </div>
            <span class="text-white font-semibold text-lg">DzakCloud</span>
        </a>

        <!-- Menu Items -->
        <div class="flex items-center gap-8">
            <a href="/" class="text-sm transition-colors hover:text-white {{ request()->is('/') ? 'text-white font-semibold' : 'text-slate-300' }}">
                Home
            </a>
            <a href="/contact" class="text-sm transition-colors hover:text-white {{ request()->is('contact') ? 'text-white font-semibold' : 'text-slate-300' }}">
                Contact
            </a>
            <a href="/services" class="text-sm transition-colors hover:text-white {{ request()->is('services') ? 'text-white font-semibold' : 'text-slate-300' }}">
                Services
            </a>
            <a href="/about" class="text-sm transition-colors hover:text-white {{ request()->is('about') ? 'text-white font-semibold' : 'text-slate-300' }}">
                About
            </a>
        </div>

        <!-- Auth Buttons -->
        <div class="flex items-center gap-3">
            @auth
                <a href="/dashboard">
                    <button class="text-sm text-slate-300 hover:text-white hover:bg-slate-700 flex items-center gap-2 px-4 py-2 rounded transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        {{ Auth::user()->name }}
                    </button>
                </a>
                <form action="/logout" method="POST" style="display: inline;">
                    @csrf
                    <button type="submit" class="text-sm bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-600/50 px-4 py-2 rounded flex items-center gap-2 transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Logout
                    </button>
                </form>
            @else
                <a href="/login">
                    <button class="text-sm text-slate-300 hover:text-white hover:bg-slate-700 px-4 py-2 rounded transition-all">
                        Log In
                    </button>
                </a>
                <a href="/sign-up">
                    <button class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all">
                        Sign up
                    </button>
                </a>
            @endauth
        </div>
    </div>
</nav>
