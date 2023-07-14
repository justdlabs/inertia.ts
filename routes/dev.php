<?php

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Route;

Route::get('login/{id}', function ($id = null) {
    auth()->login(User::find($id));

    return redirect(RouteServiceProvider::HOME);
});
