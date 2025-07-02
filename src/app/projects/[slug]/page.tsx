import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <article className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg border">
                <Link href="/#projects" className="text-primary hover:underline mb-8 block">&larr; Back to all projects</Link>
                
                <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        data-ai-hint={project.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>

                <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">{project.title}</h1>
                
                <div className="flex items-center text-muted-foreground mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.date}</span>
                </div>

                <p className="text-lg text-foreground/80 mb-8">{project.description}</p>

                <div className="mb-8">
                    <h2 className="text-2xl font-headline font-semibold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" />
                            GitHub
                        </a>
                    </Button>
                    <Button asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" />
                            Live Demo
                        </a>
                    </Button>
                </div>

            </article>
        </main>
    );
}
