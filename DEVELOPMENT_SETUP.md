# Development Setup: Laravel Backend + React Frontend

Panduan lengkap untuk menjalankan aplikasi dengan Laravel sebagai backend dan React TypeScript sebagai frontend utama.

## 📋 Arsitektur

```
┌─────────────────────────────────┐
│   React TypeScript Frontend     │
│   (Vite Dev Server on :8080)    │
│   - SPA dengan React Router 6   │
│   - TailwindCSS + Radix UI      │
│   - Dark mode, theme, dll       │
└──────────────┬──────────────────┘
               │
         API Proxy (/api/*)
               │
               ↓
┌─────────────────────────────────┐
│   Laravel Backend (PHP)         │
│   (artisan serve on :8000)      │
│   - REST API endpoints          │
│   - Database (MySQL/SQLite)     │
│   - Authentication & Session    │
│   - Business logic              │
└─────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

Pastikan sudah terinstall:
- **Node.js** 18+ & npm/pnpm
- **PHP** 8.1+
- **Composer**
- **MySQL/PostgreSQL** atau SQLite

### Step 1: Setup React Frontend (Development Server)

```bash
# Install dependencies
pnpm install

# Start Vite dev server (port 8080)
pnpm dev
```

Akses: `http://localhost:8080`

### Step 2: Setup Laravel Backend (Terpisah)

Ikuti instruksi di `laravel-files/SETUP_INSTRUCTIONS.md`:

```bash
# Create fresh Laravel project
composer create-project laravel/laravel dzak-cloud
cd dzak-cloud

# Copy semua files dari laravel-files/
# (Lihat detail di SETUP_INSTRUCTIONS.md)

# Setup database di .env
# Jalankan migrations
php artisan migrate

# Start Laravel dev server (port 8000)
php artisan serve
```

Akses: `http://localhost:8000`

## 🔄 API Communication Flow

### Development (dengan Vite Proxy)

```
React (localhost:8080)
    ↓
fetch('/api/services')  ← Relative URL
    ↓
Vite Dev Server Proxy
    ↓
Laravel (localhost:8000)
    ↓
Returns JSON Response
```

**Keuntungan:**
- No CORS issues di development
- Tidak perlu konfigurasi khusus
- Seamless development experience

### Production (Direct URLs)

Set `VITE_API_URL` di build environment:

```bash
# Build dengan Laravel API URL
VITE_API_URL=https://api.example.com pnpm build
```

Atau gunakan `.env.production`:

```env
VITE_API_URL=https://api.example.com
```

## 📁 Project Structure

```
project/
├── client/                    # React Frontend (SPA)
│   ├── pages/                 # Route components
│   │   ├── Index.tsx          # Home page
│   │   ├── Home.tsx           # Services page
│   │   ├── Services.tsx       # Services listing
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Dashboard.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── ui/                # Pre-built UI components
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── api.ts             # API request helper
│   │   ├── utils.ts
│   │   └── ...
│   ├── contexts/              # React Context (theme, auth, etc)
│   ├── App.tsx                # SPA router setup
│   └── main.tsx               # Entry point
│
├── shared/                    # Shared Types
│   └── api.ts                 # Shared API interfaces
│
├── server/                    # OLD: Express Server (deprecated)
│   ├── index.ts
│   ├── routes/
│   └── ...
│
├── vite.config.ts             # Frontend (+ API proxy)
├── vite.config.server.ts      # Server build (unused)
├── package.json
├── tailwind.config.ts
└── .env                       # Environment config
```

## 🔗 API Configuration

### File: `client/lib/api.ts`

```typescript
export async function apiRequest(endpoint: string, options?: RequestInit) {
  // Development: Relative URLs via proxy → localhost:8000
  // Production: VITE_API_URL from environment
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const url = `${baseUrl}/api${endpoint}`;
  
  const response = await fetch(url, { ... });
  return response.json();
}
```

### Usage in Components

```typescript
import { apiRequest } from '@/lib/api';

// Call Laravel API endpoint
const data = await apiRequest('/services');
const dashboard = await apiRequest('/dashboard');
```

## 📡 Available Laravel API Endpoints

Semua endpoint di `laravel-files/ApiController.php`:

```
GET  /api/ping        - Health check
GET  /api/services    - List services (public)
GET  /api/products    - List products (public)
GET  /api/faq         - List FAQ items (public)
GET  /api/dashboard   - Get user dashboard (protected, requires auth)
```

Response Format:

```json
{
  "items": [...]  // atau "profile", "activities", dll
}
```

## 🔐 Authentication

### Laravel Session-based Auth

React frontend dapat menggunakan Laravel's session authentication:

```typescript
// Login (POST ke Laravel)
const response = await apiRequest('/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});

// Logout
await apiRequest('/logout', { method: 'POST' });

// Get current user
const user = await apiRequest('/user');
```

### CORS Configuration

Laravel's CORS sudah dikonfigurasi di `config/cors.php` untuk development:

```php
'allowed_origins' => ['localhost:8080'],  // Atau gunakan wildcard untuk dev
```

## 🛠️ Development Workflow

### Terminal 1: React Frontend (Vite Dev Server)

```bash
cd /path/to/project
pnpm dev

# Output:
# ➜  Local:   http://localhost:8080/
```

### Terminal 2: Laravel Backend (PHP Artisan)

```bash
cd /path/to/dzak-cloud
php artisan serve

# Output:
# Server running on [http://127.0.0.1:8000]
```

### Akses Aplikasi

- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:8000/api/*`
- Laravel Admin: `http://localhost:8000/dashboard` (jika ada)

## 🧪 Testing API Calls

### Using Thunder Client / Postman

```
GET http://localhost:8000/api/services

Response:
{
  "items": [
    {
      "id": "1",
      "icon": "cloud",
      "title": "Cloud VPS",
      "description": "..."
    },
    ...
  ]
}
```

### From React Component

```typescript
import { useEffect, useState } from 'react';
import { apiRequest } from '@/lib/api';

export function ServiceList() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    apiRequest('/services')
      .then(data => setServices(data.items))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}
```

## ⚙️ Environment Configuration

### Development (`.env`)

```env
# Frontend API - empty untuk dev (gunakan proxy)
VITE_API_URL=

# Atau explicit untuk testing:
VITE_API_URL=http://localhost:8000
```

### Production (`.env.production`)

```env
# Use actual Laravel domain
VITE_API_URL=https://api.example.com
```

## 🐛 Troubleshooting

### Error: "Failed to fetch from /api/..."

**Kemungkinan:**
1. Laravel server tidak running (`php artisan serve`)
2. CORS error - check Laravel CORS config
3. API endpoint tidak ada

**Solution:**
```bash
# Test Laravel API directly
curl http://localhost:8000/api/services

# Check if Laravel is running
php artisan serve
```

### Error: "localhost:8000 refused connection"

Laravel server tidak running. Jalankan di terminal terpisah:

```bash
cd dzak-cloud
php artisan serve
```

### CORS Error on Production

Update Laravel `.env` dan `config/cors.php`:

```php
// config/cors.php
'allowed_origins' => ['https://yourdomain.com'],
```

### Database Connection Error

Check Laravel `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dzak_cloud
DB_USERNAME=root
DB_PASSWORD=password
```

## 📦 Build for Production

### Build React SPA

```bash
pnpm build

# Output: dist/spa/
```

### Deploy React to Netlify/Vercel

```bash
# Vercel (automatic)
vercel

# Netlify (manual)
# Drag & drop dist/spa/ folder
```

### Deploy Laravel

Use shared hosting atau VPS dengan PHP 8.1+:

```bash
# Upload files via FTP/SSH
# Setup database
# Run migrations

php artisan migrate --force
php artisan optimize
```

## 📚 Resources

- **React Router**: https://reactrouter.com/en/main
- **Laravel API**: https://laravel.com/docs/routing
- **Vite Proxy**: https://vitejs.dev/config/server-options.html#server-proxy
- **CORS**: https://laravel.com/docs/middleware#cors

## 🎯 Next Steps

1. ✅ Setup React frontend (sudah siap)
2. 📋 Setup Laravel backend (ikuti `laravel-files/SETUP_INSTRUCTIONS.md`)
3. 🧪 Test API communication
4. 🔐 Implement authentication (jika diperlukan)
5. 🚀 Deploy ke production

---

**Questions?** Check Laravel docs atau React Router docs untuk detail lebih lanjut!
