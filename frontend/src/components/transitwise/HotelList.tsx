import React, { useState } from 'react';
import type { Hotel } from '../../types/transitwise';
import type { Translations } from '../../types/transitwise';

interface HotelCardProps {
  hotel: Hotel;
  t: Translations;
}

const starColors: Record<number, string> = {
  3: 'bg-green-50 border-green-200',
  4: 'bg-blue-50 border-blue-200',
  5: 'bg-amber-50 border-amber-200',
};

const starLabel: Record<number, string> = {
  3: '⭐⭐⭐ Budget',
  4: '⭐⭐⭐⭐ Comfort',
  5: '⭐⭐⭐⭐⭐ Luxury',
};

const HotelCard: React.FC<HotelCardProps> = ({ hotel, t }) => {
  const [expanded, setExpanded] = useState(false);

  const scoreColor =
    hotel.transitScore >= 90
      ? 'text-green-600 bg-green-100'
      : hotel.transitScore >= 75
      ? 'text-blue-600 bg-blue-100'
      : 'text-yellow-600 bg-yellow-100';

  return (
    <div className={`rounded-xl border ${starColors[hotel.stars]} p-3 mb-2 transition-all`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-gray-500">{starLabel[hotel.stars]}</span>
          </div>
          <h4 className="font-bold text-gray-900 text-sm mt-0.5">{hotel.name}</h4>
          <p className="text-xs text-gray-500 truncate">📍 {hotel.address}</p>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="text-xs">📏 {hotel.distanceFromSpot}</span>
            {hotel.walkTime && <span className="text-xs">🚶 {hotel.walkTime}</span>}
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${scoreColor}`}>
              {t.transitScore}: {hotel.transitScore}
            </span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-bold text-orange-600">{hotel.pricePerNight}</p>
          <p className="text-xs text-gray-400">{t.perNight}</p>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 border-t border-gray-200 pt-3">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {hotel.amenities.map((a, i) => (
              <span key={i} className="text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-600">
                {a}
              </span>
            ))}
          </div>
          {hotel.phone && (
            <a href={`tel:${hotel.phone}`} className="text-xs text-blue-600 underline flex items-center gap-1">
              📞 {hotel.phone}
            </a>
          )}
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-1 text-xs bg-white border border-gray-200 hover:border-orange-300 text-gray-700 py-1.5 rounded-lg font-medium transition-colors cursor-pointer"
        >
          {expanded ? '▲ Less' : '▼ Details'}
        </button>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + ', ' + hotel.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 py-1.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-1"
        >
          <span>🗺️ Maps</span>
        </a>
        <a
          href={hotel.phone ? `tel:${hotel.phone}` : `https://www.google.com/search?q=${encodeURIComponent('Book ' + hotel.name + ' ' + hotel.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-xs bg-orange-600 hover:bg-orange-700 text-white py-1.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
        >
          <span>📋 Book</span>
        </a>
      </div>
    </div>
  );
};

interface HotelListProps {
  hotels: Hotel[];
  t: Translations;
}

const HotelList: React.FC<HotelListProps> = ({ hotels, t }) => {
  const [filter, setFilter] = useState<3 | 4 | 5 | 0>(0);

  const filtered = filter === 0 ? hotels : hotels.filter(h => h.stars === filter);

  return (
    <div className="mt-4">
      <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
        🏨 {t.nearbyHotels}
        <span className="text-xs font-normal text-gray-400">({hotels.length} {t.hotelNearby})</span>
      </h3>

      {/* Star Filter Pills */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {([0, 3, 4, 5] as const).map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`text-xs px-3 py-1 rounded-full border font-medium transition-all
              ${filter === s
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'}`}
          >
            {s === 0 ? 'All ★' : s === 3 ? t.stars3 : s === 4 ? t.stars4 : t.stars5}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-4">No hotels in this category nearby.</p>
      ) : (
        filtered.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} t={t} />
        ))
      )}
    </div>
  );
};

export default HotelList;
