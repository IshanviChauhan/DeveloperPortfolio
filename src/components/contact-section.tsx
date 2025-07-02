import { Button } from './ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-muted mt-24 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-headline font-bold text-foreground">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <Button asChild size="lg" className="mt-8 shadow-lg">
          <a href="mailto:ishanvi.chauhan@gmail.com">
            <Mail className="mr-2" /> Say Hello
          </a>
        </Button>
        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/ishanvi-chauhan" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={32} />
          </a>
          <a href="mailto:ishanvi.chauhan@gmail.com" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
            <Mail size={32} />
          </a>
           <a href="tel:+919871308893" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Phone">
            <Phone size={32} />
          </a>
        </div>
        <p className="mt-12 text-sm text-foreground/60">
          © {year} Ishanvi Chauhan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
