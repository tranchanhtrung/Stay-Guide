import React from 'react';
import { Wifi, KeyRound, Clock, Heart, ChevronRight, Copy, Check } from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface QuickActionCardsProps {
  property: PropertyInfo;
  language: Language;
  onOpenWifi: () => void;
  onOpenCheckIn: () => void;
  onOpenCheckOut: () => void;
  onOpenReview: () => void;
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  property,
  language,
  onOpenWifi,
  onOpenCheckIn,
  onOpenCheckOut,
  onOpenReview,
}) => {
  const [copiedWifi, setCopiedWifi] = React.useState(false);
  const [copiedKey, setCopiedKey] = React.useState(false);

  const isVi = language === 'vi';
  const { wifi, checkIn, checkOut } = property;

  const handleQuickCopyWifi = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(wifi.password);
    setCopiedWifi(true);
    setTimeout(() => setCopiedWifi(false), 2000);
  };

  const handleQuickCopyKey = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(checkIn.doorCode);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {/* 1. Wi-Fi Quick Card */}
      <div
        id="quick-card-wifi"
        onClick={onOpenWifi}
        className="group relative bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
              <Wifi size={20} />
            </div>
            <button
              onClick={handleQuickCopyWifi}
              className="p-1.5 text-[11px] font-bold text-emerald-700 hover:bg-emerald-50 rounded-lg flex items-center gap-1 transition-colors"
              title={isVi ? 'Sao chép mật khẩu' : 'Copy password'}
            >
              {copiedWifi ? <Check size={13} /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copiedWifi ? (isVi ? 'Đã chép' : 'Copied') : (isVi ? 'Chép pass' : 'Copy')}</span>
            </button>
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Wi-Fi Khách sạn
          </div>
          <div className="text-sm font-bold text-slate-800 font-mono truncate mt-0.5" title={wifi.ssid}>
            {wifi.ssid}
          </div>
          <div className="text-xs text-emerald-800 font-extrabold font-mono mt-0.5 truncate">
            {wifi.password}
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-emerald-700">
          <span>{isVi ? 'Mã QR & Chi tiết' : 'QR & Details'}</span>
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* 2. Check-In & Door Code Card */}
      <div
        id="quick-card-checkin"
        onClick={onOpenCheckIn}
        className="group relative bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
              <KeyRound size={20} />
            </div>
            <button
              onClick={handleQuickCopyKey}
              className="p-1.5 text-[11px] font-bold text-indigo-700 hover:bg-indigo-50 rounded-lg flex items-center gap-1 transition-colors"
              title={isVi ? 'Sao chép mã cửa' : 'Copy passcode'}
            >
              {copiedKey ? <Check size={13} /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copiedKey ? (isVi ? 'Đã chép' : 'Copied') : (isVi ? 'Chép mã' : 'Copy')}</span>
            </button>
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {isVi ? 'Mã Khóa Cửa' : 'Door Code'}
          </div>
          <div className="text-base font-black text-indigo-950 font-mono tracking-wider mt-0.5">
            {checkIn.doorCode}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {isVi ? `Nhận phòng: ${checkIn.time}` : `Check-in: ${checkIn.time}`}
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-indigo-700">
          <span>{isVi ? 'Cách mở cửa' : 'Instructions'}</span>
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* 3. Check-Out Card */}
      <div
        id="quick-card-checkout"
        onClick={onOpenCheckOut}
        className="group relative bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
              <Clock size={20} />
            </div>
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
              {checkOut.time}
            </span>
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {isVi ? 'Trả Phòng' : 'Check-Out'}
          </div>
          <div className="text-sm font-bold text-slate-800 mt-0.5">
            {isVi ? `Trước ${checkOut.time}` : `Before ${checkOut.time}`}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {isVi ? 'Giữ hành lý miễn phí' : 'Free luggage hold'}
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-amber-700">
          <span>{isVi ? 'Danh sách kiểm tra' : 'Checklist'}</span>
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* 4. OTA Review Booster Card */}
      <div
        id="quick-card-review"
        onClick={onOpenReview}
        className="group relative bg-gradient-to-br from-rose-500 to-amber-500 p-4 rounded-2xl text-white shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Heart size={20} className="fill-white" />
            </div>
            <span className="text-[10px] font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-white">
              ⭐ 5 Sao
            </span>
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-rose-100">
            {isVi ? 'Đánh Giá & Quà' : 'Review & Perks'}
          </div>
          <div className="text-sm font-bold text-white mt-0.5 leading-snug">
            {isVi ? 'Nhận Voucher 10%' : 'Claim 10% Voucher'}
          </div>
          <div className="text-[11px] text-rose-100 mt-0.5">
            {isVi ? 'Góp ý hoặc hỗ trợ ngay' : 'Feedback & support'}
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-bold text-white">
          <span>{isVi ? 'Đánh giá kỳ nghỉ' : 'Rate your stay'}</span>
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
