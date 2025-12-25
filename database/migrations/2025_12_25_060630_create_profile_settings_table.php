<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profile_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->timestamps();
        });

        // Insert default profile settings
        DB::table('profile_settings')->insert([
            ['key' => 'full_name', 'value' => 'Your Name', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'tagline', 'value' => 'Full Stack Developer', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'bio', 'value' => 'Passionate developer...', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'email', 'value' => 'your@email.com', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'phone', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'location', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'avatar', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'resume_url', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'github_url', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'linkedin_url', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'twitter_url', 'value' => '', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_settings');
    }
};
