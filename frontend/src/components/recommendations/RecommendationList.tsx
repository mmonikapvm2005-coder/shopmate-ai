import React, { useState } from 'react';
import { Product, Screen, ExtractedIntent } from '../../types';
import { ProductCard } from './ProductCard';
import { FeedbackModal } from './FeedbackModal';
import { 
  Sparkles, 
  SlidersHorizontal, 
  GitCompare, 
  EyeOff, 
  Layers, 
  X,
  CheckCircle2
} from 'lucide-react';

interface RecommendationListProps {
  products: Product[];
  intent: ExtractedIntent;
  comparedIds: string[];
  onToggleCompare: (productId: string) => void;
  onClearCompare: () => void;
  setScreen: (screen: Screen) => void;
  onRecordFeedback: (productId: string, reason: string, saveMemory: boolean) => void;
}

export const RecommendationList: React.FC<RecommendationListProps> = ({
  products,
  intent,
  comparedIds,
  onToggleCompare,
  onClearCompare,
  setScreen,
  onRecordFeedback
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'priceAsc' | 'rating'>('match');
  const [hideViolations, setHideViolations] = useState<boolean>(true);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [feedbackProduct, setFeedbackProduct] = useState<Product | null>(null);

  const handleLike = (id: string) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter(i => i !== id));
    } else {
      setLikedIds([...likedIds, id]);
    }
  };

  const handleDislike = (p: Product) => {
    setFeedbackProduct(p);
  };

  // Filter products
  const filteredProducts = products.filter(p => {
    if (hideViolations && p.matchScore < 50) return false;
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'match') return b.matchScore - a.matchScore;
    if (sortBy === 'priceAsc') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const categories = [
    { id: 'all', label: 'All Picks' },
    { id: 'gift', label: 'Watches & Keepsakes' },
    { id: 'grooming', label: 'Artisanal Perfumes' },
    { id: 'electronics', label: 'Tech & Audio' },
    { id: 'accessories', label: 'Leather Goods' },
    { id: 'lifestyle', label: 'Wellness & Candles' },
    { id: 'shirt', label: 'Resort Shirts' },
    { id: 'bottom', label: 'Trousers & Shorts' },
    { id: 'footwear', label: 'Footwear' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-32">
      
      {/* Top Banner / Goal Reminder */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-200 gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full bg-white text-zinc-800 border border-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Step 3 of 5 • Curated Recommendations</span>
            </span>
            <span className="text-xs text-zinc-500 hidden sm:inline">
              Multi-Constraint AI Scoring &amp; Hard Filter Verification
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-zinc-950">
            Picks Tailored to: {intent.destinationOccasion}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Enforcing budget ceiling ({intent.budgetCurrency}{intent.maxBudget.toLocaleString('en-IN')}) and {intent.excludedAttributes.length > 0 ? intent.excludedAttributes.join(', ') : 'quality & presentation'} filters.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('bundle')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs shadow-md transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>View Complete Bundle / Set</span>
          </button>
        </div>
      </div>

      {/* Filter and Sorting Controls Bar */}
      <div className="p-3.5 rounded-3xl bg-white border border-zinc-200/90 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-zinc-900 text-white shadow-xs font-bold'
                  : 'bg-zinc-100/80 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70 border border-zinc-200/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Secondary Toggles & Sort */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Negative Filter Toggle */}
          <button
            onClick={() => setHideViolations(!hideViolations)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold border transition-colors shadow-2xs ${
              hideViolations
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-zinc-600 border-zinc-200'
            }`}
          >
            <EyeOff className="w-3.5 h-3.5 text-amber-600" />
            <span>{hideViolations ? 'Negative Filter: Active (No Neons)' : 'Show Filter Violations'}</span>
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 bg-zinc-100/90 px-3.5 py-2 rounded-2xl border border-zinc-200 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-zinc-500 font-medium">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-zinc-800 font-semibold focus:outline-none cursor-pointer text-xs"
            >
              <option value="match">AI Match Score</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>

        </div>
      </div>

      {/* Active Rules Info Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between text-xs text-zinc-600 bg-white p-3.5 rounded-2xl border border-zinc-200/80 shadow-2xs gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Showing <strong>{sortedProducts.length}</strong> items meeting all constraints: Under ₹{intent.maxBudget.toLocaleString('en-IN')} • Curated Aesthetics</span>
        </div>
        {!hideViolations && (
          <span className="text-amber-700 font-semibold">
            (Filter Test: 1 high-saturation neon shirt shown to demonstrate negative filtering)
          </span>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isCompared={comparedIds.includes(product.id)}
            onToggleCompare={onToggleCompare}
            onLike={handleLike}
            onDislike={handleDislike}
            isLiked={likedIds.includes(product.id)}
          />
        ))}
      </div>

      {/* Floating Compare Tray Drawer */}
      {comparedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 animate-in slide-in-from-bottom duration-300">
          <div className="p-4 rounded-3xl bg-zinc-950/95 text-white border border-zinc-800 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-amber-500 text-zinc-950 font-bold flex items-center justify-center text-sm shadow-md">
                {comparedIds.length}
              </div>
              <div>
                <div className="text-xs font-bold text-white">Items in Comparison Tray</div>
                <div className="text-[11px] text-zinc-400">Side-by-side spec, fabric &amp; trade-off matrix</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClearCompare}
                className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 text-xs"
                title="Clear tray"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={() => setScreen('compare')}
                className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-zinc-950 font-bold text-xs shadow-md flex items-center gap-1.5 transition-all"
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>Compare Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {feedbackProduct && (
        <FeedbackModal
          product={feedbackProduct}
          isOpen={!!feedbackProduct}
          onClose={() => setFeedbackProduct(null)}
          onSubmitFeedback={onRecordFeedback}
        />
      )}

    </div>
  );
};
