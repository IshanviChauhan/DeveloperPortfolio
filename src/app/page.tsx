import { ProfileSection } from '@/components/profile-section';
import { ProjectsSection } from '@/components/projects-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="space-y-24 md:space-y-32">
          <ProfileSection />
          <ProjectsSection />
          <TestimonialsSection />
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
