import React, { useState } from 'react';
import { Product } from '../../types';
import { X, ThumbsDown, BrainCircuit } from 'lucide-react';

interface FeedbackModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSubmitFeedback: (productId: string, reason: string, updateMemory: boolean) => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  product,
  isOpen,
  onClose,
  onSubmitFeedback
}) => {
  if (!isOpen) return null;

  const [selectedReason, setSelectedReason] = useState<string>('Not my preferred style');
  const [customComment, setCustomComment] = useState<string>('');
  const [saveToMemory, setSaveToMemory] = useState<boolean>(true);

  const reasons = [
    'Not my preferred style',
    'Too expensive for this category',
    'Color is still too bright/saturated',
    'Dislike the collar or cut',
    'Already own a similar item',
    'Looking for a different brand'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalReason = customComment ? `${selectedReason}: ${customComment}` : selectedReason;
    onSubmitFeedback(product.id, finalReason, saveToMemory);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white border border-zinc-200 rounded-3xl p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-800 rounded-xl hover:bg-zinc-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center">
            <ThumbsDown className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-900">Help ShopMate Learn Your Style</h2>
            <p className="text-xs text-zinc-500">Why doesn't {product.title} fit your vision?</p>
          </div>
        </div>

        {/* Product mini-preview */}
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3 mb-5">
          <img src={product.imageUrl} alt={product.title} className="w-12 h-12 rounded-xl object-cover" />
          <div className="flex-1 truncate">
            <div className="text-xs font-bold text-zinc-900 truncate">{product.title}</div>
            <div className="text-[11px] text-zinc-500">{product.brand} • {product.currency}{product.price.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-zinc-700 block mb-2">Select Primary Reason:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {reasons.map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setSelectedReason(r)}
                  className={`p-3 rounded-2xl text-xs text-left border transition-all ${
                    selectedReason === r
                      ? 'bg-zinc-950 text-white font-bold border-zinc-950 shadow-sm'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-700 block mb-1">Additional details (optional):</label>
            <textarea
              rows={2}
              value={customComment}
              onChange={(e) => setCustomComment(e.target.value)}
              placeholder="e.g. Prefer relaxed boxy cut, avoid polo collars..."
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:bg-white"
            />
          </div>

          {/* Preference Memory Sync Checkbox */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-start gap-2.5">
            <input
              type="checkbox"
              id="saveMemory"
              checked={saveToMemory}
              onChange={(e) => setSaveToMemory(e.target.checked)}
              className="mt-0.5 accent-zinc-950 cursor-pointer rounded"
            />
            <label htmlFor="saveMemory" className="text-xs text-indigo-950 cursor-pointer">
              <span className="font-bold text-indigo-950 block flex items-center gap-1">
                <BrainCircuit className="w-3.5 h-3.5 text-indigo-600 inline" />
                <span>Save to Style Memory Profile</span>
              </span>
              <span className="text-[11px] text-indigo-900/80">Automatically enforce this rule in all future conversational shopping sessions.</span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-2xl text-xs font-semibold text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-2xl text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 shadow-md transition-all"
            >
              Submit &amp; Refresh
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
