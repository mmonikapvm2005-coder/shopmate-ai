import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sliders, 
  Zap, 
  Compass, 
  EyeOff, 
  PackageCheck,
  Tag,
  Gift,
  Heart,
  Smile,
  Flame
} from 'lucide-react';
import { MOOD_OPTIONS } from '../../data/sampleProducts';

interface LandingPageProps {
  onStartShopping: (prompt: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartShopping }) => {
  const [query, setQuery] = useState(
    "I want to give a gift to my friend."
  );

  const samplePrompts = [
    {
      label: "🎁 Gift for a Friend (Interactive Suggestions)",
      prompt: "I want to give a gift to my friend."
    },
    {
      label: "🌴 4 Days in Goa (Under ₹5,000)",
      prompt: "I am going to Goa for 4 days. I need casual outfits under ₹5,000 and I don't like bright colors."
    },
    {
      label: "✨ Luxury Birthday Gift for Girlfriend",
      prompt: "Looking for an elegant birthday gift for my girlfriend under ₹5,000, preferably perfume or watches."
    },
    {
      label: "💼 Smart Casual Bangalore Workwear",
      prompt: "Need comfortable linen shirts and trousers for Bangalore tech office, neutral colors under ₹6,000."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onStartShopping(query.trim());
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#F8F9FA]">
      
      {/* Background Soft Atmospheric Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-amber-200/30 via-indigo-100/40 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-20 text-center sm:px-6 lg:px-8">
        
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs font-semibold mb-6 shadow-xs animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>ShopMate AI 2.0 • Mood &amp; Intent Powered Shopping</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 max-w-4xl mx-auto leading-tight sm:leading-none">
          Turn your <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-indigo-600 bg-clip-text text-transparent">mood &amp; thoughts</span> into confident decisions.
        </h1>

        {/* Subhead */}
        <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
          No more endless scrolling or keyword guessing. Shop by how you feel—whether you're craving <span className="text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">cozy relaxation</span>, <span className="text-rose-800 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">date-night glam</span>, or <span className="text-indigo-800 font-semibold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">under ₹5,000</span> budget limits.
        </p>

        {/* Natural Language Search Box */}
        <div className="mt-10 max-w-3xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="p-3 sm:p-4 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50 flex flex-col sm:flex-row gap-3 transition-all focus-within:border-zinc-400 focus-within:ring-4 focus-within:ring-zinc-100"
          >
            <div className="relative flex-1 flex items-center pl-2">
              <Compass className="w-5 h-5 text-zinc-400 shrink-0 mr-3 hidden sm:block" />
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows={2}
                placeholder="How are you feeling, or what are you shopping for? (e.g. 'Feeling stressed and need cozy lounge items', 'romantic anniversary gift under ₹5k')..."
                className="w-full bg-transparent text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none resize-none pt-1.5 font-normal"
              />
            </div>
            
            <button
              type="submit"
              className="sm:self-stretch px-7 py-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] shrink-0"
            >
              <span>Ask ShopMate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Prompt Starter Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-zinc-500 flex items-center gap-1 font-medium">
              <Zap className="w-3 h-3 text-amber-500" /> Quick examples:
            </span>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(p.prompt);
                  onStartShopping(p.prompt);
                }}
                className="px-3.5 py-1.5 text-xs rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-colors shadow-2xs font-medium"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- MOOD SHOPPING SECTION (NEW) --- */}
        <div className="mt-14 max-w-4xl mx-auto text-left">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
                  New Feature
                </span>
                <h3 className="font-heading text-lg font-bold text-zinc-900">
                  Shop by Mood &amp; Emotional Vibe
                </h3>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">
                Pick how you feel today. ShopMate tailors sensory materials, color palettes, and aesthetics to match your state of mind.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
              <Smile className="w-3.5 h-3.5 text-amber-500" />
              <span>Real-time Emotional AI</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {MOOD_OPTIONS.map((mood) => (
              <button
                key={mood.id}
                onClick={() => {
                  setQuery(mood.query);
                  onStartShopping(mood.query);
                }}
                className="p-4 rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-400 hover:shadow-md transition-all text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl p-2 rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:scale-110 transition-transform">
                      {mood.emoji}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mood.badgeColor}`}>
                      Explore Vibe
                    </span>
                  </div>
                  <h4 className="font-heading text-sm font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                    {mood.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                    {mood.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-xs text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>Start with this mood</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulation Card Preview */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white border border-zinc-200/90 p-6 text-left shadow-lg shadow-zinc-200/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-semibold text-zinc-600">Emotional Vibe &amp; Constraint Reasoning Pipeline</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mood Alignment, Budget &amp; Style Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Deterministic Budget Cap</span>
              </div>
              <div className="text-xl font-bold text-zinc-900">₹4,996 <span className="text-xs font-normal text-zinc-500">/ ₹5,000 limit</span></div>
              <p className="text-[11px] text-zinc-500 mt-1">Mathematical verification ensures 0% price overrun.</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold mb-1">
                <Heart className="w-3.5 h-3.5" />
                <span>Mood Affinity Scoring</span>
              </div>
              <div className="text-sm font-bold text-zinc-800">Psychology &amp; Sensory Fit</div>
              <p className="text-[11px] text-zinc-500 mt-1">Scores fabrics, aromas, and silhouettes against emotional comfort.</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold mb-1">
                <Gift className="w-3.5 h-3.5" />
                <span>Curated Gifting &amp; Capsule Sets</span>
              </div>
              <div className="text-sm font-bold text-zinc-800">Presentation Ready</div>
              <p className="text-[11px] text-zinc-500 mt-1">Pre-packaged in luxury boxes with transparent suitability scores.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Feature Value Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-zinc-200">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-900">
            Why Conversational Shopping Needs Real AI
          </h2>
          <p className="text-zinc-600 text-sm mt-2 max-w-xl mx-auto">
            Traditional searches ignore emotional context. ShopMate detects whether you need calming stress-relief or date-night confidence, asks targeted questions, and explains every match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-zinc-900 text-base">Mood-Aware Curations</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Dynamically maps how you feel to tactile fabrics, soothing aromas, and silhouettes that uplift your vibe.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-zinc-900 text-base">Negative Filter Integrity</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              When you say "no bright colors" or "no synthetic fabrics", our attribute mask prunes violating items completely.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-zinc-900 text-base">Transparent Reasoning</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Every recommendation features a clear "Why this fits you" explanation connecting fabric, price math, and mood.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-zinc-900 text-base">Cohesive Bundles</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Builds complete relaxation hampers and holiday capsules with day-by-day mapping, packing checklists, and bundle savings.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
