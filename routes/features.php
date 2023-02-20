<?php

use App\Clara\Clara;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\TermsOfServiceController;

if (Clara::hasTermsAndPrivacyPolicyFeature()) {
    Route::get('/terms-of-service', TermsOfServiceController::class)->name('terms.show');
    Route::get('/privacy-policy', PrivacyPolicyController::class)->name('privacy.show');
}
