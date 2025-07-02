import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
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
        <section id="home" className="pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex justify-center items-center relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <Image
                src="/Ghibli-Image-Ishanvi.png"
                alt="Profile Picture"
                width={256}
                height={256}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
            <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">B.Tech in Computer Science Engineering Student</Badge>
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary">Ishanvi Chauhan</h1>
              <p className="mt-4 max-w-4xl text-foreground/80 text-lg mx-auto md:mx-0">
                Pursuing B.Tech in Computer Science Engineering with practical experience in Python, SQL, and modern web technologies. Certified in Machine Learning and Data Science with a strong foundation in problem-solving and teamwork. Eager to apply technical expertise in innovative and fast-paced environments.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8">
                <Button size="lg" asChild>
                  <a href="#contact">Contact Me <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 ml-2"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://drive.google.com/file/d/1UtRc4Cxv1TRsGEUx9c0ISb-gtZaJPdDz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View Resume <FileText className="ml-2" />
                  </a>
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/IshanviChauhan" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/ishanvi-chauhan/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://wa.me/919871308893" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#21c063" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
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
