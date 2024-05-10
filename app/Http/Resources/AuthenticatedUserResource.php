<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthenticatedUserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'avatar' => $this->avatar(),
            'acronym' => $this->createAcronym($request->user()->name),
            'id' => $this->id,
            'username' => $this->username,
            'name' => $this->name,
            'email' => $this->email,
            'status' => $this->hasVerifiedEmail() ? 'Verified' : 'Unverified',
            'joined' => $this->created_at->format('j M Y, g:i a'),
        ];
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
}
