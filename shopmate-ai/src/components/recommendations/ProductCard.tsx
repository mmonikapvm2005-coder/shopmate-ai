import React, { useState } from 'react';
import { Product } from '../../types';
import { 
  Star, 
  Sparkles, 
  ThumbsUp, 
  ThumbsDown, 
  GitCompare, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  Tag,
  Smile
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isCompared: boolean;
  onToggleCompare: (productId: string) => void;
  onLike: (productId: string) => void;
  onDislike: (product: Product) => void;
  isLiked?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isCompared,
  onToggleCompare,
  onLike,
  onDislike,
  isLiked
}) => {
  const [showFullReasoning, setShowFullReasoning] = useState(false);
  const isViolation = product.matchScore < 50;

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className={`group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
      isViolation 
        ? 'bg-rose-50/50 border-2 border-rose-300 opacity-80' 
        : 'bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-zinc-300'
    }`}>
      
      {/* Top Media & Badges */}
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top Left Overlays */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 max-w-[70%]">
            {/* Match Score Badge */}
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1 shadow-sm w-fit ${
              isViolation
                ? 'bg-rose-600 text-white'
                : product.matchScore >= 95
                  ? 'bg-emerald-600 text-white'
                  : 'bg-zinc-900 text-white'
            }`}>
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{product.matchScore}% Match</span>
            </span>

            {/* Mood Affinity Badge */}
            {product.moodBadge && !isViolation && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-zinc-900 border border-zinc-200/90 backdrop-blur-md shadow-xs flex items-center gap-1 truncate w-fit">
                <span>{product.moodBadge}</span>
              </span>
            )}

            {/* Negative Filter Alert if violation */}
            {isViolation && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>Negative Constraint Violation</span>
              </span>
            )}
          </div>

          {/* Quick Compare Checkbox */}
          <button
            onClick={() => onToggleCompare(product.id)}
            className={`absolute top-3 right-3 px-2.5 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all flex items-center gap-1.5 z-10 shadow-xs ${
              isCompared
                ? 'bg-amber-500 text-white border-amber-500 font-bold shadow-md shadow-amber-500/20'
                : 'bg-white/90 text-zinc-700 border-zinc-200 hover:bg-white hover:text-zinc-900'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>{isCompared ? 'Compared' : 'Compare'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5">
          
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
            <span className="font-bold text-zinc-500 tracking-wider uppercase text-[11px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-zinc-800">{product.rating}</span>
              <span className="text-zinc-400 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading text-base font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-2">
            {product.title}
          </h3>

          {/* Price Row */}
          <div className="flex items-baseline gap-2 mb-3.5">
            <span className="text-2xl font-black text-zinc-950">
              {product.currency}{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-zinc-400 line-through">
              {product.currency}{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {discountPercent}% OFF
            </span>
          </div>

          {/* Key Attributes Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-[11px] font-medium border border-zinc-200/60">
              🧵 {product.material}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-[11px] font-medium border border-zinc-200/60 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block shrink-0" style={{ backgroundColor: product.colorHex }} />
              <span>{product.primaryColor}</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 text-[11px] font-medium border border-zinc-200/60">
              📏 {product.fit}
            </span>
          </div>

          {/* AI Recommendation Reasoning Box */}
          <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-3.5 mb-3">
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Why This Fits You:</span>
              </span>
              <button 
                onClick={() => setShowFullReasoning(!showFullReasoning)}
                className="text-[10px] text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-0.5"
              >
                <span>{showFullReasoning ? 'Less' : 'Details'}</span>
                {showFullReasoning ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>

            <p className="text-xs text-amber-950/80 leading-relaxed font-normal">
              {product.aiReasoning.occasionFit}
            </p>

            {/* Expanded Detailed Constraint Auditing */}
            {showFullReasoning && (
              <div className="mt-3 pt-2.5 border-t border-amber-200/60 space-y-2 text-[11px] animate-in fade-in duration-200">
                <div className="text-amber-900">
                  <strong className="font-semibold text-zinc-900">Mood / Aesthetic:</strong> {product.aiReasoning.styleFit}
                </div>
                <div className="text-amber-900">
                  <strong className="font-semibold text-zinc-900">Budget Math:</strong> {product.aiReasoning.budgetFit}
                </div>
                <div className="text-amber-900">
                  <strong className="font-semibold text-zinc-900">Negative Filter Audit:</strong> {product.aiReasoning.constraintCheck}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 pt-0 border-t border-zinc-100 mt-2 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onLike(product.id)}
            className={`p-2.5 rounded-xl border text-xs transition-colors flex items-center gap-1 ${
              isLiked 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                : 'bg-zinc-100 text-zinc-600 border-zinc-200 hover:text-zinc-900 hover:bg-zinc-200'
            }`}
            title="Like this recommendation"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => onDislike(product)}
            className="p-2.5 rounded-xl bg-zinc-100 text-zinc-600 border border-zinc-200 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 text-xs transition-colors"
            title="Not for me (Tell AI why)"
          >
            <ThumbsDown className="w-3.5 h-3.5" />
          </button>
        </div>

        <button 
          onClick={() => alert(`Added "${product.title}" to bag!`)}
          className="flex-1 py-2.5 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5"
        >
          <Tag className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>

    </div>
  );
};
