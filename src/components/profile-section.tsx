import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const technicalSkills = [
  'C', 'C++', 'Python', 'PHP', 'HTML', 'CSS', 'JavaScript', 'React', 'MySQL',
  'Git', 'Github', 'Visual Studio Code', 'Google Colab', 'Eclipse', 'Power BI', 'Microsoft Office Suite'
];
const softSkills = [
  'Adaptability', 'Handling Pressure', 'Collaborate', 'Critical thinking',
  'Leadership', 'Time Management Skills', 'Competitive'
];

export function ProfileSection() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
        <Image
          src="https://placehold.co/256x256.png"
          alt="Profile Picture"
          data-ai-hint="profile picture woman"
          width={256}
          height={256}
          className="rounded-full object-cover border-4 border-primary shadow-lg"
          priority
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary dark:text-primary">Ishanvi Chauhan</h1>
        <p className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">B.Tech in Computer Science Engineering Student</p>
        
        <p className="mt-6 max-w-3xl text-foreground/90">
          Pursuing B.Tech in Computer Science Engineering from ABES Engineering College with practical experience in Python, SQL, HTML, CSS, JavaScript and React. Certified in Machine Learning and Data Science with a strong foundation in problem-solving, teamwork, and a commitment to continuous learning. Eager to apply technical expertise in innovative and fast-paced environments.
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-headline font-semibold">Technical Skills</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            {technicalSkills.map(skill => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-headline font-semibold">Soft Skills</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            {softSkills.map(skill => (
              <Badge key={skill} variant="outline" className="text-sm px-3 py-1">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
            <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ishanvi-chauhan" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="mailto:ishanvi.chauhan@gmail.com" aria-label="Email"><Mail /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="tel:+919871308893" aria-label="Phone"><Phone /></a>
            </Button>
        </div>
      </div>
    </section>
  );
}
