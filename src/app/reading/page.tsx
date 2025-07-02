import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const books = [
  { src: 'https://placehold.co/400x600.png', alt: 'A fantasy novel cover', hint: 'fantasy book' },
  { src: 'https://placehold.co/400x600.png', alt: 'A science fiction book cover', hint: 'sci-fi book' },
  { src: 'https://placehold.co/400x600.png', alt: 'A mystery thriller book cover', hint: 'mystery book' },
  { src: 'https://placehold.co/400x600.png', alt: 'A historical fiction novel', hint: 'historical fiction' },
  { src: 'https://placehold.co/400x600.png', alt: 'A classic literature book', hint: 'classic literature' },
  { src: 'https://placehold.co/400x600.png', alt: 'A collection of short stories', hint: 'short stories' },
];

export default function ReadingPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/#interests" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Reading Story Books</h1>
          <p className="text-lg text-foreground/80">A glimpse into the worlds I love to get lost in.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <div key={index} className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={book.src}
                alt={book.alt}
                data-ai-hint={book.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-foreground">Please replace placeholder images with your favorite book covers.</p>
      </div>
    </main>
  );
}
