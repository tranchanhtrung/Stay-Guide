import React, { useState } from 'react';
import { 
  Moon, Ban, Footprints, Leaf, MessageCircle, PhoneCall, 
  Send, CheckCircle2, Clock, ShieldAlert, Sparkles, Coffee, 
  Bike, Shirt, AlertCircle 
} from 'lucide-react';
import { HouseRule, GuestRequestOption, Language, PropertyInfo } from '../types';

interface ServicesSectionProps {
  rules: HouseRule[];
  requestOptions: GuestRequestOption[];
  language: Language;
  property: PropertyInfo;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  rules,
  requestOptions,
  language,
  property,
}) => {
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [requestNote, setRequestNote] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const isVi = language === 'vi';
  const { contacts, roomName } = property;

  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Moon':
        return <Moon size={20} className="text-indigo-600" />;
      case 'Ban':
        return <Ban size={20} className="text-rose-600" />;
      case 'Footprints':
        return <Footprints size={20} className="text-amber-600" />;
      case 'Leaf':
        return <Leaf size={20} className="text-emerald-600" />;
      default:
        return <AlertCircle size={20} className="text-slate-600" />;
    }
  };

  const getOptionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={18} className="text-amber-600" />;
      case 'Coffee':
        return <Coffee size={18} className="text-orange-600" />;
      case 'Bike':
        return <Bike size={18} className="text-teal-600" />;
      case 'Shirt':
        return <Shirt size={18} className="text-indigo-600" />;
      case 'Clock':
        return <Clock size={18} className="text-blue-600" />;
      default:
        return <Send size={18} className="text-slate-600" />;
    }
  };

  const handleSendServiceRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRequest) return;
    setRequestSubmitted(true);
  };

  return (
    <section id="services-section" className="scroll-mt-20 space-y-8">
      {/* 1. Quick Guest Service Request Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
          <Sparkles size={14} />
          <span>{isVi ? 'Dịch vụ buồng phòng tức thì' : 'Instant In-Room Request'}</span>
        </div>
        <h3 className="text-xl font-bold font-serif">
          {isVi ? 'Yêu Cầu Tiện Nghi & Hỗ Trợ Lễ Tân' : 'Request Extra Amenities & Services'}
        </h3>
        <p className="text-xs text-slate-300 mt-1">
          {isVi
            ? `Chạm vào tiện nghi cần hỗ trợ cho ${roomName}, nhân viên phục vụ trong 10-15 phút`
            : `Select an item for ${roomName}, our staff delivers within 10-15 minutes`}
        </p>

        {!requestSubmitted ? (
          <form onSubmit={handleSendServiceRequest} className="mt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {requestOptions.map((opt) => {
                const isSelected = selectedRequest === opt.id;
                const title = isVi ? opt.title.vi : opt.title.en;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setSelectedRequest(opt.id)}
                    className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-sm'
                        : 'bg-white/10 border-white/10 text-slate-200 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-1">
                      <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        {getOptionIcon(opt.icon)}
                      </div>
                      <span className="text-xs font-bold truncate">{title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 bg-black/30 px-2 py-0.5 rounded-full">
                      {opt.timeEstimate}
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedRequest && (
              <div className="space-y-2.5 animate-fade-in">
                <input
                  type="text"
                  value={requestNote}
                  onChange={(e) => setRequestNote(e.target.value)}
                  placeholder={
                    isVi
                      ? 'Ghi chú thêm nếu có (ví dụ: cần 2 khăn lớn, mang sau 15:00...)'
                      : 'Additional notes (e.g. 2 large towels, bring at 3:00 PM...)'
                  }
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  id="send-room-service-request-btn"
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>{isVi ? 'Gửi yêu cầu ngay tới Quản gia' : 'Send Request to Concierge'}</span>
                </button>
              </div>
            )}
          </form>
        ) : (
          <div className="mt-5 p-5 bg-emerald-950/60 border border-emerald-500/50 rounded-2xl text-center space-y-2 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 size={24} />
            </div>
            <h4 className="text-sm font-bold text-white">
              {isVi ? 'Đã tiếp nhận yêu cầu thành công!' : 'Request Dispatched Successfully!'}
            </h4>
            <p className="text-xs text-slate-300">
              {isVi
                ? 'Nhân viên lễ tân đã nhận được thông tin và đang chuẩn bị mang lên phòng bạn.'
                : 'Front desk received your request and is bringing the items up shortly.'}
            </p>
            <button
              onClick={() => {
                setRequestSubmitted(false);
                setSelectedRequest(null);
                setRequestNote('');
              }}
              className="text-xs text-amber-400 hover:underline pt-2 inline-block font-semibold"
            >
              {isVi ? '+ Gửi yêu cầu khác' : '+ Send another request'}
            </button>
          </div>
        )}
      </div>

      {/* 2. House Rules */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
          {isVi ? 'Văn hóa lưu trú văn minh' : 'General Etiquette'}
        </div>
        <h3 className="text-2xl font-bold font-serif text-slate-900 tracking-tight mb-2">
          {isVi ? 'Quy Định & Lưu Ý Tại Chỗ Nghỉ' : 'House Rules & Courtesies'}
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          {isVi
            ? 'Một vài lưu ý nhỏ giúp giữ gìn không gian thư thái cho bạn và tất cả du khách'
            : 'A few mindful rules to ensure a tranquil and harmonious atmosphere for all guests'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {rules.map((rule) => {
            const title = isVi ? rule.title.vi : rule.title.en;
            const description = isVi ? rule.description.vi : rule.description.en;
            return (
              <div
                key={rule.id}
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                  {getRuleIcon(rule.iconName)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {title}
                  </h4>
                  <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Direct Host Contacts Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              {contacts.hostName.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{contacts.hostName}</div>
              <div className="text-xs text-amber-700 font-medium">
                {isVi ? contacts.hostRole.vi : contacts.hostRole.en}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {contacts.receptionHours}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${contacts.phone.replace(/\s+/g, '')}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
            >
              <PhoneCall size={14} />
              <span>{contacts.phone}</span>
            </a>
            <a
              href={`https://zalo.me/${contacts.zaloPhone.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
            >
              <MessageCircle size={14} />
              <span>Zalo</span>
            </a>
          </div>
        </div>

        {/* Emergency Row */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-rose-700 font-medium">
            <ShieldAlert size={14} />
            <span>{isVi ? 'Hotline khẩn cấp y tế / an ninh:' : 'Emergency Hotline:'}</span>
          </span>
          <span className="font-bold text-slate-800">{contacts.emergencyPhone}</span>
        </div>
      </div>
    </section>
  );
};
