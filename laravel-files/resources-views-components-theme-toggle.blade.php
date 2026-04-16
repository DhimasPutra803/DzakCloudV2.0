<!-- Dark Mode / Light Mode Toggle - Bottom Right -->
<div class="fixed bottom-6 right-6 z-40" x-data="{ 
    isDark: window.themeManager?.isDark() || false,
    toggle() {
        window.themeManager.toggleTheme();
        this.isDark = !this.isDark;
        this.$dispatch('theme-changed');
    }
}">
    <button @click="toggle()" 
            :class="isDark ? 'bg-yellow-400 text-yellow-900' : 'bg-slate-800 text-slate-200'"
            class="relative w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110">
        <!-- Sun Icon (Light Mode) -->
        <svg x-show="!isDark" 
             class="w-6 h-6" 
             fill="currentColor" 
             viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l-2.071-2.072a6 6 0 10-8.485 0l2.07 2.071a1 1 0 001.414-1.414l-2.071-2.071A6 6 0 1017.657 14.12l2.07-2.071a1 1 0 00-1.414-1.414zM5 5a1 1 0 011-1h.01a1 1 0 110 2H6a1 1 0 01-1-1zM14 14a1 1 0 011-1h.01a1 1 0 110 2H15a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>

        <!-- Moon Icon (Dark Mode) -->
        <svg x-show="isDark" 
             class="w-6 h-6" 
             fill="currentColor" 
             viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>

        <!-- Tooltip -->
        <div class="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 text-xs rounded whitespace-nowrap opacity-0 pointer-events-none hover:opacity-100 transition-opacity">
            <span x-text="isDark ? 'Light Mode' : 'Dark Mode'"></span>
        </div>
    </button>
</div>

<script>
    // Ensure Alpine watches for theme changes
    document.addEventListener('theme-changed', () => {
        const html = document.documentElement;
        const isDark = window.themeManager.isDark();
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    });
</script>
