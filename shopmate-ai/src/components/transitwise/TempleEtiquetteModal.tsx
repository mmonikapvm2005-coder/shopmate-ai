import React, { useState } from 'react';
import type { TouristSpot } from '../../types/transitwise';

interface TempleEtiquetteModalProps {
  isOpen: boolean;
  onClose: () => void;
  spot?: TouristSpot | null;
}

const TempleEtiquetteModal: React.FC<TempleEtiquetteModalProps> = ({ isOpen, onClose, spot }) => {
  const [activeTab, setActiveTab] = useState<'dress' | 'access' | 'shoes' | 'darshan' | 'culture'>('dress');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-amber-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl shadow-inner">
              🛕
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-extrabold bg-white/25 px-2 py-0.5 rounded-full">
                  Cultural Protocol
                </span>
                {spot && (
                  <span className="text-xs text-amber-100 font-medium truncate max-w-[150px]">
                    {spot.name}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                Tamil Nadu Temple Etiquette Guide
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
        <div className="flex border-b border-gray-100 bg-amber-50/50 px-3 pt-2 gap-1 overflow-x-auto scrollbar-hide">
          {[
            { id: 'dress', label: 'Dress Code', icon: '👗' },
            { id: 'access', label: 'Entry & Access', icon: '🚪' },
            { id: 'shoes', label: 'Footwear & Heat', icon: '🧦' },
            { id: 'darshan', label: 'Tickets & Darshan', icon: '🎟️' },
            { id: 'culture', label: 'Rituals & Do’s', icon: '🙏' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-t-xl transition-all border-b-2 cursor-pointer whitespace-nowrap
                ${
                  activeTab === t.id
                    ? 'border-orange-600 text-orange-600 bg-white shadow-sm'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-gray-800 text-sm">
          {activeTab === 'dress' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                <h4 className="font-extrabold text-orange-900 flex items-center gap-2 mb-1">
                  <span>📜</span> Official Madras High Court Dress Code
                </h4>
                <p className="text-xs text-orange-800 leading-relaxed">
                  By state judicial order, all temples governed by the HR&CE Department require modest traditional Indian attire. Security guards at the gopuram gates will strictly deny entry to non-compliant clothing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-green-200 bg-green-50/50 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-green-800 font-bold mb-2">
                    <span className="text-lg">✅</span>
                    <span>Approved Clothing</span>
                  </div>
                  <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Men:</strong> Dhoti (veshti), Kurta-pyjama, or full-length formal trousers and plain shirts.</li>
                    <li><strong>Women:</strong> Saree, Salwar Kameez, or Churidar with a Dupatta covering the shoulders.</li>
                    <li><strong>Children:</strong> Any neat, fully covered attire.</li>
                  </ul>
                </div>

                <div className="border border-red-200 bg-red-50/50 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
                    <span className="text-lg">❌</span>
                    <span>Strictly Prohibited</span>
                  </div>
                  <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
                    <li>Shorts, Bermuda shorts, or three-quarter capris.</li>
                    <li>Mini-skirts, sleeveless tops, or crop tops.</li>
                    <li>Distressed/torn jeans or nightwear/lungis.</li>
                    <li>Tight leggings without long tops.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200 text-xs text-amber-900">
                <strong>💡 Quick Tourist Tip:</strong> In several major shrines (like the inner sanctum of Rameswaram Ramanathaswamy and Suchindram Thanumalayan), male devotees are required to remove their shirts and remain bare-chested with an angavastram (cloth shawl) wrapped around the waist.
              </div>
            </div>
          )}

          {activeTab === 'access' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <h4 className="font-extrabold text-blue-900 flex items-center gap-2 mb-1">
                  <span>🚪</span> Non-Hindu & International Visitors Policy
                </h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  Foreign tourists often get surprised when turned back from certain temple doors. Here is the exact distinction to ensure a comfortable visit:
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50">
                  <h5 className="font-bold text-xs text-gray-900 flex items-center gap-1.5 mb-1">
                    <span className="text-green-600">🏛️</span> Outer Prakarams & Pillared Halls (Open to Everyone)
                  </h5>
                  <p className="text-xs text-gray-600">
                    Non-Hindus and tourists from all countries are welcomed to explore the towering Gopurams, massive outer corridors, thousand-pillar mandapams, musical stone pillars, and museum galleries (e.g. at Madurai Meenakshi, Srirangam, and Thanjavur Big Temple).
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-amber-200 bg-amber-50/50">
                  <h5 className="font-bold text-xs text-amber-900 flex items-center gap-1.5 mb-1">
                    <span className="text-amber-600">⚠️</span> Inner Sanctum (Garbhagriha) Orthodox Rules
                  </h5>
                  <p className="text-xs text-gray-600">
                    The innermost chamber where the primary deity resides is reserved for practicing Hindus in certain ancient temples (such as Madurai Meenakshi Amman sanctum and Srirangam Ranganathar sanctum). Do not take it personally—this is an ancient ritual purity requirement.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-purple-200 bg-purple-50/50">
                  <h5 className="font-bold text-xs text-purple-900 flex items-center gap-1.5 mb-1">
                    <span>🌟</span> UNESCO Temples Open to All
                  </h5>
                  <p className="text-xs text-gray-600">
                    The Great Living Chola Temples (Thanjavur Brihadeeswarar, Gangaikondacholapuram, and Darasuram) are archaeological monuments managed with the ASI and welcome all visitors throughout the temple complex.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shoes' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-amber-100 border border-amber-300 rounded-2xl p-4">
                <h4 className="font-black text-amber-950 flex items-center gap-2 mb-1">
                  <span>🔥</span> Granite Stone Heat Warning
                </h4>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Tamil Nadu temple courtyards are paved with ancient black granite slabs. Under direct midday sun (11:00 AM to 4:00 PM), the stone temperature can exceed <strong>50°C (122°F)</strong>, causing painful foot blisters!
                </p>
              </div>

              <div className="border border-blue-200 bg-blue-50/60 rounded-2xl p-4 space-y-2">
                <h5 className="font-bold text-xs text-blue-900 flex items-center gap-1.5">
                  <span>🧦</span> The Secret Pro-Tip for First-Time Visitors:
                </h5>
                <p className="text-xs text-blue-800 leading-relaxed">
                  While leather and shoes are strictly forbidden, <strong>wearing thick cotton socks is 100% permitted</strong> in virtually all temples. Keep a pair of white cotton socks in your backpack to slip on before entering the sun-baked stone courtyard!
                </p>
              </div>

              <div className="p-3.5 rounded-2xl border border-gray-200 bg-gray-50 text-xs text-gray-700 space-y-1.5">
                <h5 className="font-bold text-gray-900">👟 Footwear Depository Counters</h5>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Look for the official counter labeled <em>"Seruppu Pathukappu Nilayam"</em> near the main Gopuram entry.</li>
                  <li>Official counters charge a nominal ₹2 – ₹5 token fee or are free. Avoid informal touts outside.</li>
                  <li>Remember which Gopuram gate you left your shoes at (Temples often have 4 different gates: East, West, North, South!).</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'darshan' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <h4 className="font-extrabold text-emerald-900 flex items-center gap-2 mb-1">
                  <span>🎟️</span> Queue Types & How to Save Hours
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Major shrines attract tens of thousands of pilgrims daily. Knowing the right queue saves you up to 3 hours of waiting:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="font-bold text-xs text-gray-900 flex items-center justify-between mb-1">
                    <span>Dharma Darshan (Free)</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px]">Free</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    The general public queue. Completely free of cost, but wait times can range from 1 to 4 hours on festival days and weekends.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-orange-200 bg-orange-50/50 shadow-sm">
                  <div className="font-bold text-xs text-orange-950 flex items-center justify-between mb-1">
                    <span>Special Entry Darshan</span>
                    <span className="bg-orange-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">₹50 – ₹250</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    Express queue ticket available at ticket counters inside or booked online in advance. Reduces waiting time by 70–80%.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-4 text-white flex items-center justify-between gap-3">
                <div>
                  <h5 className="font-bold text-sm">Official TN HR&CE Booking</h5>
                  <p className="text-xs text-orange-100">
                    Book online special darshan tickets and prasadham through the official government portal.
                  </p>
                </div>
                <a
                  href="https://hrce.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-3.5 py-2 rounded-xl text-xs flex-shrink-0 flex items-center gap-1 shadow-md transition-all"
                >
                  <span>hrce.tn.gov.in</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'culture' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl border border-gray-200 bg-gray-50">
                  <span className="text-lg">🔄</span>
                  <h5 className="font-bold text-xs text-gray-900 mt-1">Clockwise Movement (Pradakshina)</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Always walk around the deity shrines in a clockwise direction. Never turn counter-clockwise.
                  </p>
                </div>

                <div className="p-3 rounded-2xl border border-gray-200 bg-gray-50">
                  <span className="text-lg">📸</span>
                  <h5 className="font-bold text-xs text-gray-900 mt-1">Camera & Phone Rules</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Mobiles are forbidden inside many sanctums. Leave phones in lockers or keep them strictly silenced in your bag.
                  </p>
                </div>

                <div className="p-3 rounded-2xl border border-gray-200 bg-gray-50">
                  <span className="text-lg">🥥</span>
                  <h5 className="font-bold text-xs text-gray-900 mt-1">Holy Ash & Kumkum</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Priests will offer Vibhuti (white holy ash) or Kumkum. Accept with your <strong>right hand</strong> and apply to your forehead.
                  </p>
                </div>

                <div className="p-3 rounded-2xl border border-gray-200 bg-gray-50">
                  <span className="text-lg">🍲</span>
                  <h5 className="font-bold text-xs text-gray-900 mt-1">Temple Annadhanam (Free Meal)</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Most major temples serve free, sacred noon lunch (Annadhanam) to everyone regardless of caste, nationality, or faith.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            TripSense Cultural Intelligence for Tourists
          </span>
          <button
            onClick={onClose}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md transition-all cursor-pointer"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempleEtiquetteModal;
