<?php

namespace App\Clara;

use Illuminate\Support\Arr;

class Clara
{
    public static function localizedMarkdownPath($name)
    {
        $localName = preg_replace('#(\.md)$#i', '.' . app()->getLocale() . '$1', $name);

        return Arr::first([
            resource_path('markdown/' . $localName),
            resource_path('markdown/' . $name),
        ], function ($path) {
            return file_exists($path);
        });
    }

    public static function hasTermsAndPrivacyPolicyFeature(): bool
    {
        return config('app.terms_and_policy');
    }
}
