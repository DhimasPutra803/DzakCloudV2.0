# 📋 Files Checklist - Konversi React ke Laravel

Berikut adalah daftar lengkap file-file yang perlu Anda copy dari folder `laravel-files/` ke project Laravel Anda.

## ✅ Controllers (3 files)

Copy ke `app/Http/Controllers/`:
- ✅ `PageController.php` → `app/Http/Controllers/PageController.php`
- ✅ `AuthController.php` → `app/Http/Controllers/AuthController.php`
- ✅ `ApiController.php` → `app/Http/Controllers/ApiController.php`

## ✅ Routes (2 files)

Ganti files di folder `routes/`:
- ✅ `routes-web.php` → `routes/web.php`
- ✅ `routes-api.php` → `routes/api.php`

## ✅ CSS & JavaScript (2 files)

Copy ke `resources/`:
- ✅ `resources-css-app.css` → `resources/css/app.css`
- ✅ `resources-js-app.js` → `resources/js/app.js`

## ✅ Configuration Files (3 files)

Copy ke root project:
- ✅ `tailwind.config.js` → `tailwind.config.js`
- ✅ `postcss.config.js` → `postcss.config.js`
- ✅ `.env.example` → `.env` (setelah customize dengan DB credentials)

## ✅ Blade Layouts (1 file)

Create folder: `resources/views/layouts/`

Copy ke `resources/views/layouts/`:
- ✅ `resources-views-layouts-app.blade.php` → `resources/views/layouts/app.blade.php`

## ✅ Blade Pages (8 files)

Create folder: `resources/views/pages/`

Copy ke `resources/views/pages/`:
- ✅ `resources-views-pages-home.blade.php` → `resources/views/pages/home.blade.php`
- ✅ `resources-views-pages-services.blade.php` → `resources/views/pages/services.blade.php`
- ✅ `resources-views-pages-about.blade.php` → `resources/views/pages/about.blade.php`
- ✅ `resources-views-pages-contact.blade.php` → `resources/views/pages/contact.blade.php`
- ✅ `resources-views-pages-login.blade.php` → `resources/views/pages/login.blade.php`
- ✅ `resources-views-pages-signup.blade.php` → `resources/views/pages/signup.blade.php`
- ✅ `resources-views-pages-dashboard.blade.php` → `resources/views/pages/dashboard.blade.php`
- ✅ `resources-views-pages-404.blade.php` → `resources/views/pages/404.blade.php`

## ✅ Blade Components (2 files)

Create folder: `resources/views/components/`

Copy ke `resources/views/components/`:
- ✅ `resources-views-components-navigation.blade.php` → `resources/views/components/navigation.blade.php`
- ✅ `resources-views-components-theme-toggle.blade.php` → `resources/views/components/theme-toggle.blade.php`

## ✅ Blade Partials (1 file)

Create folder: `resources/views/partials/`

Copy ke `resources/views/partials/`:
- ✅ `resources-views-partials-product-card.blade.php` → `resources/views/partials/product-card.blade.php`

## 📦 Total Files: 21 files

```
3 Controllers
2 Route files
2 Asset files (CSS + JS)
3 Config files
1 Layout
8 Pages
2 Components
1 Partial
---
22 files total
```

## 🔧 Manual Setup (tidak ada file, tapi perlu diconfigure)

1. **package.json** - Sudah ada default Laravel, pastikan punya:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     },
     "devDependencies": {
       "alpinejs": "^3.x",
       "autoprefixer": "^10.x",
       "postcss": "^8.x",
       "tailwindcss": "^3.x",
       "tailwindcss-animate": "^1.x"
     }
   }
   ```

2. **.env** - Customize dengan DB credentials:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=dzak_cloud
   DB_USERNAME=root
   DB_PASSWORD=
   ```

3. **Database** - Create database:
   ```sql
   CREATE DATABASE dzak_cloud;
   ```

4. **Migrations** - Run migrations:
   ```bash
   php artisan migrate
   ```

## 📝 Copy Commands (Quick Reference)

Jika Anda familiar dengan terminal, bisa copy-paste commands berikut:

```bash
# Create directories
mkdir -p resources/views/layouts
mkdir -p resources/views/pages
mkdir -p resources/views/components
mkdir -p resources/views/partials

# Copy controllers (asumsi dari folder laravel-files/)
cp laravel-files/PageController.php app/Http/Controllers/
cp laravel-files/AuthController.php app/Http/Controllers/
cp laravel-files/ApiController.php app/Http/Controllers/

# Copy routes
cp laravel-files/routes-web.php routes/web.php
cp laravel-files/routes-api.php routes/api.php

# Copy assets
cp laravel-files/resources-css-app.css resources/css/app.css
cp laravel-files/resources-js-app.js resources/js/app.js

# Copy config
cp laravel-files/tailwind.config.js .
cp laravel-files/postcss.config.js .
cp laravel-files/.env.example .env

# Copy views
cp laravel-files/resources-views-layouts-app.blade.php resources/views/layouts/app.blade.php
cp laravel-files/resources-views-pages-*.blade.php resources/views/pages/
cp laravel-files/resources-views-components-*.blade.php resources/views/components/
cp laravel-files/resources-views-partials-*.blade.php resources/views/partials/
```

## ⚠️ Important Notes

1. File naming convention: `resources-views-pages-home.blade.php` menjadi `resources/views/pages/home.blade.php` (ganti `-` dengan `/`)

2. Beberapa file hanya "snippet" atau perlu dicopy dengan perhatian:
   - `package.json.snippet` - hanya reference, gabungkan manual dengan package.json yang sudah ada
   - `routes-web.php` - bisa overwrite file default yang ada
   - `routes-api.php` - bisa overwrite file default yang ada

3. Jangan lupa customize `.env` dengan database credentials Anda!

4. Setelah copy, jalankan:
   ```bash
   npm install
   php artisan key:generate
   php artisan migrate
   npm run dev
   php artisan serve
   ```

## ✅ Verification Checklist

Setelah copy semua files:

- [ ] Akses `http://localhost:8000` = HOME page tampil
- [ ] Click menu links = navigasi ke halaman lain
- [ ] Click theme toggle button (bottom right) = dark/light mode bekerja
- [ ] Go to `/login` = login form tampil
- [ ] Create account di `/sign-up` atau login dengan `demo@example.com:password`
- [ ] Dashboard page accessible setelah login
- [ ] Logout bekerja
- [ ] `/services` page dengan pricing cards tampil
- [ ] `/about` page tampil
- [ ] `/contact` page tampil
- [ ] Non-existent route (e.g., `/xyz`) = 404 page tampil

Semuanya ✅ = Konversi berhasil! 🎉
