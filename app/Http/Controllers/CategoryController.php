<?php

namespace App\Http\Controllers;

class CategoryController extends Controller
{
    public function index()
    {
        return inertia('categories/index');
    }
}
