<?php

namespace App\Http\Middleware;

use App\Clara\Clara;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Laravel\Pennant\Feature;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    protected function createAcronym($string): ?string
    {
        $output = null;
        $token = strtok($string, ' ');
        while ($token !== false) {
            $output .= $token[0];
            $token = strtok(' ');
        }

        return $output;
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'acronym' => $this->createAcronym($request->user()->name),
                    'id' => $request->user()->id,
                    'username' => $request->user()->username,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                ] : null,
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(), ...[
                    'location' => $request->url(),
                ],
            ],

            'hasTermsAndPrivacyPolicyFeature' => Clara::hasTermsAndPrivacyPolicyFeature(),
        ]);
    }
}
