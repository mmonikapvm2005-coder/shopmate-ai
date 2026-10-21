import React from 'react';
import type { TransportOption } from '../../types/transitwise';
import type { Translations } from '../../types/transitwise';

interface TransportPanelProps {
  transport: TransportOption[];
  t: Translations;
}

const modeColor: Record<string, string> = {
  bus: 'bg-blue-100 text-blue-800 border-blue-200',
  train: 'bg-purple-100 text-purple-800 border-purple-200',
  auto: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  cab: 'bg-green-100 text-green-800 border-green-200',
  walk: 'bg-gray-100 text-gray-800 border-gray-200',
  ferry: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  metro: 'bg-red-100 text-red-800 border-red-200',
};

const TransportPanel: React.FC<TransportPanelProps> = ({ transport, t }) => {
  if (!transport || transport.length === 0) return null;

  const labels = [t.recommended, t.fastest, t.cheapest];

  return (
    <div className="mt-4">
      <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
        🚌 {t.transport}
      </h3>
      <div className="space-y-2">
        {transport.map((opt, idx) => (
          <div
            key={idx}
            className={`rounded-xl border p-3 flex items-start gap-3 ${modeColor[opt.mode] || 'bg-gray-50 border-gray-200'}`}
          >
            <span className="text-2xl flex-shrink-0">{opt.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm">{opt.label}</span>
                {idx < 3 && (
                  <span className="text-xs bg-white/60 px-2 py-0.5 rounded-full font-medium">
                    {labels[idx]}
                  </span>
                )}
              </div>
              <div className="flex gap-3 mt-1 text-xs flex-wrap">
                <span>⏱ {opt.duration}</span>
                <span>💰 {opt.fare}</span>
                {opt.frequency && <span>🔁 {opt.frequency}</span>}
                {opt.routeNo && <span>🏷 {opt.routeNo}</span>}
              </div>
              {opt.tip && (
                <p className="mt-1 text-xs italic opacity-80">💡 {opt.tip}</p>
              )}
            </div>
            <button className="flex-shrink-0 bg-white/80 hover:bg-white text-gray-700 text-xs px-2.5 py-1 rounded-lg font-medium transition-all shadow-2xs">
              {t.getDirections}
            </button>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
        ▶ {t.startNavigation}
      </button>
    </div>
  );
};

export default TransportPanel;
