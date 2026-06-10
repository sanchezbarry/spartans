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
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div> */}
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
