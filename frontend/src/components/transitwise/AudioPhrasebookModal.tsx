import React, { useState } from 'react';
import {
  PHRASEBOOK_CATEGORIES,
  TOURIST_PHRASES,
  type PhraseItem,
} from '../../data/phrasebookData';

interface AudioPhrasebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const AudioPhrasebookModal: React.FC<AudioPhrasebookModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [speakingPhraseId, setSpeakingPhraseId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredPhrases = TOURIST_PHRASES.filter((phrase) => {
    const matchesCat =
      selectedCategory === 'all' || phrase.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      phrase.english.toLowerCase().includes(q) ||
      phrase.tamil.includes(q) ||
      phrase.phonetic.toLowerCase().includes(q) ||
      phrase.context.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  const playAudio = (phrase: PhraseItem) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this device/browser.');
      return;
    }

    window.speechSynthesis.cancel();
    setSpeakingPhraseId(phrase.id);

    const utterance = new SpeechSynthesisUtterance(phrase.tamil);
    utterance.lang = 'ta-IN';
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.0;

    utterance.onend = () => setSpeakingPhraseId(null);
    utterance.onerror = () => setSpeakingPhraseId(null);

    window.speechSynthesis.speak(utterance);
  };

  const copyToClipboard = (phrase: PhraseItem) => {
    const text = `${phrase.tamil} (${phrase.phonetic}) — "${phrase.english}"`;
    navigator.clipboard.writeText(text);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-rose-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl shadow-inner">
              🗣️
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold bg-white/25 px-2 py-0.5 rounded-full">
                Audio Pronunciation Assistant
              </span>
              <h3 className="text-lg sm:text-xl font-black">
                Tamil Tourist Audio Phrasebook
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

        {/* Search & Categories Bar */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/70 space-y-3">
          {/* Search Bar */}
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phrases in English or Tamil (e.g. spicy, meter, coffee, shoes)..."
              className="w-full bg-white text-gray-900 placeholder-gray-400 pl-10 pr-10 py-2.5 rounded-xl text-xs border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {PHRASEBOOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer border
                  ${
                    selectedCategory === cat.id
                      ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600'
                  }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phrases List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 text-sm">
          {filteredPhrases.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <span className="text-3xl block mb-2">🔍</span>
              <p className="font-semibold text-xs">No matching phrases found</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-2 text-xs text-orange-600 font-bold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredPhrases.map((phrase) => {
              const isSpeaking = speakingPhraseId === phrase.id;
              const isCopied = copiedId === phrase.id;

              return (
                <div
                  key={phrase.id}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                    isSpeaking
                      ? 'bg-orange-50 border-orange-400 shadow-md ring-2 ring-orange-200'
                      : 'bg-white border-gray-200 hover:border-orange-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div className="text-sm font-bold text-gray-900 leading-snug">
                        {phrase.english}
                      </div>
                      <div className="text-base sm:text-lg font-black text-orange-700 tracking-wide font-sans">
                        {phrase.tamil}
                      </div>
                      <div className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg inline-block border border-amber-200/60">
                        🗣️ <span className="italic">{phrase.phonetic}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1">
                        💡 {phrase.context}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => playAudio(phrase)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base transition-all cursor-pointer shadow-sm ${
                          isSpeaking
                            ? 'bg-orange-600 text-white animate-bounce'
                            : 'bg-orange-100 hover:bg-orange-200 text-orange-800'
                        }`}
                        title="Listen to native Tamil audio pronunciation"
                      >
                        🔊
                      </button>

                      <button
                        onClick={() => copyToClipboard(phrase)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all cursor-pointer border ${
                          isCopied
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200'
                        }`}
                        title="Copy Tamil phrase to show or message"
                      >
                        {isCopied ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            Natural Tamil Web Speech Synthesis (ta-IN)
          </span>
          <button
            onClick={onClose}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2 rounded-xl text-xs shadow-md transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPhrasebookModal;
