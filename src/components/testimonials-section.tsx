import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Working with Ishanvi was a game-changer. Their attention to detail and commitment to quality is unparalleled. The final product exceeded all our expectations.",
    name: 'Jane Smith',
    title: 'CEO, Innovate Inc.',
    avatar: 'https://placehold.co/40x40.png',
    avatarHint: 'woman portrait',
    fallback: 'JS',
  },
  {
    quote: "An incredibly talented developer who brings not just technical skills, but also a creative vision to the table. Highly recommended for any ambitious project.",
    name: 'Carlos Rodriguez',
    title: 'CTO, Tech Solutions',
    avatar: 'https://placehold.co/40x40.png',
    avatarHint: 'man portrait',
    fallback: 'CR',
  },
  {
    quote: "The ability to translate complex requirements into a simple, elegant, and user-friendly interface is what sets Ishanvi apart. A true professional.",
    name: 'Emily White',
    title: 'Product Manager, Creative Co.',
    avatar: 'https://placehold.co/40x40.png',
    avatarHint: 'person portrait',
    fallback: 'EW',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">What Others Say</h2>
        <p className="text-lg text-foreground/80 mt-2">Testimonials from clients and colleagues.</p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1 h-full">
                <Card className="h-full bg-card">
                  <CardContent className="flex flex-col items-center text-center justify-center p-8 h-full">
                    <blockquote className="text-lg italic text-foreground/90 flex-grow">
                      “{testimonial.quote}”
                    </blockquote>
                    <div className="flex items-center gap-4 mt-6">
                       <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                        <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
