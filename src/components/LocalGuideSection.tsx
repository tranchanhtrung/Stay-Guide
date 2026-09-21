import React, { useState } from 'react';
import { 
  Utensils, Coffee, Compass, Cross, Navigation, Heart, 
  Clock, MapPin, ExternalLink, Sparkles, PhoneCall 
} from 'lucide-react';
import { LocalPlace, Language } from '../types';

interface LocalGuideSectionProps {
  places: LocalPlace[];
  language: Language;
  searchTerm?: string;
}

export const LocalGuideSection: React.FC<LocalGuideSectionProps> = ({
  places,
  language,
  searchTerm = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('stayguide_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const isVi = language === 'vi';

  const categoryMap: Record<string, { vi: string; en: string; icon: React.ReactNode }> = {
    all: { vi: 'Tất cả', en: 'All Places', icon: <Sparkles size={14} /> },
    food: { vi: 'Ẩm thực & Quán ngon', en: 'Food & Dining', icon: <Utensils size={14} /> },
    coffee: { vi: 'Cà phê & Trà', en: 'Coffee & Cafes', icon: <Coffee size={14} /> },
    sightseeing: { vi: 'Điểm tham quan & Chơi', en: 'Attractions & Sights', icon: <Compass size={14} /> },
    essential: { vi: 'Y tế & Tiện ích 24h', en: 'Pharmacy & Essentials', icon: <Cross size={14} /> },
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (bookmarkedIds.includes(id)) {
      updated = bookmarkedIds.filter((item) => item !== id);
    } else {
      updated = [...bookmarkedIds, id];
    }
    setBookmarkedIds(updated);
    try {
      localStorage.setItem('stayguide_bookmarks', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const filteredPlaces = places.filter((place) => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const title = isVi ? place.title.vi : place.title.en;
    const hostTip = isVi ? place.hostTip.vi : place.hostTip.en;
    const address = place.address;
    const matchesSearch = !searchTerm ||
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hostTip.toLowerCase().includes(searchTerm.toLowerCase()) ||
      address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="local-guide-section" className="scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
            {isVi ? 'Khám phá như người bản địa' : "Host's Curated Guidebook"}
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">
            {isVi ? 'Gợi Ý Quán Ngon & Địa Điểm' : 'Local Food & Hidden Gems'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isVi
              ? 'Tuyển tập quán ăn gia truyền, cà phê chill và điểm đến được chọn lọc kỹ càng bởi chủ nhà'
              : 'Handpicked authentic eateries, sunset viewpoints, and travel essentials'}
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {Object.entries(categoryMap).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === key
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            <span>{isVi ? item.vi : item.en}</span>
          </button>
        ))}
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {filteredPlaces.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            {isVi ? 'Không tìm thấy địa điểm nào phù hợp.' : 'No locations matched your criteria.'}
          </div>
        ) : (
          filteredPlaces.map((place) => {
            const isBookmarked = bookmarkedIds.includes(place.id);
            const title = isVi ? place.title.vi : place.title.en;
            const tag = isVi ? place.tag.vi : place.tag.en;
            const hostTip = isVi ? place.hostTip.vi : place.hostTip.en;
            const mustTry = place.mustTry ? (isVi ? place.mustTry.vi : place.mustTry.en) : null;

            return (
              <div
                key={place.id}
                id={`place-card-${place.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all hover:border-amber-300 group"
              >
                {/* Photo & Badges */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-semibold text-white">
                      {tag}
                    </span>
                    <button
                      onClick={(e) => toggleBookmark(place.id, e)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all ${
                        isBookmarked
                          ? 'bg-rose-500 text-white shadow-sm'
                          : 'bg-black/40 text-white hover:bg-black/60'
                      }`}
                      aria-label="Save bookmark"
                    >
                      <Heart size={16} className={isBookmarked ? 'fill-white' : ''} />
                    </button>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <span className="flex items-center gap-1 bg-amber-500/90 text-white font-bold px-2 py-0.5 rounded">
                        <Navigation size={11} />
                        {place.distance}
                      </span>
                      <span>•</span>
                      <span className="text-[11px]">{place.walkingTime}</span>
                      <span>•</span>
                      <span className="text-[11px] font-semibold text-amber-200">{place.priceLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {title}
                    </h3>
                    <div className="flex items-start gap-1.5 text-xs text-slate-500 mt-1.5">
                      <MapPin size={13} className="text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{place.address}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Clock size={13} className="text-slate-400 shrink-0" />
                      <span>{place.openingHours}</span>
                    </div>

                    {/* Host Insider Tip */}
                    <div className="mt-3 p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 text-xs text-amber-900 leading-relaxed">
                      <div className="font-bold flex items-center gap-1 mb-1 text-amber-800">
                        <Sparkles size={13} className="text-amber-600" />
                        <span>{isVi ? 'Lời khuyên từ Quản gia:' : 'Host Tip:'}</span>
                      </div>
                      <p className="text-[11.5px] italic text-slate-700">{hostTip}</p>
                    </div>

                    {/* Must Try item */}
                    {mustTry && (
                      <div className="mt-2 text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="font-bold text-slate-800 shrink-0">
                          {isVi ? 'Đề xuất thử:' : 'Must try:'}
                        </span>
                        <span className="text-amber-950 font-medium">{mustTry}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={place.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                    >
                      <Navigation size={13} />
                      <span>{isVi ? 'Chỉ đường Google Maps' : 'Directions'}</span>
                      <ExternalLink size={12} className="opacity-70 ml-0.5" />
                    </a>
                    {place.phone && (
                      <a
                        href={`tel:${place.phone}`}
                        className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                        title={isVi ? 'Gọi quán' : 'Call place'}
                      >
                        <PhoneCall size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
