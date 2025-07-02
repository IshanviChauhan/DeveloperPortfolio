import { Card, CardContent } from '@/components/ui/card';
import { Camera, PenTool, Music, BookOpen, Film } from 'lucide-react';
import { SplineModelInterests } from './spline-model-interests';

const interests = [
    { name: 'Photography', icon: Camera },
    { name: 'Graphic Designing', icon: PenTool },
    { name: 'Listening to Music', icon: Music },
    { name: 'Reading Story Books', icon: BookOpen },
    { name: 'Watching Movies', icon: Film },
];

export function InterestsSection() {
    return (
        <section id="interests" className="space-y-12">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                <div className="md:w-1/2 z-20">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Interests & Hobbies</h2>
                    <p className="text-lg text-foreground/80 mt-2">Things I enjoy doing in my free time.</p>
                </div>
                <div className="relative w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] flex-shrink-0 z-10">
                    <SplineModelInterests />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {interests.map((interest) => {
                    const Icon = interest.icon;
                    return (
                        <Card key={interest.name} className="flex flex-col text-center hover:shadow-glow-orange-white transition-shadow border">
                            <CardContent className="p-6 flex flex-col flex-grow items-center justify-center">
                                <Icon className="text-primary h-12 w-12 mb-4" />
                                <p className="font-semibold flex-grow">{interest.name}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
