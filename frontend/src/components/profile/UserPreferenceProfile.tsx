import React, { useState } from 'react';
import { UserPreferences, Screen } from '../../types';
import { INITIAL_PREFERENCES } from '../../data/sampleProducts';
import { 
  BrainCircuit, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  Plus, 
  RotateCcw, 
  Save, 
  History,
  Scissors,
  Tag
} from 'lucide-react';

interface UserPreferenceProfileProps {
  preferences: UserPreferences;
  onUpdatePreferences: (updated: Partial<UserPreferences>) => void;
  setScreen: (screen: Screen) => void;
}

export const UserPreferenceProfile: React.FC<UserPreferenceProfileProps> = ({
  preferences,
  onUpdatePreferences,
  setScreen
}) => {
  const [avoidedColors, setAvoidedColors] = useState<string[]>(preferences.avoidedColors);
  const [newColor, setNewColor] = useState('');
  const [preferredFabrics, setPreferredFabrics] = useState<string[]>(preferences.preferredFabrics);
  const [newFabric, setNewFabric] = useState('');
  const [autoApply, setAutoApply] = useState(preferences.autoApplyNegativeFilters);
  const [budgetCap, setBudgetCap] = useState(preferences.typicalBudgetCap);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [sizes, setSizes] = useState(preferences.sizes);

  const handleAddColor = (e: React.FormEvent) => {
    e.preventDefault();
    if (newColor.trim() && !avoidedColors.includes(newColor.trim())) {
      setAvoidedColors([...avoidedColors, newColor.trim()]);
      setNewColor('');
    }
  };

  const handleRemoveColor = (col: string) => {
    setAvoidedColors(avoidedColors.filter(c => c !== col));
  };

  const handleAddFabric = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFabric.trim() && !preferredFabrics.includes(newFabric.trim())) {
      setPreferredFabrics([...preferredFabrics, newFabric.trim()]);
      setNewFabric('');
    }
  };

  const handleRemoveFabric = (fab: string) => {
    setPreferredFabrics(preferredFabrics.filter(f => f !== fab));
  };

  const handleSave = () => {
    onUpdatePreferences({
      avoidedColors,
      preferredFabrics,
      autoApplyNegativeFilters: autoApply,
      typicalBudgetCap: budgetCap,
      sizes
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleReset = () => {
    if (confirm("Reset learned preferences back to default profile?")) {
      setAvoidedColors(INITIAL_PREFERENCES.avoidedColors);
      setPreferredFabrics(INITIAL_PREFERENCES.preferredFabrics);
      setAutoApply(true);
      setBudgetCap(INITIAL_PREFERENCES.typicalBudgetCap);
      setSizes(INITIAL_PREFERENCES.sizes);
      onUpdatePreferences(INITIAL_PREFERENCES);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 pb-32">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-white text-zinc-800 border border-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
              <BrainCircuit className="w-3.5 h-3.5 text-amber-500" />
              <span>Episodic &amp; Long-Term Memory</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              {preferences.learnedPreferencesCount} Learned Rules Active
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-zinc-950 mt-1">
            Style Memory &amp; Preference Profile
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            ShopMate AI continuously remembers rules across sessions so you never have to repeat your dislikes or sizes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 text-xs font-semibold transition-colors shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Memory</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-5 py-2 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs shadow-md transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{savedSuccess ? 'Changes Saved ✓' : 'Save Profile'}</span>
          </button>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-white font-heading font-black text-xl shadow-md">
            RM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-zinc-900">{preferences.userName}</h2>
              <span className="text-xs text-zinc-400 font-mono">({preferences.email})</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Active Profile: Personalized Shopping Assistant Online
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 mt-2 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Negative Color Filters automatically enforced on all vector lookups</span>
            </div>
          </div>
        </div>

        {/* Global Auto-apply Toggle */}
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
          <input
            type="checkbox"
            id="autoApplyToggle"
            checked={autoApply}
            onChange={(e) => setAutoApply(e.target.checked)}
            className="w-4 h-4 accent-zinc-950 cursor-pointer rounded"
          />
          <label htmlFor="autoApplyToggle" className="text-xs text-zinc-800 cursor-pointer font-medium">
            <span className="font-bold text-zinc-900 block">Auto-Enforce Dislikes</span>
            <span className="text-[11px] text-zinc-500">Block bright colors across future conversations</span>
          </label>
        </div>
      </div>

      {/* Main Preference Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Module 1: Disliked / Avoided Colors */}
        <div className="p-6 rounded-3xl bg-white border border-amber-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading text-sm font-bold text-zinc-900 flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-amber-600" />
                <span>Avoided Colors (Negative Filter Mask)</span>
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-bold border border-amber-200">
                Strict Exclusion
              </span>
            </div>
            <p className="text-xs text-zinc-500 mb-4">
              Learned from: <em className="text-zinc-700">"I don't like bright colors"</em>. The AI automatically blocks any items tagged with these pigments.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {avoidedColors.map((color) => (
                <span 
                  key={color}
                  className="px-3 py-1.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 font-semibold flex items-center gap-2 group shadow-2xs"
                >
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>{color}</span>
                  <button 
                    onClick={() => handleRemoveColor(color)}
                    className="text-amber-800 hover:text-rose-600 text-sm font-bold ml-1"
                    title="Remove from exclusion"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleAddColor} className="flex gap-2 pt-2 border-t border-zinc-100">
            <input
              type="text"
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              placeholder="Add color to avoid (e.g. Neon Lime)..."
              className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </form>
        </div>

        {/* Module 2: Preferred Natural Fabrics */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading text-sm font-bold text-zinc-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Preferred Fabrics &amp; Materials</span>
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                Positive Bias
              </span>
            </div>
            <p className="text-xs text-zinc-500 mb-4">
              Favored textiles for hot/humid destinations and high-end gifts.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {preferredFabrics.map((fabric) => (
                <span 
                  key={fabric}
                  className="px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 font-semibold flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{fabric}</span>
                  <button 
                    onClick={() => handleRemoveFabric(fabric)}
                    className="text-zinc-400 hover:text-rose-600 text-sm font-bold ml-1"
                    title="Remove fabric"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleAddFabric} className="flex gap-2 pt-2 border-t border-zinc-100">
            <input
              type="text"
              value={newFabric}
              onChange={(e) => setNewFabric(e.target.value)}
              placeholder="Add fabric (e.g. Mulberry Silk, Chambray)..."
              className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </form>
        </div>

      </div>

      {/* Module 3: Sizing Profile & Budget Tier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Sizing Profile */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
          <h3 className="font-heading text-sm font-bold text-zinc-900 flex items-center gap-2 mb-3">
            <Scissors className="w-4 h-4 text-zinc-600" />
            <span>Saved Sizing Specs</span>
          </h3>
          <p className="text-xs text-zinc-500 mb-4">
            AI automatically pre-filters catalog inventory to only items in stock in these sizes.
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-bold text-zinc-500 block mb-1">Shirts &amp; Tops</span>
              <input
                type="text"
                value={sizes.tops}
                onChange={(e) => setSizes({ ...sizes, tops: e.target.value })}
                className="w-full bg-transparent text-xs font-bold text-zinc-900 focus:outline-none border-b border-zinc-300 pb-1"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-bold text-zinc-500 block mb-1">Bottoms</span>
              <input
                type="text"
                value={sizes.bottoms}
                onChange={(e) => setSizes({ ...sizes, bottoms: e.target.value })}
                className="w-full bg-transparent text-xs font-bold text-zinc-900 focus:outline-none border-b border-zinc-300 pb-1"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-[11px] font-bold text-zinc-500 block mb-1">Shoes</span>
              <input
                type="text"
                value={sizes.shoes}
                onChange={(e) => setSizes({ ...sizes, shoes: e.target.value })}
                className="w-full bg-transparent text-xs font-bold text-zinc-900 focus:outline-none border-b border-zinc-300 pb-1"
              />
            </div>
          </div>
        </div>

        {/* Budget Ceiling Defaults */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-sm font-bold text-zinc-900 flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-emerald-600" />
              <span>Default Shopping Budget Baseline</span>
            </h3>
            <p className="text-xs text-zinc-500 mb-4">
              Baseline budget cap if unspecified in natural-language prompt.
            </p>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-black text-zinc-950">₹{budgetCap.toLocaleString('en-IN')}</span>
              <span className="text-xs text-zinc-400">per holiday / gift shopping session</span>
            </div>

            <input
              type="range"
              min={2500}
              max={15000}
              step={500}
              value={budgetCap}
              onChange={(e) => setBudgetCap(Number(e.target.value))}
              className="w-full accent-zinc-950 cursor-pointer"
            />
          </div>

          <div className="pt-3 border-t border-zinc-100 text-[11px] text-zinc-500 flex items-center justify-between font-medium">
            <span>Minimum: ₹2,500</span>
            <span>Maximum: ₹15,000</span>
          </div>
        </div>

      </div>

      {/* Memory Audit Log */}
      <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xs">
        <h3 className="font-heading text-sm font-bold text-zinc-900 flex items-center gap-2 mb-3.5">
          <History className="w-4 h-4 text-indigo-600" />
          <span>Recent Memory Trace &amp; Learned Signals</span>
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between">
            <div>
              <span className="font-bold text-zinc-900 block">Learned Negative Rule: Dislikes Bright Colors</span>
              <span className="text-[11px] text-zinc-500">Extracted from Goa vacation prompt • Confidence: 99%</span>
            </div>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[11px] border border-emerald-200">Enforced</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between">
            <div>
              <span className="font-bold text-zinc-900 block">Learned Fabric Rule: Favors French Linen for Coastal Trips</span>
              <span className="text-[11px] text-zinc-500">Inferred from high interaction on Olive Camp Shirt</span>
            </div>
            <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-bold text-[11px] border border-indigo-200">Weighted +15%</span>
          </div>
        </div>
      </div>

    </div>
  );
};
