// TripSense TN — Auto Fare Rates, App Coverage & Scam Protection Data

export interface DistrictAppCoverage {
  districtId: string;
  tier: 1 | 2 | 3;
  tierLabel: 'High App Availability' | 'Moderate App Availability' | 'Offline / Local Auto Stands';
  ola: boolean;
  uber: boolean;
  rapido: boolean;
  redTaxi: boolean;
  recommendedMode: string;
  tips: string;
}

export const TN_GOVT_AUTO_RATES = {
  baseDistanceKm: 1.8,
  baseFareDay: 30, // ₹30 for first 1.8 km
  perKmRateDay: 15, // ₹15 per km after 1.8 km
  nightSurchargeMultiplier: 1.5, // 50% extra between 10:00 PM and 5:00 AM
  waitingChargesPer5Min: 3.5,
  minimumRecommendedTip: 10,
};

// District app availability mapping for all 38 districts
export const DISTRICT_APP_COVERAGE: Record<string, DistrictAppCoverage> = {
  chennai: {
    districtId: 'chennai',
    tier: 1,
    tierLabel: 'High App Availability',
    ola: true,
    uber: true,
    rapido: true,
    redTaxi: true,
    recommendedMode: 'Metro Rail + Uber / Rapido Auto',
    tips: 'Meter autos rarely run by meter; always book via Uber, Ola, or Rapido to lock upfront pricing.',
  },
  coimbatore: {
    districtId: 'coimbatore',
    tier: 1,
    tierLabel: 'High App Availability',
    ola: true,
    uber: true,
    rapido: true,
    redTaxi: true,
    recommendedMode: 'Red Taxi & Rapido Auto',
    tips: 'Red Taxi is Coimbatore’s most punctual and trusted cab/auto service. Ola and Rapido are also active.',
  },
  madurai: {
    districtId: 'madurai',
    tier: 1,
    tierLabel: 'High App Availability',
    ola: true,
    uber: true,
    rapido: true,
    redTaxi: true,
    recommendedMode: 'Rapido Auto & Red Taxi',
    tips: 'Near Meenakshi Temple, street autos quote inflated prices to foreigners. Book Rapido Auto or negotiate firmly with our fair rate calculator.',
  },
  tiruchirappalli: {
    districtId: 'tiruchirappalli',
    tier: 1,
    tierLabel: 'High App Availability',
    ola: true,
    uber: true,
    rapido: true,
    redTaxi: true,
    recommendedMode: 'Ola / Rapido Auto',
    tips: 'Fairly well serviced by Rapido and Ola around Central Bus Stand and Srirangam.',
  },
  salem: {
    districtId: 'salem',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: true,
    uber: false,
    rapido: true,
    redTaxi: true,
    recommendedMode: 'Rapido Auto & Red Taxi',
    tips: 'Rapido and Red Taxi work within the city. For Yercaud hill climb, hire fixed-rate tourist cabs.',
  },
  tirunelveli: {
    districtId: 'tirunelveli',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: true,
    uber: false,
    rapido: true,
    redTaxi: true,
    recommendedMode: 'Rapido & Junction Auto Stand',
    tips: 'Use prepaid auto counter at Tirunelveli Junction Railway Station or Rapido.',
  },
  thanjavur: {
    districtId: 'thanjavur',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: true,
    uber: false,
    rapido: true,
    redTaxi: false,
    recommendedMode: 'Rapido Auto or Fixed Prepaid Counter',
    tips: 'Autos around Big Temple charge tourists ₹150 for 2 km. Use Rapido Auto or pay maximum ₹60-₹80.',
  },
  vellore: {
    districtId: 'vellore',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: true,
    uber: false,
    rapido: true,
    redTaxi: false,
    recommendedMode: 'Rapido Auto / CMC Share Autos',
    tips: 'Very high share-auto density between Katpadi Junction, CMC Hospital, and Golden Temple.',
  },
  kancheepuram: {
    districtId: 'kancheepuram',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: false,
    uber: false,
    rapido: true,
    redTaxi: false,
    recommendedMode: 'Rapido Auto or Day-Rental Auto (₹600–₹800 for temple circuit)',
    tips: 'Hire an auto on half-day package to visit Ekambareswarar, Kamakshi, and Varadharaja Perumal.',
  },
  dindigul: {
    districtId: 'dindigul',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: false,
    uber: false,
    rapido: true,
    redTaxi: false,
    recommendedMode: 'Prepaid Auto at Palani / Kodaikanal Tourist Taxi',
    tips: 'For Kodaikanal hill station, shared cabs from Batlagundu or tourist taxi unions operate on fixed rate cards.',
  },
  nilgiris: {
    districtId: 'nilgiris',
    tier: 3,
    tierLabel: 'Offline / Local Auto Stands',
    ola: false,
    uber: false,
    rapido: false,
    redTaxi: false,
    recommendedMode: 'Prepaid Tourist Taxi Association / Ooty Auto Stand',
    tips: 'No Uber/Ola in Ooty/Coonoor. Use official Ooty Railway Station Taxi/Auto stand rate card.',
  },
  tenkasi: {
    districtId: 'tenkasi',
    tier: 3,
    tierLabel: 'Offline / Local Auto Stands',
    ola: false,
    uber: false,
    rapido: false,
    redTaxi: false,
    recommendedMode: 'Local Auto Stand & TNSTC Town Buses',
    tips: 'Frequent 5-minute town buses connect Tenkasi Old Bus Stand directly to Courtallam Main Falls for ₹10.',
  },
  kanyakumari: {
    districtId: 'kanyakumari',
    tier: 2,
    tierLabel: 'Moderate App Availability',
    ola: false,
    uber: false,
    rapido: true,
    redTaxi: false,
    recommendedMode: 'Walking & Rapido / Town Auto',
    tips: 'Key attractions (Sunrise View, Vivekananda Rock jetty, Triveni Sangam) are within 1 km walking distance.',
  },
};

// Default fallback for any district not specifically enumerated
export const DEFAULT_APP_COVERAGE: DistrictAppCoverage = {
  districtId: 'default',
  tier: 3,
  tierLabel: 'Offline / Local Auto Stands',
  ola: false,
  uber: false,
  rapido: true,
  redTaxi: false,
  recommendedMode: 'Local Auto Stands & TNSTC Town Buses',
  tips: 'Confirm the fare before boarding the auto. Show the calculated fair price card to the driver.',
};

export function calculateAutoFare(distanceKm: number, isNight: boolean = false): {
  minFairPrice: number;
  maxFairPrice: number;
  breakdown: string;
} {
  const km = Math.max(1, Number(distanceKm) || 1);
  let baseCost = TN_GOVT_AUTO_RATES.baseFareDay;
  if (km > TN_GOVT_AUTO_RATES.baseDistanceKm) {
    const extraKm = km - TN_GOVT_AUTO_RATES.baseDistanceKm;
    baseCost += extraKm * TN_GOVT_AUTO_RATES.perKmRateDay;
  }

  if (isNight) {
    baseCost *= TN_GOVT_AUTO_RATES.nightSurchargeMultiplier;
  }

  // Fair market band: Govt rate to +20% buffer for fuel & return empty ride
  const minFairPrice = Math.round(baseCost);
  const maxFairPrice = Math.round(baseCost * 1.25);

  const breakdown = isNight
    ? `Night Rate (10 PM – 5 AM): 50% extra applied on base ₹${TN_GOVT_AUTO_RATES.baseFareDay} + ₹${TN_GOVT_AUTO_RATES.perKmRateDay}/km`
    : `Standard TN Govt Rate: ₹${TN_GOVT_AUTO_RATES.baseFareDay} (first 1.8 km) + ₹${TN_GOVT_AUTO_RATES.perKmRateDay}/km`;

  return { minFairPrice, maxFairPrice, breakdown };
}
