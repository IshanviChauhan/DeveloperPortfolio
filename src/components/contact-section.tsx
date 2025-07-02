import { Button } from './ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground mt-24 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-headline font-bold">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="mailto:alex.doe@example.com">
            Say Hello
          </a>
        </Button>
        <div className="flex justify-center gap-6 mt-12">
          <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={28} />
          </a>
          <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter size={28} />
          </a>
        </div>
        <p className="mt-12 text-sm text-secondary-foreground/60">
          © {year} Alex Doe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
