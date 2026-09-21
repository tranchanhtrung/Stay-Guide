import React from 'react';
import { 
  Building2, Globe, Settings, MapPin, CloudSun, 
  Search, X, Sparkles, Volume2 
} from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface HeaderProps {
  property: PropertyInfo;
  presets: PropertyInfo[];
  currentPresetId: string;
  onSelectPreset: (id: string) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenHostEdit: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  property,
  presets,
  currentPresetId,
  onSelectPreset,
  language,
  onToggleLanguage,
  onOpenHostEdit,
  searchTerm,
  onSearchChange,
}) => {
  const isVi = language === 'vi';
  const { name, tagline, address, heroImage, roomName, guestName, announcement } = property;

  return (
    <header className="relative w-full">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 text-xs">
          {/* Preset Selector */}
          <div className="flex items-center gap-2">
            <Building2 size={15} className="text-amber-400 shrink-0" />
            <select
              id="property-preset-selector"
              value={currentPresetId}
              onChange={(e) => onSelectPreset(e.target.value)}
              className="bg-slate-800 text-white text-xs font-semibold py-1 px-2.5 rounded-lg border border-slate-700 hover:border-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer"
            >
              {presets.map((p) => (
                <option key={p.id} value={p.id}>
                  {isVi ? p.name.vi : p.name.en}
                </option>
              ))}
            </select>
          </div>

          {/* Right Controls: Language & Host Mode */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              id="language-toggle-btn"
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 border border-slate-700 transition-colors font-semibold"
              title={isVi ? 'Chuyển sang tiếng Anh' : 'Switch to Vietnamese'}
            >
              <Globe size={13} className="text-amber-400" />
              <span>{isVi ? 'VI 🇻🇳' : 'EN 🇬🇧'}</span>
            </button>

            {/* Host Edit Mode */}
            <button
              id="host-edit-toggle-btn"
              onClick={onOpenHostEdit}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg font-bold transition-all shadow-xs active:scale-95"
              title={isVi ? 'Chỉnh sửa thông tin phòng & Wi-Fi' : 'Host Customizer & QR Print'}
            >
              <Settings size={13} />
              <span className="hidden sm:inline">{isVi ? 'Quản lý' : 'Host Mode'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner with Property Visual */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden">
        <img
          src={heroImage}
          alt={isVi ? name.vi : name.en}
          className="w-full h-full object-cover"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-black/30" />

        {/* Content overlaid on hero */}
        <div className="absolute inset-0 max-w-4xl mx-auto p-4 sm:p-6 flex flex-col justify-end text-white">
          {/* Top Floating Badge: Welcome guest & Room */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-950 shadow-sm">
              <Sparkles size={12} />
              <span>{roomName}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-amber-200 border border-white/15">
              <CloudSun size={13} className="text-amber-300" />
              <span>28°C • Nắng đẹp</span>
            </span>
          </div>

          {/* Property Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-white leading-tight">
            {isVi ? name.vi : name.en}
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-1 max-w-2xl font-light">
            {isVi ? tagline.vi : tagline.en}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
            <MapPin size={14} className="text-amber-400 shrink-0" />
            <span className="truncate">{address}</span>
          </div>
        </div>
      </div>

      {/* Announcement Notification Banner (if any) */}
      {announcement && announcement.active && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-amber-900 font-medium">
            <Volume2 size={16} className="text-amber-600 shrink-0" />
            <span className="truncate">{isVi ? announcement.vi : announcement.en}</span>
          </div>
        </div>
      )}

      {/* Global Quick Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-5 relative z-10">
        <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 p-1 flex items-center">
          <div className="pl-3.5 text-slate-400">
            <Search size={18} />
          </div>
          <input
            id="global-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              isVi
                ? 'Tìm kiếm nhanh: Wi-Fi, điều hòa, bánh mì, quán cà phê, trả phòng...'
                : 'Search anything: Wi-Fi, air conditioner, food, cafe, checkout...'
            }
            className="w-full py-2.5 px-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
