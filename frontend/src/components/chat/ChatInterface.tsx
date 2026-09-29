import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Check, 
  HelpCircle, 
  ArrowRight, 
  SlidersHorizontal, 
  ShoppingBag, 
  Bot, 
  User as UserIcon, 
  RefreshCw, 
  Gift, 
  Tag,
  Smile,
  Heart
} from 'lucide-react';
import { ChatMessage, ExtractedIntent, Screen, Product, MoodType } from '../../types';
import { 
  parseUserQuery, 
  generateClarificationQuestions, 
  filterAndRankProducts,
  respondToUserQuestion 
} from '../../services/agentEngine';
import { SAMPLE_PRODUCTS, MOOD_OPTIONS } from '../../data/sampleProducts';

interface ChatInterfaceProps {
  intent: ExtractedIntent;
  setScreen: (screen: Screen) => void;
  onUpdateIntent: (updated: Partial<ExtractedIntent>) => void;
  onProductsRanked: (ranked: Product[]) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  intent,
  setScreen,
  onUpdateIntent,
  onProductsRanked
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string>(intent.targetGender);
  const [selectedTier, setSelectedTier] = useState<string>(intent.budgetTier || 'moderate');
  const [selectedMood, setSelectedMood] = useState<MoodType | undefined>(intent.detectedMood);

  useEffect(() => {
    initializeConversation(intent);
  }, [intent.rawQuery]);

  const initializeConversation = (activeIntent: ExtractedIntent) => {
    const questions = generateClarificationQuestions(activeIntent);
    const ranked = filterAndRankProducts(
      SAMPLE_PRODUCTS, 
      activeIntent, 
      activeIntent.targetGender !== 'unknown' ? activeIntent.targetGender : undefined, 
      activeIntent.budgetTier,
      activeIntent.detectedMood
    );
    onProductsRanked(ranked);

    const thinkingSteps = [
      `Analyzing user intent: "${activeIntent.destinationOccasion}"`,
      activeIntent.detectedMood 
        ? `Mood affinity detected: ${activeIntent.moodEmoji || '✨'} ${activeIntent.moodVibe || activeIntent.detectedMood.toUpperCase()} (Applied +18 score boost to sensory matches)` 
        : "Mood profile: Neutral exploration",
      activeIntent.targetGender === 'unknown' 
        ? "Ambiguity detected: Department/gender unspecified → Triggering clarification engine" 
        : `Target profile: ${activeIntent.targetGender.toUpperCase()}`,
      `Budget ceiling: ${activeIntent.budgetCurrency}${activeIntent.maxBudget.toLocaleString('en-IN')} (${activeIntent.budgetTier} tier)`,
      activeIntent.excludedAttributes.length > 0 
        ? `Negative filters active: ${activeIntent.excludedAttributes.join(', ')}` 
        : "Checking catalog inventory for top-rated candidates"
    ];

    let agentSummaryText = "";
    if (activeIntent.detectedMood === 'chill') {
      agentSummaryText = `I sense you want to unwind and take it easy! 🧘 I've pulled together cozy, stress-relieving essentials with soft tactile fabrics and calming aromas under ₹${activeIntent.maxBudget.toLocaleString('en-IN')}.`;
    } else if (activeIntent.detectedMood === 'romantic') {
      agentSummaryText = `Setting the tone for romance! ✨ I've curated captivating fragrances, heirloom watches, and evening dining silhouettes to give you effortless confidence.`;
    } else if (activeIntent.detectedMood === 'energetic') {
      agentSummaryText = `Ready to power through! ⚡ Here are high-utility workout audio and movement-engineered picks built for high-cadence energy.`;
    } else if (activeIntent.scenarioType === 'gift') {
      agentSummaryText = `I can help you find a memorable gift for your friend! To surface the best items across moderate to luxury price tiers, let me clarify a couple of quick details:`;
    } else if (activeIntent.scenarioType === 'travel') {
      agentSummaryText = `I've analyzed your travel request! All items must handle the coastal climate, respect the ₹${activeIntent.maxBudget.toLocaleString('en-IN')} budget cap, and enforce your style rules.`;
    } else {
      agentSummaryText = `I've analyzed your shopping query for "${activeIntent.destinationOccasion}". Let me ask a quick question to hone in on the right recommendations:`;
    }

    const initialMessages: ChatMessage[] = [
      {
        id: 'msg-user-init',
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: activeIntent.rawQuery
      },
      {
        id: 'msg-agent-init',
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: agentSummaryText,
        agentThinkingSteps: thinkingSteps,
        clarification: questions.primary,
        secondaryClarification: questions.secondary,
        attachedProducts: ranked.slice(0, 4),
        followUpChips: [
          "Show moderate gifts under ₹3,000",
          "What makes a good keepsake gift?",
          "How does mood affect fabric choice?"
        ]
      }
    ];

    setMessages(initialMessages);
    setSelectedGender(activeIntent.targetGender);
    setSelectedTier(activeIntent.budgetTier || 'moderate');
    setSelectedMood(activeIntent.detectedMood);
  };

  const handleMoodSelect = (moodId: MoodType) => {
    const moodObj = MOOD_OPTIONS.find(m => m.id === moodId);
    setSelectedMood(moodId);
    
    const updatedIntentPartial: Partial<ExtractedIntent> = {
      detectedMood: moodId,
      moodEmoji: moodObj?.emoji,
      moodVibe: moodObj?.title
    };
    onUpdateIntent(updatedIntentPartial);

    const mergedIntent = { ...intent, ...updatedIntentPartial };
    const newRanked = filterAndRankProducts(
      SAMPLE_PRODUCTS, 
      mergedIntent, 
      selectedGender as any, 
      selectedTier, 
      moodId
    );
    onProductsRanked(newRanked);

    const followUpMsg: ChatMessage = {
      id: `msg-mood-${Date.now()}`,
      sender: 'agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: `Switched mood to **${moodObj?.emoji} ${moodObj?.title}**! Re-scored catalog items with a priority on *${moodObj?.subtitle}*.`,
      attachedProducts: newRanked.slice(0, 4),
      followUpChips: [
        `Why do these fit the ${moodObj?.title} mood?`,
        "Show under ₹3,000",
        "Compare top 2 mood picks"
      ]
    };

    setMessages(prev => [...prev, followUpMsg]);
  };

  const handleGenderClarification = (val: string) => {
    setSelectedGender(val);
    const newGender = val as 'men' | 'women' | 'unisex';
    onUpdateIntent({ targetGender: newGender });

    const newRanked = filterAndRankProducts(SAMPLE_PRODUCTS, intent, newGender, selectedTier, selectedMood);
    onProductsRanked(newRanked);

    const followUpMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: `Refined recommendations for **${val === 'men' ? "Male / Men's" : val === 'women' ? "Female / Women's" : "Unisex"}**. I've updated the catalog ranking to prioritize items best suited for this style profile.`,
      attachedProducts: newRanked.slice(0, 4),
      followUpChips: [
        "Compare top 2 choices",
        "Show luxury timepieces",
        "What's in the curated gift box?"
      ]
    };

    setMessages(prev => [...prev, followUpMsg]);
  };

  const handleTierClarification = (tierVal: string) => {
    setSelectedTier(tierVal);
    onUpdateIntent({ budgetTier: tierVal as any });

    const newRanked = filterAndRankProducts(SAMPLE_PRODUCTS, intent, selectedGender as any, tierVal, selectedMood);
    onProductsRanked(newRanked);

    const tierLabel = tierVal === 'luxury' 
      ? 'Luxury & Premium (₹4,000+)' 
      : tierVal === 'moderate' 
        ? 'Moderate & Thoughtful (₹1,500 – ₹3,500)' 
        : 'Budget-Friendly (< ₹1,500)';

    const followUpMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: `Focused on **${tierLabel}**. Showing top-rated items with standout presentation boxes and high gift appeal.`,
      attachedProducts: newRanked.slice(0, 4),
      followUpChips: [
        "Which item has the best reviews?",
        "Compare the watch and earbuds",
        "Can I add a personalized note?"
      ]
    };

    setMessages(prev => [...prev, followUpMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isProcessing) return;

    const userText = inputMessage;
    setInputMessage('');

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: userText
    };

    setMessages(prev => [...prev, userMsg]);
    setIsProcessing(true);

    setTimeout(() => {
      const isNewGoal = userText.length > 15 && (
        userText.toLowerCase().includes('gift') || 
        userText.toLowerCase().includes('trip') || 
        userText.toLowerCase().includes('goa') || 
        userText.toLowerCase().includes('workout') ||
        userText.toLowerCase().includes('chill') ||
        userText.toLowerCase().includes('romantic')
      );
      let activeIntent = intent;
      if (isNewGoal) {
        activeIntent = parseUserQuery(userText);
        onUpdateIntent(activeIntent);
        if (activeIntent.detectedMood) {
          setSelectedMood(activeIntent.detectedMood);
        }
      }

      const response = respondToUserQuestion(userText, activeIntent, SAMPLE_PRODUCTS);

      if (response.updatedIntent) {
        onUpdateIntent(response.updatedIntent);
        if (response.updatedIntent.detectedMood) {
          setSelectedMood(response.updatedIntent.detectedMood);
        }
      }

      onProductsRanked(response.recommendedProducts);

      const agentReply: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: response.answer,
        agentThinkingSteps: response.thinkingSteps,
        attachedProducts: response.recommendedProducts.slice(0, 4),
        followUpChips: response.followUpChips
      };

      setMessages(prev => [...prev, agentReply]);
      setIsProcessing(false);
    }, 600);
  };

  const activeMoodObj = MOOD_OPTIONS.find(m => m.id === selectedMood);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6">
      
      {/* Top Breadcrumb & Intent Snapshot Bar */}
      <div className="mb-4 p-4 rounded-3xl bg-white border border-zinc-200/90 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            {activeMoodObj ? <span className="text-xl">{activeMoodObj.emoji}</span> : intent.scenarioType === 'gift' ? <Gift className="w-5 h-5 text-amber-500" /> : <Sparkles className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-heading text-sm font-bold text-zinc-900">Active Shopping Goal</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
                {intent.confidenceScore}% Confidence
              </span>
              {activeMoodObj && (
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${activeMoodObj.badgeColor}`}>
                  {activeMoodObj.emoji} {activeMoodObj.title}
                </span>
              )}
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600">
                {intent.scenarioType}
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5 truncate max-w-lg">
              "{intent.rawQuery}"
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('intent')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-600" />
            <span>Extracted Intent</span>
          </button>
          <button
            onClick={() => setScreen('recommendations')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold shadow-xs transition-all"
          >
            <span>Recommendations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Mood Selector Bar */}
      <div className="mb-6 p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar shadow-2xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700 shrink-0 pl-1">
          <Smile className="w-3.5 h-3.5 text-amber-500" />
          <span>Tune Mood:</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {MOOD_OPTIONS.map((mood) => {
            const isSelected = selectedMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs ${
                  isSelected
                    ? 'bg-zinc-950 text-white font-bold shadow-sm scale-105'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100'
                }`}
              >
                <span>{mood.emoji}</span>
                <span>{mood.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chat Feed */}
      <div className="space-y-6 mb-28">
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {/* Agent Avatar */}
            {msg.sender === 'agent' && (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-zinc-900 via-indigo-950 to-zinc-800 flex items-center justify-center text-white shrink-0 shadow-sm">
                <Bot className="w-5 h-5 text-amber-300" />
              </div>
            )}

            <div className={`max-w-2xl rounded-3xl p-5 ${
              msg.sender === 'user'
                ? 'bg-zinc-950 text-white rounded-tr-xs shadow-md'
                : 'bg-white border border-zinc-200/90 text-zinc-900 rounded-tl-xs shadow-sm'
            }`}>
              
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-2.5 text-xs">
                <span className={`font-bold ${msg.sender === 'user' ? 'text-zinc-300' : 'text-zinc-800'}`}>
                  {msg.sender === 'user' ? 'You' : 'ShopMate AI'}
                </span>
                <span className={`text-[11px] ${msg.sender === 'user' ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  {msg.timestamp}
                </span>
              </div>

              {/* Agent Thinking Steps Accordion / Breakdown */}
              {msg.agentThinkingSteps && (
                <div className="mb-4 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs">
                  <div className="flex items-center gap-2 text-zinc-800 font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Agent Emotional &amp; Constraint Reasoning</span>
                  </div>
                  <ul className="space-y-1.5 text-zinc-600">
                    {msg.agentThinkingSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Message Content */}
              <div className={`text-sm leading-relaxed space-y-2.5 ${msg.sender === 'user' ? 'text-white' : 'text-zinc-800'}`}>
                {msg.text.split('\n\n').map((paragraph, pIdx) => (
                  <div key={pIdx} className="leading-relaxed">
                    {paragraph.split('\n').map((line, lIdx) => (
                      <div key={lIdx} className={line.startsWith('•') || line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') ? 'pl-2 my-0.5' : ''}>
                        {line.split('**').map((chunk, cIdx) => 
                          cIdx % 2 === 1 
                            ? <strong key={cIdx} className={msg.sender === 'user' ? 'text-amber-200 font-bold' : 'text-indigo-950 font-bold'}>{chunk}</strong> 
                            : chunk
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Clarification 1 */}
              {msg.clarification && (
                <div className="mt-4 pt-3.5 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Clarification: {msg.clarification.question}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-3">{msg.clarification.context}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {msg.clarification.options.map((opt) => {
                      const isSelected = selectedGender === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleGenderClarification(opt.value)}
                          className={`px-3.5 py-2 rounded-2xl text-xs font-semibold border flex items-center gap-1.5 transition-all shadow-2xs ${
                            isSelected
                              ? 'bg-zinc-950 text-white border-zinc-950 font-bold shadow-sm'
                              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                          <span>{opt.label}</span>
                          {opt.badge && !isSelected && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-bold">
                              {opt.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Clarification 2 */}
              {msg.secondaryClarification && (
                <div className="mt-3.5 pt-3.5 border-t border-zinc-100">
                  <div className="text-xs font-bold text-amber-800 mb-1 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-600" />
                    <span>{msg.secondaryClarification.question}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-2.5">{msg.secondaryClarification.context}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {msg.secondaryClarification.options.map((opt) => {
                      const isSel = selectedTier === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleTierClarification(opt.value)}
                          className={`px-3.5 py-2 rounded-2xl text-xs font-semibold border flex items-center gap-1.5 transition-all shadow-2xs ${
                            isSel
                              ? 'bg-amber-600 text-white border-amber-600 font-bold shadow-sm'
                              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                          }`}
                        >
                          {isSel && <Check className="w-3 h-3" />}
                          <span>{opt.label}</span>
                          {opt.badge && !isSel && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-bold">
                              {opt.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Embedded Recommended Picks Preview */}
              {msg.attachedProducts && (
                <div className="mt-4 pt-3.5 border-t border-zinc-100">
                  <div className="text-xs font-bold text-zinc-700 mb-2.5 flex items-center justify-between">
                    <span>Ranked Recommendations ({msg.attachedProducts.length} Top Picks):</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Mood &amp; Constraint Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3.5">
                    {msg.attachedProducts.map((p) => (
                      <div 
                        key={p.id}
                        onClick={() => setScreen('recommendations')}
                        className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:bg-white transition-all p-1.5 shadow-2xs"
                      >
                        <div className="aspect-square rounded-xl overflow-hidden relative">
                          <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          <div className="absolute top-1 right-1 bg-zinc-950/80 backdrop-blur-sm text-[10px] text-white px-1.5 py-0.5 rounded-md font-bold">
                            {p.matchScore}%
                          </div>
                          {p.moodBadge && (
                            <div className="absolute bottom-1 left-1 bg-white/95 backdrop-blur-xs text-[9px] text-zinc-800 px-1 py-0.5 rounded font-bold shadow-2xs truncate max-w-[90%]">
                              {p.moodBadge}
                            </div>
                          )}
                        </div>
                        <div className="mt-1.5 px-1">
                          <p className="text-[11px] font-bold text-zinc-800 truncate">{p.title}</p>
                          <p className="text-[10px] text-zinc-600 font-extrabold">{p.currency}{p.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      onClick={() => setScreen('recommendations')}
                      className="flex-1 py-2.5 px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Inspect All Recommendations</span>
                    </button>
                    <button
                      onClick={() => setScreen('compare')}
                      className="py-2.5 px-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold"
                    >
                      Compare Picks
                    </button>
                  </div>
                </div>
              )}

              {/* Suggested Follow-up Questions Chips */}
              {msg.followUpChips && msg.followUpChips.length > 0 && (
                <div className="mt-4 pt-3.5 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Suggested Next Questions:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.followUpChips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => setInputMessage(chip)}
                        className="px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100 text-zinc-700 text-xs font-medium transition-colors flex items-center gap-1.5 group shadow-2xs"
                      >
                        <span>{chip}</span>
                        <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* User Avatar */}
            {msg.sender === 'user' && (
              <div className="w-10 h-10 rounded-2xl bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-700 shrink-0">
                <UserIcon className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="flex gap-3.5 items-center text-zinc-500 text-xs animate-pulse">
            <div className="w-10 h-10 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600">
              <RefreshCw className="w-4 h-4 animate-spin" />
            </div>
            <span>ShopMate is cross-referencing mood affinities, verifying price limits, and ranking recommendations...</span>
          </div>
        )}
      </div>

      {/* Floating Chat Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xl border-t border-zinc-200 z-40 shadow-lg">
        <div className="max-w-4xl mx-auto">
          {/* Quick chip suggestions based on scenario & mood */}
          <div className="flex items-center gap-2 mb-2 overflow-x-auto no-scrollbar text-xs">
            <span className="text-zinc-400 text-[11px] font-semibold shrink-0">Quick Ask:</span>
            {[
              'I feel stressed, show calming items 🧘',
              'Romantic date night perfume ✨',
              'High-energy workout audio ⚡',
              'Under ₹2,000 budget picks',
              'Which item has best reviews?'
            ].map((quick, i) => (
              <button
                key={i}
                onClick={() => setInputMessage(quick)}
                className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 shrink-0 text-[11px] transition-colors font-medium"
              >
                {quick}
              </button>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex items-center gap-2.5">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tell ShopMate how you feel, or ask a question (e.g. 'I want something cozy for a lazy weekend under ₹3,000')..."
              className="flex-1 bg-zinc-100 border border-zinc-200 rounded-2xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100 transition-all font-normal"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isProcessing}
              className="px-6 py-3 rounded-2xl bg-zinc-950 hover:bg-zinc-800 disabled:opacity-50 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-md shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};
