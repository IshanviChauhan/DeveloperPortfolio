import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const designs = [
  { src: 'https://placehold.co/600x600.png', alt: 'A cool logo design', hint: 'logo design' },
  { src: 'https://placehold.co/600x600.png', alt: 'A poster design', hint: 'poster design' },
  { src: 'https://placehold.co/600x600.png', alt: 'A social media graphic', hint: 'social media' },
  { src: 'https://placehold.co/600x600.png', alt: 'An illustration', hint: 'illustration graphic' },
  { src: 'https://placehold.co/600x600.png', alt: 'A branding concept', hint: 'branding identity' },
  { src: 'https://placehold.co/600x600.png', alt: 'A UI/UX design mockup', hint: 'ui ux' },
];

export default function GraphicDesignPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/#interests" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Graphic Design</h1>
          <p className="text-lg text-foreground/80">A showcase of my creative designs and projects.</p>
          <Button asChild className="mt-6">
            <a href="https://www.instagram.com/your_username_here" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" />
              Follow me on Instagram
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {designs.map((design, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={design.src}
                alt={design.alt}
                data-ai-hint={design.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-foreground">Please replace placeholder images and link with your actual designs and Instagram profile.</p>
      </div>
    </main>
  );
}
