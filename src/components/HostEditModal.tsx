import React, { useState } from 'react';
import { 
  X, Save, Printer, QrCode, Check, RefreshCw, 
  Building2, Wifi, KeyRound, Phone, Sparkles 
} from 'lucide-react';
import { PropertyInfo, Language } from '../types';

interface HostEditModalProps {
  property: PropertyInfo;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: PropertyInfo) => void;
}

export const HostEditModal: React.FC<HostEditModalProps> = ({
  property,
  language,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<PropertyInfo>(property);
  const [activeTab, setActiveTab] = useState<'editor' | 'printCard'>('editor');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state when modal opens or property changes
  React.useEffect(() => {
    setFormData(property);
  }, [property, isOpen]);

  if (!isOpen) return null;

  const isVi = language === 'vi';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  // QR Code URL pointing to the welcome book
  const appUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=8&data=${encodeURIComponent(appUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        id="host-edit-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif">
                {isVi ? 'Quản Trị Cẩm Nang Kỹ Thuật Số' : 'Host Digital Welcome Book Manager'}
              </h3>
              <p className="text-xs text-slate-400">
                {isVi ? 'Tùy chỉnh thông tin phòng, Wi-Fi & in thẻ QR đầu giường' : 'Customize room info, Wi-Fi & print bedside tent card'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 shrink-0">
          <button
            onClick={() => setActiveTab('editor')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'editor'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {isVi ? '📝 Chỉnh Sửa Thông Tin' : '📝 Edit Property Details'}
          </button>
          <button
            onClick={() => setActiveTab('printCard')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'printCard'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <QrCode size={14} />
            <span>{isVi ? '🖨️ In Thẻ QR Đặt Bàn Khách' : '🖨️ Printable QR Tent Card'}</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'editor' ? (
            <form onSubmit={handleSave} className="space-y-5">
              {/* Basic Property Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {isVi ? 'Thông tin phòng & Khách lưu trú' : 'Stay & Room Information'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Tên Chỗ Nghỉ (VI)' : 'Property Name (VI)'}
                    </label>
                    <input
                      type="text"
                      value={formData.name.vi}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: { ...formData.name, vi: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Tên Chỗ Nghỉ (EN)' : 'Property Name (EN)'}
                    </label>
                    <input
                      type="text"
                      value={formData.name.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: { ...formData.name, en: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Tên / Số Phòng' : 'Room / Suite Name'}
                    </label>
                    <input
                      type="text"
                      value={formData.roomName}
                      onChange={(e) =>
                        setFormData({ ...formData, roomName: e.target.value })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Tên Khách Lưu Trú (Greeting)' : 'Guest Name Display'}
                    </label>
                    <input
                      type="text"
                      value={formData.guestName}
                      onChange={(e) =>
                        setFormData({ ...formData, guestName: e.target.value })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Wi-Fi Credentials */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <Wifi size={14} />
                  <span>{isVi ? 'Thông số Wi-Fi' : 'Wi-Fi Configuration'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Tên mạng (SSID)' : 'Network Name (SSID)'}
                    </label>
                    <input
                      type="text"
                      value={formData.wifi.ssid}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          wifi: { ...formData.wifi, ssid: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Mật khẩu Wi-Fi' : 'Wi-Fi Password'}
                    </label>
                    <input
                      type="text"
                      value={formData.wifi.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          wifi: { ...formData.wifi, password: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-mono font-bold text-emerald-950 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Smart Lock Door Code */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                  <KeyRound size={14} />
                  <span>{isVi ? 'Mã khóa cửa thông minh' : 'Smart Lock Code'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Mã số cửa (Door Code)' : 'Door Code'}
                    </label>
                    <input
                      type="text"
                      value={formData.checkIn.doorCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          checkIn: { ...formData.checkIn, doorCode: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-mono font-black text-indigo-950 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Giờ trả phòng (Check-out)' : 'Check-out Time'}
                    </label>
                    <input
                      type="text"
                      value={formData.checkOut.time}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          checkOut: { ...formData.checkOut, time: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Hotline & Contacts */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Phone size={14} />
                  <span>{isVi ? 'Thông tin Quản gia / Hotline' : 'Butler & Concierge Hotline'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Tên Quản gia / Lễ tân' : 'Host / Butler Name'}
                    </label>
                    <input
                      type="text"
                      value={formData.contacts.hostName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contacts: { ...formData.contacts, hostName: e.target.value },
                        })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      {isVi ? 'Số điện thoại / Zalo' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="text"
                      value={formData.contacts.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contacts: {
                            ...formData.contacts,
                            phone: e.target.value,
                            zaloPhone: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-bold focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Announcement */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <label className="block text-xs font-medium text-slate-700">
                  {isVi ? 'Thông báo nổi bật gửi tới khách (Announcement)' : 'Guest Announcement Banner'}
                </label>
                <input
                  type="text"
                  value={formData.announcement?.vi || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      announcement: {
                        vi: e.target.value,
                        en: e.target.value,
                        active: true,
                      },
                    })
                  }
                  placeholder={
                    isVi
                      ? 'Ví dụ: Bữa sáng được phục vụ từ 07:00 - 10:00 tại tầng trệt...'
                      : 'Example: Breakfast served 7:00 - 10:00 AM in courtyard...'
                  }
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {isVi ? 'Hủy' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  id="save-host-changes-btn"
                  className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-600 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  {savedSuccess ? <Check size={14} /> : <Save size={14} />}
                  <span>{savedSuccess ? (isVi ? 'Đã lưu!' : 'Saved!') : (isVi ? 'Lưu thay đổi' : 'Save Changes')}</span>
                </button>
              </div>
            </form>
          ) : (
            /* PRINTABLE TENT CARD TAB */
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900">
                <div>
                  <span className="font-bold">{isVi ? 'Mẹo từ Touch Stay: ' : 'Touch Stay Tip: '}</span>
                  <span>
                    {isVi
                      ? 'In trang này ra và lồng khung mica A5 đặt tại bàn trà hoặc đầu giường phòng ngủ để khách quét mã ngay khi nhận phòng!'
                      : 'Print and display this in an A5 acrylic stand on the nightstand or desk for guests to scan upon arrival!'}
                  </span>
                </div>
                <button
                  onClick={handlePrint}
                  id="print-tent-card-btn"
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <Printer size={15} />
                  <span>{isVi ? 'In Thẻ Ngay' : 'Print Card'}</span>
                </button>
              </div>

              {/* Physical Tent Card Mockup */}
              <div
                id="printable-welcome-card"
                className="max-w-md mx-auto bg-white p-8 rounded-3xl border-2 border-slate-300 shadow-xl text-center space-y-5 print:shadow-none print:border-none print:p-4"
              >
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">
                    DIGITAL WELCOME BOOK • CẨM NANG SỐ
                  </div>
                  <h2 className="text-2xl font-black font-serif text-slate-900 mt-1">
                    {formData.name.vi}
                  </h2>
                  <div className="inline-block mt-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-700">
                    {formData.roomName}
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <img
                    src={qrCodeUrl}
                    alt="Scan to open Welcome Book"
                    className="w-48 h-48 object-contain bg-white p-2 rounded-xl shadow-xs"
                  />
                  <div className="mt-3 text-xs font-bold text-slate-800">
                    {isVi ? 'Quét mã để mở cẩm nang phòng & khám phá' : 'Scan to open guest manual & local guide'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {isVi ? 'Không cần cài đặt ứng dụng' : 'No app download required'}
                  </div>
                </div>

                {/* Wi-Fi Fast Access */}
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-left space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-800 font-semibold">{isVi ? 'Wi-Fi:' : 'Wi-Fi Name:'}</span>
                    <span className="font-mono font-bold text-slate-900">{formData.wifi.ssid}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-emerald-200/60">
                    <span className="text-emerald-800 font-semibold">{isVi ? 'Mật khẩu:' : 'Password:'}</span>
                    <span className="font-mono font-black text-emerald-950 text-sm">{formData.wifi.password}</span>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span>{isVi ? 'Lễ tân / Quản gia:' : 'Reception Desk:'}</span>
                  <span className="font-bold text-slate-800">{formData.contacts.phone}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
