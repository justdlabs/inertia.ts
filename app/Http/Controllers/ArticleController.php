<?php

namespace App\Http\Controllers;

class ArticleController extends Controller
{
    public function index()
    {
        return inertia('articles/index');
    }
}
