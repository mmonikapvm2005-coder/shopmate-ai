// TripSense TN — Festival Calendar, UPI for Foreigners & Budget Estimator Data

export interface FestivalItem {
  id: string;
  name: string;
  tamilName: string;
  districtId: string;
  districtName: string;
  month: string;
  approxDates: string;
  crowdLevel: 'Extreme (500K+)' | 'Very High (100K+)' | 'High (50K+)';
  description: string;
  touristTip: string;
}

export const TAMIL_NADU_FESTIVALS: FestivalItem[] = [
  {
    id: 'pongal-jallikattu',
    name: 'Pongal Harvest Festival & Alanganallur Jallikattu',
    tamilName: 'பொங்கல் & அலங்காநல்லூர் ஜல்லிக்கட்டு',
    districtId: 'madurai',
    districtName: 'Madurai & Statewide',
    month: 'January',
    approxDates: 'January 14 – 17',
    crowdLevel: 'Extreme (500K+)',
    description: 'The premier 4-day Tamil harvest thanksgiving festival celebrating sun, cows, and farmers. Features heart-pounding traditional bull-taming (Jallikattu) in Alanganallur and Avaniyapuram.',
    touristTip: 'Book village viewing gallery tickets at least 2 weeks early. Wear cotton and enjoy freshly boiled sweet sugarcane pongal.',
  },
  {
    id: 'chithirai-madurai',
    name: 'Chithirai Thiruvizha & Celestial Wedding',
    tamilName: 'மதுரை சித்திரை திருவிழா',
    districtId: 'madurai',
    districtName: 'Madurai',
    month: 'April / May',
    approxDates: 'April 20 – May 2 (Tamil month Chithirai)',
    crowdLevel: 'Extreme (500K+)',
    description: '12-day extravaganza commemorating the divine coronation and marriage of Goddess Meenakshi with Lord Sundareswarar, followed by Lord Alagar’s dramatic golden horse entry into the Vaigai River.',
    touristTip: 'Over 1 million devotees gather. Hotel rooms within 5 km of Meenakshi temple sell out months in advance.',
  },
  {
    id: 'karthigai-deepam',
    name: 'Tiruvannamalai Maha Karthigai Deepam',
    tamilName: 'திருவண்ணாமலை மகா கார்த்திகை தீபம்',
    districtId: 'tiruvannamalai',
    districtName: 'Tiruvannamalai',
    month: 'November / December',
    approxDates: 'Full moon day of Karthigai month',
    crowdLevel: 'Extreme (500K+)',
    description: 'A colossal 3,500 kg ghee copper cauldron flame is ignited atop the sacred Arunachala holy mountain summit, visible for 35 km across the plains.',
    touristTip: 'Over 2.5 million pilgrims perform the 14-km barefoot Girivalam circumambulation of the mountain. Special government trains and buses run 24 hours.',
  },
  {
    id: 'aazhi-ther-tiruvarur',
    name: 'Tiruvarur Aazhi Ther Chariot Festival',
    tamilName: 'திருவாரூர் ஆழித் தேர் திருவிழா',
    districtId: 'tiruvarur',
    districtName: 'Tiruvarur',
    month: 'March / April',
    approxDates: 'March – April',
    crowdLevel: 'Very High (100K+)',
    description: 'Asia’s largest ceremonial temple chariot, standing 96 feet tall and weighing over 360 tonnes. Tens of thousands of devotees pull the massive wooden juggernaut around the 4 car streets.',
    touristTip: 'Arrive early in the morning by 6:00 AM to get a safe vantage point near the North Car Street.',
  },
  {
    id: 'velankanni-feast',
    name: 'Annual Feast of Our Lady of Good Health',
    tamilName: 'வேளாங்கண்ணி பெருவிழா',
    districtId: 'nagapattinam',
    districtName: 'Nagapattinam',
    month: 'August / September',
    approxDates: 'August 29 – September 8',
    crowdLevel: 'Very High (100K+)',
    description: 'Lourdes of the East. Global Catholic festival attracting millions of pilgrims across faiths. Car processions, sea dips, and candlelight rosary prayers.',
    touristTip: 'Accommodation in Velankanni is reserved 6 months ahead; stay in Nagapattinam (12 km away) or Thiruvarur.',
  },
  {
    id: 'mamallapuram-dance',
    name: 'Mamallapuram Indian Classical Dance Festival',
    tamilName: 'மாமல்லபுரம் நாட்டிய விழா',
    districtId: 'chengalpattu',
    districtName: 'Chengalpattu (Mamallapuram)',
    month: 'December / January',
    approxDates: 'Late December to mid-January (4 weeks)',
    crowdLevel: 'High (50K+)',
    description: 'Open-air cultural dance festival set against the illuminated 7th-century monolithic rock sculptures of Arjuna’s Penance. Top Bharatanatyam, Kathakali, Kuchipudi, and Odissi exponents perform.',
    touristTip: 'Admission is free! Evening breezes from the Bay of Bengal make this an unmissable open-air evening event.',
  },
  {
    id: 'natyanjali-chidambaram',
    name: 'Chidambaram Natyanjali Dance Festival',
    tamilName: 'சிதம்பரம் நாட்டியாஞ்சலி',
    districtId: 'cuddalore',
    districtName: 'Cuddalore (Chidambaram)',
    month: 'February / March',
    approxDates: 'Maha Shivaratri (5 nights)',
    crowdLevel: 'High (50K+)',
    description: 'Classical dancers from across the globe offer their art as worship to Lord Nataraja (the Cosmic Dancer) in the golden-roofed temple complex.',
    touristTip: 'Performances run throughout the night on Maha Shivaratri. Bring a light shawl and camera.',
  },
];

export const UPI_ONE_WORLD_GUIDE = [
  {
    step: 1,
    title: 'What is UPI One World?',
    desc: 'The official Reserve Bank of India (RBI) and NPCI facility allowing international tourists from any country to make QR-code scan payments across all shops, autos, and stalls in India.',
  },
  {
    step: 2,
    title: 'Where to Get It?',
    desc: 'Available at authorized prepaid payment instrument counters at Chennai International Airport (MAA) Terminal 4 arrival hall, forex desks (Thomas Cook, EbixCash, Transcorp), and select ICICI/SBI bank branches.',
  },
  {
    step: 3,
    title: 'Required Documents',
    desc: 'Original Valid Passport, Valid Indian Tourist Visa, and an active foreign credit/debit card to load Indian Rupees (INR).',
  },
  {
    step: 4,
    title: 'How It Works in Daily Travel',
    desc: 'The counter staff installs the authorized PPI wallet app (such as CheqUPI or Transcorp UPI) on your iPhone or Android. You can now scan ANY merchant QR code (Google Pay, PhonePe, Paytm) at roadside tea stalls, temples, and cabs without transaction failure.',
  },
];

export const BUDGET_TIERS = {
  backpacker: {
    title: 'Backpacker / Budget Traveler',
    icon: '🎒',
    dailyEstimate: '₹1,500 – ₹2,500',
    hotel: '₹800 – ₹1,200 (Clean non-AC lodge / TTDC Guest House)',
    food: '₹300 – ₹500 (Authentic mess meals, idli breakfasts)',
    transport: '₹150 – ₹300 (TNSTC town buses, MRTS trains)',
    sightseeing: '₹100 – ₹200 (General entry & camera tickets)',
    bestFor: 'Solo backpackers, students, and budget pilgrims.',
  },
  comfort: {
    title: 'Comfort / Family Traveler',
    icon: '🧳',
    dailyEstimate: '₹4,500 – ₹7,500',
    hotel: '₹2,500 – ₹4,500 (3-Star & 4-Star AC hotel with breakfast)',
    food: '₹800 – ₹1,500 (Air-conditioned restaurants: A2B, Saravana Bhavan)',
    transport: '₹800 – ₹1,500 (Rapido Auto, Red Taxi & Ola)',
    sightseeing: '₹300 – ₹600 (Special Darshan passes & museum passes)',
    bestFor: 'Couples, families, and international holidaymakers.',
  },
  luxury: {
    title: 'Heritage & Luxury Chauffeur',
    icon: '👑',
    dailyEstimate: '₹12,000 – ₹25,000+',
    hotel: '₹8,000 – ₹18,000+ (5-Star Palace, Heritage Mansions, Taj Coromandel)',
    food: '₹2,500 – ₹5,000 (Fine dining, multi-course degustation)',
    transport: '₹3,000 – ₹5,000 (Full-day private air-conditioned SUV with chauffeur)',
    sightseeing: '₹1,000 – ₹2,000 (Private VIP temple escorted darshan & certified guides)',
    bestFor: 'Foreign tourists wanting zero friction, luxury stays & private transit.',
  },
};
