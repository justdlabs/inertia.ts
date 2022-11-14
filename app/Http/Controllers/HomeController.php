<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(Request $request): Response
    {
        return inertia('Home');
    }
}
