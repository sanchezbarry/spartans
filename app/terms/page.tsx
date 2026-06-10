import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

export const metadata = {
  title: 'Terms of Use | SPARTANS Advisors',
  description: 'Terms and conditions governing the use of the SPARTANS Advisors website.',
};

export default function TermsPage() {
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
            <h1 className="cinzel text-4xl md:text-5xl mb-4">Terms of Use</h1>
            <p className="text-muted-foreground">Last updated: 2020</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10 text-foreground/80 leading-relaxed">

            <div className="p-5 rounded-lg bg-primary/5 border border-primary/15 text-sm text-muted-foreground">
              This is not the official website of AIA Singapore Private Limited. AIA disclaims warranties and makes no representations about the accuracy or reliability of material on this site.
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Conditions of Use</h2>
              <p>
                By accessing and using this website, you agree to be bound by these Terms of Use. SPARTANS Advisors reserves the right to update or modify these terms at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the revised terms. If you do not agree to these terms, please discontinue use of this website immediately.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Indemnity</h2>
              <p>
                You agree to indemnify, defend, and hold harmless SPARTANS Advisors and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of this website, or your breach of these Terms of Use.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Third Party Links</h2>
              <p>
                This website may contain links to third-party websites as a convenience to users. SPARTANS Advisors does not endorse, control, or accept responsibility for any third-party websites or their content, accuracy, or availability. Access to any linked website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Limitation of Liability</h2>
              <p>
                Access to and use of this website is at your own risk. To the fullest extent permitted by law, SPARTANS Advisors excludes all liability for any indirect, incidental, or consequential loss or damage, including but not limited to loss of data, loss of profits, or damage to computer equipment arising from your use of this website or its content.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Jurisdictional Issues</h2>
              <p>
                Products and services described on this website may not be available in all jurisdictions. Nothing on this website constitutes an offer to sell or a solicitation of any offer to buy securities in any jurisdiction where such an offer or solicitation would be unlawful.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Ownership of Information</h2>
              <p>
                Any non-personal information or material you transmit to this website shall be considered non-confidential and non-proprietary. By transmitting such information, you grant SPARTANS Advisors an unrestricted, irrevocable licence to use, reproduce, display, modify, and distribute that material for any purpose.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Intellectual Property</h2>
              <p>
                All copyright and other intellectual property rights in the content of this website — including text, graphics, logos, images, and software — are proprietary to SPARTANS Advisors and its licensors. You may not reproduce, distribute, or create derivative works from any content on this site without prior written permission. All AIA trademarks and branding require separate written authorisation to use.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Website Performance</h2>
              <p>
                While SPARTANS Advisors uses reasonable efforts to maintain availability of this website, we do not guarantee continuous, uninterrupted, or error-free access. Information presented may be subject to delays or omissions. We reserve the right to suspend or discontinue any feature of the website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Security</h2>
              <p>
                You are responsible for maintaining up-to-date virus protection software on any device used to access this website. SPARTANS Advisors does not warrant that this website is free from viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Third Party Rights</h2>
              <p>
                These Terms of Use are entered into between you and SPARTANS Advisors. No third party shall have any right to enforce any of these terms under applicable contract law.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Governing Law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of Singapore. You submit to the exclusive jurisdiction of the courts of Singapore in respect of any dispute arising from or in connection with these terms.
              </p>
            </div>

            <div>
              <h2 className="cinzel text-xl text-foreground mb-3">Defined Terms</h2>
              <ul className="space-y-2 text-sm">
                <li><span className="text-foreground font-medium">SPARTANS Advisors</span> — refers to SP-ARTANS-WIN and its subsidiaries and affiliated entities.</li>
                <li><span className="text-foreground font-medium">Device</span> — any internet-enabled equipment compatible with accessing this website.</li>
                <li><span className="text-foreground font-medium">Loss</span> — includes all liabilities, damages, claims, and associated costs and expenses.</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
