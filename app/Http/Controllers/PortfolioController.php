<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\ProfileSetting;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $profile = [
            'full_name' => ProfileSetting::get('full_name'),
            'tagline' => ProfileSetting::get('tagline'),
            'bio' => ProfileSetting::get('bio'),
            'email' => ProfileSetting::get('email'),
            'phone' => ProfileSetting::get('phone'),
            'location' => ProfileSetting::get('location'),
            'avatar' => ProfileSetting::get('avatar'),
            'resume_url' => ProfileSetting::get('resume_url'),
            'github_url' => ProfileSetting::get('github_url'),
            'linkedin_url' => ProfileSetting::get('linkedin_url'),
            'twitter_url' => ProfileSetting::get('twitter_url'),
        ];

        $featuredProjects = Project::where('is_published', true)
            ->where('is_featured', true)
            ->orderBy('order')
            ->take(3)
            ->get();

        $projects = Project::where('is_published', true)
            ->orderBy('order')
            ->get();

        $skillsByCategory = Skill::orderBy('order')
            ->get()
            ->groupBy('category');

        return Inertia::render('portfolio/index', [
            'profile' => $profile,
            'featuredProjects' => $featuredProjects,
            'projects' => $projects,
            'skillsByCategory' => $skillsByCategory,
        ]);
    }

    public function project($slug)
    {
        $project = Project::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return Inertia::render('portfolio/project', [
            'project' => $project,
        ]);
    }
}
