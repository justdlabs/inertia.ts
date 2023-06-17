<?php

namespace App\Http\Controllers;

use App\Clara\Clara;
use Illuminate\Http\Request;
use Inertia\Response;

class PrivacyPolicyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $policyFile = Clara::localizedMarkdownPath('policy.md');

        return inertia('legal/privacy-policy', [
            'policy' => str()->markdown(file_get_contents($policyFile)),
        ]);
    }
}
