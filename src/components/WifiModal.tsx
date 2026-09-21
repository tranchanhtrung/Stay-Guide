import React, { useState } from 'react';
import { Wifi, Copy, Check, QrCode, X, ShieldCheck, Gauge, Smartphone, Sparkles } from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface WifiModalProps {
  property: PropertyInfo;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const WifiModal: React.FC<WifiModalProps> = ({
  property,
  language,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedSsid, setCopiedSsid] = useState(false);

  if (!isOpen) return null;

  const { wifi } = property;
  const isVi = language === 'vi';

  const copyPassword = () => {
    navigator.clipboard.writeText(wifi.password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const copySsid = () => {
    navigator.clipboard.writeText(wifi.ssid);
    setCopiedSsid(true);
    setTimeout(() => setCopiedSsid(false), 2500);
  };

  // Standard Wi-Fi QR format that iOS and Android camera apps automatically scan and join:
  const wifiQrString = `WIFI:S:${wifi.ssid};T:${wifi.security.includes('WPA') ? 'WPA' : 'nopass'};P:${wifi.password};;`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(wifiQrString)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="wifi-modal-card"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all"
      >
        {/* Header Header Pattern */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white text-center relative">
          <button
            id="close-wifi-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md mb-3 shadow-inner">
            <Wifi size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold font-serif tracking-wide">
            {isVi ? 'Kết Nối Wi-Fi Siêu Tốc' : 'High-Speed Wi-Fi'}
          </h3>
          <p className="text-xs text-emerald-100 mt-1 flex items-center justify-center gap-1.5">
            <Gauge size={14} />
            <span>{wifi.speed}</span>
            <span className="opacity-60">•</span>
            <ShieldCheck size={14} />
            <span>{wifi.security}</span>
          </p>
        </div>

        <div className="p-6 space-y-5">
          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <div className="relative p-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <img
                src={qrCodeUrl}
                alt={`Wi-Fi QR Code for ${wifi.ssid}`}
                className="w-44 h-44 object-contain rounded"
                onError={(e) => {
                  // Fallback if offline
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-white/80 rounded">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                  {isVi ? 'Quét để kết nối' : 'Scan to connect'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-600 font-medium text-center">
              <Smartphone size={14} className="text-emerald-600" />
              <span>{isVi ? 'Mở Camera điện thoại để quét mã kết nối tự động' : 'Open phone Camera & scan to connect instantly'}</span>
            </div>
          </div>

          {/* Credentials Display with 1-Click Copy */}
          <div className="space-y-3">
            {/* SSID */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-left">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {isVi ? 'Tên Mạng (SSID)' : 'Network Name'}
                </div>
                <div className="text-sm font-bold text-slate-800 font-mono mt-0.5 select-all">
                  {wifi.ssid}
                </div>
              </div>
              <button
                id="copy-ssid-btn"
                onClick={copySsid}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-all active:scale-95"
              >
                {copiedSsid ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copiedSsid ? (isVi ? 'Đã sao chép' : 'Copied') : (isVi ? 'Sao chép' : 'Copy')}</span>
              </button>
            </div>

            {/* Password */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-left">
                <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                  {isVi ? 'Mật Khẩu (Password)' : 'Password'}
                </div>
                <div className="text-base font-extrabold text-emerald-950 font-mono mt-0.5 tracking-wide select-all">
                  {wifi.password}
                </div>
              </div>
              <button
                id="copy-wifi-password-btn"
                onClick={copyPassword}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all active:scale-95"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? (isVi ? 'Đã chép!' : 'Copied!') : (isVi ? 'Chép mật khẩu' : 'Copy Password')}</span>
              </button>
            </div>
          </div>

          {/* Host Notes */}
          <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
            <Sparkles size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <span>{isVi ? wifi.notes.vi : wifi.notes.en}</span>
          </div>

          <button
            id="done-wifi-btn"
            onClick={onClose}
            className="w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            {isVi ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
