import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export function ExtracurricularSection() {
    return (
        <section id="extracurricular" className="space-y-16">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Extracurricular Activities</h2>
                <p className="text-lg text-foreground/80 mt-2">My involvement beyond academics.</p>
            </div>
            <Card className="max-w-4xl mx-auto border transition-shadow duration-300 hover:shadow-glow-orange-white">
                <CardHeader className="flex-row items-center gap-4 p-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Users size={28} />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-xl">Village Development Awareness Program - Unnat Bharat Abhiyan (UBA)</CardTitle>
                        <CardDescription>Jan 2024 - Dec 2024</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                    <ul className="space-y-4 list-disc pl-5 text-foreground/80 text-base">
                        <li>
                            Organized awareness campaigns on social issues during biannual visits to villages adopted by ABES Engineering College, collaborated with NSS members and team, and earned certificates of appreciation for impactful contributions.
                        </li>
                        <li>
                            Collaborated with students from various branches on the UBA project "Implementation of Drones for Farmer Welfare: A Revolution in 21st Century Agriculture 4.0 in the South Asian Region," focusing on crop disease detection and identifying the presence of humans and animals on farms.
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </section>
    )
}
