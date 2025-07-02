import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Link as LinkIcon } from 'lucide-react';

const certifications = [
    { name: 'Tata Data Visualisation: Empowering Business with Effective Insights', issuer: 'Forage', date: 'December 2024', link: '#' },
    { name: 'AWS APAC Solutions Architecture virtual experience program', issuer: 'Forage', date: 'December 2024', link: '#' },
    { name: 'BuildWithDelhi Hackathon Certificate of Achievement', issuer: 'HackWithIndia', date: 'June 2024', link: '#' },
    { name: 'Problem Solving (Basic)', issuer: 'Hackerrank', date: 'January 2024', link: '#' },
    { name: 'Python (Basic)', issuer: 'Hackerrank', date: 'October 2023', link: '#' },
    { name: 'Data Science for Engineers', issuer: 'NPTEL', date: 'September 2023', link: '#' },
    { name: 'Internship Program in Machine Learning with Python', issuer: 'Coincent (Microsoft)', date: 'July 2023', link: '#' },
    { name: 'Azure AI Fundamentals', issuer: 'Microsoft', date: 'July 2023', link: '#' },
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="space-y-16">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Courses & Certifications</h2>
                <p className="text-lg text-foreground/80 mt-2">My professional development and achievements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                    <Card key={cert.name} className="flex flex-col text-center hover:shadow-glow-orange-white transition-shadow border">
                        <CardContent className="p-6 flex flex-col flex-grow items-center justify-center">
                            <p className="font-semibold flex-grow">{cert.name}</p>
                            <p className="text-sm text-foreground/70 mt-2">{cert.issuer} - {cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1 mt-4">
                                View Credential
                                <LinkIcon className="h-3 w-3" />
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
