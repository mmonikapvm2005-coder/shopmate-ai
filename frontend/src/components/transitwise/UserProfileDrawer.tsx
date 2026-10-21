import React from 'react';
import type { UserProfile, TouristSpot } from '../../types/transitwise';
import { allTamilNaduDistricts } from '../../data/tamilnaduData';
import { logoutUser, generateGoogleMapsItineraryUrl } from '../../services/authAndMapsService';

interface UserProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onLogout: () => void;
  onSelectSpot: (spot: TouristSpot) => void;
}

const UserProfileDrawer: React.FC<UserProfileDrawerProps> = ({
  isOpen,
  onClose,
  user,
  onLogout,
  onSelectSpot,
}) => {
  if (!isOpen) return null;

  // Find all saved spot objects from all districts
  const allSpots: TouristSpot[] = [];
  allTamilNaduDistricts.forEach(d => {
    d.spots.forEach(s => {
      allSpots.push(s);
    });
  });

  const savedSpotsList = allSpots.filter(s => user.savedSpots.includes(s.id));
  const fullItineraryUrl = generateGoogleMapsItineraryUrl(savedSpotsList);

  const personaLabel: Record<string, string> = {
    solo: '🎒 Solo Explorer',
    family: '👨‍👩‍👧 Family Pilgrim',
    international: '🌍 International Backpacker',
    spiritual: '🛕 Spiritual Seeker',
    heritage: '🏰 History & Heritage Enthusiast',
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col text-gray-900 animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white text-orange-600 font-black text-xl flex items-center justify-center shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">{user.name}</h3>
              <p className="text-xs text-orange-100">{user.email}</p>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium inline-block mt-1">
                {personaLabel[user.touristType] || 'Traveler'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-sm transition-all"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Google Maps Itinerary Sync Card */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🗺️</span>
              <h4 className="font-bold text-sm text-blue-900">Google Maps Route Sync</h4>
            </div>
            <p className="text-xs text-blue-800 leading-relaxed">
              Sync all your bookmarked spots into an active multi-stop navigation route on Google Maps.
            </p>

            {savedSpotsList.length > 0 ? (
              <a
                href={fullItineraryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all block text-center"
              >
                <span>🚀 Sync {savedSpotsList.length} Places to Google Maps</span>
              </a>
            ) : (
              <p className="mt-2 text-[11px] text-gray-500 italic">
                Save spots across Tamil Nadu using the ❤️ button to generate your synchronized Google Maps tour route.
              </p>
            )}
          </div>

          {/* Saved Spots Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-sm text-gray-800 flex items-center gap-1.5">
                <span>❤️</span>
                <span>My Saved Places ({savedSpotsList.length})</span>
              </h4>
            </div>

            {savedSpotsList.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-2xl border border-gray-200 p-4">
                <span className="text-3xl block mb-1">📍</span>
                <p className="text-xs font-bold text-gray-700">No saved spots yet</p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Browse districts and tap "❤️ Save" on any temple, beach, or hill spot.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {savedSpotsList.map(spot => (
                  <div
                    key={spot.id}
                    className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between hover:border-orange-300 transition-all shadow-2xs group"
                  >
                    <button
                      onClick={() => { onSelectSpot(spot); onClose(); }}
                      className="text-left flex-1 min-w-0 cursor-pointer"
                    >
                      <h5 className="font-bold text-xs text-gray-900 group-hover:text-orange-600 truncate">
                        {spot.name}
                      </h5>
                      <p className="text-[11px] text-gray-500 truncate">
                        {spot.nameInTamil} • ⭐ {spot.rating}
                      </p>
                    </button>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${spot.coordinates.lat},${spot.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg text-xs font-bold ml-2 flex items-center gap-1"
                      title="Navigate on Google Maps"
                    >
                      🧭 Map
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Account Details & Preferences */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2.5 text-xs">
            <h4 className="font-bold text-gray-800 text-sm">Account & Trip Preferences</h4>
            <div className="flex justify-between py-1 border-b border-gray-200">
              <span className="text-gray-500">Origin / Home:</span>
              <span className="font-semibold text-gray-800">{user.homeCountryOrCity || 'Global'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-200">
              <span className="text-gray-500">Language:</span>
              <span className="font-semibold text-gray-800 uppercase">{user.preferredLanguage}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-200">
              <span className="text-gray-500">Google Maps Status:</span>
              <span className="font-semibold text-green-600 flex items-center gap-1">
                <span>●</span> Connected
              </span>
            </div>
          </div>
        </div>

        {/* Footer Logout */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => { logoutUser(); onLogout(); onClose(); }}
            className="w-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🚪</span>
            <span>Sign Out from Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDrawer;
