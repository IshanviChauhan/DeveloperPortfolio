import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const photos = [
  { src: 'https://placehold.co/600x400.png', alt: 'A beautiful landscape', hint: 'landscape nature' },
  { src: 'https://placehold.co/400x600.png', alt: 'A portrait of a person', hint: 'portrait person' },
  { src: 'https://placehold.co/600x400.png', alt: 'Abstract street photography', hint: 'street photography' },
  { src: 'https://placehold.co/600x400.png', alt: 'Close-up of a flower', hint: 'flower macro' },
  { src: 'https://placehold.co/400x600.png', alt: 'Architectural details of a building', hint: 'architecture building' },
  { src: 'https://placehold.co/600x400.png', alt: 'A serene beach scene', hint: 'beach ocean' },
];

export default function PhotographyPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/#interests" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Photography</h1>
          <p className="text-lg text-foreground/80">A collection of moments captured through my lens.</p>
          <Button asChild className="mt-6">
            <a href="https://www.instagram.com/your_username_here" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" />
              Follow me on Instagram
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={photo.src}
                alt={photo.alt}
                data-ai-hint={photo.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-foreground">Please replace placeholder images and link with your actual photos and Instagram profile.</p>
      </div>
    </main>
  );
}
