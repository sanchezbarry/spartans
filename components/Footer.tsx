import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'Our Story', href: '/#story' },
      { label: 'Our Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
      { label: 'Events', href: '/events' },
    ],
    services: [
      { label: 'Wealth Management', href: '/#framework' },
      { label: 'Retirement Planning', href: '/#framework' },
      { label: 'Tax Strategies', href: '/#framework' },
      { label: 'iSPARTANS App', href: '/ispartans' },
    ],
    resources: [
      { label: 'Articles & Insights', href: '/articles' },
      { label: 'Market Commentary', href: '/articles' },
      { label: 'iSPARTANS Rewards', href: '/ispartans' },
      { label: 'FAQ', href: '#' },
    ],
    legal: [
      { label: 'Terms of Use', href: '/terms' },
      { label: 'PDPA Policy', href: '/pdpa' },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
                <Link href="/">
          <div className="flex items-center gap-3">
            <div className="relative">

            <Image
              src="/logo.png"
              alt="Spartans Logo"
              width={50}
                height={50}
              />
      
              {/* <Shield className="w-10 h-10 text-primary" strokeWidth={1.5} /> */}
              <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            </div>
            <div>
              <div className="tracking-[0.3em] text-primary uppercase">Spartans</div>
              
              <div className="text-xs text-muted-foreground tracking-wider">Advisors</div>
            </div>
          </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Elite financial planning for those who refuse to settle. Build your wealth empire with Spartan precision.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                {
                  href: 'https://www.instagram.com/spartansadvisors/',
                  label: 'Instagram',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.youtube.com/channel/UCaLOh4QKka7dbupUTzhPX3g',
                  label: 'YouTube',
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all text-muted-foreground hover:text-primary"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Call Us</p>
              <a href="tel:+18005551234" className="text-foreground hover:text-primary transition-colors">
                +65 1234 5678
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email Us</p>
              <a href="mailto:info@spartansadvisors.com" className="text-foreground hover:text-primary transition-colors">
                info@spartansadvisors.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
              <p className="text-foreground">
                3 Tampines Grande, Level 1<br />
                Singapore 528799
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            SPARTANS Advisors is a registered investment adviser. Information presented is for educational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any specific securities, investments, or investment strategies. Investments involve risk and, unless otherwise stated, are not guaranteed. Be sure to first consult with a qualified financial adviser and/or tax professional before implementing any strategy discussed herein. Past performance is not indicative of future results.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 SPARTANS Advisors. All rights reserved.</p>
            <p>SEC Registration does not imply endorsement by the Commission.</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
}
