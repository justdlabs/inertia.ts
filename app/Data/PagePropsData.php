<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PagePropsData extends Data
{
    public function __construct(
        public AuthData $auth,
        public FlashMessageData $flashMessage,
    ) {}
}
