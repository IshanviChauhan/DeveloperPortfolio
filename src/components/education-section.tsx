import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { School } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    institution: 'ABES Engineering College, Ghaziabad',
    period: '2022 - 2026',
    details: 'CGPA: 7.69 (Till 5th Sem)'
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Central Board of Secondary Education',
    period: '2022',
    details: 'Percentage: 93.8%'
  },
  {
    degree: 'Secondary (X)',
    institution: 'Central Board of Secondary Education',
    period: '2020',
    details: 'Percentage: 95.2%'
  }
];

export function EducationSection() {
  return (
    <section id="education" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Education</h2>
        <p className="text-lg text-foreground/80 mt-2">My academic background.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu) => (
          <Card key={edu.degree} className="bg-card text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <School size={28} />
              </div>
              <CardTitle className="font-headline">{edu.degree}</CardTitle>
              <CardDescription>{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">{edu.period}</p>
              <p className="text-foreground/80 mt-2">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
