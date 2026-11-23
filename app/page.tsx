import { AboutExperienceSection } from './components/AboutExperienceSection'
import { ContactSection, DirectionSection, ProjectsSection, SkillsSection, SiteFooter, TeachingSection } from './components/PortfolioSections'
import { HeroSection } from './components/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TeachingSection />
      <DirectionSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
