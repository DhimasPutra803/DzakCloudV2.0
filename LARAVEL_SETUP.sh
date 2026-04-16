#!/bin/bash

# DzakCloud Laravel + React Setup Script
# This script will setup both Laravel backend and React frontend

set -e

echo "================================"
echo "DzakCloud Setup Script"
echo "================================"
echo ""

# Check prerequisites
echo "✓ Checking prerequisites..."

if ! command -v php &> /dev/null; then
    echo "✗ PHP is not installed. Please install PHP 8.1+"
    exit 1
fi

if ! command -v composer &> /dev/null; then
    echo "✗ Composer is not installed. Please install Composer"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "✗ Node.js is not installed. Please install Node.js"
    exit 1
fi

echo "✓ All prerequisites found"
echo ""

# Setup Laravel Backend
echo "================================"
echo "Setting up Laravel Backend"
echo "================================"
echo ""

cd laravel

echo "1. Creating .env file..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "   ✓ .env created from .env.example"
    echo "   ⚠ Please edit laravel/.env with your database credentials"
else
    echo "   ✓ .env already exists"
fi

echo ""
echo "2. Installing Composer dependencies..."
if [ ! -d vendor ]; then
    composer install --quiet
    echo "   ✓ Dependencies installed"
else
    echo "   ✓ Dependencies already installed"
fi

echo ""
echo "3. Generating application key..."
if ! grep -q "APP_KEY=base64:" .env; then
    php artisan key:generate --quiet
    echo "   ✓ Application key generated"
else
    echo "   ✓ Application key already exists"
fi

echo ""
echo "4. Checking database..."
echo "   ℹ Laravel backend configured with:"
grep "DB_CONNECTION\|DB_HOST\|DB_DATABASE" .env
echo "   ℹ Make sure your database server is running"
echo "   ℹ To create database, run:"
echo "     mysql -u root -p -e 'CREATE DATABASE dzakcloud;'"
echo "   ℹ Then run migrations: php artisan migrate"

cd ..

echo ""

# Setup React Frontend
echo "================================"
echo "Setting up React Frontend"
echo "================================"
echo ""

echo "1. Checking .env for API URL..."
if grep -q "VITE_API_URL" .env; then
    echo "   ✓ VITE_API_URL configured"
    grep "VITE_API_URL" .env
else
    echo "   ✓ Adding VITE_API_URL to .env"
    echo "VITE_API_URL=http://localhost:8000" >> .env
fi

echo ""
echo "2. Installing npm dependencies..."
if [ ! -d node_modules ]; then
    pnpm install
    echo "   ✓ Dependencies installed"
else
    echo "   ✓ Dependencies already installed"
fi

echo ""

# Summary
echo "================================"
echo "Setup Complete! ✓"
echo "================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Configure Laravel database (laravel/.env):"
echo "   $ nano laravel/.env"
echo ""
echo "2. Create MySQL database:"
echo "   $ mysql -u root -p"
echo "   mysql> CREATE DATABASE dzakcloud;"
echo ""
echo "3. Run Laravel migrations:"
echo "   $ cd laravel && php artisan migrate"
echo ""
echo "4. Start Laravel backend (Terminal 1):"
echo "   $ cd laravel && php artisan serve"
echo "   Backend will run at http://localhost:8000"
echo ""
echo "5. Start React frontend (Terminal 2):"
echo "   $ pnpm dev"
echo "   Frontend will run at http://localhost:5173"
echo ""
echo "6. Test the setup:"
echo "   $ curl http://localhost:8000/api/ping"
echo ""
echo "Documentation:"
echo "   - Laravel Setup: laravel/SETUP_GUIDE.md"
echo "   - Migration Guide: MIGRATION_GUIDE.md"
echo ""
echo "Happy coding! 🚀"
