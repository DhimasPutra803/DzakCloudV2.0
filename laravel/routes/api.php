<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('api')->group(function () {
    // Health check
    Route::get('/ping', [ApiController::class, 'ping']);

    // Public API endpoints
    Route::get('/services', [ApiController::class, 'getServices']);
    Route::get('/products', [ApiController::class, 'getProducts']);
    Route::get('/faq', [ApiController::class, 'getFaq']);

    // Protected API endpoints
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/dashboard', [ApiController::class, 'getDashboard']);
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });
});
