import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, cart functionality, and a secure checkout process.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'e-commerce website',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'task management',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Zustand'],
    github: '#',
    live: '#'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, featuring various chart types and filtering options.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    technologies: ['D3.js', 'React', 'Node.js', 'Express'],
    github: '#',
    live: '#'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">My Projects</h2>
        <p className="text-lg text-foreground/80 mt-2">A selection of my recent work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                    fill
                    className="object-cover rounded-md border"
                  />
              </div>
              <p className="text-foreground/90 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
