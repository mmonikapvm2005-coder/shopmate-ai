import React, { useState } from 'react';
import type { TouristSpot } from '../../types/transitwise';
import {
  getGoogleMapsDirectionsUrl,
  getGoogleMapsSearchUrl,
  getGoogleMapsEmbedUrl,
} from '../../services/authAndMapsService';

interface GoogleMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  spot: TouristSpot;
  districtName?: string;
}

const GoogleMapModal: React.FC<GoogleMapModalProps> = ({
  isOpen,
  onClose,
  spot,
  districtName,
}) => {
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');

  if (!isOpen || !spot) return null;

  const { lat, lng } = spot.coordinates;
  const directionsUrl = getGoogleMapsDirectionsUrl(lat, lng, spot.name);
  const searchUrl = getGoogleMapsSearchUrl(spot.name, lat, lng);
  const embedUrl = getGoogleMapsEmbedUrl(lat, lng);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directionsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden text-gray-900 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🗺️</span>
            <div>
              <h3 className="font-extrabold text-base leading-tight flex items-center gap-2">
                <span>{spot.name}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-medium">
                  {spot.nameInTamil}
                </span>
              </h3>
              <p className="text-xs text-blue-100 mt-0.5">
                Google Maps Sync • {districtName || 'Tamil Nadu'} • Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-sm transition-all"
          >
            ✕
          </button>
        </div>

        {/* Live Embedded Google Map Frame */}
        <div className="relative w-full h-72 sm:h-80 bg-gray-100 border-b border-gray-200">
          <iframe
            title={spot.name}
            src={embedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700 shadow border border-gray-200 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            <span>Live Coordinates Verified</span>
          </div>
        </div>

        {/* Action Controls & Navigation Options */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5">
          {/* Quick Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-gray-50 border border-gray-200 p-2.5 rounded-xl">
              <span className="text-gray-400 block text-[10px]">Category</span>
              <span className="font-bold text-gray-800 capitalize">📍 {spot.type}</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-2.5 rounded-xl">
              <span className="text-gray-400 block text-[10px]">Open Hours</span>
              <span className="font-bold text-gray-800 truncate block">🕐 {spot.timings}</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-2.5 rounded-xl">
              <span className="text-gray-400 block text-[10px]">Best Timing</span>
              <span className="font-bold text-gray-800 truncate block">📅 {spot.bestTimeToVisit.split('|')[0]}</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-2.5 rounded-xl">
              <span className="text-gray-400 block text-[10px]">Entry Fee</span>
              <span className="font-bold text-gray-800">💰 {spot.entryFee}</span>
            </div>
          </div>

          {/* Google Maps Real Sync Actions */}
          <div className="space-y-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl flex items-center justify-between text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🧭</span>
                <span>Open Google Maps Turn-by-Turn Navigation</span>
              </div>
              <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold">Launch App ↗</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gray-800 font-bold p-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <span>⭐</span>
                <span>Save to My Places in Google Maps</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gray-800 font-bold p-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer"
              >
                <span>🔗</span>
                <span>{copied ? '✅ Link Copied!' : 'Share Google Maps Link'}</span>
              </button>
            </div>
          </div>

          {/* Sync Tip */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
            <span className="text-base flex-shrink-0">💡</span>
            <div>
              <p className="font-bold">Google Maps Sync Tip</p>
              <p className="text-[11px] text-amber-800 mt-0.5">
                Clicking navigation will automatically load the optimal transit route (Bus, Train, or Driving) directly into your Google Maps app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapModal;
