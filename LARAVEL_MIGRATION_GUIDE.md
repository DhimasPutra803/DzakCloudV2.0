# DzakCloud - Laravel Migration Guide

## 📋 Step-by-Step Setup

### Prerequisites
Pastikan Anda sudah install:
- PHP 8.1 atau lebih tinggi
- Composer
- MySQL/PostgreSQL (atau gunakan SQLite)
- Node.js & npm (untuk Tailwind CSS)

### Step 1: Create New Laravel Project

```bash
composer create-project laravel/laravel dzak-cloud
cd dzak-cloud
```

### Step 2: Setup Tailwind CSS & Alpine.js

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install alpinejs
```

### Step 3: Configure Tailwind

Edit `tailwind.config.js`:
```javascript
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Step 4: Setup .env

Edit `.env`:
```
APP_NAME=DzakCloud
APP_URL=http://localhost:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dzak_cloud
DB_USERNAME=root
DB_PASSWORD=
```

### Step 5: Copy & Setup Files

1. Copy file-file dari folder `laravel-files/` ke proyek Anda
2. Copy struktur direktori sesuai lokasi yang ditunjukkan

### Step 6: Run Migrations & Seeders

```bash
php artisan migrate
php artisan db:seed
```

### Step 7: Build Assets & Start Dev Server

```bash
npm run dev        # Terminal 1: Watch CSS changes
php artisan serve  # Terminal 2: Start Laravel development server
```

Akses: `http://localhost:8000`

---

## 📁 File Structure

```
dzak-cloud/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── PageController.php
│   │   │   ├── AuthController.php
│   │   │   └── ApiController.php
│   │   └── Middleware/
│   │       └── Authenticate.php (sudah ada)
│   ├── Models/
│   │   └── User.php (default)
│   └── Providers/
│       └── RouteServiceProvider.php (default)
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   ├── app.js
│   │   └── theme.js (dark mode)
│   └── views/
│       ├── layouts/
│       │   ├── app.blade.php
│       │   └── auth.blade.php
│       ├── pages/
│       │   ├── home.blade.php
│       │   ├── services.blade.php
│       │   ├── about.blade.php
│       │   ├── contact.blade.php
│       │   ├── login.blade.php
│       │   ├── signup.blade.php
│       │   ├── dashboard.blade.php
│       │   └── 404.blade.php
│       ├── components/
│       │   ├── navigation.blade.php
│       │   ├── theme-toggle.blade.php
│       │   └── payment-modal.blade.php
│       └── partials/
│           ├── product-card.blade.php
│           └── service-card.blade.php
├── routes/
│   ├── web.php (sudah ada)
│   └── api.php (sudah ada)
├── public/
├── storage/
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
├── .env
├── tailwind.config.js
├── package.json
└── composer.json
```

---

## 🔄 Key Conversions

### Routes
- React Router → Laravel web.php & api.php routes
- Protected routes → Laravel middleware
- Navigation → Blade components & Alpine.js

### Auth
- AuthContext (React) → Laravel Auth facade
- localStorage → Session/Database
- Login form validation → Laravel validation

### Styling
- TailwindCSS (same)
- Global CSS → resources/css/app.css
- Dark mode → Alpine.js + localStorage

### API
- Express endpoints → Laravel API routes
- Mock data → Seeders atau return JSON directly

### Components
- React components → Blade components
- State management → Alpine.js or Livewire
- Props → Blade variables

---

## 🎨 Dark Mode Implementation

Dark mode toggle diletakkan di pojok kanan bawah menggunakan:
- **Alpine.js** untuk interaktivitas
- **localStorage** untuk persist preference
- **Tailwind's dark mode** class-based

Toggle button style:
```html
<button x-data="{ isDark: localStorage.getItem('theme') === 'dark' }" 
        @click="toggleTheme()"
        class="fixed bottom-6 right-6 bg-slate-800 dark:bg-slate-200 p-3 rounded-full">
</button>
```

---

## 🚀 Commands Reference

```bash
# Development
php artisan serve
npm run dev

# Database
php artisan migrate
php artisan db:seed
php artisan migrate:fresh --seed

# Make new
php artisan make:controller PageController
php artisan make:model Product -m
php artisan make:migration create_products_table

# Production
npm run build
php artisan optimize
```

---

## 📝 Important Notes

1. **Session Auth**: Laravel menggunakan session-based auth (bukan token JWT)
2. **CSRF Protection**: Semua form POST perlu CSRF token `@csrf`
3. **Blade Syntax**: `{{ }}` untuk echo, `@if`, `@foreach`, dll
4. **Alpine.js**: Untuk interaktivity ringan (dark mode, modals, dll)
5. **Database**: Default menggunakan migrations, jangan edit langsung di database

---

## 🐛 Troubleshooting

**Problem**: Tailwind classes tidak tampil
- Solution: Run `npm run dev` dan pastikan `tailwind.config.js` path benar

**Problem**: Dark mode tidak bekerja
- Solution: Pastikan `<html>` tag punya `x-data` dari Alpine.js

**Problem**: 404 pada routes
- Solution: Check `routes/web.php` dan pastikan route didefinisikan

---

Semua file sudah tersedia di folder `laravel-files/`. Copy ke proyek Laravel Anda dan follow steps di atas!
