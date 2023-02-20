<?php

namespace App\Http\Controllers;

use App\Clara\Clara;
use Illuminate\Http\Request;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $aboutFile = Clara::localizedMarkdownPath('about.md');
        return inertia('About', [
            'about' => str()->markdown(file_get_contents($aboutFile)),
        ]);
    }
}
