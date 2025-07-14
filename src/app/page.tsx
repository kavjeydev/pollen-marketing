import WithPhoneMockup from '@/components/blocks/heros/with-phone-mockup'
import SimpleThreeColumnWithLargeIcons from '@/components/blocks/feature-sections/simple-three-column-with-large-icons'
import WithProductScreenshot from '@/components/blocks/feature-sections/with-product-screenshot'
import MicroloanSpotlight from '@/components/blocks/feature-sections/microloan-spotlight'
import { TestimonialsGridWithCenteredCarousel } from '@/components/blocks/testimonials/testimonials-grid-with-centered-carousel'
import DarkPanelWithAppScreenshot from '@/components/blocks/ctas/dark-panel-with-app-screenshot'
import { SimpleFooterWithFourGrids } from '@/components/blocks/footers/simple-footer-with-four-grids'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <WithPhoneMockup />
      <SimpleThreeColumnWithLargeIcons />
      <MicroloanSpotlight />
      <WithProductScreenshot />
      <TestimonialsGridWithCenteredCarousel />
      <DarkPanelWithAppScreenshot />
      <SimpleFooterWithFourGrids />
    </main>
  )
}