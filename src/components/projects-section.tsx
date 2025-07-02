import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { SplineModel } from './spline-model';
import { projects } from '@/lib/projects-data';
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12">
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2 text-left z-20 pl-4 md:pl-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold">Projects</h2>
          <p className="text-base sm:text-lg text-foreground/80 mt-2">A selection of my work.</p>
        </div>
        <div className="relative w-1/2 h-[200px] sm:h-[250px] md:h-[300px] flex-shrink-0 z-10">
          <SplineModel />
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-glow-orange-white hover:-translate-y-1 group h-full flex flex-col">
              <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                    fill
                    className="object-cover"
                  />
              </div>
              <CardHeader className="p-4 flex-grow">
                  <CardTitle className="font-headline text-base group-hover:underline">{project.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
