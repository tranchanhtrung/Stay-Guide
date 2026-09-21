import React, { useState } from 'react';
import { Clock, CheckCircle2, Circle, Luggage, X, AlertCircle, PhoneCall, Sparkles } from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface CheckOutModalProps {
  property: PropertyInfo;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpenReviewBooster: () => void;
}

export const CheckOutModal: React.FC<CheckOutModalProps> = ({
  property,
  language,
  isOpen,
  onClose,
  onOpenReviewBooster,
}) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  if (!isOpen) return null;

  const { checkOut, contacts } = property;
  const isVi = language === 'vi';
  const checklist = isVi ? checkOut.checklist.vi : checkOut.checklist.en;

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((i) => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const allCompleted = checkedItems.length === checklist.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="checkout-modal-card"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-6 text-white text-center relative shrink-0">
          <button
            id="close-checkout-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md mb-2 shadow-inner">
            <Clock size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold font-serif tracking-wide">
            {isVi ? 'Hướng Dẫn Trả Phòng (Check-out)' : 'Check-out Guide & Checklist'}
          </h3>
          <p className="text-xs text-amber-100 mt-1">
            {isVi ? `Giờ trả phòng tiêu chuẩn: Trước ${checkOut.time}` : `Standard Check-out: By ${checkOut.time}`}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Luggage drop announcement */}
          <div className="flex items-start gap-3 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
            <Luggage size={18} className="text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">{isVi ? 'Gửi hành lý miễn phí: ' : 'Free Luggage Storage: '}</span>
              <span>{isVi ? checkOut.luggageDrop.vi : checkOut.luggageDrop.en}</span>
            </div>
          </div>

          {/* Interactive Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {isVi ? 'Danh sách kiểm tra trước khi rời phòng' : 'Departure Checklist'}
              </h4>
              <span className="text-xs font-semibold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-full">
                {checkedItems.length}/{checklist.length}
              </span>
            </div>

            <div className="space-y-2">
              {checklist.map((item, index) => {
                const isChecked = checkedItems.includes(index);
                return (
                  <button
                    key={index}
                    onClick={() => toggleCheck(index)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-slate-800'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                    }`}
                  >
                    {isChecked ? (
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Circle size={18} className="text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-xs leading-relaxed ${isChecked ? 'line-through text-slate-500 font-medium' : ''}`}>
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Late Check-out Notice */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <AlertCircle size={14} className="text-blue-600" />
              <span>{isVi ? 'Cần trả phòng muộn (Late check-out)?' : 'Need Late Check-out?'}</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {isVi
                ? 'Tùy vào tình trạng phòng sẵn có của ngày hôm sau, chúng tôi rất vui lòng hỗ trợ linh hoạt. Vui lòng liên hệ quản gia trước 10:00 sáng.'
                : 'Subject to upcoming room bookings, we are happy to assist flexibly. Please message the butler before 10:00 AM.'}
            </p>
            <a
              href={`tel:${contacts.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 pt-1"
            >
              <PhoneCall size={13} />
              <span>{isVi ? `Gọi Lễ tân: ${contacts.phone}` : `Call Concierge: ${contacts.phone}`}</span>
            </a>
          </div>

          {/* Bottom Review Prompt CTA */}
          <div className="pt-2">
            <button
              id="checkout-give-review-btn"
              onClick={() => {
                onClose();
                onOpenReviewBooster();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <Sparkles size={16} />
              <span>{isVi ? 'Đánh giá & Nhận quà tri ân kỳ nghỉ' : 'Rate Your Stay & Claim Guest Gift'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
