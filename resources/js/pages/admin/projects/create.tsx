import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Icon } from '@/components/ui/icon';
import InputError from '@/components/input-error';

export default function CreateProject() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        content: '',
        image: null as File | null,
        technologies: [] as string[],
        demo_url: '',
        github_url: '',
        completed_at: '',
        is_featured: false,
        is_published: true,
        order: 0,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/projects');
    };

    const handleTechInput = (value: string) => {
        if (value.includes(',')) {
            const techs = value.split(',').map(t => t.trim()).filter(Boolean);
            setData('technologies', [...data.technologies, ...techs]);
        }
    };

    return (
        <AppLayout>
            <Head title="Create Project" />
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/admin/projects">
                            <Icon name="arrow-left" className="mr-2 h-4 w-4" />
                            Back
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Create New Project
                    </h1>
                </div>

                <form onSubmit={submit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Short Description *</Label>
                                <textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={3}
                                    className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                                    required
                                />
                                <InputError message={errors.description} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Full Content (Optional)</Label>
                                <textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    rows={10}
                                    className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                                    placeholder="You can use HTML here..."
                                />
                                <InputError message={errors.content} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">Project Image</Label>
                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('image', e.target.files?.[0] || null)}
                                />
                                <InputError message={errors.image} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="technologies">Technologies</Label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {data.technologies.map((tech, index) => (
                                        <div key={index} className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                            <span className="text-sm">{tech}</span>
                                            <button
                                                type="button"
                                                onClick={() => setData('technologies', data.technologies.filter((_, i) => i !== index))}
                                                className="text-slate-500 hover:text-slate-700"
                                            >
                                                <Icon name="x" className="h-3 w-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <Input
                                    id="technologies"
                                    placeholder="Type and press Enter (separate with commas)"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            const value = e.currentTarget.value.trim();
                                            if (value) {
                                                setData('technologies', [...data.technologies, value]);
                                                e.currentTarget.value = '';
                                            }
                                        }
                                    }}
                                    onBlur={(e) => {
                                        const value = e.target.value.trim();
                                        if (value) {
                                            handleTechInput(value);
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="demo_url">Demo URL</Label>
                                    <Input
                                        id="demo_url"
                                        type="url"
                                        value={data.demo_url}
                                        onChange={(e) => setData('demo_url', e.target.value)}
                                        placeholder="https://..."
                                    />
                                    <InputError message={errors.demo_url} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="github_url">GitHub URL</Label>
                                    <Input
                                        id="github_url"
                                        type="url"
                                        value={data.github_url}
                                        onChange={(e) => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/..."
                                    />
                                    <InputError message={errors.github_url} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="completed_at">Completion Date</Label>
                                    <Input
                                        id="completed_at"
                                        type="date"
                                        value={data.completed_at}
                                        onChange={(e) => setData('completed_at', e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="order">Display Order</Label>
                                    <Input
                                        id="order"
                                        type="number"
                                        value={data.order}
                                        onChange={(e) => setData('order', parseInt(e.target.value))}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="is_featured"
                                        checked={data.is_featured}
                                        onCheckedChange={(checked) => setData('is_featured', checked as boolean)}
                                    />
                                    <Label htmlFor="is_featured" className="cursor-pointer">
                                        Featured Project
                                    </Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="is_published"
                                        checked={data.is_published}
                                        onCheckedChange={(checked) => setData('is_published', checked as boolean)}
                                    />
                                    <Label htmlFor="is_published" className="cursor-pointer">
                                        Published
                                    </Label>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" disabled={processing}>
                                    Create Project
                                </Button>
                                <Button type="button" variant="outline" asChild>
                                    <Link href="/admin/projects">Cancel</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
