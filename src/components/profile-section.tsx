import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Mail, FileText } from 'lucide-react';
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
                        <a href="https://github.com/IshanviChauhan" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github /></a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/ishanvi-chauhan" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="#0a66c2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.5 3.5 0 0 1 3.1-1.8C18.4 9.5 19 11.4 19 13.5z"></path>
                            </svg>
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://wa.me/919871308893" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16c-1.48 0-2.93-.38-4.22-1.12l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.42 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12c-.17.25-.64.8-.79 1s-.3.17-.56 0c-.25-.12-1.07-.39-2.04-1.26-.75-.66-1.26-1.47-1.41-1.72s-.03-.38.11-.51c.13-.12.28-.3.42-.45.14-.15.18-.25.28-.42s.05-.17 0-.3-.56-1.34-.76-1.84c-.2-.48-.4-.42-.55-.42H8.8c-.16 0-.35.05-.53.24-.18.19-.7.68-.7 1.67s.72 1.93.82 2.08c.1.15 1.41 2.16 3.43 3.06 2.02.9 2.02.6 2.37.58.35-.02 1.07-.44 1.22-.85.15-.41.15-.77.1-.85s-.16-.18-.42-.3z"/>
                            </svg>
                        </a>
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
