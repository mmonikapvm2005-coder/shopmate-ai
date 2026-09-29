import React, { useState } from 'react';
import { OutfitBundle, Screen, ExtractedIntent, Product } from '../../types';
import { SAMPLE_GOA_BUNDLE, PACKING_CHECKLIST } from '../../data/sampleBundle';
import { buildDynamicBundle } from '../../services/agentEngine';
import { 
  Package, 
  Sparkles, 
  CheckCircle2, 
  ShoppingBag, 
  Calendar, 
  Sun, 
  Check, 
  Luggage,
  Gift
} from 'lucide-react';

interface BundleRecommendationProps {
  intent: ExtractedIntent;
  products: Product[];
  setScreen: (screen: Screen) => void;
}

export const BundleRecommendation: React.FC<BundleRecommendationProps> = ({ 
  intent, 
  products, 
  setScreen 
}) => {
  const bundle = buildDynamicBundle(intent, products);
  const initialList = intent.scenarioType === 'gift' 
    ? [
        { item: 'Luxury Presentation Box with Magnetic Closure', packed: true, category: 'Packaging' },
        { item: 'Satin Ribbon & Botanical Wax Seal', packed: true, category: 'Gift Wrap' },
        { item: 'Personalized Handwritten Greeting Card', packed: false, category: 'Stationery' },
        { item: 'Velvet Protective Dust Pouch for Keepsakes', packed: true, category: 'Care' },
        { item: 'Gift Receipt Sealed (Price Concealed)', packed: true, category: 'Documentation' }
      ]
    : PACKING_CHECKLIST;

  const [checklist, setChecklist] = useState(initialList);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const togglePacked = (index: number) => {
    setChecklist(prev => prev.map((item, idx) => idx === index ? { ...item, packed: !item.packed } : item));
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      alert("All bundle items added to your shopping bag with promotional bundle discount applied!");
    }, 400);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-32">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-200 gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-white text-zinc-800 border border-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
              <Package className="w-3.5 h-3.5 text-amber-500" />
              <span>Step 5 of 5 • Cohesive Set Solver</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              ₹{bundle.totalPrice.toLocaleString('en-IN')} / ₹{bundle.budgetCap.toLocaleString('en-IN')} Budget Met
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-zinc-950 mt-1">
            {bundle.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Harmonious multi-item set engineered for style coherence, verified presentation, and exact budget adherence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            disabled={isAddedToCart}
            className={`px-6 py-3 rounded-2xl font-bold text-xs shadow-md flex items-center gap-2 transition-all ${
              isAddedToCart
                ? 'bg-emerald-600 text-white'
                : 'bg-zinc-950 hover:bg-zinc-800 text-white shadow-zinc-950/20 hover:scale-[1.01]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{isAddedToCart ? 'Bundle Added to Bag ✓' : `Buy Complete Set (₹${bundle.totalPrice.toLocaleString('en-IN')})`}</span>
          </button>
        </div>
      </div>

      {/* Financial Math Summary Banner */}
      <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">Set Total ({bundle.items.length} Items):</span>
            <div className="text-3xl font-black text-emerald-600">₹{bundle.totalPrice.toLocaleString('en-IN')}</div>
            <p className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Under ₹{bundle.budgetCap.toLocaleString('en-IN')} cap</span>
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">Original Retail Value:</span>
            <div className="text-2xl font-bold text-zinc-400 line-through">₹{(bundle.totalPrice + bundle.savings).toLocaleString('en-IN')}</div>
            <p className="text-[11px] text-amber-600 font-semibold mt-1">
              Bundle Savings: ₹{bundle.savings.toLocaleString('en-IN')} OFF
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">Negative Constraint Audit:</span>
            <div className="text-sm font-bold text-zinc-900 mt-1">Zero-Neon Integrity</div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Earthy Olive • Sand Beige • Charcoal
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">Quality &amp; Presentation:</span>
            <div className="text-sm font-bold text-zinc-900 mt-1">100% Curated Quality</div>
            <p className="text-[11px] text-zinc-500 mt-1">
              {bundle.weatherFitNotes}
            </p>
          </div>

        </div>
      </div>

      {/* Item-by-Item Breakdown */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-lg font-bold text-zinc-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span>Curated Set Composition</span>
          </h2>
          <span className="text-xs text-zinc-500">Every piece coordinates with the rest of the set</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundle.items.map((item) => (
            <div 
              key={item.product.id}
              className="p-5 rounded-3xl bg-white border border-zinc-200/90 hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 shadow-xs"
            >
              <div className="w-full sm:w-36 aspect-square sm:aspect-auto rounded-2xl overflow-hidden bg-zinc-100 shrink-0">
                <img 
                  src={item.product.imageUrl} 
                  alt={item.product.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-bold text-[10px]">
                      {item.dayAssignment}
                    </span>
                    <span className="font-black text-zinc-950 text-xs">
                      {item.product.currency}{item.product.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm font-bold text-zinc-900 mb-1">
                    {item.product.title}
                  </h3>
                  
                  <div className="text-xs text-zinc-500 mb-2">
                    {item.product.material} • {item.product.primaryColor}
                  </div>

                  <div className="p-3 rounded-2xl bg-amber-50/70 text-xs text-amber-950 border border-amber-200/80 leading-relaxed">
                    <strong className="text-amber-900 font-bold">Styling / Unboxing Tip:</strong> {item.stylingTip}
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="font-semibold text-emerald-700">Match: {item.product.matchScore}%</span>
                  <span className="text-zinc-700 font-medium">Included in Set</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packing / Presentation Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Interactive Checklist */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-base font-bold text-zinc-900 flex items-center gap-2">
              <Luggage className="w-4 h-4 text-indigo-600" />
              <span>Interactive Checklist &amp; Essentials</span>
            </h3>
            <span className="text-xs text-zinc-500 font-medium">
              {checklist.filter(c => c.packed).length} of {checklist.length} completed
            </span>
          </div>

          <div className="space-y-2">
            {checklist.map((c, idx) => (
              <div 
                key={idx}
                onClick={() => togglePacked(idx)}
                className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between text-xs transition-colors ${
                  c.packed 
                    ? 'bg-zinc-50 border-emerald-300 text-zinc-600' 
                    : 'bg-white border-zinc-200 text-zinc-800 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                    c.packed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-zinc-300'
                  }`}>
                    {c.packed && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className={c.packed ? 'line-through text-zinc-400 font-normal' : 'font-medium'}>{c.item}</span>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                  {c.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory / Presentation Box */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Curation &amp; Quality Guarantee</span>
            </div>
            <h4 className="text-sm font-bold text-zinc-900 mb-2">Verified Suitability</h4>
            <p className="text-xs text-zinc-600 leading-relaxed space-y-2 font-normal">
              Every item in this bundle has been cross-checked for customer ratings (4.7★+), verified fabric breathability, and zero negative constraint violations.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-500 space-y-1 font-medium">
            <p>✓ All items returnable within 30 days</p>
            <p>✓ Complimentary gift wrapping available</p>
            <p>✓ Free carbon-neutral shipping</p>
          </div>
        </div>

      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="p-6 rounded-3xl bg-zinc-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs text-zinc-400 font-medium">Total Set Price:</span>
          <div className="text-2xl font-black text-white">
            ₹{bundle.totalPrice.toLocaleString('en-IN')} <span className="text-xs font-normal text-zinc-400">for {bundle.items.length} coordinated pieces</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setScreen('profile')}
            className="px-4 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
          >
            Review Style Memory
          </button>
          <button
            onClick={handleAddToCart}
            className="px-6 py-2.5 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-100 font-bold text-xs shadow-md flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Proceed with Bundle</span>
          </button>
        </div>
      </div>

    </div>
  );
};
