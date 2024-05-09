<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');

Route::get('about', Controllers\AboutController::class)->name('about');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', Controllers\DashboardController::class)->name('dashboard');

    Route::controller(Controllers\ProfileController::class)->middleware('auth')->group(function () {
        Route::get('profile/edit', 'edit')->name('profile.edit');
        Route::patch('profile', 'update')->name('profile.update');
        Route::delete('profile', 'destroy')->name('profile.destroy');
    });
});

require __DIR__ . '/features.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/dev.php';
