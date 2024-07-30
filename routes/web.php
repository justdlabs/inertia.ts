<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');

Route::get('dashboard', Controllers\DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');
Route::get('about', Controllers\AboutController::class)->name('about');

Route::middleware('auth')->group(function () {
    Route::get('profile', [Controllers\ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [Controllers\ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [Controllers\ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('terms', Controllers\TermsController::class)->name('terms.show');
Route::get('privacy', Controllers\PrivacyController::class)->name('privacy.show');

require __DIR__ . '/auth.php';
require __DIR__ . '/dev.php';
