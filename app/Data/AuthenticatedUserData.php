<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class AuthenticatedUserData extends Data
{
    public function __construct(
        public int $id,
        public string $email,
        public string $name,
        public string $gravatar,
        public ?string $email_verified_at,
    ) {}
}
