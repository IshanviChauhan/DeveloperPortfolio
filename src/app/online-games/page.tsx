import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Youtube, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const games = [
  {
    title: 'Game 1 Title',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 1', hint: 'gameplay screenshot' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 2', hint: 'video game' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 3', hint: 'online game' },
    ]
  },
  {
    title: 'Game 2 Title',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 4', hint: 'game art' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 5', hint: 'game character' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 6', hint: 'gaming environment' },
    ]
  },
  {
    title: 'Game 3 Title',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 7', hint: 'action game' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 8', hint: 'strategy game' },
    ]
  },
  {
    title: 'Game 4 Title',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 9', hint: 'rpg game' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 10', hint: 'mmo game' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 11', hint: 'shooter game' },
      { src: 'https://placehold.co/600x400.png', alt: 'Gameplay screenshot 12', hint: 'puzzle game' },
    ]
  },
];

export default function OnlineGamesPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/#interests" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Playing Online Games</h1>
          <p className="text-lg text-foreground/80">Some of the games I enjoy playing.</p>
          <Button asChild className="mt-6">
            <a href="https://www.youtube.com/channel/your_channel_id" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2" />
              Check out my YouTube
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {games.map((game, index) => (
            <div key={index}>
              <h2 className="text-2xl font-headline font-semibold mb-4 text-center">{game.title}</h2>
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {game.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-[4/3] items-center justify-center p-0 relative rounded-lg overflow-hidden">
                             <Image
                                src={image.src}
                                alt={image.alt}
                                data-ai-hint={image.hint}
                                fill
                                className="object-cover"
                              />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14" />
                <CarouselNext className="mr-14" />
              </Carousel>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-foreground">Please replace placeholder images and links with your actual content.</p>
      </div>
    </main>
  );
}
