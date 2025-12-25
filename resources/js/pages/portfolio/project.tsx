import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string | null;
    technologies: string[];
    demo_url: string | null;
    github_url: string | null;
    completed_at: string | null;
}

interface Props {
    project: Project;
}

export default function ProjectDetail({ project }: Props) {
    return (
        <>
            <Head title={project.title} />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Button variant="ghost" asChild>
                                <Link href="/">
                                    <Icon name="arrow-left" className="mr-2 h-4 w-4" />
                                    Back to Portfolio
                                </Link>
                            </Button>
                        </div>
                    </div>
                </nav>

                {/* Project Hero */}
                <section className="pt-32 pb-12 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-4 flex-wrap">
                                {project.demo_url && (
                                    <Button asChild>
                                        <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                                            <Icon name="external-link" className="mr-2 h-4 w-4" />
                                            View Live Demo
                                        </a>
                                    </Button>
                                )}
                                {project.github_url && (
                                    <Button variant="outline" asChild>
                                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                            <Icon name="github" className="mr-2 h-4 w-4" />
                                            View Source Code
                                        </a>
                                    </Button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="text-sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            {project.completed_at && (
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Completed: {new Date(project.completed_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long'
                                    })}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Project Image */}
                {project.image && (
                    <section className="pb-12 px-6">
                        <div className="container mx-auto max-w-4xl">
                            <img 
                                src={`/storage/${project.image}`} 
                                alt={project.title}
                                className="w-full rounded-lg shadow-2xl"
                            />
                        </div>
                    </section>
                )}

                {/* Project Content */}
                {project.content && (
                    <section className="pb-20 px-6">
                        <div className="container mx-auto max-w-4xl">
                            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
                                <div 
                                    className="prose prose-slate dark:prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: project.content }}
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto max-w-6xl text-center">
                        <Button variant="outline" asChild>
                            <Link href="/">
                                <Icon name="arrow-left" className="mr-2 h-4 w-4" />
                                Back to Portfolio
                            </Link>
                        </Button>
                    </div>
                </footer>
            </div>
        </>
    );
}
