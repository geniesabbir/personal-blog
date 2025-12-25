import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string | null;
    technologies: string[];
    is_featured: boolean;
    is_published: boolean;
    order: number;
}

interface Props {
    projects: Project[];
}

export default function ProjectIndex({ projects }: Props) {
    const deleteProject = (id: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${id}`);
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Projects" />
            
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Projects
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Manage your portfolio projects
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/projects/create">
                            <Icon name="plus" className="mr-2 h-4 w-4" />
                            Add Project
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-6">
                    {projects.length === 0 ? (
                        <Card>
                            <CardContent className="py-12 text-center">
                                <p className="text-slate-600 dark:text-slate-400">
                                    No projects yet. Create your first project to get started.
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        projects.map((project) => (
                            <Card key={project.id}>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CardTitle>{project.title}</CardTitle>
                                                {project.is_featured && (
                                                    <Badge variant="default">Featured</Badge>
                                                )}
                                                {!project.is_published && (
                                                    <Badge variant="secondary">Draft</Badge>
                                                )}
                                            </div>
                                            <CardDescription>{project.description}</CardDescription>
                                        </div>
                                        {project.image && (
                                            <img 
                                                src={`/storage/${project.image}`} 
                                                alt={project.title}
                                                className="w-24 h-24 rounded object-cover ml-4"
                                            />
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.slice(0, 3).map((tech, index) => (
                                                <Badge key={index} variant="outline">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.technologies?.length > 3 && (
                                                <Badge variant="outline">
                                                    +{project.technologies.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline" asChild>
                                                <Link href={`/admin/projects/${project.id}/edit`}>
                                                    <Icon name="pencil" className="mr-2 h-3 w-3" />
                                                    Edit
                                                </Link>
                                            </Button>
                                            <Button 
                                                size="sm" 
                                                variant="destructive"
                                                onClick={() => deleteProject(project.id)}
                                            >
                                                <Icon name="trash-2" className="mr-2 h-3 w-3" />
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
