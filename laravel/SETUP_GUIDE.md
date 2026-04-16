# DzakCloud Laravel Backend Setup Guide

Panduan lengkap untuk setup Laravel Backend API untuk proyek DzakCloud.

## 📋 Prerequisites

Sebelum memulai, pastikan Anda sudah menginstall:

1. **PHP 8.1 atau lebih tinggi**
   ```bash
   php -v
   ```

2. **Composer** (PHP Package Manager)
   ```bash
   composer -v
   ```

3. **Node.js & npm** (untuk development)
   ```bash
   node -v
   npm -v
   ```

4. **MySQL atau PostgreSQL** (atau gunakan SQLite untuk development)
   - Buat database baru dengan nama: `dzakcloud`

## 🔧 Step-by-Step Setup

### Step 1: Navigate ke folder Laravel

```bash
cd laravel
```

### Step 2: Copy environment file

```bash
cp .env.example .env
```

Edit file `.env` dan konfigurasi database connection:

**Untuk MySQL:**
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dzakcloud
DB_USERNAME=root
DB_PASSWORD=
```

**Untuk SQLite (recommended untuk development):**
```env
DB_CONNECTION=sqlite
DB_DATABASE=/path/to/laravel/database/database.sqlite
```

**Frontend URL (untuk CORS):**
```env
FRONTEND_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

### Step 3: Install Composer dependencies

```bash
composer install
```

### Step 4: Generate application key

```bash
php artisan key:generate
```

Atau jika belum, Anda bisa update manual di `.env`:
```env
APP_KEY=base64:xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 5: Create database (jika belum ada)

Untuk MySQL:
```bash
mysql -u root -p
CREATE DATABASE dzakcloud;
EXIT;
```

### Step 6: Run migrations (jika ada)

```bash
php artisan migrate
```

### Step 7: Start Laravel development server

```bash
php artisan serve
```

Server akan berjalan di `http://localhost:8000`

## 🚀 Mengakses API Endpoints

Setelah server berjalan, Anda bisa mengakses endpoints:

### Health Check
```bash
curl http://localhost:8000/api/ping
```

### Get Services
```bash
curl http://localhost:8000/api/services
```

### Get Products
```bash
curl http://localhost:8000/api/products
```

### Get FAQ
```bash
curl http://localhost:8000/api/faq
```

### Get Dashboard (Protected - requires auth)
```bash
curl http://localhost:8000/api/dashboard
```

## 🔌 Development Setup (Frontend + Backend)

Untuk menjalankan Frontend React dan Backend Laravel secara bersamaan:

### Terminal 1 - Laravel Backend
```bash
cd laravel
php artisan serve
# Runs on http://localhost:8000
```

### Terminal 2 - React Frontend
```bash
cd ..
npm run dev
# Runs on http://localhost:5173
```

Sekarang Anda punya:
- React Frontend: `http://localhost:5173`
- Laravel Backend API: `http://localhost:8000/api`

## 📁 Project Structure

```
laravel/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── ApiController.php          ✅
│   ├── Models/
│   └── ...
├── routes/
│   ├── api.php                           ✅
│   └── web.php
├── database/
│   ├── migrations/
│   └── database.sqlite
├── config/
│   └── cors.php                          ✅
├── .env                                  ✅
├── .env.example                          ✅
├── composer.json                         ✅
└── SETUP_GUIDE.md                        ✅
```

## 🔐 CORS Configuration

CORS sudah dikonfigurasi untuk allow requests dari React Frontend.

Untuk menambah URL yang diizinkan, edit file `.env`:

```env
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,https://yourdomain.com
```

## 🔄 Migrate dari Express ke Laravel

Jika Anda sudah punya Express endpoints, endpoints Laravel mengembalikan data yang sama:

### Express (Old)
```
GET /api/ping
GET /api/services
GET /api/products
GET /api/faq
GET /api/dashboard
```

### Laravel (New)
```
GET /api/ping
GET /api/services
GET /api/products
GET /api/faq
GET /api/dashboard
```

Respon data structure sama, jadi React frontend tidak perlu banyak perubahan!

## 📝 Important Notes

1. **Database**: Jika tidak ada migrations, data di-hardcode di API controller (sama seperti Express)
2. **Authentication**: Saat ini semua endpoints public kecuali `/api/dashboard` (contoh)
3. **CORS**: Dikonfigurasi untuk localhost, update untuk production
4. **Environment**: Copy `.env.example` ke `.env` dan sesuaikan
5. **Vendor Folder**: Hasil dari `composer install`, jangan commit ke git

## 📚 Useful Laravel Commands

```bash
# Development
php artisan serve                          # Start dev server
php artisan tinker                         # Interactive shell

# Database
php artisan migrate                        # Run migrations
php artisan migrate:fresh                  # Reset database
php artisan db:seed                        # Seed database

# Cache & Routes
php artisan cache:clear                    # Clear cache
php artisan route:clear                    # Clear route cache
php artisan route:list                     # List all routes
php artisan config:clear                   # Clear config cache

# Make new files
php artisan make:model Product             # Create model
php artisan make:controller MyController   # Create controller
php artisan make:migration create_posts    # Create migration
```

## 🐛 Troubleshooting

### Problem: CORS error di browser

**Solution:**
- Check `.env` file, pastikan `ALLOWED_ORIGINS` include URL React frontend Anda
- Restart Laravel server setelah ubah `.env`
- Check browser console untuk error detail

### Problem: 404 pada routes

**Solution:**
```bash
php artisan route:clear
php artisan serve
```

### Problem: Database connection error

**Solution:**
- Check `.env` file, pastikan DB credentials benar
- Untuk MySQL, pastikan MySQL server running
- Untuk SQLite, pastikan database folder writable

### Problem: Permission denied error

**Solution:**
```bash
chmod -R 775 storage bootstrap/cache
```

### Problem: Composer install error

**Solution:**
```bash
rm -rf vendor composer.lock
composer install
```

## 🚀 Deployment Checklist

Sebelum deploy ke production:

- [ ] Update `.env` dengan production database
- [ ] Set `APP_DEBUG=false`
- [ ] Set `APP_ENV=production`
- [ ] Update `ALLOWED_ORIGINS` untuk production domain
- [ ] Run migrations: `php artisan migrate --force`
- [ ] Optimize: `php artisan optimize`
- [ ] Generate key: `php artisan key:generate`

## 📖 Next Steps

1. **Database Integration**: Setup migrations dan models untuk data persistent
2. **Authentication**: Implement login/register dengan Sanctum atau Passport
3. **Validation**: Add request validation di controllers
4. **Error Handling**: Implement proper error responses
5. **Logging**: Setup logging untuk production monitoring

## 🎉 Setup Complete!

Selamat! Laravel backend Anda sudah siap digunakan. 

Untuk pertanyaan lebih lanjut, refer ke:
- Laravel Documentation: https://laravel.com/docs
- CORS Guide: https://github.com/fruitcake/laravel-cors
