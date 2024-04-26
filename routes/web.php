<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Http\Controllers\HomeController::class)->name('home');

Route::get('about', \App\Http\Controllers\AboutController::class)->name('about');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', \App\Http\Controllers\DashboardController::class)->name('dashboard');

    Route::get('categories', [\App\Http\Controllers\CategoryController::class, 'index'])->name('categories.index');
    Route::get('articles', [\App\Http\Controllers\ArticleController::class, 'index'])->name('articles.index');

    Route::controller(\App\Http\Controllers\ProfileController::class)->middleware('auth')->group(function () {
        Route::get('profile/edit', 'edit')->name('profile.edit');
        Route::patch('profile', 'update')->name('profile.update');
        Route::delete('profile', 'destroy')->name('profile.destroy');
    });
});

Route::resource('users', \App\Http\Controllers\UserController::class)
    ->only(['index', 'show', 'destroy', 'edit', 'update'])
    ->middleware('auth');

require __DIR__ . '/features.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/dev.php';
