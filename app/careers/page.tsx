import type { Metadata } from 'next';
import { CareersContent } from './content';

export const metadata: Metadata = {
  title: 'Financial Advisor Career in Singapore',
  description:
    'Start or grow your financial advisory career with SPARTANS Advisors — an AIA-affiliated agency in Tampines, Singapore. We sponsor your MAS exams, mentor your growth, and build careers built on purpose.',
  openGraph: {
    title: 'Financial Advisor Career in Singapore | SPARTANS Advisors',
    description:
      'Join SPARTANS Advisors. Exam sponsorship, mentorship, uncapped commission, and a culture where purpose comes before the sale. Open roles in Tampines, Singapore.',
  },
  keywords: [
    'become financial advisor Singapore',
    'join insurance agency Singapore',
    'AIA career Singapore',
    'financial advisor job Singapore',
    'insurance agent recruitment Singapore',
    'MAS licensing Singapore',
  ],
};

export default function CareersPage() {
  return <CareersContent />;
}
