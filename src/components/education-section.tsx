import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { School } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  school?: string;
  period: string;
  details: string;
}

const education: Education[] = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
    school: 'ABES Engineering College, Ghaziabad',
    period: '2022 - 2026',
    details: 'CGPA: 7.69 (Till 5th Sem)'
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Central Board of Secondary Education',
    school: 'Cambridge School Indirapuram',
    period: '2022',
    details: 'Percentage: 93.8%'
  },
  {
    degree: 'Secondary (X)',
    institution: 'Central Board of Secondary Education',
    school: 'Cambridge School Indirapuram',
    period: '2020',
    details: 'Percentage: 95.2%'
  }
];

export function EducationSection() {
  return (
    <section id="education" className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Education</h2>
        <p className="text-lg text-foreground/80 mt-2">My academic journey.</p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true"></div>
        <div className="space-y-10 pl-12">
          {education.map((edu) => (
            <div key={edu.degree} className="relative">
              <div className="absolute -left-8 top-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                <School className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md border">
                <p className="font-semibold text-primary">{edu.period}</p>
                <h3 className="font-headline text-xl font-bold mt-1">{edu.degree}</h3>
                <p className="text-foreground/80 font-medium">{edu.institution}</p>
                {edu.school && <p className="text-foreground/80 font-medium">{edu.school}</p>}
                <p className="text-foreground/70 mt-2">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
