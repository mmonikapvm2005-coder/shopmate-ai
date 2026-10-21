import React, { useState, useMemo } from 'react';
import type { District, Translations, Language } from '../../types/transitwise';
import SpotCard from './SpotCard';
import AutoFareModal from './AutoFareModal';
import TempleEtiquetteModal from './TempleEtiquetteModal';
import AudioPhrasebookModal from './AudioPhrasebookModal';
import TouristConciergeModal from './TouristConciergeModal';

interface DistrictDashboardProps {
  district: District;
  t: Translations;
  lang: Language;
  onBack: () => void;
}

const regionColors: Record<string, string> = {
  north: 'bg-blue-600',
  south: 'bg-orange-600',
  central: 'bg-purple-600',
  east: 'bg-teal-600',
  west: 'bg-green-600',
  nilgiris: 'bg-emerald-700',
};

const DistrictDashboard: React.FC<DistrictDashboardProps> = ({ district, t, lang, onBack }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAutoFareModal, setShowAutoFareModal] = useState<boolean>(false);
  const [showTempleEtiquetteModal, setShowTempleEtiquetteModal] = useState<boolean>(false);
  const [showPhrasebookModal, setShowPhrasebookModal] = useState<boolean>(false);
  const [showConciergeModal, setShowConciergeModal] = useState<boolean>(false);
  const [conciergeTab, setConciergeTab] = useState<'festivals' | 'upi' | 'budget'>('festivals');
  const [showSOSModal, setShowSOSModal] = useState<boolean>(false);

  const filters = useMemo(() => {
    const types = [...new Set(district.spots.map(s => s.type))];
    return ['all', ...types];
  }, [district.spots]);

  const filtered = activeFilter === 'all'
    ? district.spots
    : district.spots.filter(s => s.type === activeFilter);

  const typeEmoji: Record<string, string> = {
    all: '🗺️',
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* District Header */}
      <div className={`${regionColors[district.region] || 'bg-orange-600'} text-white`}>
        <div className="max-w-2xl mx-auto px-4 pt-4 pb-6">
          <button
            type="button"
            onClick={onBack}
            className="text-white text-xs sm:text-sm font-bold bg-black/30 hover:bg-black/50 px-3.5 py-2 rounded-full w-fit mb-3 flex items-center gap-1.5 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 border border-white/20"
            title="Return to TripSense TN Front Page"
          >
            <span>←</span>
            <span>🏠 {lang === 'ta' ? 'அனைத்து மாவட்டங்கள் (TripSense TN)' : 'Back to TripSense TN (All Districts)'}</span>
          </button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{district.name}</h1>
              <p className="text-lg opacity-90">{district.nameInTamil}</p>
              <p className="text-xs opacity-75 mt-1">Tamil Nadu • {district.region.charAt(0).toUpperCase() + district.region.slice(1)} Region • HQ: {district.districtHQ}</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 border border-white/20 rounded-xl px-3 py-2 text-center backdrop-blur-sm">
                <div className="text-xl font-bold">{district.spots.length}</div>
                <div className="text-xs opacity-90">{t.touristSpots}</div>
              </div>
            </div>
          </div>

          <p className="text-sm mt-3 opacity-90 leading-relaxed">{district.description}</p>

          {/* Famous For Tags & Google Maps Sync */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-white/20">
            <div className="flex flex-wrap gap-1.5">
              {district.famousFor.map((tag, i) => (
                <span key={i} className="text-xs bg-white/20 border border-white/20 px-2.5 py-0.5 rounded-full font-medium">
                  ✨ {tag}
                </span>
              ))}
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${district.spots[0]?.coordinates.lat || 11.0},${district.spots[0]?.coordinates.lng || 78.0}&waypoints=${district.spots.slice(1).map(s => `${s.coordinates.lat},${s.coordinates.lng}`).join('|')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-3 py-1 rounded-full text-xs shadow-sm flex items-center gap-1.5 transition-all"
              title="Sync all district spots into a Google Maps driving/transit tour"
            >
              <span>🗺️ Sync Route in Google Maps</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* First-Time Tourist Toolkit Quick Bar */}
      <div className="bg-amber-50/90 border-b border-amber-200/80 px-4 py-2.5">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 whitespace-nowrap">
            <span>🧰</span>
            <span className="hidden sm:inline">Tourist Toolkit:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAutoFareModal(true)}
              className="text-xs font-bold bg-white text-yellow-900 hover:bg-yellow-50 border border-yellow-300 px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Calculate standard auto fare and check ride app coverage for this district"
            >
              <span>🛺</span>
              <span>Auto Fare & Rates</span>
            </button>

            <button
              onClick={() => setShowTempleEtiquetteModal(true)}
              className="text-xs font-bold bg-white text-orange-900 hover:bg-orange-50 border border-orange-300 px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Temple dress codes, non-Hindu access rules, and darshan tips"
            >
              <span>🛕</span>
              <span>Temple Rules</span>
            </button>

            <button
              onClick={() => setShowPhrasebookModal(true)}
              className="text-xs font-bold bg-white text-rose-900 hover:bg-rose-50 border border-rose-300 px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Essential Tamil phrases with spoken native audio"
            >
              <span>🗣️</span>
              <span>Audio Phrases</span>
            </button>

            <button
              onClick={() => { setConciergeTab('festivals'); setShowConciergeModal(true); }}
              className="text-xs font-bold bg-white text-purple-900 hover:bg-purple-50 border border-purple-300 px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Temple festivals, processions & crowd density radar"
            >
              <span>📅</span>
              <span>Festivals Radar</span>
            </button>

            <button
              onClick={() => { setConciergeTab('upi'); setShowConciergeModal(true); }}
              className="text-xs font-bold bg-white text-blue-900 hover:bg-blue-50 border border-blue-300 px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="UPI One World setup, foreign cards & verified ATMs"
            >
              <span>💳</span>
              <span>UPI for Foreigners</span>
            </button>

            <button
              onClick={() => { setConciergeTab('budget'); setShowConciergeModal(true); }}
              className="text-xs font-bold bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Daily travel budget estimator for backpackers, comfort & luxury"
            >
              <span>💰</span>
              <span>Trip Budget</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Bar with Persistent Home Navigation */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-30 shadow-xs">
        <div className="max-w-2xl mx-auto px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button
            type="button"
            onClick={onBack}
            className="flex-shrink-0 text-xs font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 border border-orange-300 px-3 py-1.5 rounded-full flex items-center gap-1 transition-all cursor-pointer shadow-xs active:scale-95"
            title="Return to TripSense TN Front Page"
          >
            <span>←</span>
            <span>🏠 Home</span>
          </button>

          <div className="h-4 w-[1px] bg-gray-300 flex-shrink-0"></div>

          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border font-medium transition-all capitalize cursor-pointer
                  ${activeFilter === f
                    ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'}`}
              >
                {typeEmoji[f] || '📍'} {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spots */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-4xl mb-2">🔍</p>
            <p className="text-gray-500">No spots found for this filter.</p>
          </div>
        ) : (
          filtered.map(spot => (
            <SpotCard key={spot.id} spot={spot} t={t} lang={lang} districtName={district.name} />
          ))
        )}

        {/* Bottom Return Button */}
        <div className="text-center pt-6 pb-12">
          <button
            type="button"
            onClick={onBack}
            className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 mx-auto cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>←</span>
            <span>🏠 Back to TripSense TN (Explore 38 Districts)</span>
          </button>
        </div>
      </div>

      {/* Emergency SOS Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowSOSModal(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full shadow-xl transition-all flex items-center gap-2 cursor-pointer animate-pulse"
        >
          🆘 <span className="text-sm">SOS</span>
        </button>
      </div>

      {/* Modals */}
      {showAutoFareModal && (
        <AutoFareModal
          isOpen={showAutoFareModal}
          onClose={() => setShowAutoFareModal(false)}
          defaultDistrictId={district.id}
        />
      )}

      {showTempleEtiquetteModal && (
        <TempleEtiquetteModal
          isOpen={showTempleEtiquetteModal}
          onClose={() => setShowTempleEtiquetteModal(false)}
          spot={district.spots.find(s => s.type === 'temple' || s.type === 'pilgrimage') || null}
        />
      )}

      {showPhrasebookModal && (
        <AudioPhrasebookModal
          isOpen={showPhrasebookModal}
          onClose={() => setShowPhrasebookModal(false)}
          initialCategory="all"
        />
      )}

      {showConciergeModal && (
        <TouristConciergeModal
          isOpen={showConciergeModal}
          onClose={() => setShowConciergeModal(false)}
          initialTab={conciergeTab}
        />
      )}

      {/* SOS Modal */}
      {showSOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-5 text-gray-900 border border-red-200">
            <div className="flex items-center justify-between pb-3 border-b">
              <h3 className="font-black text-red-600 text-lg flex items-center gap-2">
                <span>🆘</span>
                <span>Emergency Helplines</span>
              </h3>
              <button
                onClick={() => setShowSOSModal(false)}
                className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center font-bold text-xs"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2.5 my-4">
              <a
                href="tel:108"
                className="flex items-center justify-between p-3 rounded-2xl bg-red-50 border border-red-200 text-red-800 hover:bg-red-100 transition-all font-bold text-xs"
              >
                <span>🚑 Ambulance (Medical Emergency)</span>
                <span className="text-sm font-black">108</span>
              </a>
              <a
                href="tel:100"
                className="flex items-center justify-between p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 transition-all font-bold text-xs"
              >
                <span>👮 Police Emergency</span>
                <span className="text-sm font-black">100</span>
              </a>
              <a
                href="tel:18004254747"
                className="flex items-center justify-between p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 transition-all font-bold text-xs"
              >
                <span>🛕 TN Tourist Helpline (24x7)</span>
                <span className="text-xs font-black">1800 425 4747</span>
              </a>
              <a
                href="tel:181"
                className="flex items-center justify-between p-3 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900 hover:bg-purple-100 transition-all font-bold text-xs"
              >
                <span>🛡️ Women Safety Helpline</span>
                <span className="text-sm font-black">181</span>
              </a>
            </div>
            <button
              onClick={() => setShowSOSModal(false)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-xl text-xs transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistrictDashboard;
