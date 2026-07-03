/**
 * Seeds all 45 scraped articles from the old site into Sanity.
 * Run: SANITY_WRITE_TOKEN=<token> node scripts/seed-articles.mjs
 *
 * Per article:
 *   coverImage + thumbnail → pexels/unsplash photo at ?w=600 (compressed, fast)
 *   body                   → tall infographic at full resolution (content is readable)
 */
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wcccrefo',
  dataset: 'production',
  apiVersion: '2025-05-14',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const BASE = 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads';

/** Download from WP CDN and upload to Sanity. Returns asset _id or null. */
async function uploadFromUrl(url, filename) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload('image', buffer, { filename });
    return asset._id;
  } catch (e) {
    console.warn(`    ⚠ Upload failed (${filename}): ${e.message}`);
    return null;
  }
}

/** Derive upload filename extension from URL */
function ext(url) {
  const base = url.split('?')[0];
  return base.slice(base.lastIndexOf('.') + 1) || 'jpg';
}

// ── Article data ─────────────────────────────────────────────────────────────
// photoUrl      → WP CDN URL, will have ?w=600&ssl=1 appended (compressed thumbnail)
// infographicUrl → WP CDN URL, no params (full-quality tall infographic)

const ARTICLES = [
  // ── 2026 ─────────────────────────────────────────────────────────────────
  {
    slug: 'credit-card-lounges',
    title: 'The ultimate lounge and credit card guide.',
    category: 'lifestyle',
    excerpt: 'Your everyday card might also be giving you some lounge access.',
    publishedAt: '2026-06-30T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/06/pexels-photo-5239818.jpeg`,
    infographicUrl: `${BASE}/2026/06/web-1.png`,
    featured: true,
  },
  {
    slug: 'taking-care-of-your-loved-ones-with-a-will',
    title: 'Taking care of your loved ones with a will.',
    category: 'insurance',
    excerpt: "Here's why you should plan a will.",
    publishedAt: '2026-06-02T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/06/pexels-photo-13020479.jpeg`,
    infographicUrl: `${BASE}/2026/06/web.png`,
  },
  {
    slug: 'market-outlook-2026',
    title: 'Market Outlook 2026',
    category: 'finance',
    excerpt: "The market is back on the rise. Stocks are climbing toward highs, even as the war continues and oil prices stay high. So why aren't markets reacting?",
    publishedAt: '2026-04-30T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/04/pexels-photo-7054384.jpeg`,
    infographicUrl: `${BASE}/2026/04/web.png`,
  },
  {
    slug: 'aia-stock-buyback',
    title: 'What happens with a Stock Buy Back?',
    category: 'finance',
    excerpt: 'A stock buyback is when a company buys its own shares, reducing the number of shares on the open market.',
    publishedAt: '2026-03-31T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/03/pexels-photo-17033575.jpeg`,
    infographicUrl: `${BASE}/2026/03/web.png`,
  },
  {
    slug: 'budget-2026',
    title: 'Budget 2026: What you need to know.',
    category: 'finance',
    excerpt: "Didn't tune in? Here's what you need to know.",
    publishedAt: '2026-02-27T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/02/pexels-photo-11903705.jpeg`,
    infographicUrl: `${BASE}/2026/02/web-3.png`,
  },
  {
    slug: 'cny-2026-predictions',
    title: 'Chinese New Year 2026 Predictions!',
    category: 'lifestyle',
    excerpt: 'Check out your zodiac predictions for the year!',
    publishedAt: '2026-02-16T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/02/pexels-photo-3626475.jpeg`,
    infographicUrl: `${BASE}/2026/02/web1.png`,
  },
  {
    slug: 'asset-progression',
    title: 'Asset Progression',
    category: 'finance',
    excerpt: 'Asset Progression: Not the hack it was anymore.',
    publishedAt: '2026-01-23T00:00:00.000Z',
    photoUrl:       `${BASE}/2026/01/pexels-photo-3124995.jpeg`,
    infographicUrl: `${BASE}/2026/01/web.jpg`,
  },
  // ── 2025 ─────────────────────────────────────────────────────────────────
  {
    slug: 'big-changes-to-shield-plan-riders',
    title: 'Big Changes to Shield Plan Riders',
    category: 'insurance',
    excerpt: 'New riders will NOT cover deductibles.',
    publishedAt: '2025-11-30T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/11/pexels-photo-7651743.jpeg`,
    infographicUrl: `${BASE}/2025/11/web.jpg`,
  },
  {
    slug: 'whats-in-an-ilp',
    title: "What's in an ILP?",
    category: 'insurance',
    excerpt: 'Investment linked investment plans are growing in popularity in Singapore.',
    publishedAt: '2025-10-31T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/10/pexels-photo-6779716.jpeg`,
    infographicUrl: `${BASE}/2025/10/web.jpg`,
  },
  {
    slug: 'how-to-bid-for-your-own-coe',
    title: 'How to bid for your own COE',
    category: 'lifestyle',
    excerpt: 'A very, very expensive piece of paper.',
    publishedAt: '2025-09-26T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/09/pexels-photo-30998834.jpeg`,
    infographicUrl: `${BASE}/2025/09/web.jpg`,
  },
  {
    slug: 'how-to-start-a-new-business-in-singapore',
    title: 'How to start a new business in Singapore',
    category: 'lifestyle',
    excerpt: 'Aspiring entrepreneur, or looking to formalise your already successful start-up? Read here.',
    publishedAt: '2025-07-31T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/07/pexels-photo-7652178.jpeg`,
    infographicUrl: `${BASE}/2025/07/web.jpg`,
  },
  {
    slug: 'investing-with-cpf-cpf-investment-scheme',
    title: 'Investing with CPF: CPF Investment Scheme',
    category: 'finance',
    excerpt: 'If you regularly invest, you might not be too happy with your CPF returns.',
    publishedAt: '2025-06-30T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/06/anne-nygard-tcJ6sJTtTWI-unsplash.jpg`,
    infographicUrl: `${BASE}/2025/06/web.jpg`,
  },
  {
    slug: 'are-you-really-paying-9-gst',
    title: 'Are you really paying 9% GST?',
    category: 'finance',
    excerpt: 'We did some investigating.',
    publishedAt: '2025-05-30T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/05/the-new-york-public-library-kAJLRQwt5yY-unsplash.jpg`,
    infographicUrl: `${BASE}/2025/05/web.jpg`,
  },
  {
    slug: 'what-happens-when-you-die-without-a-will',
    title: 'What Happens When You Die Without A Will?',
    category: 'finance',
    excerpt: 'There is a chance the government could get your estate.',
    publishedAt: '2025-04-30T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/04/melinda-gimpel-wkfZyteTMOA-unsplash-1.jpg`,
    infographicUrl: `${BASE}/2025/04/web.jpg`,
  },
  {
    slug: 'medishield-life-premiums-increasing',
    title: 'MediShield Life premiums are increasing.',
    category: 'current-affairs',
    excerpt: 'Not always a bad thing — increased premiums means better coverage, and more.',
    publishedAt: '2025-03-24T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/03/pexels-pixabay-128867.jpg`,
    infographicUrl: `${BASE}/2025/03/web-1.jpg`,
  },
  {
    slug: 'how-to-buy-a-hdb-for-second-timers',
    title: 'How to Buy a HDB for Second-timers!',
    category: 'lifestyle',
    excerpt: 'Need a bigger flat? Or a change of location? Read on how to!',
    publishedAt: '2025-03-21T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/03/anthony-tran-PqIvg8mw-4U-unsplash.jpg`,
    infographicUrl: `${BASE}/2025/03/web.jpg`,
  },
  {
    slug: '2025-chinese-new-year-horoscope',
    title: '2025 Chinese New Year Horoscope',
    category: 'lifestyle',
    excerpt: 'Curious about your horoscope? Read on to find out!',
    publishedAt: '2025-02-10T00:00:00.000Z',
    photoUrl:       `${BASE}/2025/02/humphrey-muleba-dYqMMG6LdZs-unsplash-1.jpg`,
    infographicUrl: `${BASE}/2025/02/web.jpg`,
  },
  // ── 2024 ─────────────────────────────────────────────────────────────────
  {
    slug: '5-tips-to-talk-about-finance-as-a-couple',
    title: '5 Tips To Talk About Finance As A Couple',
    category: 'finance',
    excerpt: 'What you should be talking about before making a long-term commitment.',
    publishedAt: '2024-12-02T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/12/hiveboxx-cyAhOnM19cg-unsplash.jpg`,
    infographicUrl: `${BASE}/2024/12/web.jpg`,
  },
  {
    slug: 'how-to-keep-your-digital-finances-safe',
    title: 'How to keep your Digital Finances safe',
    category: 'finance',
    excerpt: 'In a world where cashless is king, how do you keep your finances safe?',
    publishedAt: '2024-10-16T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/10/konstantin-evdokimov-UUYkTnQkn9c-unsplash.jpg`,
    infographicUrl: `${BASE}/2024/10/web.jpg`,
  },
  {
    slug: 'healthhub-vs-health-buddy',
    title: 'HealthHub VS Health Buddy: The health app showdown',
    category: 'lifestyle',
    excerpt: "On first look, you'd think that one is all you need.",
    publishedAt: '2024-09-07T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/09/mindfulness-com-U1RMD5BqCGU-unsplash.jpg`,
    infographicUrl: `${BASE}/2024/09/web.jpg`,
  },
  {
    slug: 'uncovering-maternity-plans',
    title: 'Uncovering Maternity Plans',
    category: 'insurance',
    excerpt: 'Is a maternity plan a must? Read on to find out.',
    publishedAt: '2024-07-05T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/07/pexels-photo-415824.webp`,
    infographicUrl: `${BASE}/2024/07/web.jpg`,
  },
  {
    slug: 'teaching-your-little-ones-about-money',
    title: 'Teaching Your Little Ones About Money',
    category: 'lifestyle',
    excerpt: 'Pocket money is important. But knowing the value of money is infinitely more so.',
    publishedAt: '2024-07-01T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/07/pexels-photo-210600.webp`,
    infographicUrl: `${BASE}/2024/07/web-2.png`,
  },
  {
    slug: 'claims-recovery',
    title: 'Protect your insurance plan with Claims Recovery!',
    category: 'insurance',
    excerpt: "That's right — you can protect your insurance plan, with a little thing called Claims Recovery.",
    publishedAt: '2024-05-06T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/05/pexels-photo-590041.webp`,
    infographicUrl: `${BASE}/2024/05/web-1.png`,
  },
  {
    slug: 'tax-season',
    title: "It's Tax Season!",
    category: 'finance',
    excerpt: "Remember to file by 18th April — that's the deadline.",
    publishedAt: '2024-04-11T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/04/kelly-sikkema-M98NRBuzbpc-unsplash.webp`,
    infographicUrl: `${BASE}/2024/04/web-1.png`,
  },
  {
    slug: 'year-of-the-wood-dragon',
    title: 'Year of the Wood Dragon: Zodiac Sign Predictions!',
    category: 'lifestyle',
    excerpt: "See how you'll do this year in the health, wealth, and career segments with our yearly Chinese zodiac predictions!",
    publishedAt: '2024-02-09T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/02/humphrey-muleba-dYqMMG6LdZs-unsplash.webp`,
    infographicUrl: `${BASE}/2024/02/web-1.png`,
  },
  {
    slug: 'announcing-ispartans',
    title: 'Announcing our app, iSPARTANS!',
    category: 'lifestyle',
    excerpt: 'iSPARTANS is a free, invitation-only membership providing affordable healthcare, lifestyle, and home services.',
    publishedAt: '2024-01-08T00:00:00.000Z',
    photoUrl:       `${BASE}/2024/01/amy-shamblen-lJt-3NUFng4-unsplash.webp`,
    infographicUrl: `${BASE}/2024/01/web-1.png`,
  },
  // ── 2023 ─────────────────────────────────────────────────────────────────
  {
    slug: 'lumihealth-vs-the-new-lumihealth',
    title: 'LumiHealth vs… The NEW LumiHealth!',
    category: 'lifestyle',
    excerpt: "LumiHealth is a first-of-its-kind health programme designed by Singapore, partnering with Apple. Here's what changed.",
    publishedAt: '2023-09-06T00:00:00.000Z',
    photoUrl:       `${BASE}/2023/09/bruce-mars-WGN6ZEFEZbs-unsplash.webp`,
    infographicUrl: `${BASE}/2023/09/web.png`,
  },
  {
    slug: 'cpf-nomination',
    title: 'CPF Nomination',
    category: 'finance',
    excerpt: 'A CPF nomination could be one of the most important financial planning decisions you could make.',
    publishedAt: '2023-08-28T00:00:00.000Z',
    photoUrl:       `${BASE}/2023/08/pexels-photo-7705898.jpeg`,
    infographicUrl: `${BASE}/2023/08/web.png`,
  },
  {
    slug: 'for-parents-baby-bonuses-tax-relief',
    title: 'For Parents: Baby Bonuses, Tax Relief, and More!',
    category: 'current-affairs',
    excerpt: 'There are enhancements, changes and more to the Baby Bonus, Child Development Account, and the various tax rebate schemes for parents.',
    publishedAt: '2023-07-09T00:00:00.000Z',
    photoUrl:       `${BASE}/2023/07/national-cancer-institute-BQPi8F_UON0-unsplash.jpg`,
    infographicUrl: `${BASE}/2023/07/web.png`,
  },
  {
    slug: 'aia-vitality-2023-enhancements',
    title: 'AIA Vitality 2023 Enhancements',
    category: 'lifestyle',
    excerpt: 'From great, to not-so-great… to great again?',
    publishedAt: '2023-05-28T00:00:00.000Z',
    photoUrl:       `${BASE}/2023/05/steven-lelham-atSaEOeE8Nk-unsplash.jpeg`,
    infographicUrl: `${BASE}/2023/05/web.png`,
  },
  {
    slug: 'budget-2023',
    title: 'Budget 2023: How much you\'ll get this year!',
    category: 'finance',
    excerpt: "Here's how much the government has set aside for you in Budget 2023.",
    publishedAt: '2023-03-06T00:00:00.000Z',
    photoUrl:       `${BASE}/2023/03/pexels-photo-210600.jpeg`,
    infographicUrl: `${BASE}/2023/03/web.png`,
  },
  {
    slug: '2022-recap',
    title: '2022 Recap',
    category: 'lifestyle',
    excerpt: 'Everything from the good, the bad, the COVID-19 and more.',
    publishedAt: '2023-02-09T00:00:00.000Z',
    photoUrl:       `${BASE}/2023/02/sincerely-media-lQ3go6MNPzo-unsplash.jpg`,
    infographicUrl: `${BASE}/2023/02/web.png`,
  },
  // ── 2022 ─────────────────────────────────────────────────────────────────
  {
    slug: '5-ways-your-family-loses-money-without-estate-planning',
    title: '5 ways your family loses money if you do not plan your estate.',
    category: 'finance',
    excerpt: "Here's how your family LOSES money if you don't plan your estate — and what happens to the money without a plan.",
    publishedAt: '2022-10-27T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/10/pexels-photo-372748.jpeg`,
    infographicUrl: `${BASE}/2022/10/web.png`,
  },
  {
    slug: 'the-ultimate-stock-guide',
    title: 'The Ultimate Stock Guide',
    category: 'finance',
    excerpt: 'More than stocks and P/E ratios — here are 19 ways to analyse a company before you invest.',
    publishedAt: '2022-09-14T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/09/northfolk-Ok76F6yW2iA-unsplash.jpg`,
    infographicUrl: `${BASE}/2022/09/web.png`,
  },
  {
    slug: 'types-of-financial-instruments',
    title: 'Types of Financial Instruments',
    category: 'finance',
    excerpt: 'More than just stocks and bonds, there are many different kinds of financial instruments you can invest in.',
    publishedAt: '2022-07-12T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/07/verne-ho-0LAJfSNa-xQ-unsplash-1.jpg`,
    infographicUrl: `${BASE}/2022/07/web-1.png`,
  },
  {
    slug: 'what-happens-when-you-post-your-passport',
    title: 'What happens when you post your passport.',
    category: 'lifestyle',
    excerpt: 'Not everything should be for the gram.',
    publishedAt: '2022-07-03T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/07/clay-banks-b5S4FrJb7yQ-unsplash.jpg`,
    infographicUrl: `${BASE}/2022/07/web.png`,
  },
  {
    slug: 'unhealthy-financial-ratios',
    title: 'What to do if your financial ratios are unhealthy.',
    category: 'finance',
    excerpt: "We're not always in the best financial health. Here's what to do to improve yours.",
    publishedAt: '2022-06-07T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/06/dylan-calluy-JpflvzEl5cg-unsplash.jpg`,
    infographicUrl: `${BASE}/2022/06/web.png`,
  },
  {
    slug: 'how-much-do-you-need-at-each-life-stage',
    title: 'How much money do you need at each life stage?',
    category: 'lifestyle',
    excerpt: "At different stages of your life, you'll have different needs, financial obligations and more.",
    publishedAt: '2022-04-19T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/04/hiveboxx-UU_SJm_D6lw-unsplash-1.jpg`,
    infographicUrl: `${BASE}/2022/04/web-1.png`,
  },
  {
    slug: 'should-you-get-disability-insurance',
    title: 'Should you get disability insurance?',
    category: 'insurance',
    excerpt: "Most Singaporeans have CareShield Life. But is it sufficient? What if you're disabled but don't qualify under the definition?",
    publishedAt: '2022-04-18T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/04/henry-co-X-e2UGY2g-w-unsplash.jpg`,
    infographicUrl: `${BASE}/2022/04/web.png`,
  },
  {
    slug: 'ai-is-taking-over-our-jobs',
    title: 'A.I. is taking over our jobs, here\'s what to do about it.',
    category: 'finance',
    excerpt: "Artificial intelligence is taking over tasks once done by humans. Here's what you can do about it.",
    publishedAt: '2022-03-11T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/03/jason-leung-HBGYvOKXu8A-unsplash.jpg`,
    infographicUrl: `${BASE}/2022/03/web.png`,
  },
  {
    slug: 'how-to-invest-in-nfts',
    title: 'How to invest in NFTs',
    category: 'finance',
    excerpt: "NFT stands for non-fungible token — a one-of-a-kind asset. Here's how to invest in them.",
    publishedAt: '2022-01-31T00:00:00.000Z',
    photoUrl:       `${BASE}/2022/01/pexels-photo-4238489.jpeg`,
    infographicUrl: `${BASE}/2022/01/web.png`,
  },
  // ── 2021 ─────────────────────────────────────────────────────────────────
  {
    slug: 'money-matters-police-officer-shane',
    title: 'Money Matters: Police Officer Shane',
    category: 'lifestyle',
    excerpt: 'SPARTANS MONEY MATTERS features real individuals from different walks of life sharing their financial planning journey.',
    publishedAt: '2021-12-06T00:00:00.000Z',
    photoUrl:       `${BASE}/2021/12/logan-weaver-2ByD2gdgL50-unsplash.jpg`,
    infographicUrl: `${BASE}/2021/12/web.png`,
  },
  {
    slug: 'covid19-and-asymptomatic',
    title: 'Covid19 and asymptomatic, living in the new normal',
    category: 'current-affairs',
    excerpt: 'Covid19 Positive via ART testing but asymptomatic? With cases rising, here\'s what you need to do.',
    publishedAt: '2021-10-04T00:00:00.000Z',
    photoUrl:       `${BASE}/2021/10/steve-nomax-06bXMf3cfLM-unsplash.jpg`,
    infographicUrl: `${BASE}/2021/10/web-5.png`,
  },
  {
    slug: 'spartans-money-matters-ally',
    title: 'SPARTANS MONEY MATTERS: Sales Executive Ally',
    category: 'lifestyle',
    excerpt: 'Ally, 27, Sales Executive, shares how she manages finances around her love for food and being a good host.',
    publishedAt: '2021-10-04T00:00:00.000Z',
    photoUrl:       `${BASE}/2021/10/daniil-lobachev-93BsHRWB1yQ-unsplash.jpg`,
    infographicUrl: `${BASE}/2021/10/web-4.png`,
  },
  {
    slug: 'new-bto-tips',
    title: '10 Things To Bring When Visiting Your New Flat',
    category: 'lifestyle',
    excerpt: "Collecting the keys to your new flat? Here are 10 things to bring when visiting your new home for the first time.",
    publishedAt: '2021-09-27T00:00:00.000Z',
    photoUrl:       `${BASE}/2021/09/hiveboxx-cyAhOnM19cg-unsplash.jpg`,
    infographicUrl: `${BASE}/2021/09/HDB-Key-Collection-Tips.png`,
  },
];

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`Seeding ${ARTICLES.length} articles…\n`);
  let ok = 0;
  let fail = 0;

  for (const article of ARTICLES) {
    console.log(`→ [${article.slug}]`);
    console.log(`  "${article.title}"`);

    // Photo at 600px wide (thumbnail quality, saves storage + bandwidth)
    const photoSmallUrl = `${article.photoUrl}?w=600&ssl=1`;
    const photoExt      = ext(article.photoUrl);
    const infoExt       = ext(article.infographicUrl);

    const [photoId, infographicId] = await Promise.all([
      uploadFromUrl(photoSmallUrl,            `article-photo-${article.slug}.${photoExt}`),
      uploadFromUrl(article.infographicUrl,   `article-infographic-${article.slug}.${infoExt}`),
    ]);

    if (!photoId || !infographicId) {
      console.warn(`  ✗ Skipped — image upload failed\n`);
      fail++;
      continue;
    }

    const doc = {
      _type: 'post',
      _id: `post-${article.slug}`,
      title: article.title,
      slug: { _type: 'slug', current: article.slug },
      category: article.category,
      excerpt: article.excerpt,
      publishedAt: article.publishedAt,
      coverImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: photoId },
        alt: article.title,
      },
      thumbnail: {
        _type: 'image',
        asset: { _type: 'reference', _ref: photoId },
        alt: article.title,
      },
      body: [
        {
          _type: 'image',
          _key: 'infographic',
          asset: { _type: 'reference', _ref: infographicId },
          alt: article.title,
        },
      ],
      featured: article.featured ?? false,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ Saved\n`);
      ok++;
    } catch (e) {
      console.error(`  ✗ Sanity error: ${e.message}\n`);
      fail++;
    }
  }

  console.log(`Done. ${ok} saved, ${fail} failed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
