// TripSense Tamil Nadu (TripSense TN) — TypeScript Type Definitions

export interface TransportOption {
  mode: 'bus' | 'train' | 'auto' | 'cab' | 'walk' | 'ferry' | 'metro';
  label: string;
  duration: string;
  fare: string;
  frequency?: string;
  routeNo?: string;
  tip?: string;
  icon: string;
}

export interface Hotel {
  id: string;
  name: string;
  stars: 3 | 4 | 5;
  pricePerNight: string;
  distanceFromSpot: string;
  walkTime?: string;
  transitScore: number;
  amenities: string[];
  phone?: string;
  address: string;
  bookingUrl?: string;
}

export interface TouristSpot {
  id: string;
  name: string;
  nameInTamil: string;
  type: 'temple' | 'fort' | 'beach' | 'wildlife' | 'waterfall' | 'museum' | 'pilgrimage' | 'heritage' | 'nature' | 'hill';
  description: string;
  translations: {
    fr: string;
    de: string;
    ja: string;
    zh: string;
    ar: string;
    hi: string;
    es: string;
  };
  timings: string;
  entryFee: string;
  bestTimeToVisit: string;
  crowdLevel: 'low' | 'moderate' | 'high';
  rating: number;
  reviewCount: number;
  aiTip: string;
  dresscode?: string;
  nearbyHotels: Hotel[];
  transport: TransportOption[];
  coordinates: { lat: number; lng: number };
  image?: string;
}

export interface District {
  id: string;
  name: string;
  nameInTamil: string;
  region: 'north' | 'south' | 'central' | 'east' | 'west' | 'nilgiris';
  description: string;
  population: string;
  famousFor: string[];
  spots: TouristSpot[];
  districtHQ: string;
}

export type Language = 'en' | 'ta' | 'fr' | 'de' | 'ja' | 'zh' | 'ar' | 'hi' | 'es';

export interface Translations {
  appName: string;
  tagline: string;
  selectDistrict: string;
  touristSpots: string;
  nearbyHotels: string;
  transport: string;
  getDirections: string;
  startNavigation: string;
  bestTime: string;
  entryFee: string;
  timing: string;
  rating: string;
  crowdLevel: string;
  aiTip: string;
  drescode: string;
  recommended: string;
  fastest: string;
  cheapest: string;
  searchPlaceholder: string;
  allDistricts: string;
  temples: string;
  beaches: string;
  forts: string;
  wildlife: string;
  stars3: string;
  stars4: string;
  stars5: string;
  lowCrowd: string;
  moderateCrowd: string;
  highCrowd: string;
  hotelNearby: string;
  perNight: string;
  transitScore: string;
  audioGuide: string;
  emergencySOS: string;
  saveSpot: string;
  shareSpot: string;
  viewOnMap: string;
  welcome: string;
  chooseLanguage: string;
  exploreState: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  touristType: 'solo' | 'family' | 'international' | 'heritage' | 'spiritual';
  preferredLanguage: Language;
  homeCountryOrCity?: string;
  savedSpots: string[]; // array of spot IDs
  googleMapsSynced: boolean;
  createdAt: string;
}
