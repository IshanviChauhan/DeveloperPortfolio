import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { Meteors } from '@/components/magicui/meteors';

const technicalSkills = [
  'C', 'C++', 'Python', 'PHP', 'HTML', 'CSS', 'JavaScript', 'React', 'MySQL',
  'Git', 'Github', 'Visual Studio Code', 'Google Colab', 'Eclipse', 'Power BI', 'Microsoft Office Suite'
];
const softSkills = [
  'Adaptability', 'Pressure Management', 'Collaboration', 'Critical Thinking',
  'Leadership', 'Time Management', 'Competitive'
];

export function ProfileSection() {
  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden -mt-16">
      <Meteors number={30} />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16">
        <section id="home" className="text-center md:text-left pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                <Image
                  src="https://placehold.co/256x256.png"
                  alt="Profile Picture"
                  data-ai-hint="profile picture woman"
                  width={256}
                  height={256}
                  className="rounded-full object-cover border-4 border-primary/50 shadow-lg"
                  priority
                />
            </div>
            <div className="flex-grow">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">B.Tech in Computer Science Engineering Student</Badge>
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary">Ishanvi Chauhan</h1>
              <p className="mt-6 max-w-3xl text-foreground/80 text-lg">
                Pursuing B.Tech in Computer Science Engineering with practical experience in Python, SQL, and modern web technologies. Certified in Machine Learning and Data Science with a strong foundation in problem-solving and teamwork. Eager to apply technical expertise in innovative and fast-paced environments.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
                <Button size="lg" asChild>
                    <a href="#contact">Contact Me <Mail className="ml-2" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://drive.google.com/file/d/1UtRc4Cxv1TRsGEUx9c0ISb-gtZaJPdDz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View Resume <FileText className="ml-2" />
                  </a>
                </Button>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github /></a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/ishanvi-chauhan" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="tel:+919871308893" aria-label="Phone"><Phone /></a>
                    </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-center text-3xl md:text-4xl font-headline font-bold mb-12">My Skillset</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-xl font-headline font-semibold mb-4 text-primary text-center">Technical Skills</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technicalSkills.map(skill => (
                          <Badge key={skill} className="text-base px-4 py-2 rounded-lg">{skill}</Badge>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-headline font-semibold mb-4 text-primary text-center">Soft Skills</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {softSkills.map(skill => (
                          <Badge key={skill} variant="secondary" className="text-base px-4 py-2 rounded-lg">{skill}</Badge>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
