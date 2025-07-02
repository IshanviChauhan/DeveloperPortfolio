import { Button } from './ui/button';
import { Github, Mail } from 'lucide-react';
import { LiveClock } from './live-clock';

export function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-muted mt-24 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-row justify-center items-center gap-8 mb-4">
          <div className="text-left max-w-lg">
            <h2 className="text-3xl font-headline font-bold text-foreground">Get In Touch</h2>
            <p className="mt-4 text-sm md:text-lg text-foreground/80">

              I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out if you have a project in mind or just want to connect!
            </p>
          </div>
          <div className="flex-shrink-0">
            <LiveClock />
          </div>
        </div>

        <Button asChild size="lg" className="mt-3 mb-9 shadow-lg max-w-[200px]">
              <a href="mailto:ishanvi.chauhan@gmail.com">
                <Mail/> Say Hello
              </a>
            </Button>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/IshanviChauhan" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/ishanvi-chauhan" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#0a66c2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.5 3.5 0 0 1 3.1-1.8C18.4 9.5 19 11.4 19 13.5z"></path>
            </svg>
          </a>
          <a href="mailto:ishanvi.chauhan@gmail.com" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
            <Mail size={32} />
          </a>
           <a href="https://wa.me/919871308893" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="WhatsApp">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16c-1.48 0-2.93-.38-4.22-1.12l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.42 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12c-.17.25-.64.8-.79 1s-.3.17-.56 0c-.25-.12-1.07-.39-2.04-1.26-.75-.66-1.26-1.47-1.41-1.72s-.03-.38.11-.51c.13-.12.28-.3.42-.45.14-.15.18-.25.28-.42s.05-.17 0-.3-.56-1.34-.76-1.84c-.2-.48-.4-.42-.55-.42H8.8c-.16 0-.35.05-.53.24-.18.19-.7.68-.7 1.67s.72 1.93.82 2.08c.1.15 1.41 2.16 3.43 3.06 2.02.9 2.02.6 2.37.58.35-.02 1.07-.44 1.22-.85.15-.41.15-.77.1-.85s-.16-.18-.42-.3z"/>
            </svg>
          </a>
        </div>
        <p className="mt-12 text-sm text-center text-foreground/60">
          © {year} Ishanvi Chauhan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
