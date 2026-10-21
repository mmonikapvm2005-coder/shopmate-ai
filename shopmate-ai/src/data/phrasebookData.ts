// TripSense TN — First-Time Tourist Essential Audio Phrasebook Data

export interface PhraseItem {
  id: string;
  category: 'transport' | 'food' | 'temple' | 'emergency' | 'polite';
  english: string;
  tamil: string;
  phonetic: string;
  context: string;
}

export const PHRASEBOOK_CATEGORIES = [
  { id: 'all', label: 'All Phrases', icon: '💬' },
  { id: 'transport', label: 'Autos & Transport', icon: '🛺' },
  { id: 'food', label: 'Food & Dining', icon: '🍛' },
  { id: 'temple', label: 'Temples & Holy Sites', icon: '🛕' },
  { id: 'emergency', label: 'Safety & Emergency', icon: '🚨' },
  { id: 'polite', label: 'Greetings & Basics', icon: '👋' },
] as const;

export const TOURIST_PHRASES: PhraseItem[] = [
  // --- Autos & Transport ---
  {
    id: 't-1',
    category: 'transport',
    english: 'Please turn on the meter',
    tamil: 'மீட்டர் போடுங்க சார்',
    phonetic: 'Meter po-dun-ga sir',
    context: 'Use when boarding an auto-rickshaw to ask for government meter fare.',
  },
  {
    id: 't-2',
    category: 'transport',
    english: 'How much to go here?',
    tamil: 'இங்கே போக எவ்வளவு ஆகும்?',
    phonetic: 'In-gae po-ga ev-va-la-vu aa-gum?',
    context: 'Point to your phone map and show the driver.',
  },
  {
    id: 't-3',
    category: 'transport',
    english: 'That is too much, I will pay ₹100',
    tamil: 'ரொம்ப அதிகம், ₹100 தாரேன்',
    phonetic: 'Rom-ba adhi-gam, nooru roobai thaa-ren',
    context: 'Standard respectful bargaining response for autos.',
  },
  {
    id: 't-4',
    category: 'transport',
    english: 'Please drop me here / Stop here',
    tamil: 'இங்கேயே இறக்கி விடுங்க / நிறுத்துங்க',
    phonetic: 'In-gay-ye era-kki vi-dun-ga / ni-ruth-un-ga',
    context: 'Tell the driver when your destination arrives.',
  },
  {
    id: 't-5',
    category: 'transport',
    english: 'Turn right / Turn left',
    tamil: 'வலது பக்கம் / இடது பக்கம் திரும்புங்க',
    phonetic: 'Va-ladhu pak-kam / I-da-dhu pak-kam thi-rum-bun-ga',
    context: 'Giving turn-by-turn navigation instructions.',
  },
  {
    id: 't-6',
    category: 'transport',
    english: 'Do you accept GPay / PhonePe / UPI?',
    tamil: 'ஜிபே / கூகுள் பே இருக்கா?',
    phonetic: 'G-Pay / Google Pay iruk-ka?',
    context: 'Ask before starting the ride if you prefer cashless digital payment.',
  },

  // --- Food & Dining ---
  {
    id: 'f-1',
    category: 'food',
    english: 'Please make it less spicy',
    tamil: 'காரம் குறைவாகப் போடுங்கள்',
    phonetic: 'Kaa-ram ko-rai-va po-dun-gal',
    context: 'Crucial for visitors with mild spice tolerance at local restaurants.',
  },
  {
    id: 'f-2',
    category: 'food',
    english: 'Is this pure vegetarian?',
    tamil: 'இது சுத்த சைவமா?',
    phonetic: 'Idhu suth-tha sai-va-maa?',
    context: 'Confirm vegetarian preparation (no eggs/meat/seafood).',
  },
  {
    id: 'f-3',
    category: 'food',
    english: 'Please bring drinking water / bottled water',
    tamil: 'குடிநீர் / பாட்டில் தண்ணீர் கொடுங்க',
    phonetic: 'Ku-di-neer / bot-tle than-neer ko-dun-ga',
    context: 'Request safe sealed drinking water.',
  },
  {
    id: 'f-4',
    category: 'food',
    english: 'Please bring the bill',
    tamil: 'பில் கொண்டு வாங்க',
    phonetic: 'Bill kon-du vaan-ga',
    context: 'Polite way to request the dining check.',
  },
  {
    id: 'f-5',
    category: 'food',
    english: 'One strong South Indian filter coffee please',
    tamil: 'ஒரு ஸ்ட்ராங் ஃபில்டர் காபி கொடுங்க',
    phonetic: 'O-ru strong filter coffee ko-dun-ga',
    context: 'Iconic Tamil Nadu beverage ritual in steel tumbler and davarah.',
  },
  {
    id: 'f-6',
    category: 'food',
    english: 'The food is very delicious!',
    tamil: 'சாப்பாடு ரொம்ப சுவையாக இருக்கு!',
    phonetic: 'Saa-paa-du rom-ba su-vai-yaa-ga iruk-ku!',
    context: 'Compliment the chef or restaurant host.',
  },

  // --- Temples & Holy Sites ---
  {
    id: 'tp-1',
    category: 'temple',
    english: 'Where can I leave my shoes?',
    tamil: 'செருப்பு எங்கே விட வேண்டும்?',
    phonetic: 'Se-rup-pu en-gae vi-da ven-dum?',
    context: 'Footwear is strictly banned inside temple premises.',
  },
  {
    id: 'tp-2',
    category: 'temple',
    english: 'Where is the special darshan queue?',
    tamil: 'சிறப்பு தரிசனம் வரிசை எங்கே?',
    phonetic: 'Si-rap-pu dha-ri-sa-nam va-ri-sai en-gae?',
    context: 'Fast-track ₹50/₹100 ticket queue entrance.',
  },
  {
    id: 'tp-3',
    category: 'temple',
    english: 'Can I take photos here?',
    tamil: 'இங்கே புகைப்படம் எடுக்கலாமா?',
    phonetic: 'In-gae pu-gai-pa-dam ed-uk-ka-laa-maa?',
    context: 'Verify camera/phone policy before photographing ancient sanctums.',
  },
  {
    id: 'tp-4',
    category: 'temple',
    english: 'What time does the temple close in the afternoon?',
    tamil: 'கோவில் நடை எப்போது சாத்துவார்கள்?',
    phonetic: 'Ko-vil na-dai ep-po-dhu saath-thu-vaar-gal?',
    context: 'Most temples close between 12:30 PM and 4:00 PM.',
  },
  {
    id: 'tp-5',
    category: 'temple',
    english: 'Where can I get prasadham / holy food?',
    tamil: 'பிரசாதம் எங்கே கிடைக்கும்?',
    phonetic: 'Pra-saa-dham en-gae ki-daik-kum?',
    context: 'Find the official temple prasadham counter (sweet pongal, puliyodharai).',
  },

  // --- Safety & Emergency ---
  {
    id: 'e-1',
    category: 'emergency',
    english: 'Please help me!',
    tamil: 'தயவுசெய்து எனக்கு உதவுங்கள்!',
    phonetic: 'Da-ya-vu-sei-dhu enak-ku udha-vun-ga!',
    context: 'Universal emergency cry for assistance.',
  },
  {
    id: 'e-2',
    category: 'emergency',
    english: 'Where is the nearest hospital or pharmacy?',
    tamil: 'அருகில் உள்ள மருத்துவமனை எங்கே?',
    phonetic: 'Aru-gil ul-la ma-ruth-thu-va-ma-nai en-gae?',
    context: 'Medical assistance or medicine store lookup.',
  },
  {
    id: 'e-3',
    category: 'emergency',
    english: 'Call the police / tourist police',
    tamil: 'போலீஸை கூப்பிடுங்கள்',
    phonetic: 'Po-lice-ai koop-pi-dun-gal',
    context: 'Immediate security or harassment reporting.',
  },
  {
    id: 'e-4',
    category: 'emergency',
    english: 'I am lost, how do I get to the railway station?',
    tamil: 'நான் வழி தவறிவிட்டேன், ரயில் நிலையம் போக வழி என்ன?',
    phonetic: 'Naan va-zhi tha-va-ri-vit-ten, rail ni-lai-yam po-ga va-zhi en-na?',
    context: 'Direction lookup when GPS is unavailable.',
  },

  // --- Greetings & Basics ---
  {
    id: 'p-1',
    category: 'polite',
    english: 'Vanakkam! (Hello / Traditional Greeting)',
    tamil: 'வணக்கம்!',
    phonetic: 'Va-nak-kam!',
    context: 'Place palms together in front of chest. Respectful greeting everywhere.',
  },
  {
    id: 'p-2',
    category: 'polite',
    english: 'Thank you very much',
    tamil: 'மிக்க நன்றி',
    phonetic: 'Mik-ka nan-dri',
    context: 'Express heartfelt gratitude to locals, drivers, or guides.',
  },
  {
    id: 'p-3',
    category: 'polite',
    english: 'Do you speak English?',
    tamil: 'நீங்கள் ஆங்கிலம் பேசுவீர்களா?',
    phonetic: 'Neen-gal aang-gi-lam pe-su-veer-ga-laa?',
    context: 'Polite inquiry before asking detailed questions.',
  },
  {
    id: 'p-4',
    category: 'polite',
    english: 'Okay / Alright / Yes',
    tamil: 'சரி / ஆம்',
    phonetic: 'Sa-ri / Aam',
    context: 'Very common conversational affirmation in Tamil Nadu.',
  },
  {
    id: 'p-5',
    category: 'polite',
    english: 'No / Not needed',
    tamil: 'இல்லை / வேண்டாம்',
    phonetic: 'Il-lai / Ven-daam',
    context: 'Polite way to decline street vendors or unsolicited tour guides.',
  },
];
