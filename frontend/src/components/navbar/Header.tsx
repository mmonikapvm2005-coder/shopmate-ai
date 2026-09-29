import React from 'react';
import { Screen } from '../../types';
import { 
  Sparkles, 
  MessageSquare, 
  Target, 
  ShoppingBag, 
  GitCompare, 
  Package, 
  User
} from 'lucide-react';

interface HeaderProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  comparedCount: number;
  hasIntent: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  setScreen,
  comparedCount,
  hasIntent
}) => {
  const navItems: { id: Screen; label: string; icon: React.ComponentType<{ className?: string }>; badge?: number; disabled?: boolean }[] = [
    { id: 'landing', label: 'Home', icon: Sparkles },
    { id: 'chat', label: 'AI Agent Chat', icon: MessageSquare },
    { id: 'intent', label: 'Intent Summary', icon: Target, disabled: !hasIntent },
    { id: 'recommendations', label: 'Picks & Reasoning', icon: ShoppingBag, disabled: !hasIntent },
    { id: 'compare', label: 'Compare', icon: GitCompare, badge: comparedCount },
    { id: 'bundle', label: 'Capsule & Bundle', icon: Package, disabled: !hasIntent },
    { id: 'profile', label: 'Style Memory', icon: User }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => setScreen('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-400 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-bold tracking-tight text-zinc-900">ShopMate</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 rounded uppercase tracking-wider">AI</span>
              </div>
              <p className="text-[11px] text-zinc-500 hidden sm:block">Vague Intent → Confident Decision</p>
            </div>
          </div>

          {/* Center Navigation Journey */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 p-1 rounded-xl border border-zinc-200/70 text-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  disabled={item.disabled}
                  onClick={() => setScreen(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    isActive 
                      ? 'bg-white text-zinc-900 shadow-xs font-semibold' 
                      : item.disabled
                        ? 'text-zinc-400 cursor-not-allowed'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Profile & Compare Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScreen('compare')}
              className="relative p-2 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-900 transition-colors shadow-xs"
              title="Product Comparison"
            >
              <GitCompare className="w-4 h-4" />
              {comparedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {comparedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setScreen('profile')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 hover:border-indigo-300 text-zinc-800 text-xs transition-all shadow-xs"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-[11px]">
                RM
              </div>
              <span className="hidden lg:inline text-zinc-700 font-medium">Memory Active</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Breadcrumb Navigation */}
      <div className="md:hidden flex items-center gap-1 overflow-x-auto px-4 py-2 border-t border-zinc-200/80 bg-zinc-50 text-xs no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => setScreen(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md shrink-0 font-medium ${
                isActive 
                  ? 'bg-zinc-900 text-white' 
                  : item.disabled 
                    ? 'text-zinc-400' 
                    : 'text-zinc-600'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="ml-1 px-1 bg-amber-500 text-white text-[9px] rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
