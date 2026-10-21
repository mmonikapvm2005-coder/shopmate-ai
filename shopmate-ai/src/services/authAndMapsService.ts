import type { UserProfile, Language, TouristSpot } from '../types/transitwise';

const USER_STORAGE_KEY = 'tripsense_tn_user';
const USERS_DB_KEY = 'tripsense_tn_users_db';

// Default mock initial user for instant testing if desired
export const DEMO_USER: UserProfile = {
  id: 'usr_demo_108',
  name: 'Moni Traveler',
  email: 'tourist@tripsense.tn',
  touristType: 'heritage',
  preferredLanguage: 'en',
  homeCountryOrCity: 'Chennai, India',
  savedSpots: ['meenakshi-temple', 'brihadeeswarar-temple', 'srirangam-temple'],
  googleMapsSynced: true,
  createdAt: new Date().toISOString(),
};

// Retrieve current logged in user
export function getCurrentUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Retrieve all registered users
function getUsersDatabase(): Array<{ email: string; password: string; profile: UserProfile }> {
  try {
    const raw = localStorage.getItem(USERS_DB_KEY);
    if (!raw) {
      // Initialize with demo user
      const initial = [
        {
          email: DEMO_USER.email,
          password: 'password123',
          profile: DEMO_USER,
        },
      ];
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Save user to active session
export function setCurrentUser(user: UserProfile | null): void {
  if (user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
}

// Register a new user
export function registerUser(params: {
  name: string;
  email: string;
  password: string;
  touristType?: UserProfile['touristType'];
  preferredLanguage?: Language;
  homeCountryOrCity?: string;
}): { success: boolean; user?: UserProfile; error?: string } {
  const db = getUsersDatabase();
  const normalizedEmail = params.email.trim().toLowerCase();

  if (db.some(u => u.email.toLowerCase() === normalizedEmail)) {
    return { success: false, error: 'An account with this email already exists. Please login instead.' };
  }

  const newProfile: UserProfile = {
    id: 'usr_' + Math.random().toString(36).substring(2, 9),
    name: params.name.trim(),
    email: normalizedEmail,
    touristType: params.touristType || 'solo',
    preferredLanguage: params.preferredLanguage || 'en',
    homeCountryOrCity: params.homeCountryOrCity?.trim() || 'Global Traveler',
    savedSpots: [],
    googleMapsSynced: false,
    createdAt: new Date().toISOString(),
  };

  db.push({
    email: normalizedEmail,
    password: params.password,
    profile: newProfile,
  });

  localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
  setCurrentUser(newProfile);

  return { success: true, user: newProfile };
}

// Login existing user
export function loginUser(email: string, password: string): { success: boolean; user?: UserProfile; error?: string } {
  const db = getUsersDatabase();
  const normalizedEmail = email.trim().toLowerCase();

  const found = db.find(u => u.email.toLowerCase() === normalizedEmail);
  if (!found) {
    return { success: false, error: 'No account found with this email. Please sign up as a new user.' };
  }

  if (found.password !== password) {
    return { success: false, error: 'Incorrect password. Please try again.' };
  }

  setCurrentUser(found.profile);
  return { success: true, user: found.profile };
}

// Logout
export function logoutUser(): void {
  setCurrentUser(null);
}

// Toggle saving a spot (Bookmark)
export function toggleSaveSpot(spotId: string): { savedSpots: string[]; isSaved: boolean } {
  let user = getCurrentUser();
  if (!user) {
    // If not logged in, generate guest session
    user = {
      id: 'guest_' + Math.random().toString(36).substring(2, 7),
      name: 'Guest Traveler',
      email: 'guest@tripsense.tn',
      touristType: 'solo',
      preferredLanguage: 'en',
      savedSpots: [],
      googleMapsSynced: false,
      createdAt: new Date().toISOString(),
    };
  }

  const isSaved = user.savedSpots.includes(spotId);
  const updatedSpots = isSaved
    ? user.savedSpots.filter(id => id !== spotId)
    : [...user.savedSpots, spotId];

  user.savedSpots = updatedSpots;
  setCurrentUser(user);

  // Also update in DB if persistent user
  const db = getUsersDatabase();
  const dbIndex = db.findIndex(u => u.profile.id === user?.id);
  if (dbIndex >= 0) {
    db[dbIndex].profile = user;
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
  }

  return { savedSpots: updatedSpots, isSaved: !isSaved };
}

// ---------------- Google Maps Integration Helpers ---------------- //

/**
 * Returns a direct Google Maps directions URL from user's current location to coordinates
 */
export function getGoogleMapsDirectionsUrl(lat: number, lng: number, placeName?: string): string {
  const query = placeName ? encodeURIComponent(`${placeName}, Tamil Nadu`) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=&query=${query}&travelmode=transit`;
}

/**
 * Returns a Google Maps Search / Place URL so users can view or star the location
 */
export function getGoogleMapsSearchUrl(placeName: string, lat?: number, lng?: number): string {
  if (lat && lng) {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName + ', Tamil Nadu, India')}`;
}

/**
 * Returns an embeddable Google Maps iframe URL
 */
export function getGoogleMapsEmbedUrl(lat: number, lng: number): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
}

/**
 * Generate a synced multi-spot Google Maps Route URL for saved spots or a list of spots
 */
export function generateGoogleMapsItineraryUrl(spots: TouristSpot[]): string {
  if (!spots || spots.length === 0) return 'https://www.google.com/maps';
  if (spots.length === 1) {
    return getGoogleMapsDirectionsUrl(spots[0].coordinates.lat, spots[0].coordinates.lng, spots[0].name);
  }

  const origin = `${spots[0].coordinates.lat},${spots[0].coordinates.lng}`;
  const destination = `${spots[spots.length - 1].coordinates.lat},${spots[spots.length - 1].coordinates.lng}`;
  const waypoints = spots.slice(1, -1).map(s => `${s.coordinates.lat},${s.coordinates.lng}`).join('|');

  if (!waypoints) {
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
  }
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=driving`;
}
