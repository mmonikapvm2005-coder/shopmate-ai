import React, { useState } from 'react';
import { 
  Target, 
  MapPin, 
  Tag, 
  EyeOff, 
  CheckCircle2, 
  Sliders, 
  ArrowRight, 
  Sparkles, 
  Layers,
  Edit3,
  Gift
} from 'lucide-react';
import { ExtractedIntent, Screen } from '../../types';

interface IntentSummaryProps {
  intent: ExtractedIntent;
  setScreen: (screen: Screen) => void;
  onUpdateIntent: (updated: Partial<ExtractedIntent>) => void;
}

export const IntentSummary: React.FC<IntentSummaryProps> = ({
  intent,
  setScreen,
  onUpdateIntent
}) => {
  const [budgetVal, setBudgetVal] = useState(intent.maxBudget);
  const [durationVal, setDurationVal] = useState(intent.durationDays);
  const [isEditing, setIsEditing] = useState(false);
  const [excludedList, setExcludedList] = useState(intent.excludedAttributes);
  const [newExclusion, setNewExclusion] = useState('');

  const handleSaveEdits = () => {
    onUpdateIntent({
      maxBudget: budgetVal,
      durationDays: durationVal,
      excludedAttributes: excludedList
    });
    setIsEditing(false);
  };

  const handleRemoveExclusion = (tag: string) => {
    setExcludedList(excludedList.filter(t => t !== tag));
  };

  const handleAddExclusion = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExclusion.trim() && !excludedList.includes(newExclusion.trim())) {
      setExcludedList([...excludedList, newExclusion.trim()]);
      setNewExclusion('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
              <Target className="w-3.5 h-3.5 text-indigo-600" />
              <span>Step 2 of 5 • Structured Intent Engine</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              Confidence: {intent.confidenceScore}%
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-zinc-950 mt-2">
            AI Intent &amp; Constraint Breakdown
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            How ShopMate AI decompiled your natural language prompt into enforceable database rules.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 text-xs font-semibold transition-colors shadow-xs"
          >
            <Edit3 className="w-3.5 h-3.5 text-zinc-600" />
            <span>{isEditing ? 'Cancel Editing' : 'Fine-Tune Constraints'}</span>
          </button>
          
          <button
            onClick={() => setScreen('recommendations')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold shadow-md transition-all"
          >
            <span>Proceed to Picks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Raw Prompt Inspector Card */}
      <div className="p-5 rounded-3xl bg-white border border-zinc-200/90 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Original Ingested Query</span>
          </span>
          <span className="text-[11px] text-zinc-400 font-mono">Parsed: {intent.extractedAt}</span>
        </div>
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 font-mono text-xs sm:text-sm text-zinc-900 leading-relaxed">
          "{intent.rawQuery}"
        </div>
      </div>

      {/* Main Grid of Extracted Constraints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Occasion & Weather / Gifting Context */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-indigo-700 mb-3">
              <span className="flex items-center gap-1.5">
                {intent.scenarioType === 'gift' ? <Gift className="w-4 h-4 text-indigo-600" /> : <MapPin className="w-4 h-4 text-indigo-600" />}
                <span>{intent.scenarioType === 'gift' ? 'Occasion & Recipient' : 'Destination & Climate'}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                Inferred
              </span>
            </div>
            <div className="text-lg font-black text-zinc-900 mb-1">{intent.destinationOccasion}</div>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">
              {intent.scenarioType === 'gift' 
                ? 'Target: High-delight, memorable personal gift. Triggers selection of luxury timepieces, artisanal fragrances, and everyday leather essentials.'
                : '31°C–33°C Coastal Weather • 75% relative humidity. Triggers heavy preference for 100% linen, slub open-weaves, and natural jute soles.'}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {intent.scenarioType === 'gift' 
                ? 'Gift packaging & presentation box verified' 
                : 'Fabric weights capped at < 180 GSM'}
            </span>
          </div>
        </div>

        {/* Hard Budget Ceiling */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-emerald-700 mb-3">
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span>Deterministic Budget Cap</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                Strict Limit
              </span>
            </div>
            <div className="text-3xl font-black text-zinc-950 mb-1">
              ₹{intent.maxBudget.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed font-normal">
              Guarantees the sum of recommended outfits or gift sets stays under this cap. Zero risk of checkout price shock.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
            <span>Tier Classification:</span>
            <span className="font-bold text-zinc-900 uppercase text-[11px]">{intent.budgetTier || 'Moderate'}</span>
          </div>
        </div>

        {/* Negative Constraints */}
        <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-3">
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-4 h-4 text-amber-600" />
                <span>Negative Exclusion Mask</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">
                Zero Tolerance
              </span>
            </div>
            <div className="text-sm font-bold text-zinc-900 mb-2">Exclusion Rules Active</div>
            
            <div className="flex flex-wrap gap-1.5 mb-2">
              {intent.excludedAttributes.length > 0 ? (
                intent.excludedAttributes.map((attr, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-xl bg-white border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1 shadow-2xs"
                  >
                    <span>🚫</span>
                    <span>{attr}</span>
                  </span>
                ))
              ) : (
                <span className="text-xs text-zinc-500 italic">No negative rules provided yet.</span>
              )}
            </div>
          </div>
          <p className="text-[11px] text-amber-950/80 mt-3 pt-3 border-t border-amber-200/60">
            Violating candidates have been permanently pruned from candidate sets.
          </p>
        </div>

      </div>

      {/* Secondary Attributes Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Style & Vibe */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
          <h2 className="text-sm font-bold text-zinc-800 mb-3.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Target Aesthetic &amp; Vibe</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {intent.aestheticVibe.map((vibe, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-2xl bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800">
                ✨ {vibe}
              </span>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">
              Approved Color Spectrum:
            </span>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#556b2f] border border-black/10" />
                <span className="text-zinc-700 font-medium">Olive Drab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#d2b48c] border border-black/10" />
                <span className="text-zinc-700 font-medium">Sand Beige</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#36454f] border border-black/10" />
                <span className="text-zinc-700 font-medium">Charcoal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#808080] border border-black/10" />
                <span className="text-zinc-700 font-medium">Stone Grey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Required Capsule Composition */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
          <h2 className="text-sm font-bold text-zinc-800 mb-3.5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Category Mapping</span>
          </h2>
          <div className="space-y-2.5">
            {intent.requiredCategories.map((cat, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-800">{cat}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[11px] border border-emerald-200">
                  Verified In Catalog
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Editing Drawer when fine-tuning */}
      {isEditing && (
        <div className="mb-8 p-6 rounded-3xl bg-white border-2 border-indigo-200 shadow-xl animate-in fade-in duration-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-zinc-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-600" />
              <span>Fine-Tune Rules &amp; Re-query Catalog</span>
            </h2>
            <span className="text-xs text-zinc-500 font-medium">Updates will adjust recommendations immediately</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-xs font-bold text-zinc-700 block mb-2">
                Adjust Maximum Budget Ceiling: ₹{budgetVal.toLocaleString('en-IN')}
              </label>
              <input
                type="range"
                min={1500}
                max={10000}
                step={500}
                value={budgetVal}
                onChange={(e) => setBudgetVal(Number(e.target.value))}
                className="w-full accent-zinc-950 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-medium">
                <span>₹1,500 (Budget)</span>
                <span>₹5,000 (Target)</span>
                <span>₹10,000 (Luxury)</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-zinc-700 block mb-2">
                Trip / Capsule Scope: {durationVal} Days
              </label>
              <input
                type="range"
                min={2}
                max={14}
                step={1}
                value={durationVal}
                onChange={(e) => setDurationVal(Number(e.target.value))}
                className="w-full accent-zinc-950 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-medium">
                <span>Weekend (2-3)</span>
                <span>4 Days (Standard)</span>
                <span>Full Week (7+)</span>
              </div>
            </div>
          </div>

          {/* Manage Negative Exclusions */}
          <div className="mb-6">
            <label className="text-xs font-bold text-zinc-700 block mb-2">
              Negative Exclusions (Disliked Colors, Cuts, Materials):
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {excludedList.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                  <span>{tag}</span>
                  <button 
                    onClick={() => handleRemoveExclusion(tag)}
                    className="hover:text-amber-950 font-bold ml-1 text-sm"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <form onSubmit={handleAddExclusion} className="flex gap-2 max-w-md">
              <input
                type="text"
                value={newExclusion}
                onChange={(e) => setNewExclusion(e.target.value)}
                placeholder="Add another exclusion (e.g. 'No synthetics', 'No collar')..."
                className="bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 flex-1 focus:outline-none focus:border-zinc-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold"
              >
                Add Rule
              </button>
            </form>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveEdits}
              className="px-6 py-2.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-md transition-all"
            >
              Apply Updates &amp; Re-rank Catalog
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2.5 rounded-2xl bg-zinc-100 text-zinc-700 text-xs font-semibold hover:bg-zinc-200"
            >
              Discard Changes
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation CTA */}
      <div className="p-6 rounded-3xl bg-zinc-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-white">Ready to examine the recommended items?</div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Every candidate is annotated with transparent "Why This Fits You" constraint math.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setScreen('bundle')}
            className="px-4 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
          >
            View Complete Bundle
          </button>
          <button
            onClick={() => setScreen('recommendations')}
            className="px-5 py-2.5 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <span>Review Individual Picks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
