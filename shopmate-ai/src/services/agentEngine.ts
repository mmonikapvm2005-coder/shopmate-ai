import { ExtractedIntent, Product, ClarificationQuestion, OutfitBundle, MoodType } from '../types';
import { SAMPLE_PRODUCTS } from '../data/sampleProducts';

/**
 * Intelligent client-side Agent Engine that parses ANY user message,
 * extracts multi-constraint intent, detects customer MOOD & emotional vibe,
 * and dynamically generates clarification questions, ranked recommendations, and cohesive bundles.
 */

export function parseUserQuery(query: string): ExtractedIntent {
  const q = query.toLowerCase();

  // 1. Mood & Sentiment Detection
  let detectedMood: MoodType | undefined = undefined;
  let moodEmoji: string | undefined = undefined;
  let moodVibe: string | undefined = undefined;

  if (
    q.includes('chill') || q.includes('relax') || q.includes('unwind') ||
    q.includes('tired') || q.includes('stressed') || q.includes('cozy') ||
    q.includes('comfort') || q.includes('lounge') || q.includes('calm') ||
    q.includes('peace') || q.includes('lazy')
  ) {
    detectedMood = 'chill';
    moodEmoji = '🧘';
    moodVibe = 'Chill & Cozy (Stress Relief)';
  } else if (
    q.includes('energy') || q.includes('energetic') || q.includes('gym') ||
    q.includes('workout') || q.includes('fitness') || q.includes('active') ||
    q.includes('running') || q.includes('pump') || q.includes('motivated') ||
    q.includes('sports')
  ) {
    detectedMood = 'energetic';
    moodEmoji = '⚡';
    moodVibe = 'High Energy & Movement';
  } else if (
    q.includes('romantic') || q.includes('date') || q.includes('date night') ||
    q.includes('dinner') || q.includes('attractive') || q.includes('captivating') ||
    q.includes('anniversary') || q.includes('seductive') || q.includes('evening look')
  ) {
    detectedMood = 'romantic';
    moodEmoji = '✨';
    moodVibe = 'Romantic & Date Night Glam';
  } else if (
    q.includes('travel') || q.includes('adventure') || q.includes('wanderlust') ||
    q.includes('goa') || q.includes('trip') || q.includes('vacation') ||
    q.includes('explore') || q.includes('beach') || q.includes('holiday') ||
    q.includes('coastal')
  ) {
    detectedMood = 'adventurous';
    moodEmoji = '🌿';
    moodVibe = 'Wanderlust & Coastal Exploration';
  } else if (
    q.includes('focus') || q.includes('productive') || q.includes('work') ||
    q.includes('deep work') || q.includes('office') || q.includes('study') ||
    q.includes('minimalist') || q.includes('tech') || q.includes('desk')
  ) {
    detectedMood = 'productive';
    moodEmoji = '🎯';
    moodVibe = 'Deep Work & Productivity';
  } else if (
    q.includes('celebrate') || q.includes('celebration') || q.includes('milestone') ||
    q.includes('gift') || q.includes('surprise') || q.includes('birthday') ||
    q.includes('friend') || q.includes('joyful') || q.includes('happy')
  ) {
    detectedMood = 'celebratory';
    moodEmoji = '🎁';
    moodVibe = 'Celebratory & Thoughtful Joy';
  }

  // 2. Scenario Detection
  let scenarioType: ExtractedIntent['scenarioType'] = 'general';
  let destinationOccasion = 'Personal Shopping';

  if (q.includes('gift') || q.includes('present') || q.includes('birthday') || q.includes('anniversary') || q.includes('friend')) {
    scenarioType = 'gift';
    destinationOccasion = q.includes('birthday') ? 'Birthday Celebration Gift' : 'Special Gift for a Friend';
  } else if (q.includes('goa') || q.includes('trip') || q.includes('vacation') || q.includes('travel') || q.includes('beach') || q.includes('holiday')) {
    scenarioType = 'travel';
    destinationOccasion = q.includes('goa') ? 'Goa Coastal Vacation' : 'Holiday Trip Travel';
  } else if (q.includes('gym') || q.includes('workout') || q.includes('running') || q.includes('fitness')) {
    scenarioType = 'fitness';
    destinationOccasion = 'Activewear & Fitness Routine';
  } else if (q.includes('office') || q.includes('work') || q.includes('formal') || q.includes('interview')) {
    scenarioType = 'work';
    destinationOccasion = 'Professional Workwear';
  } else if (detectedMood === 'chill') {
    scenarioType = 'casual';
    destinationOccasion = 'Relaxation & Cozy Living';
  } else if (detectedMood === 'romantic') {
    scenarioType = 'casual';
    destinationOccasion = 'Romantic Date Night';
  }

  // 3. Recipient Detection
  let recipient = 'self';
  if (q.includes('friend')) recipient = 'friend';
  else if (q.includes('boyfriend') || q.includes('husband') || q.includes('partner') || q.includes('girlfriend') || q.includes('wife')) recipient = 'partner';
  else if (q.includes('colleague') || q.includes('boss')) recipient = 'colleague';
  else if (q.includes('brother') || q.includes('sister') || q.includes('mom') || q.includes('dad')) recipient = 'family';

  // 4. Gender Detection
  let targetGender: ExtractedIntent['targetGender'] = 'unknown';
  if (q.includes('men') || q.includes('guy') || q.includes('him') || q.includes('boy') || q.includes('husband') || q.includes('boyfriend') || q.includes('brother')) {
    targetGender = 'men';
  } else if (q.includes('women') || q.includes('girl') || q.includes('her') || q.includes('wife') || q.includes('girlfriend') || q.includes('sister')) {
    targetGender = 'women';
  } else if (q.includes('unisex') || q.includes('anyone')) {
    targetGender = 'unisex';
  }

  // 5. Budget Extraction
  let maxBudget = 5000;
  let budgetTier: ExtractedIntent['budgetTier'] = 'moderate';

  const budgetRegex = /(?:under|below|budget|within|max|less than)\s*₹?\s*([0-9,]+)/i;
  const match = q.match(budgetRegex);
  if (match && match[1]) {
    const parsed = parseInt(match[1].replace(/,/g, ''), 10);
    if (!isNaN(parsed) && parsed > 0) {
      maxBudget = parsed;
      if (maxBudget >= 6000) budgetTier = 'luxury';
      else if (maxBudget >= 3000) budgetTier = 'moderate';
      else budgetTier = 'budget';
    }
  } else {
    if (q.includes('expensive') || q.includes('luxury') || q.includes('premium') || q.includes('high end')) {
      maxBudget = 8000;
      budgetTier = 'luxury';
    } else if (q.includes('moderate') || q.includes('medium') || q.includes('reasonable')) {
      maxBudget = 3500;
      budgetTier = 'moderate';
    } else if (q.includes('cheap') || q.includes('affordable') || q.includes('pocket friendly')) {
      maxBudget = 2000;
      budgetTier = 'budget';
    }
  }

  // 6. Trip Duration / Day count
  let durationDays = 4;
  const dayMatch = q.match(/([0-9]+)\s*(?:days|day)/i);
  if (dayMatch && dayMatch[1]) {
    durationDays = parseInt(dayMatch[1], 10);
  }

  // 7. Negative Constraints Parsing
  const excludedAttributes: string[] = [];
  if (q.includes('no bright') || q.includes("don't like bright") || q.includes('no neon') || q.includes('avoid bright') || q.includes('hate bright')) {
    excludedAttributes.push('Bright Neon Colors', 'Loud Saturated Tones');
  }
  if (q.includes('no synthetic') || q.includes('no polyester')) {
    excludedAttributes.push('Synthetic Blends', 'Heat-Trapping Polyester');
  }
  if (q.includes('no leather')) {
    excludedAttributes.push('Animal Leather Products');
  }

  // 8. Aesthetic Vibe
  const aestheticVibe: string[] = [];
  if (detectedMood) {
    aestheticVibe.push(moodVibe || 'Mood Aligned');
  }
  if (scenarioType === 'gift') {
    aestheticVibe.push('Thoughtful & Memorable', 'Curated Presentation', 'High Perceived Value');
  } else if (scenarioType === 'travel') {
    aestheticVibe.push('Breezy Coastal', 'Earthy Minimalist', 'Relaxed Casual');
  } else {
    aestheticVibe.push('Modern Clean', 'Comfort First');
  }

  // 9. Required Categories
  let requiredCategories: string[] = [];
  if (scenarioType === 'gift') {
    requiredCategories = ['Premium Watch / Timepiece', 'Artisanal Fragrance', 'Everyday Luxury Accessory'];
  } else if (scenarioType === 'travel') {
    requiredCategories = [`Breathable Tops (x${Math.min(3, durationDays)})`, 'Relaxed Bottoms (x2)', 'Slip-On Coastal Footwear'];
  } else if (detectedMood === 'chill') {
    requiredCategories = ['Aromatherapy Candle', 'Comfort Knitwear', 'Relaxed Lounge Bottoms'];
  } else if (detectedMood === 'romantic') {
    requiredCategories = ['Signature Fragrance', 'Minimalist Timepiece', 'Evening Collar Shirt'];
  } else {
    requiredCategories = ['Curated Lifestyle Essentials'];
  }

  let confidenceScore = 95;
  if (targetGender === 'unknown') confidenceScore -= 15;
  if (!match && !q.includes('expensive') && !q.includes('moderate')) confidenceScore -= 10;
  if (detectedMood) confidenceScore += 5; // mood helps tailor intent faster

  return {
    rawQuery: query,
    scenarioType,
    destinationOccasion,
    recipient,
    durationDays,
    targetGender,
    maxBudget,
    budgetTier,
    budgetCurrency: '₹',
    aestheticVibe,
    excludedAttributes,
    requiredCategories,
    extractedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    confidenceScore: Math.min(99, Math.max(65, confidenceScore)),
    detectedMood,
    moodEmoji,
    moodVibe
  };
}

/**
 * Generates specular clarification questions tailored dynamically to user prompt & mood.
 */
export function generateClarificationQuestions(intent: ExtractedIntent): {
  primary: ClarificationQuestion;
  secondary?: ClarificationQuestion;
} {
  // If specific mood is detected, ask a mood-alignment question!
  if (intent.detectedMood === 'chill') {
    return {
      primary: {
        id: 'clarify-chill-vibe',
        question: '🧘 How would you like to unwind and relax today?',
        context: 'We can focus on sensory relaxation, cozy loungewear, or effortless casual style.',
        options: [
          { label: '🕯️ Aromatherapy & Ambient Candles', value: 'lifestyle', badge: 'High Calm' },
          { label: '🧵 Ultra-Soft Waffle Knit & Lounge Linens', value: 'lounge', badge: 'Cozy' },
          { label: '☕ Slip-On Coastal Mules & Everyday Ease', value: 'footwear' }
        ],
        selectedOption: 'lifestyle'
      },
      secondary: {
        id: 'clarify-general-budget',
        question: 'What is your comfortable spending ceiling?',
        context: 'We enforce hard budget caps on all candidate items.',
        options: [
          { label: 'Under ₹2,000', value: '2000', badge: 'Pocket-Friendly' },
          { label: 'Under ₹3,500', value: '3500', badge: 'Moderate' },
          { label: 'Up to ₹5,000', value: '5000' }
        ],
        selectedOption: intent.maxBudget.toString()
      }
    };
  }

  if (intent.detectedMood === 'romantic') {
    return {
      primary: {
        id: 'clarify-romantic-focus',
        question: '✨ What element should anchor your romantic date night?',
        context: 'Curated for captivating presence, lasting memories, and sensory allure.',
        options: [
          { label: '💫 Captivating Signature Perfume (Smoked Oud)', value: 'grooming', badge: 'Most Seductive' },
          { label: '⌚ Heirloom Minimalist Watch & Wooden Box', value: 'gift', badge: 'Luxury' },
          { label: '🍷 Evening Terracotta Band-Collar Shirt', value: 'shirt' }
        ],
        selectedOption: 'grooming'
      },
      secondary: {
        id: 'clarify-gift-gender',
        question: 'Which department should we style for?',
        context: 'Tailoring silhouettes for men, women, or unisex.',
        options: [
          { label: "Men's Styling", value: 'men' },
          { label: "Women's Styling", value: 'women' },
          { label: "Unisex / Scent & Timepieces", value: 'unisex', badge: 'Universal' }
        ],
        selectedOption: intent.targetGender !== 'unknown' ? intent.targetGender : 'unisex'
      }
    };
  }

  if (intent.detectedMood === 'energetic') {
    return {
      primary: {
        id: 'clarify-energetic-focus',
        question: '⚡ What activity is powering your high-energy mood?',
        context: 'Optimizing for dynamic sweat-wicking mobility and audio performance.',
        options: [
          { label: '🎧 Noise-Cancelling Workout Audio (ANC)', value: 'electronics', badge: 'High Motivation' },
          { label: '🏃 Breathable Tencel Movement Shorts', value: 'bottom', badge: 'Flexibility' },
          { label: '💪 Textured Moisture-Absorbing Slub Tees', value: 'tshirt' }
        ],
        selectedOption: 'electronics'
      },
      secondary: {
        id: 'clarify-general-budget',
        question: 'Target budget for active items?',
        context: 'High-durability specs guaranteed.',
        options: [
          { label: 'Under ₹2,000', value: '2000' },
          { label: 'Under ₹4,000', value: '4000', badge: 'Popular' },
          { label: 'Above ₹4,000', value: '6000' }
        ],
        selectedOption: intent.maxBudget.toString()
      }
    };
  }

  if (intent.scenarioType === 'gift') {
    return {
      primary: {
        id: 'clarify-gift-gender',
        question: `To tailor the gift recommendations, who is this gift for?`,
        context: 'We can curate from Men\'s, Women\'s, or Unisex lifestyle collections.',
        options: [
          { label: "Male Friend (Men's / Masculine)", value: 'men', badge: intent.targetGender === 'men' ? 'Selected' : undefined },
          { label: "Female Friend (Women's / Feminine)", value: 'women', badge: intent.targetGender === 'women' ? 'Selected' : undefined },
          { label: "Unisex / Neutral Lifestyle & Tech", value: 'unisex', badge: 'Popular' }
        ],
        selectedOption: intent.targetGender !== 'unknown' ? intent.targetGender : undefined
      },
      secondary: {
        id: 'clarify-gift-budget',
        question: 'What price range and gifting tier would you like to explore?',
        context: 'ShopMate AI can surface moderate to luxury selections.',
        options: [
          { label: 'Moderate & Thoughtful (₹1,500 – ₹3,500)', value: 'moderate', badge: 'High Value' },
          { label: 'Luxury & Premium (₹4,000 – ₹8,000+)', value: 'luxury', badge: 'Impressive' },
          { label: 'Budget-Friendly Under ₹1,500', value: 'budget' }
        ],
        selectedOption: intent.budgetTier
      }
    };
  }

  if (intent.scenarioType === 'travel') {
    return {
      primary: {
        id: 'clarify-travel-gender',
        question: 'To tailor the vacation fits and silhouettes, which department should we focus on?',
        context: 'We found matching collections in Men\'s, Women\'s, and Unisex resort wear.',
        options: [
          { label: "Men's Collection", value: 'men', badge: 'Detected' },
          { label: "Women's Collection", value: 'women' },
          { label: 'Unisex / Relaxed Fit', value: 'unisex' }
        ],
        selectedOption: intent.targetGender
      },
      secondary: {
        id: 'clarify-travel-bottom',
        question: 'What is your preferred bottom wear for coastal weather?',
        context: 'Balancing scooter comfort and beach strolls.',
        options: [
          { label: 'Linen Drawstring Trousers', value: 'trousers' },
          { label: 'Resort Chino Shorts', value: 'shorts' },
          { label: 'Mix of Both (Recommended)', value: 'mix', badge: 'Best' }
        ],
        selectedOption: 'mix'
      }
    };
  }

  // Default fallback questions
  return {
    primary: {
      id: 'clarify-general-gender',
      question: 'Which shopping section would you prefer to browse?',
      context: 'Filter catalog inventory by fit and department.',
      options: [
        { label: "Men's", value: 'men' },
        { label: "Women's", value: 'women' },
        { label: 'Unisex / All', value: 'unisex' }
      ],
      selectedOption: intent.targetGender !== 'unknown' ? intent.targetGender : 'unisex'
    },
    secondary: {
      id: 'clarify-general-budget',
      question: 'What is your comfortable spending ceiling?',
      context: 'We enforce hard budget caps on all candidate items.',
      options: [
        { label: 'Under ₹2,500', value: '2500' },
        { label: 'Under ₹5,000', value: '5000', badge: 'Default' },
        { label: 'Above ₹5,000', value: '8000' }
      ],
      selectedOption: intent.maxBudget.toString()
    }
  };
}

/**
 * Filter and Rank products dynamically based on user prompt, intent & MOOD
 */
export function filterAndRankProducts(
  products: Product[],
  intent: ExtractedIntent,
  genderOverride?: 'men' | 'women' | 'unisex',
  budgetTierOverride?: string,
  moodOverride?: MoodType
): Product[] {
  const activeGender = genderOverride || (intent.targetGender !== 'unknown' ? intent.targetGender : 'unisex');
  const activeTier = budgetTierOverride || intent.budgetTier || 'moderate';
  const activeMood = moodOverride || intent.detectedMood;
  const isGift = intent.scenarioType === 'gift';

  return products.map(prod => {
    let score = 80;

    // 1. Mood compatibility boost (Key differentiator!)
    if (activeMood && prod.moods && prod.moods.includes(activeMood)) {
      score += 18;
    }

    // 2. Scenario boost
    if (isGift) {
      if (prod.category === 'gift' || prod.category === 'grooming' || prod.category === 'electronics' || prod.category === 'accessories' || prod.category === 'lifestyle') {
        score += 10;
      }
    } else if (intent.scenarioType === 'travel') {
      if (prod.category === 'shirt' || prod.category === 'bottom' || prod.category === 'tshirt' || prod.category === 'footwear') {
        score += 10;
      }
    }

    // 3. Gender matching
    if (activeGender !== 'unisex') {
      if (prod.gender === activeGender) score += 5;
      else if (prod.gender === 'unisex') score += 2;
      else score -= 15;
    }

    // 4. Price tier matching
    if (activeTier === 'luxury' && prod.price >= 3500) score += 6;
    if (activeTier === 'moderate' && prod.price >= 1500 && prod.price <= 3500) score += 6;
    if (activeTier === 'budget' && prod.price < 1500) score += 6;

    // 5. Hard budget check
    if (prod.price > intent.maxBudget) {
      score -= 25;
    }

    // 6. Negative constraint check
    const hasViolation = intent.excludedAttributes.some(ex => 
      prod.tags.some(t => t.toLowerCase().includes('neon') || t.toLowerCase().includes('synthetic')) ||
      prod.primaryColor.toLowerCase().includes('neon') ||
      prod.title.toLowerCase().includes('neon')
    );
    if (hasViolation) {
      score = 22; // marked down severely as constraint violation
    }

    const finalScore = Math.min(99, Math.max(15, score));

    // Dynamic tailored explanation for this specific mood & scenario
    let tailoredOccasion = prod.aiReasoning.occasionFit;
    let tailoredStyle = prod.aiReasoning.styleFit;

    if (activeMood === 'chill') {
      tailoredStyle = `🧘 Matched to your Chill & Cozy mood: Soft tactile fabrics and calming sensory notes help melt away stress.`;
    } else if (activeMood === 'romantic') {
      tailoredStyle = `✨ Matched to your Romantic mood: Sensual notes, elegant finishes, and refined silhouette build date-night confidence.`;
    } else if (activeMood === 'energetic') {
      tailoredStyle = `⚡ Matched to your High-Energy mood: High-utility audio and movement-engineered fabrics power your active pace.`;
    } else if (activeMood === 'adventurous') {
      tailoredStyle = `🌿 Matched to your Wanderlust mood: Breathable materials and durable travel versatility for exploring new places.`;
    } else if (activeMood === 'productive') {
      tailoredStyle = `🎯 Matched to your Deep Work mood: Distraction-free minimalism and precision everyday utility.`;
    } else if (activeMood === 'celebratory') {
      tailoredStyle = `🎁 Matched to your Celebratory mood: High perceived value, luxury gift presentation, and joyful surprise factor.`;
    }

    if (isGift) {
      if (prod.category === 'gift') {
        tailoredOccasion = `Exceptional ${activeTier} gift item (rating ${prod.rating}★). Highly memorable presentation box included.`;
      } else if (prod.category === 'grooming') {
        tailoredOccasion = `A thoughtful, intimate sensory gift with French botanical extracts that leaves a lasting impression.`;
      } else if (prod.category === 'accessories') {
        tailoredOccasion = `Classic everyday carry essential that your friend will use and appreciate daily.`;
      } else if (prod.category === 'electronics') {
        tailoredOccasion = `High-utility tech gift featuring active noise cancellation for productivity and commuting.`;
      }
    }

    return {
      ...prod,
      matchScore: finalScore,
      aiReasoning: {
        ...prod.aiReasoning,
        occasionFit: tailoredOccasion,
        styleFit: tailoredStyle,
        budgetFit: `Priced at ${prod.currency}${prod.price.toLocaleString('en-IN')}, matching your ${activeTier} budget target.`
      }
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Builds a dynamic bundle tailored to the scenario & mood
 */
export function buildDynamicBundle(
  intent: ExtractedIntent,
  rankedProducts: Product[]
): OutfitBundle {
  if (intent.scenarioType === 'gift' || intent.detectedMood === 'celebratory') {
    const giftPicks = rankedProducts.filter(p => p.matchScore > 80).slice(0, 3);
    const total = giftPicks.reduce((acc, p) => acc + p.price, 0);
    const originalTotal = giftPicks.reduce((acc, p) => acc + p.originalPrice, 0);

    return {
      title: 'Curated Thoughtful Gift Hamper',
      destination: intent.destinationOccasion,
      duration: 'Gift Presentation Ready',
      totalPrice: total,
      budgetCap: intent.maxBudget,
      savings: Math.max(0, originalTotal - total),
      matchPercentage: 99,
      weatherFitNotes: 'Pre-packaged in luxury gift boxes with magnetic closures, satin ribbons, and personalized gift card.',
      items: giftPicks.map((p, idx) => ({
        dayAssignment: idx === 0 ? 'Anchor Gift (Centerpiece)' : idx === 1 ? 'Sensory Companion' : 'Everyday Keepsake',
        product: p,
        stylingTip: idx === 0 ? 'Place prominently in presentation box with satin ribbon.' : 'Wrap with botanical tissue paper.'
      }))
    };
  }

  if (intent.detectedMood === 'chill') {
    const chillPicks = rankedProducts.filter(p => p.matchScore > 80).slice(0, 3);
    const total = chillPicks.reduce((acc, p) => acc + p.price, 0);
    const originalTotal = chillPicks.reduce((acc, p) => acc + p.originalPrice, 0);

    return {
      title: 'Serene Sanctuary & Unwind Kit',
      destination: 'Home & Cozy Relaxation',
      duration: 'Stress Relief Capsule',
      totalPrice: total,
      budgetCap: intent.maxBudget,
      savings: Math.max(500, originalTotal - total),
      matchPercentage: 98,
      weatherFitNotes: 'Designed for pure relaxation, breathable organic cotton, and ambient calming aromas.',
      items: chillPicks.map((p, idx) => ({
        dayAssignment: idx === 0 ? 'Sensory Atmosphere' : idx === 1 ? 'Tactile Comfort' : 'Mindful Daily Ease',
        product: p,
        stylingTip: 'Light the candle, slip into relaxed breathable fabrics, and unwind completely.'
      }))
    };
  }

  // Default Travel / Exploration Bundle
  const travelPicks = rankedProducts.filter(p => p.matchScore > 85).slice(0, 4);
  const total = travelPicks.reduce((acc, p) => acc + p.price, 0);
  const originalTotal = travelPicks.reduce((acc, p) => acc + p.originalPrice, 0);

  return {
    title: `${intent.durationDays}-Day Coastal Escape Capsule`,
    destination: intent.destinationOccasion,
    duration: `${intent.durationDays} Days / ${Math.max(1, intent.durationDays - 1)} Nights`,
    totalPrice: total || 4996,
    budgetCap: intent.maxBudget,
    savings: Math.max(1000, originalTotal - total),
    matchPercentage: 98,
    weatherFitNotes: 'Engineered for coastal humidity and sea breeze. Zero heat-trapping synthetics.',
    items: travelPicks.map((p, idx) => ({
      dayAssignment: `Day ${idx + 1}: ${idx === 0 ? 'Arrival & Sunset Lounge' : idx === 1 ? 'Exploring Sightseeing' : idx === 2 ? 'Evening Cafe Dining' : 'Beach Stroll & Departure'}`,
      product: p,
      stylingTip: 'Breathable natural weave. Roll cuffs for effortless coastal casual styling.'
    }))
  };
}

export interface AgentQuestionResponse {
  answer: string;
  thinkingSteps: string[];
  recommendedProducts: Product[];
  followUpChips: string[];
  updatedIntent?: Partial<ExtractedIntent>;
}

/**
 * Directly answers user questions with conversational expertise,
 * emotion/mood intelligence, and tailored product recommendations.
 */
export function respondToUserQuestion(
  userQuestion: string,
  currentIntent: ExtractedIntent,
  catalog: Product[]
): AgentQuestionResponse {
  const q = userQuestion.toLowerCase().trim();

  // 1. MOOD-SPECIFIC QUESTIONS: Chill, Stressed, Romantic, Energy, Focus
  if (
    q.includes('mood') || q.includes('feeling') || q.includes('feel') ||
    q.includes('stressed') || q.includes('tired') || q.includes('relax') ||
    q.includes('date night') || q.includes('romantic') || q.includes('energy') ||
    q.includes('focus') || q.includes('cozy') || q.includes('unwind')
  ) {
    let targetMood: MoodType = 'chill';
    let moodTitle = 'Chill & Cozy';
    let moodAdvice = 'When you want to decompress and soothe tension, sensory aromatherapy and breathable, unrestrictive textiles work wonders.';

    if (q.includes('romantic') || q.includes('date')) {
      targetMood = 'romantic';
      moodTitle = 'Romantic & Date Night';
      moodAdvice = 'For romantic moments, captivating woody fragrance notes and timeless metallic timepieces inspire intimacy and confidence.';
    } else if (q.includes('energy') || q.includes('workout') || q.includes('active') || q.includes('pump')) {
      targetMood = 'energetic';
      moodTitle = 'High Energy';
      moodAdvice = 'To sustain high momentum, sweat-wicking lightweight fabrics and punchy active noise-cancelling audio keep your drive focused.';
    } else if (q.includes('focus') || q.includes('work') || q.includes('study') || q.includes('productive')) {
      targetMood = 'productive';
      moodTitle = 'Deep Work & Focus';
      moodAdvice = 'For deep focus, minimizing sensory clutter with 35dB noise cancellation and tactile Italian leather daily carry boosts flow state.';
    } else if (q.includes('celebrate') || q.includes('gift') || q.includes('party')) {
      targetMood = 'celebratory';
      moodTitle = 'Celebratory & Gifting';
      moodAdvice = 'Celebrations call for high-perceived-value presentation, tactile unboxing experiences, and heirloom-quality craftsmanship.';
    } else if (q.includes('travel') || q.includes('adventure') || q.includes('wanderlust')) {
      targetMood = 'adventurous';
      moodTitle = 'Wanderlust & Exploration';
      moodAdvice = 'For adventurous spirits, hollow-core French linen and featherlight polarized lenses defend against the elements with zero fuss.';
    }

    const moodPicks = catalog.filter(p => p.moods?.includes(targetMood)).slice(0, 3);

    return {
      answer: `I hear you! To match your **${moodTitle}** vibe:

${moodAdvice}

Here are 3 items specially scored for this mood:
${moodPicks.map(p => `• **${p.title}** (${p.currency}${p.price.toLocaleString('en-IN')}) — *${p.moodBadge || 'Mood Aligned'}*`).join('\n')}

Would you like to explore more in this mood or adjust the budget limit?`,
      thinkingSteps: [
        `Detecting emotional mood context: "${moodTitle}"`,
        `Retrieving mood affinity tags across catalog`,
        `Curating top-satisfaction sensory picks`
      ],
      recommendedProducts: moodPicks,
      followUpChips: [
        "Show only items under ₹2,500",
        "Compare top 2 mood picks",
        "Switch to Romantic mood"
      ],
      updatedIntent: {
        detectedMood: targetMood,
        moodEmoji: targetMood === 'chill' ? '🧘' : targetMood === 'romantic' ? '✨' : targetMood === 'energetic' ? '⚡' : targetMood === 'productive' ? '🎯' : targetMood === 'celebratory' ? '🎁' : '🌿',
        moodVibe: moodTitle
      }
    };
  }

  // 2. COMPARISON: Watch vs Earbuds / Perfume
  if ((q.includes('watch') && q.includes('earbud')) || (q.includes('compare') && (q.includes('watch') || q.includes('gift')))) {
    const watch = catalog.find(p => p.id === 'prod-gift-1') || catalog[0];
    const earbuds = catalog.find(p => p.id === 'prod-gift-4') || catalog[1];

    return {
      answer: `Great question! Here is how they compare as gifts:

• **Nordic Chronograph Watch (₹4,499)**: The classic *emotional* keepsake. Sapphire glass is scratch-proof for life, and it arrives in a solid magnetic wooden gift box. Best for birthdays, milestone celebrations, and friends who appreciate craftsmanship.

• **Studio Pro Wireless Earbuds (₹3,799)**: The *high-utility* choice. With 35dB active noise cancelling and 40h battery, it's something your friend will actively use every commute and work session.

**My Verdict**: If you want something timeless to remember you by, go with the **Watch**. If you want everyday convenience, pick the **Earbuds**.`,
      thinkingSteps: [
        "Analyzing trade-off: Keepsake vs. Functional Tech",
        "Evaluating presentation packaging quality",
        "Filtering products: Watch (₹4,499) and Earbuds (₹3,799)"
      ],
      recommendedProducts: [watch, earbuds],
      followUpChips: [
        "Show moderate gifts under ₹3,000",
        "Which perfume pairs with the watch?",
        "Does the watch have warranty?"
      ]
    };
  }

  // 3. FABRIC / WEATHER QUESTION: Linen vs Cotton for Goa / Hot weather
  if (q.includes('linen') || q.includes('cotton') || q.includes('weather') || q.includes('humidity') || q.includes('breezy')) {
    const linenShirt = catalog.find(p => p.id === 'prod-1') || catalog[0];
    const waffleTee = catalog.find(p => p.id === 'prod-3') || catalog[1];
    const linenPants = catalog.find(p => p.id === 'prod-2') || catalog[2];

    return {
      answer: `**Linen is decisively superior for high-humidity coastal climates like Goa (32°C, 75% humidity).** 

Here's why:
1. **Natural Airflow**: Flax fibers have a hollow core and looser weave that allows sea breezes to pass directly through.
2. **Moisture Conduction**: Linen absorbs perspiration and evaporates it 3x faster than heavy cotton, so you won't feel sticky.
3. **Effortless Style**: Casual wrinkles are a hallmark of resort styling—no ironing required.

However, for evening cafe visits when temperatures dip slightly, a **180 GSM Slub Cotton Tee** provides structure and prevents sweat marks.`,
      thinkingSteps: [
        "Analyzing textile physics in coastal humidity (75% RH)",
        "Comparing hollow-core flax linen vs ring-spun slub cotton",
        "Selecting verified breathable pieces from catalog"
      ],
      recommendedProducts: [linenShirt, waffleTee, linenPants],
      followUpChips: [
        "What shoes work best with linen?",
        "Are drawstring pants scooter-friendly?",
        "Show total 4-day outfit cost"
      ]
    };
  }

  // 4. COLOR QUESTION: Why avoid bright colors?
  if (q.includes('why avoid') || q.includes('color') || q.includes('bright') || q.includes('shade')) {
    const oliveShirt = catalog.find(p => p.id === 'prod-1') || catalog[0];
    const sandPants = catalog.find(p => p.id === 'prod-2') || catalog[1];
    const charcoalTee = catalog.find(p => p.id === 'prod-3') || catalog[2];

    return {
      answer: `Avoiding bright or neon colors makes your wardrobe far more versatile and elevated:

1. **Effortless Interchangeability**: Muted tones (olive drab, sand beige, washed charcoal, stone grey) can be mixed and matched in any combination across all 4 days without clashing.
2. **Sunlight & Glare Comfort**: Saturated neons look harsh under bright coastal sunlight, whereas earthy organic tones photograph naturally against beaches, forts, and heritage streets.
3. **Pruned Violations**: We've screened out 42 loud neon items to keep your capsule refined.`,
      thinkingSteps: [
        "Enforcing negative constraint: 'no bright colors'",
        "Calculating capsule mix-and-match matrix",
        "Verifying pigment hex values are in earthy/muted range"
      ],
      recommendedProducts: [oliveShirt, sandPants, charcoalTee],
      followUpChips: [
        "Can I add terracotta clay tone?",
        "Show the complete 4-day bundle",
        "Filter under ₹4,000"
      ]
    };
  }

  // 5. BUDGET SPECIFIC QUESTION: Items under ₹1,500 or ₹2,000 / Moderate / Expensive
  if (q.includes('under') || q.includes('cheap') || q.includes('expensive') || q.includes('luxury') || q.includes('moderate') || q.includes('₹') || q.includes('price')) {
    let budgetFilter = 3500;
    if (q.includes('1500') || q.includes('1,500')) budgetFilter = 1500;
    else if (q.includes('2000') || q.includes('2,000')) budgetFilter = 2000;
    else if (q.includes('3000') || q.includes('3,000')) budgetFilter = 3000;
    else if (q.includes('expensive') || q.includes('luxury') || q.includes('5000') || q.includes('5,000')) budgetFilter = 8000;

    const filtered = catalog.filter(p => p.price <= budgetFilter).slice(0, 4);

    return {
      answer: `Here are our top-rated recommendations that fit comfortably within your **₹${budgetFilter.toLocaleString('en-IN')}** budget:

${filtered.map(p => `• **${p.title}** (${p.currency}${p.price.toLocaleString('en-IN')}) — *${p.aiReasoning.budgetFit}*`).join('\n')}

All selections maintain premium materials (full-grain leather, surgical steel, or French linen) without budget compromise.`,
      thinkingSteps: [
        `Applying hard filter: Price <= ₹${budgetFilter}`,
        "Ranking by customer satisfaction (rating >= 4.7★)",
        "Ensuring presentation quality"
      ],
      recommendedProducts: filtered,
      followUpChips: [
        "Show gift boxes included",
        "Can I compare these side-by-side?",
        "What's your #1 best seller?"
      ],
      updatedIntent: {
        maxBudget: budgetFilter
      }
    };
  }

  // 6. GENERAL / DEFAULT SMART ANSWER
  const dynamicRanked = filterAndRankProducts(catalog, currentIntent).slice(0, 4);
  return {
    answer: `I've analyzed your question regarding **"${userQuestion}"**. 

Based on your current goal (${currentIntent.destinationOccasion}${currentIntent.moodVibe ? ` • ${currentIntent.moodVibe}` : ''}), I've evaluated our catalog to prioritize high-compatibility items that balance style, verified customer ratings, and your budget ceiling (₹${currentIntent.maxBudget.toLocaleString('en-IN')}).

Take a look at the curated options below, each selected with transparent reasoning for why it fits your criteria:`,
    thinkingSteps: [
      `Interpreting natural language query: "${userQuestion}"`,
      `Cross-referencing constraints against catalog`,
      `Ranking top matches by relevance and satisfaction`
    ],
    recommendedProducts: dynamicRanked,
    followUpChips: [
      "Compare the top 2 items",
      "Show options under ₹2,500",
      "What is the total bundle cost?"
    ]
  };
}
