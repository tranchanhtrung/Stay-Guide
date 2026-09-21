import React, { useState } from 'react';
import { Star, X, Check, Copy, Heart, MessageSquare, PhoneCall, Gift, Send, ShieldCheck, ThumbsUp } from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface ReviewBoosterModalProps {
  property: PropertyInfo;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewBoosterModal: React.FC<ReviewBoosterModalProps> = ({
  property,
  language,
  isOpen,
  onClose,
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [copiedReview, setCopiedReview] = useState(false);
  const [issueCategory, setIssueCategory] = useState<string>('cleanliness');
  const [issueFeedback, setIssueFeedback] = useState('');
  const [issueSubmitted, setIssueSubmitted] = useState(false);

  if (!isOpen) return null;

  const isVi = language === 'vi';
  const { contacts, otaLinks, name } = property;

  const sampleReviewVi = `Kỳ nghỉ tuyệt vời ngoài mong đợi tại ${name.vi}! Phòng ốc sạch sẽ tinh tươm, tiện nghi đầy đủ, cẩm nang số hướng dẫn rất chi tiết. Quản gia chu đáo, hỗ trợ nhiệt tình 24/7. Nhất định sẽ quay lại và giới thiệu cho bạn bè! 5 sao ⭐⭐⭐⭐⭐`;
  const sampleReviewEn = `Outstanding stay at ${name.en}! Extremely clean, comfortable amenities, and the digital guidebook made exploring effortless. The hosts were incredibly welcoming and helpful. Highly recommended 5/5 stars!`;

  const copySampleReview = () => {
    navigator.clipboard.writeText(isVi ? sampleReviewVi : sampleReviewEn);
    setCopiedReview(true);
    setTimeout(() => setCopiedReview(false), 2500);
  };

  const handleSendIssue = (e: React.FormEvent) => {
    e.preventDefault();
    setIssueSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="review-booster-modal-card"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-br from-amber-500 via-rose-500 to-rose-600 p-6 text-white text-center relative shrink-0">
          <button
            id="close-review-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md mb-2 shadow-inner">
            <Heart size={28} className="text-white fill-white" />
          </div>
          <h3 className="text-xl font-bold font-serif tracking-wide">
            {isVi ? 'Trải Nghiệm Lưu Trú Của Quý Khách' : 'How Was Your Stay Experience?'}
          </h3>
          <p className="text-xs text-rose-100 mt-1 max-w-xs mx-auto">
            {isVi
              ? 'Ý kiến của bạn là động lực để chúng tôi hoàn thiện dịch vụ mỗi ngày'
              : 'Your valuable feedback helps us refine our hospitality every day'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Star Rating Interactive Selector */}
          <div className="text-center bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              {isVi ? 'Vui lòng chọn mức độ hài lòng của bạn:' : 'Please rate your overall experience:'}
            </p>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                const currentRating = hoverRating || rating || 0;
                const isFilled = star <= currentRating;
                return (
                  <button
                    key={star}
                    id={`star-rate-${star}`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => {
                      setRating(star);
                      setIssueSubmitted(false);
                    }}
                    className="p-1.5 transition-transform hover:scale-125 active:scale-95 focus:outline-none"
                    aria-label={`${star} star`}
                  >
                    <Star
                      size={34}
                      className={`transition-colors ${
                        isFilled
                          ? 'text-amber-400 fill-amber-400 drop-shadow-sm'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <div className="text-xs font-bold text-slate-700 mt-2.5 min-h-[20px]">
              {rating === 5 && (isVi ? '🌟 Xuất sắc & Tuyệt vời!' : '🌟 Outstanding & Exceeded Expectations!')}
              {rating === 4 && (isVi ? '✨ Rất tốt & Hài lòng' : '✨ Very Good & Satisfied')}
              {rating && rating < 4 && (isVi ? '⚠️ Có điểm cần hỗ trợ giải quyết ngay' : '⚠️ Need attention & room assistance')}
              {!rating && (isVi ? 'Chạm vào sao để đánh giá' : 'Tap a star to rate')}
            </div>
          </div>

          {/* BRANCH 1: HIGH RATING (4-5 STARS) -> OTA BOOSTING */}
          {rating && rating >= 4 && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-2">
                  <ThumbsUp size={14} />
                  <span>{isVi ? 'Cảm ơn quý khách!' : 'Thank you so much!'}</span>
                </div>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {isVi
                    ? 'Nếu bạn hài lòng, xin hãy để lại đánh giá 5 sao trên các nền tảng du lịch để hỗ trợ đội ngũ villa nhé!'
                    : 'If you loved your stay, sharing a 5-star review on booking platforms means the world to our team!'}
                </p>
              </div>

              {/* Sample Review Generator with 1-Click Copy */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-amber-600" />
                    <span>{isVi ? 'Mẫu nhận xét nhanh (sẵn sàng sao chép):' : 'Quick review template (ready to copy):'}</span>
                  </span>
                  <button
                    id="copy-review-sample-btn"
                    onClick={copySampleReview}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-emerald-700 bg-emerald-100/70 hover:bg-emerald-200 rounded-lg transition-colors"
                  >
                    {copiedReview ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedReview ? (isVi ? 'Đã sao chép!' : 'Copied!') : (isVi ? 'Sao chép' : 'Copy')}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/80 italic leading-relaxed select-all">
                  "{isVi ? sampleReviewVi : sampleReviewEn}"
                </p>
              </div>

              {/* OTA Direct Links Buttons */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider text-center">
                  {isVi ? 'Chọn nền tảng bạn đã đặt phòng:' : 'Select where you booked your stay:'}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={otaLinks.airbnb || 'https://airbnb.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl text-xs font-bold text-rose-700 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span>Airbnb (5 Sao)</span>
                  </a>
                  <a
                    href={otaLinks.booking || 'https://booking.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-xs font-bold text-blue-800 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <span>Booking.com (10/10)</span>
                  </a>
                  <a
                    href={otaLinks.agoda || 'https://agoda.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl text-xs font-bold text-teal-800 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                    <span>Agoda</span>
                  </a>
                  <a
                    href={otaLinks.google || 'https://maps.google.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl text-xs font-bold text-amber-900 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Guest Gift Perk */}
              <div className="p-3.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white text-xs flex items-center gap-3 shadow-sm">
                <Gift size={24} className="shrink-0 text-amber-100" />
                <div className="leading-relaxed">
                  <span className="font-bold">{isVi ? 'Quà tri ân đặc biệt: ' : 'Guest Loyalty Gift: '}</span>
                  <span>
                    {isVi
                      ? 'Chụp màn hình đánh giá và gửi Zalo quản gia để nhận ngay voucher giảm 10% cho kỳ nghỉ sau!'
                      : 'Screenshot your review and message our butler to unlock a 10% voucher for your next visit!'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* BRANCH 2: LOW RATING (1-3 STARS) -> INTERNAL RECOVERY INTERCEPT */}
          {rating && rating <= 3 && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200 text-left">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs mb-1">
                  <ShieldCheck size={16} className="text-rose-600" />
                  <span>{isVi ? 'Cam kết xử lý ngay trong 5 - 10 phút!' : 'Instant Host Resolution Protocol'}</span>
                </div>
                <p className="text-xs text-rose-900 leading-relaxed">
                  {isVi
                    ? 'Chúng tôi vô cùng xin lỗi vì trải nghiệm chưa hoàn hảo. Đừng ngần ngại cho chúng tôi biết vấn đề bạn gặp phải để quản gia hỗ trợ khắc phục ngay lập tức trước khi bạn rời đi!'
                    : 'We are truly sorry that your stay fell short. Please let us know what went wrong so we can make it right immediately before you check out!'}
                </p>
              </div>

              {!issueSubmitted ? (
                <form onSubmit={handleSendIssue} className="space-y-3">
                  <div className="text-xs font-semibold text-slate-700">
                    {isVi ? 'Vấn đề bạn đang gặp phải thuộc khu vực nào?' : 'What issue can we resolve for you?'}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'ac', labelVi: '❄️ Điều hòa / Không mát', labelEn: '❄️ AC / Room climate' },
                      { id: 'clean', labelVi: '🧹 Vệ sinh / Khăn tắm', labelEn: '🧹 Housekeeping / Towels' },
                      { id: 'noise', labelVi: '🔊 Tiếng ồn xung quanh', labelEn: '🔊 Noise disturbance' },
                      { id: 'wifi', labelVi: '📶 Wi-Fi chập chờn', labelEn: '📶 Wi-Fi connection' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setIssueCategory(opt.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          issueCategory === opt.id
                            ? 'bg-rose-50 border-rose-300 font-bold text-rose-900'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {isVi ? opt.labelVi : opt.labelEn}
                      </button>
                    ))}
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      value={issueFeedback}
                      onChange={(e) => setIssueFeedback(e.target.value)}
                      placeholder={
                        isVi
                          ? 'Mô tả chi tiết vấn đề phòng (ví dụ: cần thêm khăn tắm, vòi sen nước yếu...)'
                          : 'Describe your issue (e.g. need extra towels, water heater check...)'
                      }
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      id="submit-issue-btn"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                    >
                      <Send size={14} />
                      <span>{isVi ? 'Gửi yêu cầu khẩn cấp cho Quản gia' : 'Send Emergency Request to Host'}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    {isVi ? 'Đã chuyển thông tin tới Quản gia trưởng!' : 'Request Sent to Head Concierge!'}
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {isVi
                      ? 'Nhân viên đang di chuyển tới phòng bạn để hỗ trợ xử lý ngay. Cảm ơn sự thông cảm của quý khách!'
                      : 'A staff member is on the way to your room right now to assist. Thank you for your patience!'}
                  </p>
                </div>
              )}

              {/* Direct Hotline / Zalo fallback */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-600 font-medium">
                  {isVi ? 'Hoặc gọi hotline trực tiếp:' : 'Or call direct hotline:'}
                </span>
                <a
                  href={`tel:${contacts.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-bold text-rose-700 hover:text-rose-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200"
                >
                  <PhoneCall size={14} />
                  <span>{contacts.phone}</span>
                </a>
              </div>
            </div>
          )}

          <button
            id="close-review-modal-bottom-btn"
            onClick={onClose}
            className="w-full py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            {isVi ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
