# React + Laravel Migration Guide

Panduan lengkap untuk menggunakan DzakCloud dengan Laravel backend dan React frontend.

## 📋 Project Structure

Setelah migrasi, struktur proyek akan menjadi:

```
dzakcloud/
├── client/                 # React Frontend
│   ├── pages/
│   ├── components/
│   ├── contexts/
│   ├── lib/
│   │   ├── api.ts          ✅ NEW - API utility untuk Laravel
│   │   └── utils.ts
│   └── App.tsx
│
├── laravel/                # Laravel Backend (NEW)
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       └── ApiController.php
│   │   └── Models/
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   ├── config/
│   │   └── cors.php
│   ├── .env
│   ├── .env.example
│   ├── composer.json
│   ├── SETUP_GUIDE.md      ✅ Laravel setup instructions
│   └── ...
│
├── server/                 # Express (deprecated, bisa dihapus)
│   ├── index.ts
│   └── routes/
│
├── .env                    ✅ Frontend config
├── .env.example           ✅ Frontend config template
├── package.json
├── vite.config.ts
└── MIGRATION_GUIDE.md      ✅ This file
```

## 🚀 Quick Start Setup

### Step 1: Setup Laravel Backend

```bash
# Navigate ke folder Laravel
cd laravel

# Copy environment file
cp .env.example .env

# Edit .env dengan database configuration
nano .env

# Install dependencies
composer install

# Generate application key
php artisan key:generate

# Run migrations (jika ada)
php artisan migrate

# Start Laravel server
php artisan serve
# Server akan berjalan di http://localhost:8000
```

### Step 2: Setup React Frontend

```bash
# Navigate ke root project
cd ..

# Install dependencies (jika belum)
pnpm install

# Ensure .env sudah punya VITE_API_URL
# File: .env
# VITE_API_URL=http://localhost:8000

# Start React dev server
pnpm dev
# Server akan berjalan di http://localhost:5173
```

### Step 3: Verify Setup

Buka browser dan akses:
- **React Frontend**: `http://localhost:5173`
- **Laravel API**: `http://localhost:8000/api/ping`

Jika keduanya berjalan, setup sukses! ✅

## 📡 API Endpoints

Semua endpoints tersedia di Laravel backend:

### Public Endpoints

```
GET  /api/ping          - Health check
GET  /api/services      - Get services list
GET  /api/products      - Get products/pricing
GET  /api/faq          - Get FAQ items
```

### Protected Endpoints

```
GET  /api/dashboard    - Get dashboard data (requires auth)
```

## 🔌 Frontend Configuration

React frontend dikonfigurasi untuk menggunakan Laravel backend melalui environment variable.

### File: `.env`

```env
VITE_API_URL=http://localhost:8000
```

### File: `client/lib/api.ts`

API utility yang digunakan di semua React components:

```typescript
import { apiRequest } from "@/lib/api";

// Usage:
const data = await apiRequest("/services");
console.log(data.items);
```

### Updated Components

Semua React components sudah diupdate untuk menggunakan Laravel:

- ✅ `client/pages/Home.tsx` - /api/services
- ✅ `client/pages/Services.tsx` - /api/products
- ✅ `client/pages/Contact.tsx` - /api/faq
- ✅ `client/pages/Dashboard.tsx` - /api/dashboard
- ✅ `client/pages/Index.tsx` - /api/ping

## 🔐 CORS Configuration

CORS sudah dikonfigurasi di Laravel untuk allow React frontend requests.

### File: `laravel/config/cors.php`

```php
'allowed_origins' => explode(',', env('ALLOWED_ORIGINS', 'http://localhost:5173,http://localhost:3000')),
```

### File: `laravel/.env`

```env
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

Untuk production, update dengan domain Anda:

```env
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## 📝 Environment Variables

### Frontend (.env)

```env
# React Frontend Config
VITE_API_URL=http://localhost:8000
VITE_PUBLIC_BUILDER_KEY=__BUILDER_PUBLIC_KEY__
PING_MESSAGE="ping pong"
```

### Backend (laravel/.env)

```env
# App Config
APP_NAME="DzakCloud"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=dzakcloud
DB_USERNAME=root
DB_PASSWORD=

# Frontend URL (CORS)
FRONTEND_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

## 🔄 API Response Format

Semua endpoints mengembalikan JSON response dengan format sama:

### Success Response

```json
{
  "items": [
    { "id": "1", "title": "...", ... }
  ]
}
```

atau

```json
{
  "profile": { ... },
  "activities": [ ... ],
  "payments": [ ... ],
  "stats": { ... }
}
```

### Error Response

```json
{
  "message": "Error description",
  "status": 400
}
```

## 🧪 Testing API Endpoints

### Using curl

```bash
# Ping endpoint
curl http://localhost:8000/api/ping

# Services
curl http://localhost:8000/api/services

# Products
curl http://localhost:8000/api/products

# FAQ
curl http://localhost:8000/api/faq
```

### Using Postman

1. Import Laravel API collection
2. Set base URL: `http://localhost:8000`
3. Test endpoints: `/api/ping`, `/api/services`, dll

### Using Browser

Navigate to:
- `http://localhost:8000/api/ping`
- `http://localhost:8000/api/services`
- `http://localhost:8000/api/products`
- `http://localhost:8000/api/faq`

## 🚀 Deployment

### Frontend Deployment (React)

```bash
# Build production bundle
pnpm build

# Update VITE_API_URL untuk production
# File: .env.production
VITE_API_URL=https://api.yourdomain.com

# Deploy dist/ folder ke hosting (Netlify, Vercel, etc)
```

### Backend Deployment (Laravel)

```bash
# Build & optimize
php artisan optimize

# Set production mode
APP_ENV=production
APP_DEBUG=false

# Update database ke production database
DB_HOST=production.db.host
DB_USERNAME=production_user
DB_PASSWORD=secure_password

# Run migrations
php artisan migrate --force

# Deploy ke hosting (shared hosting, VPS, Heroku, etc)
```

## 🐛 Troubleshooting

### Problem: CORS Error

Error: `Access to XMLHttpRequest at 'http://localhost:8000/api/services' from origin 'http://localhost:5173' has been blocked by CORS policy`

**Solution:**
1. Check `laravel/.env`: `ALLOWED_ORIGINS=http://localhost:5173`
2. Restart Laravel server: `php artisan serve`
3. Clear Laravel cache: `php artisan cache:clear`

### Problem: API Returns 404

Error: `GET http://localhost:8000/api/services 404 (Not Found)`

**Solution:**
1. Check Laravel server running: `php artisan serve`
2. Check routes: `php artisan route:list`
3. Verify endpoint exists in `laravel/routes/api.php`

### Problem: React shows "Loading" forever

React component stuck on loading state.

**Solution:**
1. Check browser console for errors
2. Check Network tab for failed requests
3. Verify `VITE_API_URL` di `.env`
4. Ensure Laravel server running

### Problem: Database connection error

Error: `SQLSTATE[HY000] [2002] Connection refused`

**Solution:**
1. Check MySQL running: `mysql -u root -p`
2. Verify `.env` database credentials
3. Create database: `CREATE DATABASE dzakcloud;`
4. Run: `php artisan migrate`

## 📚 Useful Commands

### React Commands

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm typecheck        # Check TypeScript errors
pnpm test             # Run tests
```

### Laravel Commands

```bash
php artisan serve              # Start development server
php artisan migrate            # Run migrations
php artisan migrate:fresh      # Reset database
php artisan route:list         # List all routes
php artisan cache:clear        # Clear cache
php artisan config:clear       # Clear config cache
php artisan optimize           # Optimize for production
php artisan tinker             # Interactive shell
```

## 🔄 Migration Checklist

- [ ] Install Laravel dependencies: `composer install`
- [ ] Copy Laravel .env: `cp laravel/.env.example laravel/.env`
- [ ] Generate Laravel key: `php artisan key:generate`
- [ ] Create database: `CREATE DATABASE dzakcloud;`
- [ ] Run migrations: `php artisan migrate`
- [ ] Verify React updated to use apiRequest()
- [ ] Check VITE_API_URL in .env
- [ ] Start Laravel: `php artisan serve`
- [ ] Start React: `pnpm dev`
- [ ] Test endpoints: `http://localhost:8000/api/ping`
- [ ] Test React pages load data correctly
- [ ] Test CORS - no browser errors

## 📖 Additional Resources

- **Laravel Docs**: https://laravel.com/docs
- **React Docs**: https://react.dev
- **CORS Guide**: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- **API Design**: https://restfulapi.net

## ❓ FAQs

### Q: Bisa tetap pakai Express?
A: Ya, tapi Anda perlu update React untuk menggunakan Express URL. Tidak recommended untuk production.

### Q: Bagaimana cara authentikasi?
A: Laravel mendukung Laravel Sanctum (recommended). Setup di controller kemudian protect routes dengan middleware 'auth:sanctum'.

### Q: Database bisa pakai PostgreSQL?
A: Ya! Update `DB_CONNECTION=pgsql` di .env dan install PostgreSQL driver.

### Q: Bagaimana handle error responses?
A: Update `apiRequest()` di `client/lib/api.ts` untuk handle error cases.

### Q: Apakah frontend dan backend harus di port sama?
A: Tidak, frontend bisa di port berbeda. CORS akan handle komunikasi antar port.

## 🎉 Next Steps

1. ✅ Setup Laravel backend dengan database
2. ✅ Verify semua API endpoints berjalan
3. ✅ Develop fitur tambahan
4. ✅ Setup authentication (Sanctum)
5. ✅ Deploy ke production

---

**Selamat!** Proyek React + Laravel Anda sudah siap untuk development! 🚀
