import React, { useState } from 'react';
import { Screen, ExtractedIntent, Product, UserPreferences } from './types';
import { SAMPLE_PRODUCTS, INITIAL_INTENT, INITIAL_PREFERENCES } from './data/sampleProducts';
import { parseUserQuery, filterAndRankProducts } from './services/agentEngine';
import { Header } from './components/navbar/Header';
import { LandingPage } from './components/landing/LandingPage';
import { ChatInterface } from './components/chat/ChatInterface';
import { IntentSummary } from './components/intent/IntentSummary';
import { RecommendationList } from './components/recommendations/RecommendationList';
import { ProductComparison } from './components/comparison/ProductComparison';
import { BundleRecommendation } from './components/bundle/BundleRecommendation';
import { UserPreferenceProfile } from './components/profile/UserPreferenceProfile';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [intent, setIntent] = useState<ExtractedIntent>(INITIAL_INTENT);
  const [preferences, setPreferences] = useState<UserPreferences>(INITIAL_PREFERENCES);
  const [comparedIds, setComparedIds] = useState<string[]>(['prod-gift-1', 'prod-gift-2']); 
  const [products, setProducts] = useState<Product[]>(() => {
    return filterAndRankProducts(SAMPLE_PRODUCTS, INITIAL_INTENT);
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleStartShopping = (queryText: string) => {
    const parsed = parseUserQuery(queryText);
    setIntent(parsed);
    const ranked = filterAndRankProducts(SAMPLE_PRODUCTS, parsed);
    setProducts(ranked);
    
    // Auto-populate compared IDs with top 2 ranked products for quick comparison
    if (ranked.length >= 2) {
      setComparedIds([ranked[0].id, ranked[1].id]);
    }
    
    showToast(`Parsed: "${parsed.destinationOccasion}" (${parsed.confidenceScore}% confidence)`);
    setCurrentScreen('chat');
  };

  const handleUpdateIntent = (updated: Partial<ExtractedIntent>) => {
    setIntent(prev => {
      const merged = { ...prev, ...updated };
      const reRanked = filterAndRankProducts(SAMPLE_PRODUCTS, merged);
      setProducts(reRanked);
      return merged;
    });
    showToast("Updated constraints & re-scored catalog candidates!");
  };

  const handleToggleCompare = (productId: string) => {
    if (comparedIds.includes(productId)) {
      setComparedIds(comparedIds.filter(id => id !== productId));
      showToast("Removed from comparison tray");
    } else {
      if (comparedIds.length >= 4) {
        showToast("Maximum 4 products can be compared at once");
        return;
      }
      setComparedIds([...comparedIds, productId]);
      showToast("Added to comparison tray! Click 'Compare' to inspect");
    }
  };

  const handleClearCompare = () => {
    setComparedIds([]);
    showToast("Cleared comparison tray");
  };

  const handleRecordFeedback = (productId: string, reason: string, saveMemory: boolean) => {
    const prod = products.find(p => p.id === productId);
    const prodTitle = prod ? prod.title : "Product";
    
    if (saveMemory) {
      setPreferences(prev => ({
        ...prev,
        learnedPreferencesCount: prev.learnedPreferencesCount + 1,
        lastUpdated: "Just now"
      }));
      showToast(`Saved preference rule: "${reason}" applied to Style Memory!`);
    } else {
      showToast(`Feedback noted: "${reason}"`);
    }
  };

  const handleUpdatePreferences = (updated: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...updated }));
    showToast("Style memory profile updated!");
  };

  const comparedProducts = products.filter(p => comparedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Universal Header */}
      <Header
        currentScreen={currentScreen}
        setScreen={setCurrentScreen}
        comparedCount={comparedIds.length}
        hasIntent={!!intent.rawQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentScreen === 'landing' && (
          <LandingPage onStartShopping={handleStartShopping} />
        )}

        {currentScreen === 'chat' && (
          <ChatInterface
            intent={intent}
            setScreen={setCurrentScreen}
            onUpdateIntent={handleUpdateIntent}
            onProductsRanked={setProducts}
          />
        )}

        {currentScreen === 'intent' && (
          <IntentSummary
            intent={intent}
            setScreen={setCurrentScreen}
            onUpdateIntent={handleUpdateIntent}
          />
        )}

        {currentScreen === 'recommendations' && (
          <RecommendationList
            products={products}
            intent={intent}
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            onClearCompare={handleClearCompare}
            setScreen={setCurrentScreen}
            onRecordFeedback={handleRecordFeedback}
          />
        )}

        {currentScreen === 'compare' && (
          <ProductComparison
            comparedProducts={comparedProducts}
            allProducts={products}
            onToggleCompare={handleToggleCompare}
            setScreen={setCurrentScreen}
          />
        )}

        {currentScreen === 'bundle' && (
          <BundleRecommendation 
            intent={intent}
            products={products}
            setScreen={setCurrentScreen} 
          />
        )}

        {currentScreen === 'profile' && (
          <UserPreferenceProfile
            preferences={preferences}
            onUpdatePreferences={handleUpdatePreferences}
            setScreen={setCurrentScreen}
          />
        )}
      </main>

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 duration-200">
          <div className="px-4 py-3 rounded-2xl bg-zinc-950 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5 border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-zinc-900">ShopMate AI</span>
            <span>•</span>
            <span>Personal Conversational Shopping Assistant</span>
          </div>
          <div className="text-zinc-500">
            Engineered with React, Vite &amp; Tailwind CSS
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
