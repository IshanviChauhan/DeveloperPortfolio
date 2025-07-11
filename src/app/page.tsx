import { ProfileSection } from '@/components/profile-section';
import { ProjectsSection } from '@/components/projects-section';
import { EducationSection } from '@/components/education-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ExtracurricularSection } from '@/components/extracurricular-section';
import { ContactSection } from '@/components/contact-section';
import { InterestsSection } from '@/components/interests-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-32 py-16">
          <ProfileSection />
          <EducationSection />
          <ProjectsSection />
          <CertificationsSection />
          <ExtracurricularSection />
          <InterestsSection />
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
