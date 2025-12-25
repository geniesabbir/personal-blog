<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProfileSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProfileSettingController extends Controller
{
    public function index()
    {
        $settings = ProfileSetting::all()->pluck('value', 'key');
        
        return Inertia::render('admin/profile-settings/index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'nullable|string|max:255',
            'tagline' => 'nullable|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:50',
            'location' => 'nullable|string|max:255',
            'avatar' => 'nullable|image|max:2048',
            'resume_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'twitter_url' => 'nullable|url',
        ]);

        if ($request->hasFile('avatar')) {
            $oldAvatar = ProfileSetting::get('avatar');
            if ($oldAvatar) {
                Storage::disk('public')->delete($oldAvatar);
            }
            $validated['avatar'] = $request->file('avatar')->store('profile', 'public');
        }

        foreach ($validated as $key => $value) {
            ProfileSetting::set($key, $value);
        }

        return redirect()->route('admin.profile-settings.index')
            ->with('success', 'Profile updated successfully.');
    }
}
