<?php

namespace App\Http\Middleware;

use App\Clara\Clara;
use App\Http\Resources\AuthenticatedUserResource;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? AuthenticatedUserResource::make($request->user()) : null,
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
