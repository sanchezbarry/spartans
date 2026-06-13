/**
 * Seeds all 6 partner documents into Sanity, including uploading their images.
 * Run once: SANITY_WRITE_TOKEN=<token> node scripts/seed-partners.mjs
 */
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wcccrefo',
  dataset: 'production',
  apiVersion: '2025-05-14',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

async function uploadFromUrl(url, filename) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload('image', buffer, { filename });
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  } catch (e) {
    console.warn(`  ⚠ Could not upload ${url}: ${e.message}`);
    return null;
  }
}

const PARTNERS = [
  {
    _id: 'partner-weekend-florist',
    name: 'The Weekend Florist',
    offer: 'Up to 10% Off',
    logoUrl: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2021/09/33.jpg',
    imageUrls: [
      'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/04/Screenshot-2022-04-19-at-11.29.41-AM.png',
      'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/04/Screenshot-2022-04-19-at-11.30.00-AM.png',
      'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/04/Screenshot-2022-04-19-at-11.29.26-AM.png',
    ],
    companyProfile:
      'A Singapore-based floral design studio offering beautiful and unique floral arrangements for every occasion — subscriptions, workshops, bridal services, corporate gifting, and event decor.',
    spartansMembersEnjoy:
      '10% discount on regular purchases\n5% discount during festive periods (Valentine\'s Day, Mother\'s Day, Christmas)\n\nUse code "SPARTANS" at checkout.',
    socialLinks: [
      { platform: 'website', url: 'https://theweekendflorist.sg/' },
      { platform: 'facebook', url: 'https://www.facebook.com/theweekendfloristsg/' },
      { platform: 'instagram', url: 'https://www.instagram.com/theweekendfloristsg/' },
    ],
    termsAndConditions:
      'SPARTANS Members enjoy 10% discount on regular purchase items and 5% during special occasions (Valentine\'s Day, Mother\'s Day, Christmas). Promotions are subject to change.',
  },
  {
    _id: 'partner-powerhouse-ktv',
    name: 'Powerhouse Home Karaoke',
    offer: 'Up to 10% Off Home Karaoke Packages',
    logoUrl: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2021/09/Screenshot-2021-09-02-at-9.46.46-AM.png',
    imageUrls: [
      'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2026/06/pexels-photo-13020479.jpeg',
      'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2026/04/pexels-photo-7054384.jpeg',
    ],
    companyProfile:
      'Powerhouse Home Karaoke is the market leader for home karaoke systems in Singapore since 2010. All products are designed and assembled in Singapore and operate on proprietary cloud infrastructure, modernising traditional karaoke into elegant home systems.',
    spartansMembersEnjoy:
      'Exclusive discounts on home karaoke packages.\n\nPlease speak to your respective SPARTANS ADVISORS to find out more!',
    socialLinks: [
      { platform: 'website', url: 'https://www.powerhouse.com.sg/' },
      { platform: 'facebook', url: 'https://www.facebook.com/powerhousektv' },
      { platform: 'instagram', url: 'https://www.instagram.com/powerhousektv/' },
    ],
    termsAndConditions: 'Strictly for clients of SPARTANS ADVISORS only. Promotions are subject to change.',
  },
  {
    _id: 'partner-6days',
    name: '6 Days Cleaning',
    offer: 'Free Home Sanitisation Worth S$168',
    logoUrl: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2021/09/Background.jpg',
    imageUrls: [],
    companyProfile:
      'Established in 2014, 6 Days Pte Ltd offers professional corporate and residential cleaning services across Singapore. Services include general home cleaning, post-renovation deep cleaning, office cleaning, carpet/rug cleaning, mattress cleaning, sofa upholstery cleaning, and spring cleaning.',
    spartansMembersEnjoy:
      'Free home sanitisation worth S$168 with minimum S$120 deep cleaning services purchased.\n\nUse code "FREESANTI" at checkout on 6days.sg.',
    socialLinks: [
      { platform: 'website', url: 'https://www.6days.sg/' },
      { platform: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=6598412939' },
    ],
    termsAndConditions:
      'Free sanitisation is redeemable with a minimum S$120 deep cleaning purchase. Promotions are subject to change. Visit 6days.sg for current service packages and pricing.',
  },
  {
    _id: 'partner-abundance',
    name: 'Abundance',
    offer: '10% Off Weekday Lunch',
    logoUrl: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/02/195959779_251443456742971_7011640674426618798_n-1.jpg',
    imageUrls: [],
    companyProfile:
      'A beloved Taiwanese-style cafe in Redhill, Singapore, known for Gua Bao, Peanut Ice Cream, and Craft Beers. Founded by ex-Din Tai Fung chefs, Abundance brings authentic Taiwanese flavours in a warm, casual setting.',
    spartansMembersEnjoy:
      '10% off weekday lunch (dine-in only).\n\nPresent your SPARTANS Membership card at the point of payment.',
    socialLinks: [
      { platform: 'website', url: 'https://abundance.cococart.co/' },
      { platform: 'facebook', url: 'https://www.facebook.com/a8undance/' },
      { platform: 'instagram', url: 'https://www.instagram.com/a8undance/' },
    ],
    termsAndConditions:
      'Discount applies to dine-in weekday lunch only. Members must present SPARTANS Membership card at payment. Cannot be combined with other promotions. Promotions subject to change.',
  },
  {
    _id: 'partner-automotive-guys',
    name: 'The Automotive Guys',
    offer: 'Free Consignment Service Worth Up to S$700',
    logoUrl: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/02/auto6.jpg',
    imageUrls: [],
    companyProfile:
      'The Automotive Guys (TAG) aspire to bring you the best service and experience when dealing with your automotive needs — Buy, Sell, Consign, Loan, and Insurance all under one roof. No gimmicks, no nonsense.',
    spartansMembersEnjoy:
      'Free consignment service worth up to S$700.\n\nTAG will handle vehicle photography, listing on sgcarmart and other platforms. Complimentary detailing is available subject to availability.\n\nQuote "SPARTANS ADVISORS Free Consignment Service" when enquiring.',
    socialLinks: [
      { platform: 'website', url: 'https://the-automotive-guys.business.site/' },
      { platform: 'facebook', url: 'https://www.facebook.com/TautomotiveG/' },
      { platform: 'instagram', url: 'https://www.instagram.com/tagmediaa/' },
    ],
    termsAndConditions:
      'Consignment service is complimentary when quoting "SPARTANS ADVISORS Free Consignment Service". Complimentary detailing is subject to availability. Partnership promotions are subject to change.',
  },
  {
    _id: 'partner-for-kanso',
    name: 'For Kanso',
    offer: 'Up to 10% Off Curated Scents',
    logoUrl: 'https://i0.wp.com/spartansadvisors.com/wp-content/uploads/2022/03/Logo-with-Circle-Frame.png',
    imageUrls: [],
    companyProfile:
      'For Kanso is a curated fragrance retailer established in 2000, first serving a neighbourhood on Jalan Sultan Road before expanding online. They bridge the gap for trustworthy fragrance retail, offering both physical and online shopping with knowledgeable staff.',
    spartansMembersEnjoy:
      'Up to 10% off retail prices on curated scents in the Collab Partners category.\n\nUse discount code "SPARTANS" at checkout. A For Kanso membership account is required.',
    socialLinks: [
      { platform: 'website', url: 'https://www.forkanso.sg/' },
      { platform: 'facebook', url: 'https://www.facebook.com/ForKanso/' },
    ],
    termsAndConditions:
      'Discount applies to selected items in the Collab Partners category on forkanso.sg. A For Kanso membership account must be created before checkout. Use code "SPARTANS". Promotions are subject to change.',
  },
];

async function main() {
  console.log('🚀 Seeding partners into Sanity...\n');

  for (const [i, p] of PARTNERS.entries()) {
    console.log(`[${i + 1}/${PARTNERS.length}] ${p.name}`);

    const logo = await uploadFromUrl(p.logoUrl, `${p._id}-logo.jpg`);

    const images = [];
    for (const [j, url] of p.imageUrls.entries()) {
      const img = await uploadFromUrl(url, `${p._id}-img-${j}.jpg`);
      if (img) images.push(img);
    }

    const doc = {
      _type: 'partner',
      _id: p._id,
      name: p.name,
      offer: p.offer,
      ...(logo && { logo }),
      ...(images.length && { images }),
      companyProfile: p.companyProfile,
      spartansMembersEnjoy: p.spartansMembersEnjoy,
      socialLinks: p.socialLinks,
      termsAndConditions: p.termsAndConditions,
      order: i,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ Created\n`);
  }

  console.log('✅ All partners seeded.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
