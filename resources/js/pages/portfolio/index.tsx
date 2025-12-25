import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string | null;
    technologies: string[];
    demo_url: string | null;
    github_url: string | null;
    is_featured: boolean;
}

interface Skill {
    id: number;
    name: string;
    category: string;
    proficiency: number;
    icon: string | null;
}

interface Profile {
    full_name: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    resume_url: string;
    github_url: string;
    linkedin_url: string;
    twitter_url: string;
}

interface Props {
    profile: Profile;
    featuredProjects: Project[];
    projects: Project[];
    skillsByCategory: Record<string, Skill[]>;
}

export default function PortfolioIndex({ profile, featuredProjects, projects, skillsByCategory }: Props) {
    const [showAllProjects, setShowAllProjects] = useState(false);

    return (
        <>
            <Head title={profile.full_name} />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                {profile.full_name}
                            </div>
                            <div className="hidden md:flex items-center gap-6">
                                <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                                    About
                                </a>
                                <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                                    Projects
                                </a>
                                <a href="#skills" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                                    Skills
                                </a>
                                <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                                    Contact
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                {profile.github_url && (
                                    <a href={profile.github_url} target="_blank" rel="noopener noreferrer" 
                                       className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                                        <Icon name="github" className="h-5 w-5" />
                                    </a>
                                )}
                                {profile.linkedin_url && (
                                    <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer"
                                       className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                                        <Icon name="linkedin" className="h-5 w-5" />
                                    </a>
                                )}
                                {profile.twitter_url && (
                                    <a href={profile.twitter_url} target="_blank" rel="noopener noreferrer"
                                       className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                                        <Icon name="twitter" className="h-5 w-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="about" className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
                                        {profile.full_name}
                                    </h1>
                                    <p className="text-2xl text-slate-600 dark:text-slate-400">
                                        {profile.tagline}
                                    </p>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {profile.bio}
                                </p>
                                <div className="flex items-center gap-4 flex-wrap">
                                    {profile.email && (
                                        <Button asChild>
                                            <a href={`mailto:${profile.email}`}>
                                                <Icon name="mail" className="mr-2 h-4 w-4" />
                                                Get in Touch
                                            </a>
                                        </Button>
                                    )}
                                    {profile.resume_url && (
                                        <Button variant="outline" asChild>
                                            <a href={profile.resume_url} target="_blank" rel="noopener noreferrer">
                                                <Icon name="download" className="mr-2 h-4 w-4" />
                                                Download Resume
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            {profile.avatar && (
                                <div className="flex-shrink-0">
                                    <img 
                                        src={`/storage/${profile.avatar}`} 
                                        alt={profile.full_name}
                                        className="w-64 h-64 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                {featuredProjects.length > 0 && (
                    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                    Featured Projects
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Check out some of my best work
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredProjects.map((project) => (
                                    <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                                        {project.image && (
                                            <img 
                                                src={`/storage/${project.image}`} 
                                                alt={project.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        )}
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                            <CardDescription>{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies?.map((tech, index) => (
                                                    <Badge key={index} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-2">
                                                {project.demo_url && (
                                                    <Button size="sm" asChild>
                                                        <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                                                            <Icon name="external-link" className="mr-2 h-3 w-3" />
                                                            Demo
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.github_url && (
                                                    <Button size="sm" variant="outline" asChild>
                                                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                                            <Icon name="github" className="mr-2 h-3 w-3" />
                                                            Code
                                                        </a>
                                                    </Button>
                                                )}
                                                <Button size="sm" variant="ghost" asChild>
                                                    <Link href={`/project/${project.slug}`}>
                                                        Learn More
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Skills Section */}
                {Object.keys(skillsByCategory).length > 0 && (
                    <section id="skills" className="py-20 px-6">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                    Skills & Technologies
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Technologies I work with
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {Object.entries(skillsByCategory).map(([category, skills]) => (
                                    <Card key={category}>
                                        <CardHeader>
                                            <CardTitle>{category}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {skills.map((skill) => (
                                                    <div key={skill.id}>
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                                {skill.name}
                                                            </span>
                                                            <span className="text-sm text-slate-500">
                                                                {skill.proficiency}%
                                                            </span>
                                                        </div>
                                                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                            <div 
                                                                className="h-full bg-blue-600 dark:bg-blue-500 transition-all"
                                                                style={{ width: `${skill.proficiency}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* All Projects Section */}
                {projects.length > featuredProjects.length && (
                    <section className="py-20 px-6 bg-white dark:bg-slate-900">
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                    All Projects
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {(showAllProjects ? projects : projects.slice(0, 6)).map((project) => (
                                    <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                                        {project.image && (
                                            <img 
                                                src={`/storage/${project.image}`} 
                                                alt={project.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        )}
                                        <CardHeader>
                                            <CardTitle className="text-lg">{project.title}</CardTitle>
                                            <CardDescription className="line-clamp-2">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button size="sm" variant="outline" className="w-full" asChild>
                                                <Link href={`/project/${project.slug}`}>
                                                    View Details
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            {projects.length > 6 && (
                                <div className="text-center mt-8">
                                    <Button 
                                        onClick={() => setShowAllProjects(!showAllProjects)}
                                        variant="outline"
                                        size="lg"
                                    >
                                        {showAllProjects ? 'Show Less' : 'Show More Projects'}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Contact Section */}
                <section id="contact" className="py-20 px-6">
                    <div className="container mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {profile.email && (
                                <Button size="lg" asChild>
                                    <a href={`mailto:${profile.email}`}>
                                        <Icon name="mail" className="mr-2 h-5 w-5" />
                                        {profile.email}
                                    </a>
                                </Button>
                            )}
                            {profile.phone && (
                                <Button size="lg" variant="outline" asChild>
                                    <a href={`tel:${profile.phone}`}>
                                        <Icon name="phone" className="mr-2 h-5 w-5" />
                                        {profile.phone}
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto max-w-6xl text-center text-slate-600 dark:text-slate-400">
                        <p>© {new Date().getFullYear()} {profile.full_name}. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
