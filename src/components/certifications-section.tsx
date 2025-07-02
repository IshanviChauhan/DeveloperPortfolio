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
        <section id="certifications" className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Courses & Certifications</h2>
                <p className="text-lg text-foreground/80 mt-2">My professional development and achievements.</p>
            </div>
            <Card>
                <CardContent className="p-6">
                    <ul className="space-y-6">
                        {certifications.map((cert) => (
                            <li key={cert.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div className="flex items-start gap-4">
                                    <BadgeCheck className="text-primary h-6 w-6 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">{cert.name}</p>
                                        <p className="text-sm text-foreground/70">{cert.issuer} - {cert.date}</p>
                                    </div>
                                </div>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1 shrink-0 ml-10 sm:ml-0">
                                    View Credential
                                    <LinkIcon className="h-3 w-3" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
}
