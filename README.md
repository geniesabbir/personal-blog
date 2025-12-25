# Personal Portfolio + Blog Site

A modern personal portfolio and blog website built with Laravel 12 and React (Inertia.js), featuring a comprehensive admin panel.

## Features

### Portfolio Section ✅
- **Hero/About Section**: Showcase your name, tagline, bio, and avatar
- **Projects Showcase**: Display your work with featured projects
- **Skills Display**: Organized by categories with proficiency levels
- **Contact Section**: Easy ways to get in touch
- **Project Detail Pages**: Individual pages for each project

### Admin Panel ✅
- **Projects Management**: 
  - Create, edit, and delete projects
  - Upload project images
  - Add technologies, demo links, and GitHub links
  - Mark projects as featured
  - Control visibility (published/draft)
  - Reorder projects
  
- **Skills Management**:
  - Add and organize skills by category
  - Set proficiency levels (0-100%)
  - Reorder skills
  
- **Profile Settings**:
  - Update personal information
  - Upload avatar
  - Add social media links
  - Set resume URL

### Coming Soon
- **Blog System**: Full-featured blog with categories, tags, and comments
- **Blog Admin**: Create and manage blog posts

## Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React 18 + TypeScript
- **UI Framework**: Inertia.js
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: Laravel Fortify
- **Database**: MySQL/PostgreSQL/SQLite

## Installation

1. Clone the repository:
```bash
git clone https://github.com/geniesabbir/personal-blog.git
cd personal-blog
```

2. Install dependencies:
```bash
composer install
npm install
```

3. Set up environment:
```bash
cp .env.example .env
php artisan key:generate
```

4. Configure your database in `.env`

5. Run migrations and seed demo data:
```bash
php artisan migrate
php artisan db:seed --class=PortfolioSeeder
```

6. Link storage:
```bash
php artisan storage:link
```

7. Build assets and start the server:
```bash
npm run build
php artisan serve
```

Or for development with hot reload:
```bash
npm run dev
# In another terminal:
php artisan serve
```

## Usage

### Public Portfolio
Visit `/` to see your public portfolio page with:
- Hero section with your info
- Featured projects
- All projects
- Skills organized by category
- Contact information

### Admin Dashboard
1. Register an account at `/register`
2. Access the dashboard at `/dashboard`
3. Manage your content:
   - `/admin/projects` - Manage projects
   - `/admin/skills` - Manage skills
   - `/admin/profile-settings` - Edit profile

### Demo Data
The seeder includes:
- 3 sample projects (E-Commerce Platform, Task Management App, Portfolio Builder)
- 16 skills across 4 categories (Frontend, Backend, Database, Tools)
- Default profile settings

## File Structure

```
app/
├── Http/Controllers/
│   ├── PortfolioController.php        # Public portfolio pages
│   └── Admin/
│       ├── ProjectController.php      # Projects CRUD
│       ├── SkillController.php        # Skills CRUD
│       └── ProfileSettingController.php
├── Models/
│   ├── Project.php
│   ├── Skill.php
│   └── ProfileSetting.php
database/
├── migrations/
│   ├── *_create_projects_table.php
│   ├── *_create_skills_table.php
│   └── *_create_profile_settings_table.php
└── seeders/
    └── PortfolioSeeder.php
resources/js/
├── pages/
│   ├── portfolio/
│   │   ├── index.tsx                  # Main portfolio page
│   │   └── project.tsx                # Project detail page
│   ├── admin/
│   │   └── projects/
│   │       ├── index.tsx              # Projects list
│   │       └── create.tsx             # Create project
│   └── dashboard.tsx                   # Admin dashboard
```

## Customization

### Update Your Information
1. Log in to the admin dashboard
2. Go to "Profile Settings"
3. Update your name, tagline, bio, contact info, and social links

### Add Your Projects
1. Go to "Projects" in the admin
2. Click "Add Project"
3. Fill in the details:
   - Title and description
   - Upload an image
   - Add technologies
   - Add demo and GitHub links
   - Mark as featured to show on the homepage

### Add Your Skills
1. Go to "Skills" in the admin
2. Add skills with categories (Frontend, Backend, Database, Tools, etc.)
3. Set proficiency levels
4. Reorder as needed

## Database Schema

### Projects Table
- `id`, `title`, `slug`, `description`, `content`
- `image`, `technologies` (JSON), `demo_url`, `github_url`
- `completed_at`, `is_featured`, `is_published`, `order`

### Skills Table
- `id`, `name`, `category`, `proficiency`, `icon`, `order`

### Profile Settings Table
- `id`, `key`, `value` (key-value pairs for profile data)

## License

This project is open-sourced software licensed under the MIT license.

## Author

Built with ❤️ for personal portfolios and blogs
