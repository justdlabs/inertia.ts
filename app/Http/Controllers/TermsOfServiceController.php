<?php

namespace App\Http\Controllers;

use App\Clara\Clara;
use Illuminate\Http\Request;
use Inertia\Response;

class TermsOfServiceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $termsFile = Clara::localizedMarkdownPath('terms.md');

        return inertia('Legal/TermsOfService', [
            'terms' => str()->markdown(file_get_contents($termsFile)),
        ]);
    }
}
