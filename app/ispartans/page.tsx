import type { Metadata } from 'next';
import { IspartansContent } from './content';

export const metadata: Metadata = {
  title: 'iSPARTANS Rewards App',
  description:
    'The iSPARTANS app rewards SPARTANS clients for every financial milestone. Earn Spartan Points, redeem dining and retail vouchers, and track your financial journey — all in one place.',
  openGraph: {
    title: 'iSPARTANS Rewards App | SPARTANS Advisors',
    description:
      'Earn points for the financial moves you\'re already making. Redeem for real rewards. Exclusive to SPARTANS clients in Singapore.',
  },
};

export default function ISpartansPage() {
  return <IspartansContent />;
}
