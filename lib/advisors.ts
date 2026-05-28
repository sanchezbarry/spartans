export interface Advisor {
  slug: string
  name: string
  title: string
  specialty: string
  bio: string
  credentials: string[]
  rating: number
  clients: number
  image: string
  quote: string
  email?: string
  phone?: string
}

export const advisors: Advisor[] = [
  {
    slug: 'dovanson-quah',
    name: 'Dovanson Quah',
    title: 'Financial Services Director',
    specialty: 'Team Leadership & Comprehensive Financial Planning',
    bio: 'Mission before Commission. Dovanson leads the SPARTANS team with a focus on outperforming industry standards in financial planning through teamwork, dedication, and putting clients first.',
    credentials: ['AIA Elite'],
    rating: 5.0,
    clients: 200,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format',
    quote: '"Mission before Commission."',
    email: 'dovanson@aia.com.sg',
    phone: '+65 9385 0207',
  },
  {
    slug: 'marcus-tan',
    name: 'Marcus Tan',
    title: 'Senior Financial Advisor',
    specialty: 'Retirement & CPF Planning',
    bio: "Marcus has been in the industry for over 12 years and is known for making CPF strategy feel less like a government form and more like a superpower. He's helped hundreds of Singaporean families retire earlier than they thought possible.",
    credentials: ['CFP®', 'AIA Elite'],
    rating: 5.0,
    clients: 180,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format',
    quote: '"I manage my own CPF the same way I manage yours. Skin in the game."',
  },
  {
    slug: 'priya-krishnan',
    name: 'Priya Krishnan',
    title: 'Financial Advisor',
    specialty: 'Young Professionals & First Home Buyers',
    bio: "Priya specialises in helping millennials navigate the transition from 'spending everything' to 'actually building wealth'. Her coffee sessions are famously waitlisted — she has a gift for making money talk feel natural.",
    credentials: ['ChFC', 'AIA Gold'],
    rating: 5.0,
    clients: 130,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format',
    quote: '"Your 30s are when it clicks. I help you get there in your 20s."',
  },
  {
    slug: 'jason-lim',
    name: 'Jason Lim',
    title: 'Senior Financial Advisor',
    specialty: 'Business Owners & Self-Employed',
    bio: "Having run his own business before becoming an advisor, Jason brings a unique perspective to business owners who need to keep personal and company finances separate. He speaks entrepreneur, not just finance.",
    credentials: ['CFP®', 'AIA Premier'],
    rating: 4.9,
    clients: 95,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&auto=format',
    quote: `"I've sat on your side of the table. I know what keeps you up at night."`,
  },
  {
    slug: 'aisha-rahman',
    name: 'Aisha Rahman',
    title: 'Financial Advisor',
    specialty: 'Family Protection & Syariah-Compliant Planning',
    bio: "Aisha is passionate about making financial planning culturally relevant. She specialises in Syariah-compliant insurance and investment structures, ensuring that families can plan with confidence and conviction.",
    credentials: ['CFP®', 'AIA Gold'],
    rating: 5.0,
    clients: 110,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&auto=format',
    quote: '"Faith and finances can work together — I help you build both."',
  },
  {
    slug: 'kevin-chen',
    name: 'Kevin Chen',
    title: 'Financial Advisor',
    specialty: 'Investment-Linked Policies & Equities',
    bio: "Kevin is the team's investment geek — in the best possible way. He tracks markets obsessively and translates complex portfolio theory into strategies real people can act on. His clients call him 'the calm in the storm'.",
    credentials: ['CFA® Level 2', 'AIA Gold'],
    rating: 4.9,
    clients: 88,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&auto=format',
    quote: `"Markets are emotional. Your strategy shouldn't be."`,
  },
  {
    slug: 'sophie-ng',
    name: 'Sophie Ng',
    title: 'Financial Advisor',
    specialty: 'Education Planning & Child Protection',
    bio: "Sophie became a financial advisor after becoming a mum and realising how unprepared most parents are for the real cost of raising children in Singapore. She helps families plan for education, milestones, and the unexpected.",
    credentials: ['CFP®', 'AIA Silver'],
    rating: 5.0,
    clients: 74,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&auto=format',
    quote: '"Every parent wants the best for their kids. I help you afford it."',
  },
]

export function getAdvisorBySlug(slug: string): Advisor | undefined {
  return advisors.find((a) => a.slug === slug)
}
