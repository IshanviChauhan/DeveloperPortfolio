import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PersonalizedGreeting } from './personalized-greeting';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'Firebase', 'GraphQL', 'Docker', 'Figma', 'JavaScript'
];

export function ProfileSection() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
        <Image
          src="https://placehold.co/256x256.png"
          alt="Profile Picture"
          data-ai-hint="profile picture"
          width={256}
          height={256}
          className="rounded-full object-cover border-4 border-primary shadow-lg"
          priority
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary dark:text-primary">Ishanvi Chauhan</h1>
        <p className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">Full-Stack Developer & UI/UX Enthusiast</p>
        
        <div className="mt-4 text-lg min-h-[28px]">
          <PersonalizedGreeting />
        </div>
        
        <p className="mt-6 max-w-2xl text-foreground/90">
          I craft beautiful and functional web applications with a focus on user experience. Passionate about modern web technologies and building products that people love to use.
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-headline font-semibold">My Skills</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub"><Github /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="mailto:contact@example.com" aria-label="Email"><Mail /></a>
            </Button>
        </div>
      </div>
    </section>
  );
}
