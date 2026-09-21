import React, { useState } from 'react';
import { 
  AirVent, Tv, ShowerHead, Shirt, Flame, Lock, ChevronDown, 
  ChevronUp, AlertTriangle, Leaf, HelpCircle, PhoneCall, CheckCircle2 
} from 'lucide-react';
import { ApplianceGuide, Language, PropertyInfo } from '../types';

interface AppliancesSectionProps {
  appliances: ApplianceGuide[];
  language: Language;
  property: PropertyInfo;
  searchTerm?: string;
}

export const AppliancesSection: React.FC<AppliancesSectionProps> = ({
  appliances,
  language,
  property,
  searchTerm = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(appliances[0]?.id || null);

  const isVi = language === 'vi';

  const categoryMap: Record<string, { vi: string; en: string }> = {
    all: { vi: 'Tất cả thiết bị', en: 'All Appliances' },
    climate: { vi: 'Điều hòa & Không khí', en: 'AC & Climate' },
    entertainment: { vi: 'Smart TV & Phim ảnh', en: 'Smart TV & Movies' },
    bathroom: { vi: 'Nước nóng & Phòng tắm', en: 'Hot Water & Bath' },
    kitchen: { vi: 'Bếp & Máy giặt', en: 'Kitchen & Laundry' },
    safety: { vi: 'Két sắt an toàn', en: 'Safe & Security' },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AirVent':
        return <AirVent size={22} className="text-sky-600" />;
      case 'Tv':
        return <Tv size={22} className="text-purple-600" />;
      case 'ShowerHead':
        return <ShowerHead size={22} className="text-teal-600" />;
      case 'Shirt':
        return <Shirt size={22} className="text-indigo-600" />;
      case 'Flame':
        return <Flame size={22} className="text-amber-600" />;
      case 'Lock':
        return <Lock size={22} className="text-emerald-600" />;
      default:
        return <HelpCircle size={22} className="text-slate-600" />;
    }
  };

  const filteredAppliances = appliances.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const title = isVi ? item.title.vi : item.title.en;
    const summary = isVi ? item.summary.vi : item.summary.en;
    const matchesSearch = !searchTerm || 
      title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="appliances-section" className="scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
            {isVi ? 'Thay thế sổ tay truyền thống' : 'Digital Room Manual'}
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 tracking-tight">
            {isVi ? 'Hướng Dẫn Sử Dụng Thiết Bị' : 'In-Room Appliances Guide'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isVi
              ? 'Chi tiết từng bước vận hành thiết bị trong phòng thuận tiện và dễ dàng'
              : 'Step-by-step instructions to effortlessly operate your room amenities'}
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {Object.entries(categoryMap).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === key
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {isVi ? label.vi : label.en}
          </button>
        ))}
      </div>

      {/* Appliances List */}
      <div className="space-y-3 mt-2">
        {filteredAppliances.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            {isVi ? 'Không tìm thấy thiết bị phù hợp với tìm kiếm.' : 'No appliances matched your query.'}
          </div>
        ) : (
          filteredAppliances.map((appliance) => {
            const isExpanded = expandedId === appliance.id;
            const title = isVi ? appliance.title.vi : appliance.title.en;
            const summary = isVi ? appliance.summary.vi : appliance.summary.en;
            const steps = isVi ? appliance.steps.vi : appliance.steps.en;
            const troubleshooting = appliance.troubleshooting ? (isVi ? appliance.troubleshooting.vi : appliance.troubleshooting.en) : null;
            const ecoTip = appliance.ecoTip ? (isVi ? appliance.ecoTip.vi : appliance.ecoTip.en) : null;

            return (
              <div
                key={appliance.id}
                id={`appliance-card-${appliance.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleExpand(appliance.id)}
                  className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-slate-50/50"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 shadow-xs">
                      {getIcon(appliance.iconName)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {summary}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 ml-2">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Accordion Expanded Body */}
                {isExpanded && (
                  <div className="border-t border-slate-100 p-5 bg-gradient-to-b from-slate-50/50 to-white space-y-4 animate-fade-in">
                    {/* Visual Image if available */}
                    <div className="relative rounded-xl overflow-hidden h-44 border border-slate-200">
                      <img
                        src={appliance.image}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                        <span className="text-xs text-white/90 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                          {summary}
                        </span>
                      </div>
                    </div>

                    {/* Step-by-Step Instructions */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>{isVi ? 'Các bước sử dụng:' : 'Step-by-step operation:'}</span>
                      </h4>
                      <div className="space-y-2">
                        {steps.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed shadow-xs"
                          >
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Troubleshooting Box */}
                    {troubleshooting && troubleshooting.length > 0 && (
                      <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2 text-xs">
                        <div className="font-bold text-amber-900 flex items-center gap-1.5">
                          <AlertTriangle size={15} className="text-amber-600" />
                          <span>{isVi ? 'Xử lý sự cố thường gặp:' : 'Troubleshooting & Tips:'}</span>
                        </div>
                        <ul className="space-y-1.5 text-amber-800 list-disc list-inside">
                          {troubleshooting.map((tip, idx) => (
                            <li key={idx} className="leading-relaxed pl-1">
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Eco-Friendly Tip */}
                    {ecoTip && (
                      <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                        <Leaf size={16} className="text-emerald-600 shrink-0" />
                        <span>{ecoTip}</span>
                      </div>
                    )}

                    {/* Contact Reception if needed */}
                    <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
                      <span>{isVi ? 'Vẫn gặp sự cố với thiết bị?' : 'Still need assistance?'}</span>
                      <a
                        href={`tel:${property.contacts.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800"
                      >
                        <PhoneCall size={13} />
                        <span>{isVi ? 'Gọi Lễ tân hỗ trợ' : 'Call Butler Support'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
