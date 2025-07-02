import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const movies = [
  { src: 'https://placehold.co/400x600.png', alt: 'An action movie poster', hint: 'action movie' },
  { src: 'https://placehold.co/400x600.png', alt: 'A comedy movie poster', hint: 'comedy movie' },
  { src: 'https://placehold.co/400x600.png', alt: 'A drama movie poster', hint: 'drama movie' },
  { src: 'https://placehold.co/400x600.png', alt: 'A sci-fi movie poster', hint: 'sci-fi movie' },
  { src: 'https://placehold.co/400x600.png', alt: 'A horror movie poster', hint: 'horror movie' },
  { src: 'https://placehold.co/400x600.png', alt: 'An animated movie poster', hint: 'animated movie' },
];

export default function MoviesPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/#interests" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Watching Movies</h1>
          <p className="text-lg text-foreground/80">A selection of films I've enjoyed.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie, index) => (
            <div key={index} className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={movie.src}
                alt={movie.alt}
                data-ai-hint={movie.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-foreground">Please replace placeholder images with your favorite movie posters.</p>
      </div>
    </main>
  );
}
