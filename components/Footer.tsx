import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const footerLinks = {
    explore: [
      { label: 'Articles', href: '/articles' },
      { label: 'Our Team', href: '/team' },
      { label: 'Our Partners', href: '/partners' },
      { label: 'Events', href: '/events' },
      { label: 'Careers', href: '/careers' },
      { label: 'iSPARTANS', href: '/ispartans' },
    ],
    legal: [
      { label: 'Terms of Use', href: '/terms' },
      { label: 'PDPA Policy', href: '/pdpa' },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image src="/logo.png" alt="Spartans Logo" width={44} height={44} />
                  <div className="absolute inset-0 bg-primary/20 blur-xl" />
                </div>
                <div>
                  <div className="tracking-[0.3em] text-primary uppercase">Spartans</div>
                  <div className="text-xs text-muted-foreground tracking-wider">Advisors</div>
                </div>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Elite financial planning for those who refuse to settle. Build your wealth empire with Spartan precision.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  href: 'https://www.instagram.com/spartansadvisors/',
                  label: 'Instagram',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.facebook.com/spartansadv',
                  label: 'Facebook',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.youtube.com/channel/UCaLOh4QKka7dbupUTzhPX3g',
                  label: 'YouTube',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all text-muted-foreground hover:text-primary"
                >
                  {svg}
                </a>
              ))}
            </div>

          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4">Explore</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href="tel:+6512345678" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-primary/60" />
                +65 1234 5678
              </a>
              <a href="mailto:info@spartansadvisors.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-primary/60" />
                info@spartansadvisors.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 text-primary/60 mt-0.5" />
                <span>3 Tampines Grande, Level 1<br />Singapore 528799</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            © 2020 Spartans Advisors. All rights reserved. SP-DOVANSON is an Authorised Representative of AIA Singapore Pte Ltd. (Reg. No. 201106386R). This is not the official website of AIA Singapore Private Limited (Company Registration No. 201106386R) (AIA). AIA disclaims all warranties of merchantability and fitness for purpose of the materials on this website. AIA makes no warranties or representations as to the results of the use of the materials on this website in terms of their correctness, accuracy and reliability. Nothing on this website should be regarded as an offer or solicitation to sell insurance products in any country to any person to whom it is unlawful to make such an invitation or solicitation in such a country. Terms of Use. (1) All trademarks, service marks, trade names, product names, icons and logos of AIA are owned by AIA and may not be used without prior written permission from AIA. (2) All AIA products and services referred to in this website (or linked thereto to the website) known as www.spartansadvisors.com (the “Agency Website”) are offered only in countries where such products and services may lawfully be offered by AIA Singapore and the materials on the said Agency Website are not intended for use by persons located in or resident in, countries that restrict the distribution of such materials. (3) Neither the Agency Website nor the link to the products or services on AIA’s corporate website should be regarded as an offer to sell or a solicitation to buy any insurance product or other products or services of AIA in any country to any person to whom it is unlawful to make such invitation or solicitation in such country. (4) No warranties regarding non-infringement of third party rights, security, accuracy, fitness for purpose, merchantability or freedom from computer viruses in the Agency Website or the AIA corporate website (linked thereto) are given by AIA.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 SPARTANS Advisors. All rights reserved.</p>
            <p>Permit No: CC-MH-176-2020</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
}
