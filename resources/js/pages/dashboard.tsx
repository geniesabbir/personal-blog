import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Icon } from '@/components/ui/icon';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Welcome to Your Portfolio Dashboard
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Manage your portfolio content, projects, skills, and profile settings
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Projects Card */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                    <Icon name="folder" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <CardTitle>Projects</CardTitle>
                                    <CardDescription>Manage your portfolio projects</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" asChild>
                                <Link href="/admin/projects">
                                    Manage Projects
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Skills Card */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                                    <Icon name="code" className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <CardTitle>Skills</CardTitle>
                                    <CardDescription>Update your technical skills</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" asChild>
                                <Link href="/admin/skills">
                                    Manage Skills
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Profile Settings Card */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                    <Icon name="user" className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <CardTitle>Profile</CardTitle>
                                    <CardDescription>Edit your profile information</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" asChild>
                                <Link href="/admin/profile-settings">
                                    Edit Profile
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* View Portfolio Card */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                                    <Icon name="eye" className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <CardTitle>View Live Site</CardTitle>
                                    <CardDescription>See how your portfolio looks</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" variant="outline" asChild>
                                <Link href="/">
                                    View Portfolio
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Stats */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Tips</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Icon name="check-circle" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                                <div>
                                    <p className="font-medium">Add your projects</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Showcase your best work to potential clients
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon name="check-circle" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                                <div>
                                    <p className="font-medium">Update your skills</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Keep your technical skills up to date
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon name="check-circle" className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                                <div>
                                    <p className="font-medium">Complete your profile</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Add your bio, contact info, and social links
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Getting Started</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Welcome to your portfolio dashboard! Here's how to get started:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>Update your profile settings with your information</li>
                                <li>Add your technical skills and proficiency levels</li>
                                <li>Create project entries for your best work</li>
                                <li>Mark your top projects as "featured"</li>
                                <li>View your live portfolio to see the results</li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
