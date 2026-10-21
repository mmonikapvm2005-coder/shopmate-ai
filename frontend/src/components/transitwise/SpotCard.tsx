import React, { useState, useEffect } from 'react';
import type { TouristSpot, Translations, Language } from '../../types/transitwise';
import HotelList from './HotelList';
import TransportPanel from './TransportPanel';
import GoogleMapModal from './GoogleMapModal';
import TempleEtiquetteModal from './TempleEtiquetteModal';
import {
  getCurrentUser,
  toggleSaveSpot,
  getGoogleMapsDirectionsUrl,
} from '../../services/authAndMapsService';

interface SpotCardProps {
  spot: TouristSpot;
  t: Translations;
  lang: Language;
  districtName?: string;
}

const typeIcon: Record<string, string> = {
  temple: '🛕',
  fort: '🏯',
  beach: '🏖️',
  wildlife: '🦁',
  waterfall: '💧',
  museum: '🏛️',
  pilgrimage: '🙏',
  heritage: '🏰',
  nature: '🌿',
  hill: '⛰️',
};

const typeColor: Record<string, string> = {
  temple: 'from-orange-500 to-red-500',
  fort: 'from-stone-500 to-gray-600',
  beach: 'from-cyan-400 to-blue-500',
  wildlife: 'from-green-500 to-emerald-600',
  waterfall: 'from-blue-400 to-cyan-500',
  museum: 'from-purple-500 to-indigo-600',
  pilgrimage: 'from-amber-500 to-orange-600',
  heritage: 'from-yellow-500 to-amber-600',
  nature: 'from-green-400 to-teal-500',
  hill: 'from-slate-400 to-gray-500',
};

const SpotCard: React.FC<SpotCardProps> = ({ spot, t, lang, districtName }) => {
  const [tab, setTab] = useState<'info' | 'hotels' | 'transport'>('info');
  const [showMapModal, setShowMapModal] = useState(false);
  const [showTempleEtiquetteModal, setShowTempleEtiquetteModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user && user.savedSpots.includes(spot.id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [spot.id]);

  const crowdLabel =
    spot.crowdLevel === 'low' ? t.lowCrowd :
    spot.crowdLevel === 'moderate' ? t.moderateCrowd : t.highCrowd;

  const description =
    lang !== 'en' && lang !== 'ta' && spot.translations[lang as keyof typeof spot.translations]
      ? spot.translations[lang as keyof typeof spot.translations]
      : spot.description;

  const handleToggleSave = () => {
    const res = toggleSaveSpot(spot.id);
    setIsSaved(res.isSaved);
    setSaveMessage(res.isSaved ? '❤️ Saved to TripSense & Google Maps!' : 'Removed from saved');
    setTimeout(() => setSaveMessage(null), 2500);
  };

  const handlePlayAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Audio guide not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${spot.name}. ${description}. AI Travel Tip: ${spot.aiTip}`);
    utterance.rate = 0.95;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const directMapsUrl = getGoogleMapsDirectionsUrl(
    spot.coordinates.lat,
    spot.coordinates.lng,
    spot.name
  );

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
      {/* Hero Banner */}
      <div className={`bg-gradient-to-r ${typeColor[spot.type] || 'from-orange-400 to-red-500'} p-4 sm:p-5 text-white relative`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-2xl">{typeIcon[spot.type]}</span>
              <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full capitalize font-semibold border border-white/20">
                {spot.type}
              </span>
              <a
                href={directMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] bg-white/25 hover:bg-white/35 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 border border-white/20 transition-all"
                title="Launch Google Maps Live Directions"
              >
                <span>🗺️ Google Maps</span>
                <span className="text-[9px]">↗</span>
              </a>
            </div>
            <h2 className="text-lg sm:text-xl font-black leading-tight">{spot.name}</h2>
            <p className="text-sm opacity-90 font-medium mt-0.5">{spot.nameInTamil}</p>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="bg-white/20 border border-white/20 rounded-2xl px-3 py-2 text-center backdrop-blur-sm">
              <div className="text-lg font-black">⭐ {spot.rating}</div>
              <div className="text-[10px] opacity-90">{spot.reviewCount.toLocaleString()} reviews</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full border border-white/10 font-medium">
            🕐 {spot.timings}
          </span>
          <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full border border-white/10 font-medium">
            {crowdLabel}
          </span>
          <button
            onClick={() => setShowMapModal(true)}
            className="text-xs bg-black/25 hover:bg-black/35 px-2.5 py-1 rounded-full border border-white/20 font-bold flex items-center gap-1 transition-all cursor-pointer"
          >
            <span>🧭 Map & Live Route</span>
          </button>
          {(spot.type === 'temple' || spot.type === 'pilgrimage') && (
            <button
              onClick={() => setShowTempleEtiquetteModal(true)}
              className="text-xs bg-amber-400 hover:bg-amber-300 text-amber-950 px-2.5 py-1 rounded-full border border-amber-300 font-extrabold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
              title="Temple Dress Code & Entry Etiquette Guidelines"
            >
              <span>🛕 Etiquette & Rules</span>
            </button>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        {(['info', 'hotels', 'transport'] as const).map(tabKey => (
          <button
            key={tabKey}
            onClick={() => setTab(tabKey)}
            className={`flex-1 py-3 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer
              ${tab === tabKey
                ? 'text-orange-600 border-b-2 border-orange-600 bg-white shadow-2xs'
                : 'text-gray-500 hover:text-gray-700'}`}
          >
            {tabKey === 'info' ? `ℹ️ ${t.touristSpots}` :
             tabKey === 'hotels' ? `🏨 ${t.nearbyHotels} (${spot.nearbyHotels.length})` :
             `🚌 ${t.transport} (${spot.transport.length})`}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5">
        {tab === 'info' && (
          <div className="space-y-3.5">
            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed font-normal">{description}</p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <p className="text-[11px] text-gray-400 mb-0.5">{t.entryFee}</p>
                <p className="text-sm font-bold text-gray-800">💰 {spot.entryFee}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3">
                <p className="text-[11px] text-gray-400 mb-0.5">{t.bestTime}</p>
                <p className="text-sm font-bold text-gray-800">📅 {spot.bestTimeToVisit.split('|')[0].trim()}</p>
              </div>
            </div>

            {/* Dress Code Warning */}
            {spot.dresscode && (
              <div className="bg-purple-50/80 border border-purple-200 rounded-2xl p-3">
                <p className="text-xs font-bold text-purple-800 mb-1 flex items-center gap-1">
                  <span>👗</span>
                  <span>{t.drescode}</span>
                </p>
                <p className="text-xs text-purple-700 leading-snug">{spot.dresscode}</p>
              </div>
            )}

            {/* AI Travel Tip */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3">
              <p className="text-xs font-bold text-amber-800 mb-1 flex items-center gap-1">
                <span>🤖</span>
                <span>{t.aiTip}</span>
              </p>
              <p className="text-xs text-amber-900 leading-relaxed">{spot.aiTip}</p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex gap-2 pt-1 flex-wrap">
              {/* Google Maps Button */}
              <button
                onClick={() => setShowMapModal(true)}
                className="flex-1 min-w-[120px] bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>🗺️</span>
                <span>{t.viewOnMap}</span>
              </button>

              {/* Audio Guide Button */}
              <button
                onClick={handlePlayAudio}
                className={`flex-1 min-w-[120px] text-xs font-bold py-2.5 px-3 rounded-xl transition-all border flex items-center justify-center gap-1.5 cursor-pointer
                  ${isPlayingAudio
                    ? 'bg-red-500 text-white border-red-500 animate-pulse'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'}`}
              >
                <span>{isPlayingAudio ? '⏹️ Stop' : '🔊 Audio'}</span>
                <span>{isPlayingAudio ? 'Playing' : 'Guide'}</span>
              </button>

              {/* Save / Favorite Button */}
              <button
                onClick={handleToggleSave}
                className={`flex-1 min-w-[100px] text-xs font-bold py-2.5 px-3 rounded-xl transition-all border flex items-center justify-center gap-1.5 cursor-pointer
                  ${isSaved
                    ? 'bg-rose-50 border-rose-300 text-rose-600'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'}`}
              >
                <span>{isSaved ? '❤️' : '🤍'}</span>
                <span>{isSaved ? 'Saved' : t.saveSpot}</span>
              </button>
            </div>

            {/* Save Notification Toast */}
            {saveMessage && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs py-1.5 px-3 rounded-xl text-center font-bold animate-in fade-in">
                {saveMessage}
              </div>
            )}
          </div>
        )}

        {tab === 'hotels' && (
          <HotelList hotels={spot.nearbyHotels} t={t} />
        )}

        {tab === 'transport' && (
          <TransportPanel transport={spot.transport} t={t} />
        )}
      </div>

      {/* Google Maps Modal */}
      {showMapModal && (
        <GoogleMapModal
          isOpen={showMapModal}
          onClose={() => setShowMapModal(false)}
          spot={spot}
          districtName={districtName}
        />
      )}

      {/* Temple Etiquette & Entry Rules Modal */}
      {showTempleEtiquetteModal && (
        <TempleEtiquetteModal
          isOpen={showTempleEtiquetteModal}
          onClose={() => setShowTempleEtiquetteModal(false)}
          spot={spot}
        />
      )}
    </div>
  );
};

export default SpotCard;
