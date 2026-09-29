export type Screen = 
  | 'landing' 
  | 'chat' 
  | 'intent' 
  | 'recommendations' 
  | 'compare' 
  | 'bundle' 
  | 'profile';

export type MoodType = 
  | 'chill' 
  | 'energetic' 
  | 'romantic' 
  | 'adventurous' 
  | 'productive' 
  | 'celebratory';

export interface MoodOption {
  id: MoodType;
  emoji: string;
  title: string;
  subtitle: string;
  query: string;
  accentBg: string;
  badgeColor: string;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: 'shirt' | 'bottom' | 'tshirt' | 'footwear' | 'accessories' | 'gift' | 'grooming' | 'electronics' | 'lifestyle' | string;
  gender: 'men' | 'women' | 'unisex';
  price: number;
  originalPrice: number;
  currency: string;
  rating: number;
  reviewCount: number;
  primaryColor: string;
  colorHex: string;
  material: string;
  fit: string;
  imageUrl: string;
  matchScore: number;
  tags: string[];
  moods?: MoodType[];
  moodBadge?: string;
  aiReasoning: {
    occasionFit: string;
    budgetFit: string;
    styleFit: string;
    constraintCheck: string;
  };
  pros: string[];
  cons: string[];
  inStock: boolean;
}

export interface ExtractedIntent {
  rawQuery: string;
  scenarioType: 'gift' | 'travel' | 'work' | 'fitness' | 'casual' | 'general';
  destinationOccasion: string;
  recipient?: string;
  durationDays: number;
  targetGender: 'men' | 'women' | 'unisex' | 'unknown';
  maxBudget: number;
  budgetTier?: 'budget' | 'moderate' | 'expensive' | 'luxury';
  budgetCurrency: string;
  aestheticVibe: string[];
  excludedAttributes: string[];
  requiredCategories: string[];
  extractedAt: string;
  confidenceScore: number;
  detectedMood?: MoodType;
  moodEmoji?: string;
  moodVibe?: string;
}

export interface ClarificationQuestion {
  id: string;
  question: string;
  context: string;
  options: {
    label: string;
    value: string;
    badge?: string;
  }[];
  selectedOption?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  timestamp: string;
  text: string;
  agentThinkingSteps?: string[];
  clarification?: ClarificationQuestion;
  secondaryClarification?: ClarificationQuestion;
  attachedIntent?: ExtractedIntent;
  attachedProducts?: Product[];
  followUpChips?: string[];
}

export interface UserPreferences {
  userName: string;
  email: string;
  typicalBudgetCap: number;
  avoidedColors: string[];
  preferredFabrics: string[];
  preferredFits: string[];
  sizes: {
    tops: string;
    bottoms: string;
    shoes: string;
  };
  autoApplyNegativeFilters: boolean;
  learnedPreferencesCount: number;
  lastUpdated: string;
}

export interface BundleItem {
  dayAssignment: string;
  product: Product;
  stylingTip: string;
}

export interface OutfitBundle {
  title: string;
  destination: string;
  duration: string;
  totalPrice: number;
  budgetCap: number;
  savings: number;
  matchPercentage: number;
  weatherFitNotes: string;
  items: BundleItem[];
}
