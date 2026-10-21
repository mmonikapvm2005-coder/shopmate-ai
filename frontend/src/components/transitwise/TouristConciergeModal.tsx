import React, { useState } from 'react';
import {
  TAMIL_NADU_FESTIVALS,
  UPI_ONE_WORLD_GUIDE,
  BUDGET_TIERS,
} from '../../data/festivalAndPaymentData';

interface TouristConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'festivals' | 'upi' | 'budget';
}

const TouristConciergeModal: React.FC<TouristConciergeModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'festivals',
}) => {
  const [tab, setTab] = useState<'festivals' | 'upi' | 'budget'>(initialTab);
  const [selectedBudgetTier, setSelectedBudgetTier] = useState<'backpacker' | 'comfort' | 'luxury'>('comfort');
  const [tripDays, setTripDays] = useState<number>(3);
  const [numTravelers, setNumTravelers] = useState<number>(2);

  if (!isOpen) return null;

  const currentTier = BUDGET_TIERS[selectedBudgetTier];

  // Budget calculations
  const perPersonDailyMin = selectedBudgetTier === 'backpacker' ? 1800 : selectedBudgetTier === 'comfort' ? 5000 : 15000;
  const perPersonDailyMax = selectedBudgetTier === 'backpacker' ? 2500 : selectedBudgetTier === 'comfort' ? 7500 : 25000;
  const totalMin = perPersonDailyMin * tripDays * numTravelers;
  const totalMax = perPersonDailyMax * tripDays * numTravelers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-indigo-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl shadow-inner">
              🧭
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold bg-white/25 px-2 py-0.5 rounded-full">
                Advanced Tourist Concierge
              </span>
              <h3 className="text-lg sm:text-xl font-black">
                TripSense Smart Travel Intelligence
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-sm transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 bg-indigo-50/50 px-3 pt-2 gap-1 overflow-x-auto scrollbar-hide">
          {[
            { id: 'festivals', label: 'Festivals & Crowd Radar', icon: '📅' },
            { id: 'upi', label: 'UPI for Foreigners & Forex', icon: '💳' },
            { id: 'budget', label: 'Trip Budget Estimator', icon: '💰' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-t-xl transition-all border-b-2 cursor-pointer whitespace-nowrap
                ${
                  tab === t.id
                    ? 'border-indigo-600 text-indigo-700 bg-white shadow-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-sm text-gray-800">
          {/* TAB 1: FESTIVALS & CROWD RADAR */}
          {tab === 'festivals' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                <h4 className="font-extrabold text-purple-950 flex items-center gap-2 mb-1">
                  <span>📅</span> Annual Temple Festivals & Massive Crowd Radar
                </h4>
                <p className="text-xs text-purple-900 leading-relaxed">
                  Tamil Nadu temple festivals are cultural spectacles of monumental scale. Devotee gatherings can exceed 1 million people. Plan your transit and hotel bookings accordingly.
                </p>
              </div>

              <div className="space-y-3">
                {TAMIL_NADU_FESTIVALS.map((fest) => (
                  <div
                    key={fest.id}
                    className="p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-purple-300 transition-all space-y-2 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h5 className="font-extrabold text-xs text-gray-900 leading-tight">
                          {fest.name}
                        </h5>
                        <p className="text-[11px] font-semibold text-purple-800 mt-0.5">
                          {fest.tamilName}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                          {fest.approxDates}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            fest.crowdLevel.includes('Extreme')
                              ? 'bg-red-100 text-red-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          👥 {fest.crowdLevel}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {fest.description}
                    </p>

                    <div className="bg-amber-50/70 p-2 rounded-xl text-[11px] text-amber-900 border border-amber-200/60">
                      💡 <strong>Tourist Advice:</strong> {fest.touristTip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: UPI & FOREIGN PAYMENTS GUIDE */}
          {tab === 'upi' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <h4 className="font-extrabold text-blue-950 flex items-center gap-2 mb-1">
                  <span>💳</span> UPI One World for International Tourists
                </h4>
                <p className="text-xs text-blue-900 leading-relaxed">
                  95% of transactions in Tamil Nadu (from ₹10 tender coconuts to autos and street food) happen via QR-code scan (UPI). International credit cards are not supported at street kiosks. Here is how foreign travelers can unlock UPI:
                </p>
              </div>

              <div className="space-y-3">
                {UPI_ONE_WORLD_GUIDE.map((step) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-gray-900">{step.title}</h5>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* International Card ATMs */}
              <div className="border border-indigo-200 bg-indigo-50/60 rounded-2xl p-3.5 space-y-1.5 text-xs text-indigo-900">
                <h5 className="font-extrabold text-indigo-950 flex items-center gap-1.5">
                  <span>🏧</span> Verified International Card ATMs:
                </h5>
                <p className="leading-relaxed">
                  Foreign Visa, Mastercard, and Maestro cards work best at <strong>State Bank of India (SBI)</strong>, <strong>HDFC Bank</strong>, and <strong>ICICI Bank</strong> ATMs. Avoid regional rural bank ATMs that may decline foreign cards.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: BUDGET ESTIMATOR */}
          {tab === 'budget' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Tier Selector */}
              <div className="grid grid-cols-3 gap-2">
                {(['backpacker', 'comfort', 'luxury'] as const).map((tierKey) => {
                  const item = BUDGET_TIERS[tierKey];
                  const isSelected = selectedBudgetTier === tierKey;
                  return (
                    <button
                      key={tierKey}
                      onClick={() => setSelectedBudgetTier(tierKey)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-200'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      <div className="text-xl mb-1">{item.icon}</div>
                      <div className="text-xs font-black leading-tight">
                        {tierKey.charAt(0).toUpperCase() + tierKey.slice(1)}
                      </div>
                      <div className={`text-[10px] mt-0.5 font-bold ${isSelected ? 'text-indigo-100' : 'text-indigo-600'}`}>
                        {item.dailyEstimate}/day
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Calculator Inputs */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Trip Duration (Days):
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTripDays(Math.max(1, tripDays - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-300 font-bold text-sm hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-black text-sm text-gray-900 w-8 text-center">
                      {tripDays}
                    </span>
                    <button
                      onClick={() => setTripDays(Math.min(30, tripDays + 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-300 font-bold text-sm hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Number of Travelers:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setNumTravelers(Math.max(1, numTravelers - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-300 font-bold text-sm hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-black text-sm text-gray-900 w-8 text-center">
                      {numTravelers}
                    </span>
                    <button
                      onClick={() => setNumTravelers(Math.min(10, numTravelers + 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-300 font-bold text-sm hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimated Total Card */}
              <div className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white rounded-2xl p-4 shadow-sm text-center">
                <span className="text-[11px] uppercase tracking-wider text-indigo-200 font-bold">
                  Total Estimated Budget ({tripDays} Days • {numTravelers} {numTravelers > 1 ? 'Travelers' : 'Traveler'})
                </span>
                <div className="text-3xl sm:text-4xl font-black mt-1">
                  ₹{totalMin.toLocaleString()} – ₹{totalMax.toLocaleString()}
                </div>
                <p className="text-xs text-indigo-200 mt-1">
                  Approx. ${Math.round(totalMin / 86)} – ${Math.round(totalMax / 86)} USD (€{Math.round(totalMin / 93)} – €{Math.round(totalMax / 93)})
                </p>
              </div>

              {/* Itemized Breakdown */}
              <div className="border border-gray-200 rounded-2xl p-3.5 space-y-2 bg-white text-xs">
                <h5 className="font-bold text-gray-900 border-b pb-1">
                  Daily Cost Breakdown ({currentTier.title}):
                </h5>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>🏨 <strong>Hotel:</strong> {currentTier.hotel}</div>
                  <div>🍛 <strong>Food:</strong> {currentTier.food}</div>
                  <div>🛺 <strong>Transport:</strong> {currentTier.transport}</div>
                  <div>🎟️ <strong>Darshan & Tickets:</strong> {currentTier.sightseeing}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            TripSense Smart Tourist Concierge
          </span>
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristConciergeModal;
