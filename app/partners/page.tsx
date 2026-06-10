import type { Metadata } from 'next';
import { PartnersContent } from './content';

export const metadata: Metadata = {
  title: 'Client Partner Benefits',
  description:
    'SPARTANS Advisors clients enjoy exclusive perks from our trusted partner network — dining, lifestyle, home services and more across Singapore.',
  openGraph: {
    title: 'Client Partner Benefits | SPARTANS Advisors',
    description:
      'Become a SPARTANS client and unlock exclusive deals from our network of partner businesses across Singapore.',
  },
};

export default function PartnersPage() {
  return <PartnersContent />;
}
