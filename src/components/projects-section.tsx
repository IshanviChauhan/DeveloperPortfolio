import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HummingBird : Real-Time Video Captioning Web Application',
    date: 'May 2025 - Present',
    description: 'A real-time video captioning web app that generates live textual descriptions from webcam input. Designed to enhance accessibility for the hearing impaired and improve media content analysis, it leverages open-source models and WebSockets to deliver accurate, low-latency captions in real time via a user-friendly interface.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'video streaming interface',
    technologies: ['React.js', 'WebSockets', 'Python (Flask/Django)', 'PyTorch', 'Tailwind CSS'],
    github: '#',
    live: '#'
  },
  {
    title: "Website for ABES College Annual Cultural Tech Fest GENERO'25",
    date: 'Mar 2025 - April 2025',
    description: "Collaborated in a team to build a responsive, SEO-optimized website using Next.js, Tailwind CSS, and SCSS for showcasing GENERO'25 events and registrations.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'college fest website',
    technologies: ['Next.js', 'Tailwind CSS', 'SCSS'],
    github: '#',
    live: '#'
  },
  {
    title: 'Breathe Easy: Web App for Air Quality Improvement',
    date: 'June 2024',
    description: 'Developed a React.js web app for real-time AQI tracking and tree species recommendation, integrating live data APIs and deploying via Netlify for the HackWithIndia BuildWithIndia Hackathon.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'air quality dashboard',
    technologies: ['React.js', 'Node.js', 'OpenAQ API', 'Netlify', 'GitHub'],
    github: '#',
    live: '#'
  },
  {
    title: 'Multi-Tasking Bot for Customized Automation',
    date: 'Aug 2023 - Dec 2023',
    description: 'Developed an AI bot using NLP, RNN, and Twilio API to automate social networking tasks, enable real-time communication, and support Industry 4.0-driven knowledge sharing.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'automation bot interface',
    technologies: ['Python', 'NLP', 'RNN', 'Twilio API'],
    github: '#',
    live: '#'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Projects</h2>
        <p className="text-lg text-foreground/80 mt-2">A selection of my work.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              <CardDescription>{project.date}</CardDescription>
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
