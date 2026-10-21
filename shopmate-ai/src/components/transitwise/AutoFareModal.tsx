import React, { useState } from 'react';
import {
  calculateAutoFare,
  DISTRICT_APP_COVERAGE,
  DEFAULT_APP_COVERAGE,
  TN_GOVT_AUTO_RATES,
} from '../../data/transportGuideData';
import { allDistricts } from '../../data/tamilnaduData';

interface AutoFareModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDistrictId?: string;
}

const AutoFareModal: React.FC<AutoFareModalProps> = ({ isOpen, onClose, defaultDistrictId = 'chennai' }) => {
  const [distanceKm, setDistanceKm] = useState<number>(5);
  const [isNight, setIsNight] = useState<boolean>(false);
  const [selectedDistrict, setSelectedDistrict] = useState<string>(
    defaultDistrictId ? defaultDistrictId.toLowerCase() : 'chennai'
  );
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  if (!isOpen) return null;

  const fareResult = calculateAutoFare(distanceKm, isNight);
  const coverage = DISTRICT_APP_COVERAGE[selectedDistrict] || DEFAULT_APP_COVERAGE;

  const playTamilAudio = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis not available in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    setSpeakingText(text);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ta-IN';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-yellow-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl shadow-inner">
              🛺
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold bg-white/25 px-2 py-0.5 rounded-full">
                Tourist Scam Prevention
              </span>
              <h3 className="text-lg sm:text-xl font-black">
                Auto Fare Estimator & Meter Guide
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

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-gray-800 text-sm">
          {/* District Picker */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3.5">
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Select City / District:
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value.toLowerCase())}
              className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {allDistricts.map((d) => (
                <option key={d} value={d.toLowerCase()}>
                  {d} District
                </option>
              ))}
            </select>

            {/* App Availability Pills */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-gray-700">Ride-Hailing Apps:</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    coverage.tier === 1
                      ? 'bg-green-100 text-green-800'
                      : coverage.tier === 2
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {coverage.tierLabel}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[11px]">
                <div
                  className={`p-1.5 rounded-xl border ${
                    coverage.uber ? 'bg-green-50 border-green-200 text-green-800 font-bold' : 'bg-gray-100 border-gray-200 text-gray-400'
                  }`}
                >
                  Uber {coverage.uber ? '✓' : '—'}
                </div>
                <div
                  className={`p-1.5 rounded-xl border ${
                    coverage.ola ? 'bg-green-50 border-green-200 text-green-800 font-bold' : 'bg-gray-100 border-gray-200 text-gray-400'
                  }`}
                >
                  Ola {coverage.ola ? '✓' : '—'}
                </div>
                <div
                  className={`p-1.5 rounded-xl border ${
                    coverage.rapido ? 'bg-green-50 border-green-200 text-green-800 font-bold' : 'bg-gray-100 border-gray-200 text-gray-400'
                  }`}
                >
                  Rapido {coverage.rapido ? '✓' : '—'}
                </div>
                <div
                  className={`p-1.5 rounded-xl border ${
                    coverage.redTaxi ? 'bg-green-50 border-green-200 text-green-800 font-bold' : 'bg-gray-100 border-gray-200 text-gray-400'
                  }`}
                >
                  Red Taxi {coverage.redTaxi ? '✓' : '—'}
                </div>
              </div>
              <p className="text-[11px] text-gray-600 mt-2 bg-white p-2 rounded-xl border border-gray-100">
                💡 <strong>Local Advice:</strong> {coverage.tips}
              </p>
            </div>
          </div>

          {/* Calculator Controls */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase">Estimated Travel Distance:</span>
                <div className="text-2xl font-black text-amber-950 mt-0.5">{distanceKm} km</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsNight(false)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    !isNight ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  ☀️ Day (5am–10pm)
                </button>
                <button
                  onClick={() => setIsNight(true)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isNight ? 'bg-indigo-900 text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  🌙 Night (+50%)
                </button>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="1"
              max="35"
              step="1"
              value={distanceKm}
              onChange={(e) => setDistanceKm(Number(e.target.value))}
              className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-[10px] text-amber-800 font-semibold">
              <span>1 km (Local Market)</span>
              <span>10 km (Cross City)</span>
              <span>25+ km (Outskirts)</span>
            </div>

            {/* Fare Output Band */}
            <div className="bg-white rounded-2xl p-4 border border-amber-300 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Fair Market Auto Fare Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 mt-1 text-emerald-700">
                ₹{fareResult.minFairPrice} – ₹{fareResult.maxFairPrice}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {fareResult.breakdown}
              </p>
            </div>
          </div>

          {/* Tamil Negotiation Phrases with Audio */}
          <div className="space-y-2.5">
            <h4 className="font-extrabold text-xs text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
              <span>🗣️</span> Tap to Speak with Auto Driver (Pronunciation & Audio)
            </h4>

            {[
              {
                en: 'Please turn on the meter sir',
                ta: 'மீட்டர் போடுங்க சார்',
                phonetic: 'Meter po-dun-ga sir',
              },
              {
                en: `That is too high! I will pay ₹${fareResult.maxFairPrice}`,
                ta: `ரொம்ப அதிகம்! ₹${fareResult.maxFairPrice} தாரேன்`,
                phonetic: `Rom-ba adhi-gam! ${fareResult.maxFairPrice} roobai thaa-ren`,
              },
              {
                en: 'Do you accept Google Pay / PhonePe?',
                ta: 'கூகுள் பே / ஜிபே இருக்கா?',
                phonetic: 'Google Pay / G-Pay iruk-kaa?',
              },
              {
                en: 'Where is the official prepaid auto stand?',
                ta: 'ப்ரீபெய்ட் ஆட்டோ ஸ்டாண்ட் எங்கே?',
                phonetic: 'Pre-paid auto stand en-gae?',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl border border-gray-200 hover:border-amber-300 bg-gray-50/70 hover:bg-amber-50/30 transition-all flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-bold text-xs text-gray-900">{p.en}</div>
                  <div className="text-xs font-semibold text-orange-700 mt-0.5">{p.ta}</div>
                  <div className="text-[11px] text-gray-500 italic mt-0.5">{p.phonetic}</div>
                </div>
                <button
                  onClick={() => playTamilAudio(p.ta)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all cursor-pointer shadow-sm ${
                    speakingText === p.ta
                      ? 'bg-orange-600 text-white animate-pulse'
                      : 'bg-white border border-gray-200 text-orange-600 hover:bg-orange-50'
                  }`}
                  title="Play pronunciation"
                >
                  🔊
                </button>
              </div>
            ))}
          </div>

          {/* 3 Golden Rules for Tourists */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3.5 text-xs text-blue-900 space-y-1">
            <h5 className="font-extrabold text-blue-950 flex items-center gap-1.5">
              <span>🛡️</span> 3 Rules to Never Get Scammed:
            </h5>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Always check if <strong>Rapido Auto</strong> is available first to get fixed guaranteed pricing on your screen.</li>
              <li>Always agree on the total price <strong>before stepping one foot inside the auto</strong>.</li>
              <li>At major railway stations and airports, use the official <strong>Prepaid Auto Counter</strong> with police slips.</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            TN Govt Regulated Base: ₹{TN_GOVT_AUTO_RATES.baseFareDay} + ₹{TN_GOVT_AUTO_RATES.perKmRateDay}/km
          </span>
          <button
            onClick={onClose}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoFareModal;
