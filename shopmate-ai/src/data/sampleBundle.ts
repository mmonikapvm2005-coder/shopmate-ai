import { OutfitBundle } from '../types';
import { SAMPLE_PRODUCTS } from './sampleProducts';

export const SAMPLE_GOA_BUNDLE: OutfitBundle = {
  title: '4-Day Coastal Escape Capsule',
  destination: 'Goa (North & South Beaches)',
  duration: '4 Days / 3 Nights',
  totalPrice: 4996,
  budgetCap: 5000,
  savings: 4097, // Original retail sum was ₹9,093
  matchPercentage: 99,
  weatherFitNotes: 'Optimized for 31-33°C, 75% coastal humidity, and sea breeze. Zero synthetic blends.',
  items: [
    {
      dayAssignment: 'Day 1: Arrival & Anjuna Sunset Cafe',
      product: SAMPLE_PRODUCTS[0], // Olive Linen Resort Shirt (₹1,299)
      stylingTip: 'Wear unbuttoned over a light inner tank or half-buttoned with sleeves rolled to forearm.'
    },
    {
      dayAssignment: 'Day 1 to 4: Essential Coastal Bottom',
      product: SAMPLE_PRODUCTS[1], // Sand Beige Linen Trousers (₹1,599)
      stylingTip: 'Cuff the hems once above the ankle when walking near the shoreline to stay dry.'
    },
    {
      dayAssignment: 'Day 2 & 4: Fort Sightseeing & Cafe Hangouts',
      product: SAMPLE_PRODUCTS[2], // Washed Charcoal Waffle Tee (₹899)
      stylingTip: 'Pair with the stone shorts for daytime bike rides; charcoal hides travel dust effortlessly.'
    },
    {
      dayAssignment: 'Everyday Travel: Shoreline & Restaurant Footwear',
      product: SAMPLE_PRODUCTS[3], // Jute & Canvas Espadrille Mules (₹1,199)
      stylingTip: 'Foldable heel lets you slip them on and off instantly at beach shacks and temple entrances.'
    }
  ]
};

export const PACKING_CHECKLIST = [
  { item: 'Olive Linen Resort Shirt', packed: true, category: 'Tops' },
  { item: 'Washed Charcoal Waffle Knit Tee', packed: true, category: 'Tops' },
  { item: 'Sand Beige Drawstring Linen Pants', packed: true, category: 'Bottoms' },
  { item: 'Jute & Canvas Espadrille Mules', packed: true, category: 'Shoes' },
  { item: 'Mineral Sunscreen SPF 50+', packed: false, category: 'Grooming' },
  { item: 'Matte Tortoise Polarized Sunglasses', packed: false, category: 'Accessories' },
  { item: 'Waterproof Phone Pouch for Scooter Rides', packed: false, category: 'Gear' }
];
