import { Card, CardContent } from '@/components/ui/card';
import { Camera, PenTool, Music, BookOpen, Film, Gamepad2 } from 'lucide-react';
import { SplineModelInterests } from './spline-model-interests';
import Link from 'next/link';

const interests = [
    { name: 'Photography', icon: Camera },
    { name: 'Graphic Designing', icon: PenTool },
    { name: 'Listening to Music', icon: Music },
    { name: 'Reading Story Books', icon: BookOpen },
    { name: 'Watching Movies', icon: Film },
    { name: 'Playing Online Games', icon: Gamepad2 },
];

export function InterestsSection() {
    return (
        <section id="interests" className="space-y-12">
            <div className="flex flex-row items-center justify-center text-center md:text-left">
                <div className="w-1/2 z-20 flex flex-col justify-center items-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Interests & Hobbies</h2>
                    <p className="text-lg text-foreground/80 mt-2">Things I enjoy doing in my free time.</p>
                </div>
                <div className="relative w-1/2 h-[270px] md:h-[300px] flex-shrink-0 z-10">
                    <SplineModelInterests />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {interests.map((interest) => {
                    const Icon = interest.icon;

                    if (interest.name === 'Photography') {
                        return (
                            <Link href="/photography" key={interest.name}>
                                <Card className="flex flex-col text-center hover:shadow-glow-orange-white transition-shadow border h-full group cursor-pointer">
                                    <CardContent className="p-6 flex flex-col flex-grow items-center justify-center">
                                        <Icon className="text-primary h-12 w-12 mb-4" />
                                        <p className="font-semibold flex-grow group-hover:underline">{interest.name}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    }
                    
                    if (interest.name === 'Graphic Designing') {
                        return (
                            <Link href="/graphic-design" key={interest.name}>
                                <Card className="flex flex-col text-center hover:shadow-glow-orange-white transition-shadow border h-full group cursor-pointer">
                                    <CardContent className="p-6 flex flex-col flex-grow items-center justify-center">
                                        <Icon className="text-primary h-12 w-12 mb-4" />
                                        <p className="font-semibold flex-grow group-hover:underline">{interest.name}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    }

                    if (interest.name === 'Listening to Music') {
                        return (
                            <a href="https://open.spotify.com/user/rn5qyh5tgy560i472szesmt9f?si=29e17d65d4424924" target="_blank" rel="noopener noreferrer" key={interest.name}>
                                <Card className="flex flex-col text-center hover:shadow-glow-orange-white transition-shadow border h-full group cursor-pointer">
                                    <CardContent className="p-6 flex flex-col flex-grow items-center justify-center">
                                        <Icon className="text-primary h-12 w-12 mb-4" />
                                        <p className="font-semibold flex-grow group-hover:underline">{interest.name}</p>
                                    </CardContent>
                                </Card>
                            </a>
                        );
                    }

                    return (
                        <Card key={interest.name} className="flex flex-col text-center hover:shadow-glow-orange-white transition-shadow border h-full">
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
