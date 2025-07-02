import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ExtracurricularSection() {
    return (
        <section id="extracurricular" className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Extracurricular Activities</h2>
            </div>
            <Card className="bg-card">
                <CardHeader>
                    <CardTitle className="font-headline">Village Development Awareness Program - Unnat Bharat Abhiyan (UBA)</CardTitle>
                    <CardDescription>Jan 2024 - Dec 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4 list-disc pl-5 text-foreground/90">
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
