<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

// API Routes
Route::get('/ping', [ApiController::class, 'ping'])->name('api.ping');
Route::get('/services', [ApiController::class, 'getServices'])->name('api.services');
Route::get('/products', [ApiController::class, 'getProducts'])->name('api.products');
Route::get('/faq', [ApiController::class, 'getFaq'])->name('api.faq');

// Protected API Routes
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [ApiController::class, 'getDashboard'])->name('api.dashboard');
});
