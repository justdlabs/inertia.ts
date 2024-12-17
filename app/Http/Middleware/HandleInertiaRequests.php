<?php

namespace App\Http\Middleware;

use App\Data\AuthenticatedUserData;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user() ? AuthenticatedUserData::from($request->user()) : null,
            ],
            'ziggy' => fn () => [
                'location' => $request->url(),
                'query' => $request->query(),
            ],
            'flash_message' => fn () => [
                'type' => $request->session()->get('type') ?? 'success',
                'message' => $request->session()->get('message'),
            ],
        ];
    }
}
