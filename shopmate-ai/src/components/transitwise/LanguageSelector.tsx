import React from 'react';
import type { Language } from '../../types/transitwise';
import { languageNames } from '../../data/tamilnaduData';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSelectLang }) => {
  const langs = Object.entries(languageNames) as [Language, string][];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {langs.map(([code, label]) => (
        <button
          key={code}
          onClick={() => onSelectLang(code)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
            ${currentLang === code
              ? 'bg-orange-500 text-white border-orange-500 shadow-md scale-105'
              : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
