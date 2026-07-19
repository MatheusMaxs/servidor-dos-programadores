import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { PartnersSection } from '@/components/partners-section'
import { AboutSection } from '@/components/about-section'
import { EventsSection } from '@/components/events-section'
import { WhySection } from '@/components/why-section'
import { FoundersSection } from '@/components/founders-section'
import { CommunitySection } from '@/components/community-section'
import { ContactsSection } from '@/components/contacts-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <EventsSection />
        <WhySection />
        <FoundersSection />
        <CommunitySection />
        <ContactsSection />
      </main>
      <SiteFooter />
    </>
  )
}
