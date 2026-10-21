import React, { useState, useMemo, useEffect } from 'react';
import type { Language, District, UserProfile, TouristSpot } from '../../types/transitwise';
import { allTamilNaduDistricts } from '../../data/tamilnaduData';
import { translations } from '../../data/translations';
import LanguageSelector from './LanguageSelector';
import DistrictDashboard from './DistrictDashboard';
import AuthModal from './AuthModal';
import UserProfileDrawer from './UserProfileDrawer';
import AutoFareModal from './AutoFareModal';
import TempleEtiquetteModal from './TempleEtiquetteModal';
import AudioPhrasebookModal from './AudioPhrasebookModal';
import TouristConciergeModal from './TouristConciergeModal';
import {
  getCurrentUser,
  generateGoogleMapsItineraryUrl,
} from '../../services/authAndMapsService';

const regionColors: Record<string, string> = {
  north: 'border-blue-400 bg-blue-50/70 hover:bg-blue-100/80',
  south: 'border-orange-400 bg-orange-50/70 hover:bg-orange-100/80',
  central: 'border-purple-400 bg-purple-50/70 hover:bg-purple-100/80',
  east: 'border-teal-400 bg-teal-50/70 hover:bg-teal-100/80',
  west: 'border-green-400 bg-green-100/70 hover:bg-green-100/80',
  nilgiris: 'border-emerald-400 bg-emerald-50/70 hover:bg-emerald-100/80',
};

const regionBadge: Record<string, string> = {
  north: 'bg-blue-100 text-blue-800 border-blue-200',
  south: 'bg-orange-100 text-orange-800 border-orange-200',
  central: 'bg-purple-100 text-purple-800 border-purple-200',
  east: 'bg-teal-100 text-teal-800 border-teal-200',
  west: 'bg-green-100 text-green-800 border-green-200',
  nilgiris: 'bg-emerald-100 text-emerald-800 border-emerald-200',
};

type RegionFilter = 'all' | 'north' | 'south' | 'central' | 'west' | 'east' | 'nilgiris' | 'temples';

const HomeScreen: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [search, setSearch] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all');
  const [showSosModal, setShowSosModal] = useState(false);

  // Auth & Profile State
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => getCurrentUser());
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authInitialTab, setAuthInitialTab] = useState<'login' | 'signup'>('login');
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);

  // First-Time Tourist Toolkit State (Sprint 1 & Sprint 3)
  const [showAutoFareModal, setShowAutoFareModal] = useState(false);
  const [showTempleEtiquetteModal, setShowTempleEtiquetteModal] = useState(false);
  const [showPhrasebookModal, setShowPhrasebookModal] = useState(false);
  const [showConciergeModal, setShowConciergeModal] = useState(false);
  const [conciergeInitialTab, setConciergeInitialTab] = useState<'festivals' | 'upi' | 'budget'>('festivals');

  // Synchronize selectedDistrict with URL hash & browser history (handles browser Back button)
  useEffect(() => {
    // 1. Initial load from URL hash (e.g. #namakkal)
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (hash) {
        const found = allTamilNaduDistricts.find(d => d.id.toLowerCase() === hash);
        if (found) {
          setSelectedDistrict(found);
          return;
        }
      }
      setSelectedDistrict(null);
    };

    checkHash();
    setCurrentUser(getCurrentUser());

    // 2. Handle browser Back & Forward button navigation
    const handlePopState = () => {
      checkHash();
      setCurrentUser(getCurrentUser());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleSelectDistrict = (district: District) => {
    setSelectedDistrict(district);
    if (window.location.hash !== `#${district.id}`) {
      window.history.pushState({ districtId: district.id }, '', `#${district.id}`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleBackToHome = () => {
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setSelectedDistrict(null);
    setCurrentUser(getCurrentUser());
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const t = translations[lang] || translations.en;

  const filteredDistricts = useMemo(() => {
    let list = allTamilNaduDistricts;

    // Filter by Region or Holy Places
    if (regionFilter === 'temples') {
      list = list.filter(d =>
        d.spots.some(s => s.type === 'temple' || s.type === 'pilgrimage') ||
        d.famousFor.some(f => f.toLowerCase().includes('temple') || f.toLowerCase().includes('church') || f.toLowerCase().includes('dargah'))
      );
    } else if (regionFilter !== 'all') {
      list = list.filter(d => d.region === regionFilter);
    }

    // Filter by Search Query
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.nameInTamil.includes(q) ||
        d.famousFor.some(f => f.toLowerCase().includes(q)) ||
        d.spots.some(s => s.name.toLowerCase().includes(q) || s.nameInTamil.includes(q) || s.description.toLowerCase().includes(q))
      );
    }

    return list;
  }, [search, regionFilter]);

  if (selectedDistrict) {
    return (
      <DistrictDashboard
        district={selectedDistrict}
        t={t}
        lang={lang}
        onBack={handleBackToHome}
      />
    );
  }

  const totalSpots = allTamilNaduDistricts.reduce((sum, d) => sum + d.spots.length, 0);

  // Find spots saved by user
  const allSpotsList: TouristSpot[] = [];
  allTamilNaduDistricts.forEach(d => allSpotsList.push(...d.spots));
  const userSavedSpots = currentUser ? allSpotsList.filter(s => currentUser.savedSpots.includes(s.id)) : [];
  const gMapsSyncUrl = generateGoogleMapsItineraryUrl(userSavedSpots.length > 0 ? userSavedSpots : allSpotsList.slice(0, 4));

  const handleSelectSpotFromProfile = (spot: TouristSpot) => {
    const parentDistrict = allTamilNaduDistricts.find(d => d.spots.some(s => s.id === spot.id));
    if (parentDistrict) {
      handleSelectDistrict(parentDistrict);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-rose-700 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 pt-5 pb-8">
          {/* Top Bar with Brand, Auth Controls & Language Picker */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🛕</span>
              <div>
                <h1 className="text-2xl font-black tracking-tight flex items-center gap-2">
                  TripSense TN
                </h1>
                <p className="text-[11px] text-orange-100 font-medium">
                  {lang === 'ta' ? 'தமிழ்நாடு சுற்றுலா & வழிகாட்டி' : 'Tamil Nadu Smart Tourist Guide & Navigation'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* User Account / Login & Sign Up Buttons */}
              {currentUser ? (
                <button
                  onClick={() => setShowProfileDrawer(true)}
                  className="bg-white/20 hover:bg-white/30 border border-white/25 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  title="My Profile & Google Maps Synced Itinerary"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-orange-600 font-black text-[10px] flex items-center justify-center">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="max-w-[80px] sm:max-w-[110px] truncate">{currentUser.name}</span>
                  {currentUser.savedSpots.length > 0 && (
                    <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                      {currentUser.savedSpots.length}
                    </span>
                  )}
                </button>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => { setAuthInitialTab('login'); setShowAuthModal(true); }}
                    className="bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setAuthInitialTab('signup'); setShowAuthModal(true); }}
                    className="bg-white text-orange-700 hover:bg-orange-50 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer"
                  >
                    New User
                  </button>
                </div>
              )}

              {/* Language Selector Button */}
              <button
                onClick={() => setShowLangPicker(!showLangPicker)}
                className="bg-white/20 hover:bg-white/30 border border-white/25 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                title="Change Language"
              >
                <span>🌐</span>
                <span>{lang.toUpperCase()}</span>
                <span className="text-[10px] opacity-75">▼</span>
              </button>
            </div>
          </div>

          {/* Language Picker Dropdown */}
          {showLangPicker && (
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-xl border border-gray-100 text-gray-900 animate-in fade-in duration-150">
              <div className="flex items-center justify-between mb-3 border-b pb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {t.chooseLanguage} (9 Languages)
                </p>
                <button
                  onClick={() => setShowLangPicker(false)}
                  className="text-gray-400 hover:text-gray-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>
              <LanguageSelector
                currentLang={lang}
                onSelectLang={(l) => { setLang(l); setShowLangPicker(false); }}
              />
            </div>
          )}

          {/* Welcome Greeting */}
          <div className="text-center my-4">
            <div className="inline-block bg-white/15 px-3 py-1 rounded-full text-xs font-medium text-orange-100 mb-2 border border-white/20">
              🙏 {lang === 'ta' ? 'வணக்கம்! நல்வரவு' : 'Vanakkam! Welcome to Tamil Nadu'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {t.welcome}
            </h2>
            <p className="text-xs sm:text-sm text-orange-100/90 mt-1 max-w-lg mx-auto">
              {t.tagline}
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-3 gap-2.5 my-5">
            <div className="bg-white/15 border border-white/20 rounded-2xl p-3 text-center backdrop-blur-sm shadow-sm">
              <div className="text-lg">🗺️</div>
              <div className="text-xl font-black">{allTamilNaduDistricts.length}</div>
              <div className="text-[11px] text-orange-100 font-medium">Districts</div>
            </div>
            <div className="bg-white/15 border border-white/20 rounded-2xl p-3 text-center backdrop-blur-sm shadow-sm">
              <div className="text-lg">🛕</div>
              <div className="text-xl font-black">{totalSpots}+</div>
              <div className="text-[11px] text-orange-100 font-medium">Spots & Temples</div>
            </div>
            <div className="bg-white/15 border border-white/20 rounded-2xl p-3 text-center backdrop-blur-sm shadow-sm">
              <div className="text-lg">🌐</div>
              <div className="text-xl font-black">9</div>
              <div className="text-[11px] text-orange-100 font-medium">Languages</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base">🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-10 py-3 rounded-2xl text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300 font-medium transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full bg-gray-100"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 py-5 space-y-6">

        {/* Google Maps Sync Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
              🗺️
            </div>
            <div>
              <h4 className="font-bold text-sm">Google Maps Live Route Sync</h4>
              <p className="text-xs text-blue-100">
                {userSavedSpots.length > 0
                  ? `Sync your ${userSavedSpots.length} saved places into turn-by-turn navigation`
                  : 'Open multi-destination driving or transit circuit directly in Google Maps'}
              </p>
            </div>
          </div>
          <a
            href={gMapsSyncUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Open in Google Maps</span>
            <span>↗</span>
          </a>
        </div>

        {/* First-Time Tourist Toolkit (Sprint 1 & Sprint 3) */}
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-indigo-500/10 border border-orange-200/80 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧰</span>
                <h3 className="text-sm font-black text-gray-900 tracking-tight">
                  First-Time Tourist Toolkit & Concierge
                </h3>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-indigo-200">
                  Sprint 1 & Sprint 3
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">
                Essential solutions for temple rules, fair auto fares, spoken Tamil, UPI payments & festival crowd radar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Sprint 1 - Tool 1: Temple Etiquette */}
            <button
              onClick={() => setShowTempleEtiquetteModal(true)}
              className="bg-white hover:bg-orange-50/50 p-3.5 rounded-2xl border border-orange-200/70 shadow-xs text-left transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                🛕
              </div>
              <h4 className="font-extrabold text-xs text-gray-900">Temple Etiquette & Rules</h4>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                Dress codes, hot granite floor tips, non-Hindu access & online darshan tickets.
              </p>
              <span className="text-[11px] font-bold text-orange-600 mt-2 inline-flex items-center gap-1">
                View Protocol <span>→</span>
              </span>
            </button>

            {/* Sprint 1 - Tool 2: Auto Fare Estimator */}
            <button
              onClick={() => setShowAutoFareModal(true)}
              className="bg-white hover:bg-yellow-50/50 p-3.5 rounded-2xl border border-yellow-200/70 shadow-xs text-left transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                🛺
              </div>
              <h4 className="font-extrabold text-xs text-gray-900">Auto Fare & Meter Guide</h4>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                Calculate fair meter pricing, scam prevention & district ride-app coverage.
              </p>
              <span className="text-[11px] font-bold text-yellow-700 mt-2 inline-flex items-center gap-1">
                Estimate Fare <span>→</span>
              </span>
            </button>

            {/* Sprint 1 - Tool 3: Audio Phrasebook */}
            <button
              onClick={() => setShowPhrasebookModal(true)}
              className="bg-white hover:bg-rose-50/50 p-3.5 rounded-2xl border border-rose-200/70 shadow-xs text-left transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                🗣️
              </div>
              <h4 className="font-extrabold text-xs text-gray-900">Tamil Audio Phrasebook</h4>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                Everyday spoken phrases with native audio pronunciation for autos & emergencies.
              </p>
              <span className="text-[11px] font-bold text-rose-600 mt-2 inline-flex items-center gap-1">
                Listen & Speak <span>→</span>
              </span>
            </button>

            {/* Sprint 3 - Tool 4: UPI for Foreigners */}
            <button
              onClick={() => {
                setConciergeInitialTab('upi');
                setShowConciergeModal(true);
              }}
              className="bg-white hover:bg-blue-50/50 p-3.5 rounded-2xl border border-blue-200/70 shadow-xs text-left transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                💳
              </div>
              <h4 className="font-extrabold text-xs text-gray-900">UPI for Foreign Tourists</h4>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                How to activate UPI One World at airports & scan QR codes at street vendors.
              </p>
              <span className="text-[11px] font-bold text-blue-600 mt-2 inline-flex items-center gap-1">
                Activate UPI <span>→</span>
              </span>
            </button>

            {/* Sprint 3 - Tool 5: Festivals & Crowd Radar */}
            <button
              onClick={() => {
                setConciergeInitialTab('festivals');
                setShowConciergeModal(true);
              }}
              className="bg-white hover:bg-purple-50/50 p-3.5 rounded-2xl border border-purple-200/70 shadow-xs text-left transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                📅
              </div>
              <h4 className="font-extrabold text-xs text-gray-900">Festivals & Crowd Radar</h4>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                Chithirai wedding, Karthigai Deepam flame, Pongal & Aazhi Ther chariot schedules.
              </p>
              <span className="text-[11px] font-bold text-purple-600 mt-2 inline-flex items-center gap-1">
                Check Dates <span>→</span>
              </span>
            </button>

            {/* Sprint 3 - Tool 6: Trip Budget Estimator */}
            <button
              onClick={() => {
                setConciergeInitialTab('budget');
                setShowConciergeModal(true);
              }}
              className="bg-white hover:bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-200/70 shadow-xs text-left transition-all hover:scale-[1.01] cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                💰
              </div>
              <h4 className="font-extrabold text-xs text-gray-900">AI Trip Budget Estimator</h4>
              <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                Calculates daily costs for backpackers, comfort & luxury travelers with currency conversions.
              </p>
              <span className="text-[11px] font-bold text-emerald-700 mt-2 inline-flex items-center gap-1">
                Calculate Cost <span>→</span>
              </span>
            </button>
          </div>
        </div>

        {/* Region & Category Filter Tabs */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Filter by Region or Theme
            </h3>
            <span className="text-xs text-gray-500 font-medium">
              Showing {filteredDistricts.length} of {allTamilNaduDistricts.length} Districts
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-hide">
            {[
              { id: 'all', label: `All (${allTamilNaduDistricts.length})`, icon: '🗺️' },
              { id: 'temples', label: 'Holy Places & Temples', icon: '🛕' },
              { id: 'north', label: 'North', icon: '🏛️' },
              { id: 'south', label: 'South', icon: '🌾' },
              { id: 'central', label: 'Central', icon: '🏰' },
              { id: 'west', label: 'West', icon: '⛰️' },
              { id: 'east', label: 'East', icon: '🌊' },
              { id: 'nilgiris', label: 'Nilgiris', icon: '🌲' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setRegionFilter(tab.id as RegionFilter)}
                className={`flex-shrink-0 text-xs px-3.5 py-2 rounded-xl font-semibold border transition-all flex items-center gap-1.5 shadow-sm cursor-pointer
                  ${regionFilter === tab.id
                    ? 'bg-orange-600 text-white border-orange-600 ring-2 ring-orange-200'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50/50'}`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Clickable Districts Grid (ALL 38 DISTRICTS CLICKABLE) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📋</span>
              <h3 className="text-sm font-bold text-gray-800">
                Tap Any District to Open Guide ({allTamilNaduDistricts.length} Districts)
              </h3>
            </div>
            <span className="text-[11px] text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              Interactive
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {allTamilNaduDistricts.map(district => (
              <button
                key={district.id}
                onClick={() => handleSelectDistrict(district)}
                className="text-left text-xs p-2.5 rounded-xl border border-gray-200 bg-gray-50/70 hover:border-orange-400 hover:bg-orange-50/50 hover:shadow-sm transition-all duration-150 flex flex-col justify-between group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-1">
                  <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {district.name}
                  </span>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">
                    {district.spots.length} 📍
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-gray-500">
                  <span className="font-medium text-gray-500">{district.nameInTamil}</span>
                  <span className="text-[10px] opacity-0 group-hover:opacity-100 text-orange-600 transition-opacity">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* District Detail Cards List */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              <span>📍</span>
              <span>
                {regionFilter === 'temples'
                  ? 'Districts with Holy Temples & Sacred Shrines'
                  : regionFilter !== 'all'
                  ? `${regionFilter.toUpperCase()} Region Districts`
                  : 'Explore All Districts & Heritage Spots'}
              </span>
              <span className="text-xs font-normal text-gray-500">
                ({filteredDistricts.length})
              </span>
            </h3>
          </div>

          {filteredDistricts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-4xl mb-2">🔍</p>
              <h4 className="text-base font-bold text-gray-800">No districts match your search</h4>
              <p className="text-xs text-gray-500 mt-1">Try searching another district, spot name, or temple</p>
              <button
                onClick={() => { setSearch(''); setRegionFilter('all'); }}
                className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-semibold hover:bg-orange-700 transition-colors cursor-pointer"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredDistricts.map(district => {
                const totalHotels = district.spots.reduce((sum, s) => sum + s.nearbyHotels.length, 0);

                return (
                  <button
                    key={district.id}
                    onClick={() => handleSelectDistrict(district)}
                    className={`w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 shadow-sm hover:shadow-md block group cursor-pointer ${regionColors[district.region] || 'border-gray-200 bg-white hover:bg-gray-50'}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        {/* Title Bar */}
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {district.name}
                          </h4>
                          <span className="text-xs font-semibold text-gray-600 bg-white/70 px-2 py-0.5 rounded-full border border-gray-200">
                            {district.nameInTamil}
                          </span>
                          <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${regionBadge[district.region]}`}>
                            {district.region}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                          {district.description}
                        </p>

                        {/* Spot Previews */}
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {district.spots.map(spot => (
                            <span
                              key={spot.id}
                              className="text-[11px] bg-white border border-gray-200 rounded-lg px-2 py-1 text-gray-700 font-medium flex items-center gap-1 shadow-2xs"
                            >
                              <span>{spot.type === 'temple' || spot.type === 'pilgrimage' ? '🛕' : spot.type === 'hill' ? '⛰️' : spot.type === 'waterfall' ? '💧' : spot.type === 'beach' ? '🏖️' : '📍'}</span>
                              <span>{spot.name}</span>
                            </span>
                          ))}
                        </div>

                        {/* Footer Badges */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-3 pt-2 border-t border-gray-200/60 font-medium">
                          <span className="flex items-center gap-1">
                            <span>📍</span> {district.spots.length} unique spots
                          </span>
                          <span className="flex items-center gap-1">
                            <span>🏨</span> {totalHotels} nearby hotels
                          </span>
                          <span className="flex items-center gap-1 text-gray-400 text-[11px]">
                            <span>🏛️</span> HQ: {district.districtHQ}
                          </span>
                        </div>
                      </div>

                      {/* Right Action Arrow */}
                      <div className="flex flex-col items-center justify-center self-center w-8 h-8 rounded-full bg-white border border-gray-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all text-gray-400 font-bold text-sm shadow-2xs">
                        →
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Tips for Foreign Tourists & Pilgrims */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🌍</span>
            <h3 className="text-sm font-bold text-blue-900">
              Essential Travel Tips for Tourists in Tamil Nadu
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { icon: '👗', title: 'Temple Dress Code', text: 'Wear clothes covering shoulders and knees. Men may need dhoti for inner sanctums.' },
              { icon: '👟', title: 'Footwear Etiquette', text: 'Remove shoes and sandals at temple entrances. Footwear stands are available.' },
              { icon: '💵', title: 'Currency & Cash', text: 'Carry Indian Rupees (INR) cash for temple entry, coconut offerings, and auto rides.' },
              { icon: '🛺', title: 'Auto Rickshaw Fares', text: 'Agree on fare before boarding or ask for Ola/Uber Autos for transparent rates.' },
              { icon: '🌞', title: 'Weather & Hydration', text: 'Carry sunscreen, light cotton clothing, and drink bottled or boiled water.' },
              { icon: '📷', title: 'Photography Notice', text: 'Photos are strictly prohibited inside inner sanctums of most Tamil Nadu temples.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs bg-white/80 p-2.5 rounded-xl border border-blue-100">
                <span className="text-base flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-blue-900">{item.title}</p>
                  <p className="text-gray-600 leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Helpline Numbers */}
        <div className="bg-red-50/80 border border-red-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🆘</span>
              <h3 className="text-sm font-bold text-red-900">Tamil Nadu Emergency Helpline Numbers</h3>
            </div>
            <span className="text-[11px] text-red-700 font-semibold bg-red-100 px-2 py-0.5 rounded-full">
              24x7 Active
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs mt-2">
            {[
              { label: 'Police', number: '100' },
              { label: 'Ambulance', number: '108' },
              { label: 'Fire Service', number: '101' },
              { label: 'TN Tourist Helpline', number: '1800 425 4747' },
              { label: 'Women Helpline', number: '181' },
              { label: 'India Tourist Info', number: '1363' },
            ].map((e, i) => (
              <a
                key={i}
                href={`tel:${e.number}`}
                className="bg-white border border-red-100 rounded-xl p-2.5 flex justify-between items-center hover:bg-red-50 hover:border-red-300 transition-all shadow-2xs group"
              >
                <span className="text-gray-700 font-medium text-[11px]">{e.label}</span>
                <span className="text-red-600 font-bold group-hover:underline">{e.number}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Emergency SOS Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowSosModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 animate-pulse border-2 border-white cursor-pointer"
        >
          <span className="text-base">🆘</span>
          <span className="text-xs uppercase tracking-wider font-extrabold">{t.emergencySOS}</span>
        </button>
      </div>

      {/* Auth Modal (Login & Sign Up) */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          initialTab={authInitialTab}
          onAuthSuccess={(user) => {
            setCurrentUser(user);
          }}
        />
      )}

      {/* User Profile Drawer */}
      {showProfileDrawer && currentUser && (
        <UserProfileDrawer
          isOpen={showProfileDrawer}
          onClose={() => setShowProfileDrawer(false)}
          user={currentUser}
          onLogout={() => {
            setCurrentUser(null);
          }}
          onSelectSpot={handleSelectSpotFromProfile}
        />
      )}

      {/* SOS Modal Popup */}
      {showSosModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl border border-red-100 text-gray-900 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b">
              <div className="flex items-center gap-2 text-red-600">
                <span className="text-2xl">🚨</span>
                <h3 className="font-bold text-base">Emergency Assistance</h3>
              </div>
              <button
                onClick={() => setShowSosModal(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-600 my-3">
              Tap any service to immediately dial. These numbers are toll-free and operate 24 hours across Tamil Nadu.
            </p>

            <div className="space-y-2">
              <a
                href="tel:108"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded-xl flex items-center justify-between text-sm transition-colors shadow-sm"
              >
                <span>🚑 Medical Emergency (Ambulance)</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs">108</span>
              </a>
              <a
                href="tel:100"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl flex items-center justify-between text-sm transition-colors shadow-sm"
              >
                <span>👮 Police Assistance</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs">100</span>
              </a>
              <a
                href="tel:18004254747"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-3 rounded-xl flex items-center justify-between text-sm transition-colors shadow-sm"
              >
                <span>🗺️ TN Tourist Police / Helpline</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs">1800 425 4747</span>
              </a>
              <a
                href="tel:181"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold p-3 rounded-xl flex items-center justify-between text-sm transition-colors shadow-sm"
              >
                <span>👩 Women Safety Helpline</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs">181</span>
              </a>
            </div>

            <button
              onClick={() => setShowSosModal(false)}
              className="mt-4 w-full py-2.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Auto Fare & Meter Guide Modal */}
      {showAutoFareModal && (
        <AutoFareModal
          isOpen={showAutoFareModal}
          onClose={() => setShowAutoFareModal(false)}
          defaultDistrictId="chennai"
        />
      )}

      {/* Temple Etiquette & Rules Modal */}
      {showTempleEtiquetteModal && (
        <TempleEtiquetteModal
          isOpen={showTempleEtiquetteModal}
          onClose={() => setShowTempleEtiquetteModal(false)}
        />
      )}

      {/* Spoken Tamil Audio Phrasebook Modal */}
      {showPhrasebookModal && (
        <AudioPhrasebookModal
          isOpen={showPhrasebookModal}
          onClose={() => setShowPhrasebookModal(false)}
          initialCategory="all"
        />
      )}


      {/* Advanced Tourist Concierge (Festivals, UPI & Budget) Modal */}
      {showConciergeModal && (
        <TouristConciergeModal
          isOpen={showConciergeModal}
          onClose={() => setShowConciergeModal(false)}
          initialTab={conciergeInitialTab}
        />
      )}
    </div>
  );
};

export default HomeScreen;
