import React from 'react';
import { Product, Screen } from '../../types';
import { 
  GitCompare, 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Trophy, 
  Wind, 
  Tag, 
  Layers,
  ShoppingBag
} from 'lucide-react';

interface ProductComparisonProps {
  comparedProducts: Product[];
  allProducts: Product[];
  onToggleCompare: (productId: string) => void;
  setScreen: (screen: Screen) => void;
}

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  comparedProducts,
  allProducts,
  onToggleCompare,
  setScreen
}) => {
  // If fewer than 2 items are selected, default to top 2 items
  const displayItems = comparedProducts.length >= 2 
    ? comparedProducts 
    : [allProducts[0], allProducts[1]];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-32">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4 mb-8">
        <div>
          <button
            onClick={() => setScreen('recommendations')}
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-900 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Recommendations</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white text-zinc-800 border border-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
              <GitCompare className="w-3.5 h-3.5 text-amber-500" />
              <span>Step 4 of 5 • Trade-Off Matrix</span>
            </span>
          </div>
          
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-zinc-950 mt-1.5">
            Side-by-Side Product Comparison
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            AI-generated trade-off analysis comparing suitability, presentation value, and trade-offs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('bundle')}
            className="px-5 py-2.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs shadow-md flex items-center gap-1.5 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>View Full Bundle</span>
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[650px] grid grid-cols-3 gap-5">
          
          {/* Feature Labels Column */}
          <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-64 flex flex-col justify-end pb-4 border-b border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Evaluation Dimension</span>
                <span className="text-lg font-black text-zinc-900 mt-1">Deep Spec &amp; Value Analysis</span>
              </div>

              <div className="space-y-6 pt-6 text-xs font-bold text-zinc-700">
                <div className="py-2.5 border-b border-zinc-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>AI Match Score</span>
                </div>

                <div className="py-2.5 border-b border-zinc-100 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-emerald-600" />
                  <span>Price &amp; Savings</span>
                </div>

                <div className="py-2.5 border-b border-zinc-100 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-indigo-600" />
                  <span>Material &amp; Build Quality</span>
                </div>

                <div className="py-2.5 border-b border-zinc-100 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-zinc-200 flex items-center justify-center text-[10px]">🎨</span>
                  <span>Color &amp; Negative Filter Audit</span>
                </div>

                <div className="py-2.5 border-b border-zinc-100 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>Best Scenario / Verdict</span>
                </div>

                <div className="py-2.5 border-b border-zinc-100">
                  <span>Pros &amp; Strengths</span>
                </div>

                <div className="py-2.5">
                  <span>Trade-offs &amp; Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compared Products Columns */}
          {displayItems.map((prod, index) => {
            const isWinner = index === 0;
            return (
              <div 
                key={prod.id}
                className={`p-6 rounded-3xl flex flex-col justify-between transition-all ${
                  isWinner 
                    ? 'bg-white border-2 border-indigo-500 shadow-xl relative' 
                    : 'bg-white border border-zinc-200/90 shadow-sm'
                }`}
              >
                {/* Winner Pill */}
                {isWinner && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-zinc-950 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>AI Recommended Pick</span>
                  </div>
                )}

                {/* Top Image & Info */}
                <div>
                  <div className="h-64 flex flex-col justify-between pb-4 border-b border-zinc-100">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3 bg-zinc-100">
                      <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-sm text-[10px] font-bold text-white">
                        {prod.brand}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-sm font-bold text-zinc-900 line-clamp-1">{prod.title}</h3>
                      <div className="text-xs text-zinc-500 mt-0.5">{prod.fit}</div>
                    </div>
                  </div>

                  {/* Spec Rows */}
                  <div className="space-y-6 pt-6 text-xs">
                    
                    {/* Match Score */}
                    <div className="py-2.5 border-b border-zinc-100">
                      <div className="flex items-center gap-2">
                        <span className={`text-base font-black ${isWinner ? 'text-indigo-600' : 'text-zinc-800'}`}>
                          {prod.matchScore}%
                        </span>
                        <div className="flex-1 bg-zinc-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isWinner ? 'bg-indigo-600' : 'bg-zinc-400'}`} 
                            style={{ width: `${prod.matchScore}%` }} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Price & Savings */}
                    <div className="py-2.5 border-b border-zinc-100">
                      <div className="text-lg font-black text-zinc-950">
                        {prod.currency}{prod.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Original: {prod.currency}{prod.originalPrice.toLocaleString('en-IN')}
                      </div>
                    </div>

                    {/* Fabric / Material */}
                    <div className="py-2.5 border-b border-zinc-100">
                      <div className="font-bold text-zinc-900">{prod.material}</div>
                      <div className="text-[11px] text-zinc-500 mt-1">{prod.aiReasoning.occasionFit}</div>
                    </div>

                    {/* Color Profile */}
                    <div className="py-2.5 border-b border-zinc-100">
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: prod.colorHex }} />
                        <span className="font-semibold text-zinc-800">{prod.primaryColor}</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Passes zero-neon check</span>
                      </div>
                    </div>

                    {/* Scenario Verdict */}
                    <div className="py-2.5 border-b border-zinc-100 bg-amber-50/60 p-3 rounded-2xl border border-amber-200/80">
                      <span className="text-[11px] font-bold text-amber-900 block mb-1">Optimal Setting:</span>
                      <p className="text-amber-950/80 text-xs leading-relaxed font-normal">{prod.aiReasoning.styleFit}</p>
                    </div>

                    {/* Pros */}
                    <div className="py-2.5 border-b border-zinc-100">
                      <ul className="space-y-1">
                        {prod.pros.map((p, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-zinc-700 text-[11px]">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="py-2.5">
                      <ul className="space-y-1">
                        {prod.cons.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-zinc-500 text-[11px]">
                            <span className="text-amber-500 text-xs">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 border-t border-zinc-100 mt-4">
                  <button
                    onClick={() => alert(`Added ${prod.title} to your bag!`)}
                    className={`w-full py-3 rounded-2xl font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 ${
                      isWinner
                        ? 'bg-zinc-950 hover:bg-zinc-800 text-white shadow-md'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Select Item</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Comparison Insights Card */}
      <div className="mt-8 p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm">
        <h2 className="text-base font-bold text-zinc-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>AI Synthesis &amp; Trade-off Verdict</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-4xl">
          Both candidates represent top-tier satisfaction within your budget. Choose the anchor timepiece for an emotional milestone keepsake with an heirloom presentation box, or the everyday lifestyle piece for daily practical comfort.
        </p>
      </div>

    </div>
  );
};
