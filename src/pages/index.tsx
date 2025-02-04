import { HeroSection } from "@/components/blocks/hero-section"
import { PropertyFeatures } from "@/components/blocks/property-features"
import { ContactForm } from "@/components/blocks/contact-form"

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Property Features</h2>
          <p className="text-muted-foreground">
            Discover the amazing features of this luxury property
          </p>
        </div>
        <PropertyFeatures />
      </div>

      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold">Interested in this property?</h2>
              <p className="mb-6 text-muted-foreground">
                Leave your contact information and our real estate agent will get back to you
                within 24 hours.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Free consultation</li>
                <li>✓ Virtual tour available</li>
                <li>✓ Flexible viewing schedule</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}