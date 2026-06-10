import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

export const metadata = {
  title: 'PDPA Policy | SPARTANS Advisors',
  description: 'Personal Data Protection Act policy governing how SPARTANS Advisors collects, uses, and protects your personal data.',
};

export default function PdpaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-[#1a100a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(139,29,42,0.06),transparent)]" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">Legal</span>
            </div>
            <h1 className="cinzel text-4xl md:text-5xl mb-4">PDPA Policy</h1>
            <p className="text-muted-foreground">Personal Data Protection Act — Last updated: 2020</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10 text-foreground/80 leading-relaxed">

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Collection and Use of Personal Data</h2>
              <p>
                By submitting your personal information to SP-ARTANS-WIN (&ldquo;SA&rdquo;) and its affiliated entities, you authorise us to collect, use, and process your personal data for recruitment, administrative, and operational purposes in accordance with the Personal Data Protection Act 2012 of Singapore (PDPA).
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Marketing and Communications Consent</h2>
              <p className="mb-4">
                We may request your consent to gather and utilise your personal information for consumer, marketing-related, or other similar research and analysis. Where consent is provided, we may contact you with promotional and informational content through the following channels:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  'Postal correspondence',
                  'Email and social media channels',
                  'Phone communications, including voice calls and text messages',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                You may withdraw your marketing consent at any time by contacting us at{' '}
                <a href="mailto:info@spartansadvisors.com" className="text-primary hover:underline">
                  info@spartansadvisors.com
                </a>
                . Withdrawal of consent does not affect the lawfulness of processing that occurred prior to withdrawal.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Disclosure to Third Parties</h2>
              <p>
                Your personal information may be disclosed to authorised third-party organisations engaged by SPARTANS Advisors to process data on our behalf and in connection with the purposes described in this policy. Such third parties are contractually required to handle your data in compliance with the PDPA and with appropriate data protection safeguards in place.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Your Rights</h2>
              <p className="mb-4">
                Under the PDPA, you have the right to:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  'Request access to personal data we hold about you',
                  'Request correction of any inaccurate personal data',
                  'Withdraw consent for the collection, use, or disclosure of your personal data',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Contact Us</h2>
              <p>
                For any queries, access requests, or concerns relating to your personal data, please contact our Data Protection Officer at:
              </p>
              <address className="not-italic mt-4 text-sm space-y-1 text-foreground">
                <p className="font-medium">SPARTANS Advisors (SP-ARTANS-WIN)</p>
                <p>AIA Tampines, 3 Tampines Grande, #03-69</p>
                <p>Singapore 528799</p>
                <p className="mt-2">
                  <a href="mailto:info@spartansadvisors.com" className="text-primary hover:underline">
                    info@spartansadvisors.com
                  </a>
                </p>
              </address>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
