<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

if (! app()->isProduction()) {
    Route::get('login/{id}', function ($id = null) {
        auth()->login(User::find($id));

        return redirect('/');
    });
}
