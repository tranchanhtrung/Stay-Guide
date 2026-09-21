import React, { useState } from 'react';
import { KeyRound, Copy, Check, MapPin, ExternalLink, X, Clock, ShieldCheck } from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface CheckInModalProps {
  property: PropertyInfo;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const CheckInModal: React.FC<CheckInModalProps> = ({
  property,
  language,
  isOpen,
  onClose,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const { checkIn, address, googleMapsUrl, roomName } = property;
  const isVi = language === 'vi';

  const copyCode = () => {
    navigator.clipboard.writeText(checkIn.doorCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="checkin-modal-card"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-700 to-blue-800 p-6 text-white text-center relative shrink-0">
          <button
            id="close-checkin-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md mb-2 shadow-inner">
            <KeyRound size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold font-serif tracking-wide">
            {isVi ? 'Nhận Phòng & Mở Khóa Cửa' : 'Check-in & Smart Lock Access'}
          </h3>
          <p className="text-xs text-indigo-100 mt-1 flex items-center justify-center gap-2">
            <Clock size={14} />
            <span>{isVi ? `Giờ nhận phòng: từ ${checkIn.time}` : `Check-in time: from ${checkIn.time}`}</span>
            <span>•</span>
            <span>{roomName}</span>
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Smart Lock Passcode Box */}
          <div className="p-4 bg-indigo-50/70 border-2 border-indigo-200/80 rounded-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-800">
              {isVi ? 'Mã Mở Khóa Cửa Thông Minh (Door Code)' : 'Keyless Smart Lock Passcode'}
            </div>
            <div className="text-3xl font-black font-mono text-indigo-950 my-2 tracking-widest select-all">
              {checkIn.doorCode}
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                id="copy-door-code-btn"
                onClick={copyCode}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all active:scale-95"
              >
                {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCode ? (isVi ? 'Đã sao chép mã!' : 'Code Copied!') : (isVi ? 'Sao chép mã số' : 'Copy Passcode')}</span>
              </button>
            </div>
          </div>

          {/* Keybox backup if exists */}
          {checkIn.keyboxCode && (
            <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
              <span className="font-medium text-slate-700">
                {isVi ? 'Mã hộp khóa dự phòng (Lockbox):' : 'Backup Lockbox Code:'}
              </span>
              <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-300">
                {checkIn.keyboxCode}
              </span>
            </div>
          )}

          {/* Step-by-Step Instructions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck size={16} className="text-indigo-600" />
              <span>{isVi ? 'Các bước mở cửa & vào phòng:' : 'Step-by-step entry instructions:'}</span>
            </h4>
            <div className="space-y-2.5">
              {(isVi ? checkIn.instructions.vi : checkIn.instructions.en).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Address & Map button */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin size={16} className="text-rose-500 shrink-0 mt-0.5" />
              <span className="font-medium text-slate-800">{address}</span>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 shadow-sm transition-colors"
            >
              <ExternalLink size={14} className="text-indigo-600" />
              <span>{isVi ? 'Chỉ đường trên Google Maps' : 'Get Directions on Google Maps'}</span>
            </a>
          </div>

          <button
            id="close-checkin-btn"
            onClick={onClose}
            className="w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            {isVi ? 'Đã hiểu' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
};
