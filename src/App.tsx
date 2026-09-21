import React, { useState, useEffect } from 'react';
import { PROPERTY_PRESETS, APPLIANCE_GUIDES, LOCAL_PLACES, HOUSE_RULES, GUEST_REQUEST_OPTIONS } from './data/mockData';
import { PropertyInfo, Language } from './types';
import { Header } from './components/Header';
import { QuickActionCards } from './components/QuickActionCards';
import { AppliancesSection } from './components/AppliancesSection';
import { LocalGuideSection } from './components/LocalGuideSection';
import { ServicesSection } from './components/ServicesSection';
import { WifiModal } from './components/WifiModal';
import { CheckInModal } from './components/CheckInModal';
import { CheckOutModal } from './components/CheckOutModal';
import { ReviewBoosterModal } from './components/ReviewBoosterModal';
import { HostEditModal } from './components/HostEditModal';
import { BottomNav } from './components/BottomNav';
import { PhoneCall, MessageCircle, Heart, Star, Sparkles, Check } from 'lucide-react';

export default function App() {
  const [propertyPresets, setPropertyPresets] = useState<PropertyInfo[]>(() => {
    try {
      const saved = localStorage.getItem('stayguide_presets');
      return saved ? JSON.parse(saved) : PROPERTY_PRESETS;
    } catch {
      return PROPERTY_PRESETS;
    }
  });

  const [currentPresetId, setCurrentPresetId] = useState<string>(propertyPresets[0].id);
  const [language, setLanguage] = useState<Language>('vi');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeNavTab, setActiveNavTab] = useState<'home' | 'appliances' | 'local' | 'services'>('home');

  // Modals state
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isHostEditOpen, setIsHostEditOpen] = useState(false);

  const currentProperty = propertyPresets.find((p) => p.id === currentPresetId) || propertyPresets[0];
  const isVi = language === 'vi';

  const handleSelectPreset = (id: string) => {
    setCurrentPresetId(id);
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const handleSaveProperty = (updatedProperty: PropertyInfo) => {
    const updatedList = propertyPresets.map((p) =>
      p.id === updatedProperty.id ? updatedProperty : p
    );
    setPropertyPresets(updatedList);
    try {
      localStorage.setItem('stayguide_presets', JSON.stringify(updatedList));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] pb-24 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header & Search */}
      <Header
        property={currentProperty}
        presets={propertyPresets}
        currentPresetId={currentPresetId}
        onSelectPreset={handleSelectPreset}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenHostEdit={() => setIsHostEditOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 mt-6 space-y-10">
        {/* Quick Action Cards (Wi-Fi, Key, Checkout, Reviews) */}
        <section id="quick-actions-section">
          <QuickActionCards
            property={currentProperty}
            language={language}
            onOpenWifi={() => setIsWifiOpen(true)}
            onOpenCheckIn={() => setIsCheckInOpen(true)}
            onOpenCheckOut={() => setIsCheckOutOpen(true)}
            onOpenReview={() => setIsReviewOpen(true)}
          />
        </section>

        {/* In-Room Appliances Guide */}
        <AppliancesSection
          appliances={APPLIANCE_GUIDES}
          language={language}
          property={currentProperty}
          searchTerm={searchTerm}
        />

        {/* Local Area Guidebook */}
        <LocalGuideSection
          places={LOCAL_PLACES}
          language={language}
          searchTerm={searchTerm}
        />

        {/* House Rules & Guest Services */}
        <ServicesSection
          rules={HOUSE_RULES}
          requestOptions={GUEST_REQUEST_OPTIONS}
          language={language}
          property={currentProperty}
        />

        {/* Bottom OTA Review Banner Hook */}
        <section className="bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600 rounded-3xl p-6 text-white shadow-xl text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md shadow-inner">
            <Star size={24} className="fill-white text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif">
            {isVi ? 'Đánh Giá 5 Sao & Nhận Quà Tri Ân' : '5-Star Review & Guest Perks'}
          </h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-lg mx-auto leading-relaxed">
            {isVi
              ? 'Chia sẻ cảm nhận về kỳ nghỉ của bạn để nhận mã voucher ưu đãi 10% cho lần ghé thăm tiếp theo. Nếu có bất kỳ điều gì chưa hài lòng, hãy liên hệ ngay để lễ tân xử lý trong 5 phút!'
              : 'Share your stay experience to unlock a 10% loyalty voucher. If anything is amiss, contact our butler to resolve it in 5 minutes!'}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              id="bottom-rate-stay-btn"
              onClick={() => setIsReviewOpen(true)}
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-xs shadow-md hover:bg-slate-100 transition-all active:scale-95 flex items-center gap-2"
            >
              <Heart size={16} className="text-rose-600 fill-rose-600" />
              <span>{isVi ? 'Đánh Giá Kỳ Nghỉ' : 'Rate Your Stay'}</span>
            </button>
            <a
              href={`https://zalo.me/${currentProperty.contacts.zaloPhone.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black/30 hover:bg-black/40 text-white border border-white/30 rounded-xl font-bold text-xs transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>{isVi ? 'Nhắn Zalo Quản gia' : 'Message Butler'}</span>
            </a>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="text-center text-xs text-slate-400 py-6 space-y-1">
          <p className="font-medium text-slate-600">
            {currentProperty.name.vi} • {currentProperty.roomName}
          </p>
          <p className="text-[11px]">
            {isVi
              ? 'StayGuide - Cẩm nang kỹ thuật số công nghệ Touch Stay cho trải nghiệm nghỉ dưỡng 5 sao'
              : 'StayGuide - Digital Welcome Book Powered for Exceptional Hospitality'}
          </p>
        </footer>
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav
        activeTab={activeNavTab}
        setActiveTab={setActiveNavTab}
        language={language}
        onOpenReview={() => setIsReviewOpen(true)}
      />

      {/* Modals */}
      <WifiModal
        property={currentProperty}
        language={language}
        isOpen={isWifiOpen}
        onClose={() => setIsWifiOpen(false)}
      />

      <CheckInModal
        property={currentProperty}
        language={language}
        isOpen={isCheckInOpen}
        onClose={() => setIsCheckInOpen(false)}
      />

      <CheckOutModal
        property={currentProperty}
        language={language}
        isOpen={isCheckOutOpen}
        onClose={() => setIsCheckOutOpen(false)}
        onOpenReviewBooster={() => setIsReviewOpen(true)}
      />

      <ReviewBoosterModal
        property={currentProperty}
        language={language}
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />

      <HostEditModal
        property={currentProperty}
        language={language}
        isOpen={isHostEditOpen}
        onClose={() => setIsHostEditOpen(false)}
        onSave={handleSaveProperty}
      />
    </div>
  );
}
