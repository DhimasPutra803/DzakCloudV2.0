# 🚀 DzakCloud Laravel - Setup Instructions

Panduan lengkap untuk mengkonversi proyek React ke Laravel.

## 📋 Prerequisites

Pastikan Anda sudah install:

1. **PHP 8.1+**
   ```bash
   php -v
   ```

2. **Composer**
   ```bash
   composer -v
   ```

3. **Node.js & npm** (untuk Tailwind CSS)
   ```bash
   node -v
   npm -v
   ```

4. **MySQL / PostgreSQL** (atau SQLite)
   - Buat database baru: `dzak_cloud`

## 🔧 Step-by-Step Setup

### Step 1: Create Laravel Project

```bash
composer create-project laravel/laravel dzak-cloud
cd dzak-cloud
```

### Step 2: Setup Database Connection

Edit file `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dzak_cloud
DB_USERNAME=root
DB_PASSWORD=
```

Atau untuk SQLite:

```env
DB_CONNECTION=sqlite
```

### Step 3: Install Frontend Dependencies

```bash
npm install
```

Pastikan ini sudah terinstall di `package.json`:
- `tailwindcss`
- `autoprefixer`
- `postcss`
- `alpinejs`

Jika belum, install dengan:

```bash
npm install -D tailwindcss postcss autoprefixer
npm install alpinejs
```

### Step 4: Copy Files dari `laravel-files/`

Copy file-file berikut ke project Anda:

#### Controllers

```bash
# Copy ke app/Http/Controllers/
cp laravel-files/PageController.php app/Http/Controllers/
cp laravel-files/AuthController.php app/Http/Controllers/
cp laravel-files/ApiController.php app/Http/Controllers/
```

#### Routes

```bash
# Copy routes/web.php
cp laravel-files/routes-web.php routes/web.php

# Copy routes/api.php
cp laravel-files/routes-api.php routes/api.php
```

#### CSS & JS

```bash
# Copy resources/css/app.css
cp laravel-files/resources-css-app.css resources/css/app.css

# Copy resources/js/app.js
cp laravel-files/resources-js-app.js resources/js/app.js
```

#### Config Files

```bash
# Copy tailwind config
cp laravel-files/tailwind.config.js tailwind.config.js

# Copy postcss config
cp laravel-files/postcss.config.js postcss.config.js

# Copy .env example
cp laravel-files/.env.example .env
```

#### Blade Views

```bash
# Create directories
mkdir -p resources/views/layouts
mkdir -p resources/views/pages
mkdir -p resources/views/components
mkdir -p resources/views/partials

# Copy layouts
cp laravel-files/resources-views-layouts-app.blade.php resources/views/layouts/app.blade.php

# Copy pages
cp laravel-files/resources-views-pages-*.blade.php resources/views/pages/

# Copy components
cp laravel-files/resources-views-components-*.blade.php resources/views/components/

# Copy partials
cp laravel-files/resources-views-partials-*.blade.php resources/views/partials/
```

### Step 5: Generate Application Key

```bash
php artisan key:generate
```

### Step 6: Run Migrations

```bash
php artisan migrate
```

### Step 7: Build Assets

Terminal 1 - Watch CSS changes:
```bash
npm run dev
```

Terminal 2 - Start Laravel server:
```bash
php artisan serve
```

Akses aplikasi di: `http://localhost:8000`

## 📁 File Structure Setelah Setup

```
dzak-cloud/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── PageController.php ✅
│   │   │   ├── AuthController.php ✅
│   │   │   └── ApiController.php ✅
│   │   └── Middleware/
│   └── Models/
│       └── User.php (default)
├── resources/
│   ├── css/
│   │   └── app.css ✅
│   ├── js/
│   │   └── app.js ✅
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php ✅
│       ├── pages/
│       │   ├── home.blade.php ✅
│       │   ├── services.blade.php ✅
│       │   ├── about.blade.php ✅
│       │   ├── contact.blade.php ✅
│       │   ├── login.blade.php ✅
│       │   ├── signup.blade.php ✅
│       │   ├── dashboard.blade.php ✅
│       │   └── 404.blade.php ✅
│       ├── components/
│       │   ├── navigation.blade.php ✅
│       │   └── theme-toggle.blade.php ✅
│       └── partials/
│           └── product-card.blade.php ✅
├── routes/
│   ├── web.php ✅
│   └── api.php ✅
├── database/
│   └── migrations/ (default)
├── public/
├── .env ✅
├── tailwind.config.js ✅
├── postcss.config.js ✅
├── package.json (sudah ada)
└── composer.json (sudah ada)
```

## ✨ Features yang Sudah Diimplementasi

✅ **8 Halaman Lengkap**
- Home (dengan services grid)
- Services (dengan product cards)
- About
- Contact
- Login
- Sign Up
- Dashboard (protected)
- 404 Error Page

✅ **Dark Mode / Light Mode**
- Toggle button di pojok kanan bawah
- Persist preference di localStorage
- Alpine.js integration
- Full Tailwind dark mode support

✅ **Authentication**
- Login form dengan validation
- Sign up form dengan password confirmation
- Protected dashboard route
- Logout functionality
- Session-based auth (Laravel default)

✅ **API Endpoints**
- `/api/ping` - Health check
- `/api/services` - Get services list
- `/api/products` - Get products/pricing
- `/api/faq` - Get FAQ items
- `/api/dashboard` - Protected dashboard data

✅ **Styling**
- Tailwind CSS dengan dark mode
- Global color theme system (CSS variables)
- Responsive design
- Smooth animations & transitions
- Gradient backgrounds

## 🔐 Demo Credentials

```
Email: demo@example.com
Password: password
```

Anda bisa login dengan credentials ini setelah setup selesai.

## 🐛 Troubleshooting

### Problem: Tailwind classes tidak tampil

**Solution:**
1. Pastikan `npm run dev` berjalan
2. Check `tailwind.config.js` path: `"./resources/views/**/*.blade.php"`
3. Clear cache: `npm run dev` (ctrl+c and restart)

### Problem: Dark mode toggle tidak bekerja

**Solution:**
1. Check browser console untuk errors
2. Pastikan Alpine.js loaded: `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs..."></script>`
3. Check localStorage di DevTools

### Problem: 404 pada routes

**Solution:**
1. Check `routes/web.php` - pastikan routes didefinisikan
2. Run `php artisan route:list` untuk lihat semua routes
3. Clear route cache: `php artisan route:clear`

### Problem: Database connection error

**Solution:**
1. Check `.env` - DB credentials harus benar
2. Pastikan MySQL/PostgreSQL berjalan
3. Buat database: `CREATE DATABASE dzak_cloud;`
4. Run migration: `php artisan migrate`

### Problem: CSRF token error pada form

**Solution:**
1. Pastikan form punya `@csrf`
2. Check: `<form method="POST"> @csrf ... </form>`
3. Session driver di `.env` harus `file` atau `database`

## 📝 Important Notes

1. **Session Auth**: Laravel menggunakan session-based authentication (bukan JWT)
2. **CSRF Protection**: Semua form POST harus punya `@csrf` directive
3. **Blade Templating**: 
   - `{{ }}` untuk echo/interpolation
   - `@if`, `@foreach`, `@auth`, dll untuk control structures
   - `@extends()`, `@section()`, `@yield()` untuk layout inheritance
4. **Dark Mode**: Toggle persistent di localStorage, jangan lupa include Alpine.js
5. **Asset Pipeline**: Gunakan `@vite()` untuk load CSS/JS dalam layout

## 🚀 Deployment

Untuk production:

```bash
# Build assets
npm run build

# Optimize Laravel
php artisan optimize

# Set production mode
APP_ENV=production
APP_DEBUG=false
```

## 📚 Useful Commands

```bash
# Development
php artisan serve
npm run dev

# Database
php artisan migrate              # Run migrations
php artisan migrate:fresh        # Reset database
php artisan tinker              # Interact with app

# Cache
php artisan cache:clear
php artisan route:clear
php artisan config:clear

# Make new files
php artisan make:model Product
php artisan make:migration create_products_table
php artisan make:controller ProductController
```

## ✅ Checklist Setelah Setup

- [ ] PHP & Composer installed
- [ ] Node.js & npm installed
- [ ] `composer create-project` selesai
- [ ] `.env` dikonfigurasi dengan DB
- [ ] `npm install` selesai
- [ ] Semua files dari `laravel-files/` sudah dicopy
- [ ] `php artisan key:generate` dijalankan
- [ ] `php artisan migrate` dijalankan
- [ ] `npm run dev` & `php artisan serve` berjalan
- [ ] Akses `http://localhost:8000` bisa
- [ ] Dark mode toggle visible & berfungsi
- [ ] Bisa login dengan demo@example.com / password
- [ ] Dashboard accessible setelah login

Jika semua ✅ selesai, Anda siap untuk customize dan develop lebih lanjut!

## 💡 Next Steps

1. **Customize** warna/branding sesuai kebutuhan
2. **Add database models** untuk products, users, dll
3. **Setup email** untuk contact form
4. **Add payment integration** (Stripe, Midtrans, etc)
5. **Setup hosting** (Netlify, Vercel, shared hosting, VPS)

Selamat! Proyek Laravel Anda sudah siap! 🎉
