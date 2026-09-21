import React from 'react';
import { Home, Tv, Utensils, Bell, Star } from 'lucide-react';
import { Language } from '../types';

interface BottomNavProps {
  activeTab: 'home' | 'appliances' | 'local' | 'services';
  setActiveTab: (tab: 'home' | 'appliances' | 'local' | 'services') => void;
  language: Language;
  onOpenReview: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  language,
  onOpenReview,
}) => {
  const isVi = language === 'vi';

  const scrollToSection = (id: string, tab: 'home' | 'appliances' | 'local' | 'services') => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      id="mobile-bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 shadow-lg"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {/* 1. Home */}
        <button
          onClick={() => scrollToSection('top', 'home')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'home' ? 'text-amber-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home size={19} className={activeTab === 'home' ? 'stroke-[2.5]' : ''} />
          <span className="text-[10px]">{isVi ? 'Tổng quan' : 'Home'}</span>
        </button>

        {/* 2. Appliances */}
        <button
          onClick={() => scrollToSection('appliances-section', 'appliances')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'appliances' ? 'text-amber-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Tv size={19} className={activeTab === 'appliances' ? 'stroke-[2.5]' : ''} />
          <span className="text-[10px]">{isVi ? 'Thiết bị' : 'Appliances'}</span>
        </button>

        {/* 3. Local Guide */}
        <button
          onClick={() => scrollToSection('local-guide-section', 'local')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'local' ? 'text-amber-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Utensils size={19} className={activeTab === 'local' ? 'stroke-[2.5]' : ''} />
          <span className="text-[10px]">{isVi ? 'Ăn chơi' : 'Explore'}</span>
        </button>

        {/* 4. Services */}
        <button
          onClick={() => scrollToSection('services-section', 'services')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'services' ? 'text-amber-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bell size={19} className={activeTab === 'services' ? 'stroke-[2.5]' : ''} />
          <span className="text-[10px]">{isVi ? 'Dịch vụ' : 'Services'}</span>
        </button>

        {/* 5. Review Booster Action */}
        <button
          onClick={onOpenReview}
          id="bottom-nav-review-btn"
          className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-rose-600 hover:text-rose-700 transition-all font-bold"
        >
          <div className="relative">
            <Star size={19} className="fill-rose-500 text-rose-500" />
            <span className="absolute -top-1 -right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
          </div>
          <span className="text-[10px]">{isVi ? 'Đánh giá' : 'Reviews'}</span>
        </button>
      </div>
    </nav>
  );
};
