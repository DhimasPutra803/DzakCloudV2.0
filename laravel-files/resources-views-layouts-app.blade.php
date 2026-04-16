<!DOCTYPE html>
<html lang="id" x-data="{ isDark: window.themeManager?.isDark() || false }" :class="{ 'dark': isDark }">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') - DzakCloud</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="bg-background text-foreground">
    <!-- Navigation -->
    @include('components.navigation')

    <!-- Main Content -->
    @yield('content')

    <!-- Theme Toggle Button (Bottom Right) -->
    @include('components.theme-toggle')

    @stack('scripts')
</body>
</html>
