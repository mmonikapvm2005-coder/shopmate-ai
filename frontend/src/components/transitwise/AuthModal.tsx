import React, { useState } from 'react';
import type { UserProfile, Language } from '../../types/transitwise';
import { loginUser, registerUser, DEMO_USER } from '../../services/authAndMapsService';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: UserProfile) => void;
  initialTab?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
  initialTab = 'login',
}) => {
  const [tab, setTab] = useState<'login' | 'signup'>(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [homeCity, setHomeCity] = useState('');
  const [touristType, setTouristType] = useState<UserProfile['touristType']>('solo');
  const [preferredLang, setPreferredLang] = useState<Language>('en');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const res = loginUser(email, password);
      setLoading(false);
      if (res.success && res.user) {
        onAuthSuccess(res.user);
        onClose();
      } else {
        setError(res.error || 'Login failed. Please check credentials.');
      }
    }, 400);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill in your name, email, and password.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const res = registerUser({
        name,
        email,
        password,
        touristType,
        preferredLanguage: preferredLang,
        homeCountryOrCity: homeCity,
      });
      setLoading(false);
      if (res.success && res.user) {
        onAuthSuccess(res.user);
        onClose();
      } else {
        setError(res.error || 'Registration failed.');
      }
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    onAuthSuccess(DEMO_USER);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden text-gray-900 animate-in zoom-in-95 duration-150">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-sm transition-all"
          >
            ✕
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">🛕</span>
            <h3 className="text-xl font-black tracking-tight">TripSense TN</h3>
          </div>
          <p className="text-xs text-orange-100">
            {tab === 'login'
              ? 'Welcome back! Sign in to sync your trips & Google Maps'
              : 'Create your account to unlock personalized Tamil Nadu travel'}
          </p>

          {/* Tab Selector */}
          <div className="flex bg-black/20 p-1 rounded-xl mt-4 border border-white/10">
            <button
              onClick={() => { setTab('login'); setError(null); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all
                ${tab === 'login' ? 'bg-white text-orange-700 shadow-sm' : 'text-white/80 hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setTab('signup'); setError(null); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all
                ${tab === 'signup' ? 'bg-white text-orange-700 shadow-sm' : 'text-white/80 hover:text-white'}`}
            >
              New User (Sign Up)
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-xl flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {tab === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tourist@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl text-sm transition-all shadow-sm hover:shadow cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? 'Signing in...' : 'Sign In to TripSense'}
              </button>
            </form>
          ) : (
            /* Sign Up / New User Form */
            <form onSubmit={handleSignup} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Anand Kumar or Sarah Jenkins"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Create Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Traveler Type</label>
                  <select
                    value={touristType}
                    onChange={e => setTouristType(e.target.value as any)}
                    className="w-full px-2.5 py-2 rounded-xl border border-gray-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  >
                    <option value="solo">🎒 Solo Explorer</option>
                    <option value="family">👨‍👩‍👧 Family Pilgrim</option>
                    <option value="international">🌍 International Tourist</option>
                    <option value="spiritual">🛕 Spiritual Seeker</option>
                    <option value="heritage">🏰 History & Heritage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Origin City/Country</label>
                  <input
                    type="text"
                    value={homeCity}
                    onChange={e => setHomeCity(e.target.value)}
                    placeholder="e.g. London / Mumbai"
                    className="w-full px-2.5 py-2 rounded-xl border border-gray-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl text-sm transition-all shadow-sm hover:shadow cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {loading ? 'Creating Account...' : '✨ Create Free Traveler Account'}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400 font-medium">Or continue instantly</span>
            </div>
          </div>

          {/* 1-Click Demo Login */}
          <button
            type="button"
            onClick={handleQuickDemoLogin}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⚡</span>
            <span>One-Click Demo Login (Instant Access)</span>
          </button>

          {/* Google Maps Sync Note */}
          <div className="mt-3.5 bg-blue-50/70 border border-blue-100 rounded-xl p-2.5 flex items-center gap-2">
            <span className="text-lg">🗺️</span>
            <p className="text-[11px] text-blue-800 leading-tight">
              <strong>Google Maps Sync Enabled:</strong> Your saved spots, hotels, and custom travel routes sync with Google Maps navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
