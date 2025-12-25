<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Skill;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample Projects
        Project::create([
            'title' => 'E-Commerce Platform',
            'slug' => 'e-commerce-platform',
            'description' => 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
            'content' => '<p>Built a comprehensive e-commerce solution using modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an intuitive admin panel.</p>',
            'technologies' => ['Laravel', 'React', 'MySQL', 'Stripe', 'Tailwind CSS'],
            'demo_url' => 'https://example.com/demo',
            'github_url' => 'https://github.com/example/ecommerce',
            'completed_at' => now()->subMonths(2),
            'is_featured' => true,
            'is_published' => true,
            'order' => 1,
        ]);

        Project::create([
            'title' => 'Task Management App',
            'slug' => 'task-management-app',
            'description' => 'A collaborative task management application with real-time updates and team features.',
            'content' => '<p>Developed a team collaboration tool with real-time task tracking, project boards, and team communication features. Implemented WebSocket for live updates.</p>',
            'technologies' => ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
            'demo_url' => 'https://example.com/tasks',
            'github_url' => 'https://github.com/example/tasks',
            'completed_at' => now()->subMonths(4),
            'is_featured' => true,
            'is_published' => true,
            'order' => 2,
        ]);

        Project::create([
            'title' => 'Portfolio Website Builder',
            'slug' => 'portfolio-builder',
            'description' => 'A drag-and-drop portfolio website builder with customizable templates.',
            'content' => '<p>Created an intuitive website builder that allows users to create professional portfolios without coding. Features include drag-and-drop editor, template library, and custom domain support.</p>',
            'technologies' => ['React', 'TypeScript', 'Next.js', 'Prisma', 'PostgreSQL'],
            'demo_url' => 'https://example.com/builder',
            'completed_at' => now()->subMonths(6),
            'is_featured' => true,
            'is_published' => true,
            'order' => 3,
        ]);

        // Sample Skills
        $skills = [
            // Frontend
            ['name' => 'React', 'category' => 'Frontend', 'proficiency' => 95, 'order' => 1],
            ['name' => 'Vue.js', 'category' => 'Frontend', 'proficiency' => 85, 'order' => 2],
            ['name' => 'TypeScript', 'category' => 'Frontend', 'proficiency' => 90, 'order' => 3],
            ['name' => 'Tailwind CSS', 'category' => 'Frontend', 'proficiency' => 90, 'order' => 4],
            
            // Backend
            ['name' => 'Laravel', 'category' => 'Backend', 'proficiency' => 95, 'order' => 1],
            ['name' => 'Node.js', 'category' => 'Backend', 'proficiency' => 85, 'order' => 2],
            ['name' => 'PHP', 'category' => 'Backend', 'proficiency' => 90, 'order' => 3],
            ['name' => 'Python', 'category' => 'Backend', 'proficiency' => 75, 'order' => 4],
            
            // Database
            ['name' => 'MySQL', 'category' => 'Database', 'proficiency' => 90, 'order' => 1],
            ['name' => 'PostgreSQL', 'category' => 'Database', 'proficiency' => 85, 'order' => 2],
            ['name' => 'MongoDB', 'category' => 'Database', 'proficiency' => 80, 'order' => 3],
            
            // Tools & DevOps
            ['name' => 'Git', 'category' => 'Tools', 'proficiency' => 95, 'order' => 1],
            ['name' => 'Docker', 'category' => 'Tools', 'proficiency' => 80, 'order' => 2],
            ['name' => 'AWS', 'category' => 'Tools', 'proficiency' => 75, 'order' => 3],
            ['name' => 'CI/CD', 'category' => 'Tools', 'proficiency' => 80, 'order' => 4],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
