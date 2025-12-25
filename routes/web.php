<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\ProfileSettingController;

// Portfolio Routes (Public)
Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/project/{slug}', [PortfolioController::class, 'project'])->name('portfolio.project');

// Dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Admin Routes
    Route::prefix('admin')->name('admin.')->group(function () {
        // Projects
        Route::resource('projects', ProjectController::class);
        
        // Skills
        Route::resource('skills', SkillController::class);
        
        // Profile Settings
        Route::get('profile-settings', [ProfileSettingController::class, 'index'])
            ->name('profile-settings.index');
        Route::post('profile-settings', [ProfileSettingController::class, 'update'])
            ->name('profile-settings.update');
    });
});

require __DIR__.'/settings.php';
