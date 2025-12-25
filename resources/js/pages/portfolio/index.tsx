import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: 'About', href: 'about' },
        { label: 'Projects', href: 'projects' },
        { label: 'Skills', href: 'skills' },
        { label: 'Contact', href: 'contact' },
    ];

    return (
        <>
            <Head title={profile.full_name} />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
                {/* Navigation */}
                <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg shadow-lg' 
                        : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md'
                } border-b border-slate-200 dark:border-slate-800`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo/Name */}
                            <button
                                onClick={() => scrollToSection('about')}
                                className="flex items-center gap-2 group"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition"></div>
                                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg px-3 py-1.5 rounded-lg">
                                        {profile.full_name.split(' ').map(name => name[0]).join('')}
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent hidden sm:block">
                                    {profile.full_name}
                                </span>
                            </button>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        className="relative text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                ))}
                            </div>

                            {/* Social Links & Mobile Menu */}
                            <div className="flex items-center gap-3">
                                {/* Social Icons - Desktop */}
                                <div className="hidden sm:flex items-center gap-3">
                                    {profile.github_url && (
                                        <a 
                                            href={profile.github_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                                        >
                                            <Icon name="github" className="h-5 w-5" />
                                        </a>
                                    )}
                                    {profile.linkedin_url && (
                                        <a 
                                            href={profile.linkedin_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                                        >
                                            <Icon name="linkedin" className="h-5 w-5" />
                                        </a>
                                    )}
                                    {profile.twitter_url && (
                                        <a 
                                            href={profile.twitter_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                                        >
                                            <Icon name="twitter" className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>

                                {/* Mobile Menu Button */}
                                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="md:hidden"
                                        >
                                            <Icon name={mobileMenuOpen ? "x" : "menu"} className="h-6 w-6" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-full sm:w-80">
                                        <div className="flex flex-col gap-6 mt-8">
                                            {/* Mobile Navigation Links */}
                                            <div className="flex flex-col gap-2">
                                                {navLinks.map((link) => (
                                                    <button
                                                        key={link.href}
                                                        onClick={() => scrollToSection(link.href)}
                                                        className="flex items-center gap-3 p-4 text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all group"
                                                    >
                                                        <span className="text-lg font-medium">{link.label}</span>
                                                        <Icon name="arrow-right" className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Mobile Social Links */}
                                            <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Connect with me</p>
                                                <div className="flex gap-3">
                                                    {profile.github_url && (
                                                        <a 
                                                            href={profile.github_url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex-1 flex items-center justify-center gap-2 p-3 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all"
                                                        >
                                                            <Icon name="github" className="h-5 w-5" />
                                                        </a>
                                                    )}
                                                    {profile.linkedin_url && (
                                                        <a 
                                                            href={profile.linkedin_url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex-1 flex items-center justify-center gap-2 p-3 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all"
                                                        >
                                                            <Icon name="linkedin" className="h-5 w-5" />
                                                        </a>
                                                    )}
                                                    {profile.twitter_url && (
                                                        <a 
                                                            href={profile.twitter_url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex-1 flex items-center justify-center gap-2 p-3 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all"
                                                        >
                                                            <Icon name="twitter" className="h-5 w-5" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Mobile CTA */}
                                            {profile.resume_url && (
                                                <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                                                    <Button className="w-full" asChild>
                                                        <a href={profile.resume_url} target="_blank" rel="noopener noreferrer">
                                                            <Icon name="download" className="mr-2 h-4 w-4" />
                                                            Download Resume
                                                        </a>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </SheetContent>
                                </Sheet>
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
