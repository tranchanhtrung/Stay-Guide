import { PropertyInfo, ApplianceGuide, LocalPlace, HouseRule, GuestRequestOption } from '../types';

export const PROPERTY_PRESETS: PropertyInfo[] = [
  {
    id: 'hoi-an-villa',
    name: {
      vi: 'An Nam Heritage Villa & Retreat',
      en: 'An Nam Heritage Villa & Retreat',
    },
    tagline: {
      vi: 'Không gian nghỉ dưỡng thanh bình giữa lòng phố cổ Hội An',
      en: 'A serene boutique retreat in the heart of historic Hoi An',
    },
    address: '148/6 Trần Nhân Tông, Cẩm Châu, Hội An, Quảng Nam',
    googleMapsUrl: 'https://maps.google.com/?q=Hoi+An+Ancient+Town',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    roomName: 'Suite 302 - Lotus Balcony & Pool View',
    guestName: 'Gia đình anh Tuấn (Mr. Tuan & Family)',
    wifi: {
      ssid: 'AnNam_Villa_Guest_5G',
      password: 'annamheritage2026',
      speed: '180 Mbps High-Speed Fiber',
      security: 'WPA3 / WPA2',
      notes: {
        vi: 'Sóng 5GHz phủ đều toàn bộ phòng và khu vực hồ bơi. Nếu thiết bị cũ không thấy sóng 5G, vui lòng chọn AnNam_Villa_2.4G.',
        en: 'High-speed 5GHz network covers your suite and pool area. If your device only supports 2.4GHz, please connect to AnNam_Villa_2.4G.',
      },
    },
    checkIn: {
      time: '14:00',
      doorCode: '3028 #',
      keyboxCode: '7412',
      instructions: {
        vi: [
          'Chạm tay vào màn hình cảm ứng khóa điện tử để đèn sáng lên.',
          'Nhập mật mã 3028 sau đó bấm phím # (nghe tiếng bíp dài là cửa mở).',
          'Cắm thẻ khóa vào khe cắm nguồn bên tay trái cửa ra vào để bật điện.',
          'Cổng chính mở tự do từ 06:00 - 23:00. Sau 23:00, quý khách vui lòng dùng mã 3028# tại cổng phụ.',
        ],
        en: [
          'Touch the keypad screen with your palm to awaken the digits.',
          'Enter code 3028 followed by # key (a pleasant chime will confirm unlocked).',
          'Insert the keycard into the wall slot to the left of the door for electricity.',
          'Main gate is unlocked 06:00 - 23:00. For late arrival, use the side gate with code 3028#.',
        ],
      },
    },
    checkOut: {
      time: '12:00',
      checklist: {
        vi: [
          'Kiểm tra kỹ hành lý, hộ chiếu, đồ sạc trong ngăn kéo và tủ đầu giường.',
          'Tắt điều hòa và các thiết bị điện trước khi rời phòng.',
          'Gửi lại thẻ phòng tại bàn lễ tân hoặc thả vào hòm Drop-box trước sảnh.',
          'Nếu cần xe đưa đón ra sân bay Đà Nẵng, vui lòng báo trước 2 tiếng.',
        ],
        en: [
          'Double check personal belongings, passports, and chargers in drawers/bedside.',
          'Turn off AC and lights to support green eco-living.',
          'Return keycards at front desk or drop them into the wooden key drop box in the lobby.',
          'If you need a private airport transfer to Da Nang (DAD), please notify us 2 hours ahead.',
        ],
      },
      luggageDrop: {
        vi: 'Hỗ trợ giữ hành lý MIỄN PHÍ tại sảnh đến 21:00 nếu chuyến bay của bạn muộn.',
        en: 'Free luggage storage available at the concierge desk until 21:00 if you have a late flight.',
      },
    },
    contacts: {
      hostName: 'Mai & Đội ngũ Lễ tân An Nam',
      hostRole: {
        vi: 'Quản gia & Lễ tân trưởng',
        en: 'Head Butler & Concierge',
      },
      phone: '0905 123 456',
      zaloPhone: '0905 123 456',
      whatsapp: '+84905123456',
      receptionHours: '06:30 - 22:30 (Trực hotline đêm 24/7)',
      emergencyPhone: '115 (Cấp cứu) / 0905 123 456',
    },
    announcement: {
      vi: '🌿 Bữa sáng buffet đặc sản Hội An được phục vụ tại nhà hàng ven hồ bơi từ 07:00 - 10:00 hàng ngày.',
      en: '🌿 Complimentary Hoi An specialty buffet breakfast is served by the pool from 07:00 - 10:00 AM daily.',
      active: true,
    },
    otaLinks: {
      airbnb: 'https://airbnb.com',
      booking: 'https://booking.com',
      agoda: 'https://agoda.com',
      google: 'https://maps.google.com',
      tripadvisor: 'https://tripadvisor.com',
    },
  },
  {
    id: 'da-lat-homestay',
    name: {
      vi: 'The Pine Hill Homestay & Camp',
      en: 'The Pine Hill Homestay & Camp',
    },
    tagline: {
      vi: 'Ngôi nhà gỗ ấm áp nép mình bên đồi thông sương mù Đà Lạt',
      en: 'A warm wooden cabin nestled amidst Da Lat misty pine forest',
    },
    address: '27/3 Khởi Nghĩa Bắc Sơn, Phường 10, TP. Đà Lạt',
    googleMapsUrl: 'https://maps.google.com/?q=Dalat+Vietnam',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    roomName: 'Bungalow 02 - Pine View & Wood Stove',
    guestName: 'Anh Minh & Chị Lan (Mr. Minh & Ms. Lan)',
    wifi: {
      ssid: 'PineHill_Homestay_Fiber',
      password: 'dalatpinehill2026',
      speed: '120 Mbps Viettel Fiber',
      security: 'WPA2',
      notes: {
        vi: 'Do nằm giữa đồi thông, nếu tín hiệu thời tiết sương mù làm chập chờn, bạn chỉ cần khởi động lại router ở góc bàn trà.',
        en: 'High-speed fiber optic. In heavy mist, signal remains stable for video calls and streaming.',
      },
    },
    checkIn: {
      time: '14:00',
      doorCode: 'Keybox: 8852',
      keyboxCode: '8852',
      instructions: {
        vi: [
          'Hộp khóa an toàn nằm ngay bên phải cửa gỗ chính của Bungalow.',
          'Gạt nắp đen xuống, xoay dãy số về đúng 8852 và ấn chốt mở để lấy chìa khóa đồng.',
          'Khi ra ngoài, xin vui lòng khóa cửa cẩn thận và mang theo chìa.',
        ],
        en: [
          'The lockbox is mounted on the wall right beside the wooden main door.',
          'Slide down the cover, roll dials to 8852 and press the release button to retrieve the key.',
          'Please take the key with you when exploring the town.',
        ],
      },
    },
    checkOut: {
      time: '11:30',
      checklist: {
        vi: [
          'Khóa chốt bình sưởi điện và tắt công tắc đèn sưởi nhà tắm.',
          'Để chìa khóa lại vào hộp Lockbox và xoay xáo trộn số.',
          'Nhắn tin Zalo báo quản gia để chúng tôi kiểm tra phòng và hoàn cọc.',
        ],
        en: [
          'Turn off the portable heater and bathroom warming lamps.',
          'Put the physical key back into the lockbox and scramble the wheels.',
          'Send a quick Zalo/WhatsApp message to host to confirm check-out.',
        ],
      },
      luggageDrop: {
        vi: 'Có phòng sinh hoạt chung giữ hành lý và ghế nệm thư giãn uống trà nóng chờ xe.',
        en: 'Cozy common lounge with free hot tea and luggage space while waiting for your night bus.',
      },
    },
    contacts: {
      hostName: 'Bảo & Thu (Pine Hill Hosts)',
      hostRole: {
        vi: 'Chủ nhà & Hướng dẫn viên bản địa',
        en: 'Homestay Owner & Local Guide',
      },
      phone: '0912 345 678',
      zaloPhone: '0912 345 678',
      whatsapp: '+84912345678',
      receptionHours: '07:00 - 22:00',
      emergencyPhone: '0912 345 678',
    },
    announcement: {
      vi: '🔥 Tiệc lửa trại và khoai lang nướng mật ong bắt đầu lúc 19:30 tại sân cỏ trung tâm.',
      en: '🔥 Campfire & roasted sweet potatoes gathering starts at 7:30 PM in the pine courtyard.',
      active: true,
    },
    otaLinks: {
      airbnb: 'https://airbnb.com',
      booking: 'https://booking.com',
      agoda: 'https://agoda.com',
      google: 'https://maps.google.com',
    },
  },
  {
    id: 'saigon-loft',
    name: {
      vi: 'The Loft 91 - Rivergate Modern Studio',
      en: 'The Loft 91 - Rivergate Modern Studio',
    },
    tagline: {
      vi: 'Căn hộ dịch vụ tiện nghi cao cấp ngắm toàn cảnh sông Sài Gòn & Quận 1',
      en: 'Smart designer apartment overlooking Saigon River & District 1 skyline',
    },
    address: '151-155 Bến Vân Đồn, Phường 6, Quận 4, TP. Hồ Chí Minh',
    googleMapsUrl: 'https://maps.google.com/?q=Rivergate+Residence+Ben+Van+Don',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    roomName: 'Studio 18.04 - Tower A (High Floor)',
    guestName: 'Alex Robinson & Guest',
    wifi: {
      ssid: 'TheLoft91_Saigon_5G',
      password: 'saigonvibes2026',
      speed: '250 Mbps Ultra-fast VNPT',
      security: 'WPA3 Personal',
      notes: {
        vi: 'Phù hợp làm việc từ xa, họp Zoom HD và chơi game mượt mà.',
        en: 'Optimized for remote workers, video conferencing, and 4K video streaming.',
      },
    },
    checkIn: {
      time: '14:00',
      doorCode: '180491 *',
      keyboxCode: 'N/A (Khóa vân tay / mã số)',
      instructions: {
        vi: [
          'Thẻ thang máy đã được lễ tân gửi mã QR hoặc gửi bảo vệ sảnh A.',
          'Tại cửa phòng 18.04: Chạm lòng bàn tay vào khóa Yale, nhập 180491 kèm dấu *.',
          'Mật mã có hiệu lực chính xác từ 14:00 ngày check-in đến 12:00 ngày check-out.',
        ],
        en: [
          'Elevator access QR code was sent to your WhatsApp/App.',
          'At door 18.04: Touch the Yale smart lock, enter 180491 followed by * key.',
          'Your personalized passcode is strictly active from 14:00 check-in until 12:00 check-out.',
        ],
      },
    },
    checkOut: {
      time: '12:00',
      checklist: {
        vi: [
          'Thu dọn rác vào túi bóng và để tại phòng gom rác cuối hành lang.',
          'Chỉ cần khép chặt cửa phòng (khóa tự động chốt).',
          'Gửi thẻ từ thang máy lại tại hòm thư số 1804 ở tầng trệt sảnh A.',
        ],
        en: [
          'Place trash in bags and dispose at the chute at the end of the hallway.',
          'Simply pull the entrance door shut; it autolocks automatically.',
          'Drop the elevator keycard into mailbox #1804 in Tower A lobby.',
        ],
      },
      luggageDrop: {
        vi: 'Tủ khóa thông minh Smart Locker tại sảnh G, thanh toán qua Momo/tiền mặt 20k/giờ.',
        en: 'Smart automated lockers in Tower A ground floor, accepts credit card/Momo.',
      },
    },
    contacts: {
      hostName: 'David & Superhost Team',
      hostRole: {
        vi: 'Chủ nhà Airbnb Superhost',
        en: 'Airbnb Superhost & Property Manager',
      },
      phone: '0903 888 999',
      zaloPhone: '0903 888 999',
      whatsapp: '+84903888999',
      receptionHours: 'Hỗ trợ trực tuyến 24/7 qua WhatsApp/Zalo',
      emergencyPhone: '113 (Công an) / 0903 888 999',
    },
    announcement: {
      vi: '🏊 Hồ bơi vô cực tầng 7 mở cửa miễn phí từ 06:00 đến 21:00 hàng ngày.',
      en: '🏊 Rooftop infinity pool on 7th floor is open free of charge from 6:00 AM to 9:00 PM.',
      active: true,
    },
    otaLinks: {
      airbnb: 'https://airbnb.com',
      booking: 'https://booking.com',
      google: 'https://maps.google.com',
    },
  },
];

export const APPLIANCE_GUIDES: ApplianceGuide[] = [
  {
    id: 'ac-remote',
    category: 'climate',
    title: {
      vi: 'Điều Hòa Daikin Inverter & Điều Khiển',
      en: 'Daikin Inverter AC & Remote Control',
    },
    iconName: 'AirVent',
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?auto=format&fit=crop&w=800&q=80',
    summary: {
      vi: 'Hướng dẫn cài đặt nhiệt độ lý tưởng, chế độ làm mát nhanh và hẹn giờ tắt.',
      en: 'How to set optimal cooling, silent sleep mode, and timer.',
    },
    steps: {
      vi: [
        'Bấm nút [ON/OFF] màu cam trên remote để khởi động máy.',
        'Bấm nút [MODE] cho đến khi thấy biểu tượng bông tuyết ❄️ (chế độ COOL làm lạnh).',
        'Cài đặt nhiệt độ lý tưởng từ 24°C - 26°C bằng hai nút mũi tên ▲ / ▼.',
        'Bật nút [FAN] về mức 2 hoặc Auto để gió êm và không phả trực tiếp vào giường ngủ.',
        'Bấm nút [SWING] để đảo cánh gió tự động giúp khí lạnh phân bổ đều khắp phòng.',
      ],
      en: [
        'Press the orange [ON/OFF] button on the remote to start.',
        'Press [MODE] until the snowflake icon ❄️ appears (Cooling mode).',
        'Set the ideal temperature between 24°C - 26°C using ▲ / ▼ arrows.',
        'Set [FAN] to 2 bars or Auto for quiet airflow that avoids direct contact with the bed.',
        'Press [SWING] to oscillate louvers for balanced cool air distribution.',
      ],
    },
    troubleshooting: {
      vi: [
        'Nếu phòng chưa đủ mát: Kiểm tra chắc chắn cửa sổ và ban công đã đóng kín.',
        'Nếu remote không hiện màn hình: Vui lòng thay 2 pin AAA dự phòng trong ngăn kéo tủ tivi.',
        'Tránh để nhiệt độ dưới 20°C vì có thể gây đọng sương và khô da.',
      ],
      en: [
        'If room feels warm: Ensure balcony and all windows are fully closed.',
        'If remote screen is blank: Grab fresh AAA batteries from the TV credenza drawer.',
        'Avoid setting below 20°C (68°F) to prevent excessive condensation and dry skin.',
      ],
    },
    ecoTip: {
      vi: '🌱 Tắt điều hòa khi rời phòng giúp giảm phát thải carbon và bảo vệ môi trường địa phương.',
      en: '🌱 Turning off the AC when stepping out helps preserve local energy and the environment.',
    },
  },
  {
    id: 'smart-tv-netflix',
    category: 'entertainment',
    title: {
      vi: 'Smart TV 55" 4K & Tài Khoản Netflix Miễn Phí',
      en: 'Smart TV 55" 4K & Complimentary Netflix',
    },
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    summary: {
      vi: 'Xem YouTube không quảng cáo, xem phim Netflix bản quyền và chiếu màn hình từ điện thoại.',
      en: 'Enjoy ad-free YouTube, pre-logged Netflix profile, and wireless screen mirroring.',
    },
    steps: {
      vi: [
        'Bấm nút đỏ Power trên remote đen nhỏ để bật TV.',
        'Bấm phím Home (hình ngôi nhà) để mở giao diện ứng dụng chính.',
        'Chọn ứng dụng Netflix: Khách sạn đã đăng nhập sẵn profile tên "Guest Room 302" (không cần nhập mật khẩu).',
        'Để chiếu từ iPhone/Android: Kết nối cùng Wi-Fi phòng, mở YouTube/Spotify trên điện thoại rồi bấm biểu tượng Cast (truyền màn hình).',
      ],
      en: [
        'Press the red Power button on the remote to turn on the screen.',
        'Press the Home (house icon) button to display apps.',
        'Open Netflix: You are already logged in under the profile "Guest Room 302" (no password required).',
        'Screen Mirroring: Connect your phone to room Wi-Fi, open YouTube/Spotify and tap the Cast/AirPlay icon.',
      ],
    },
    troubleshooting: {
      vi: [
        'Nếu Netflix báo quá số lượng thiết bị: Vui lòng nhắn lễ tân để reset phiên đăng nhập.',
        'Nếu không có âm thanh: Kiểm tra nút Mute trên remote hoặc thanh loa soundbar bên dưới.',
      ],
      en: [
        'If Netflix displays a stream limit error: Ping reception to immediately refresh sessions.',
        'If audio is silent: Check the Mute button on remote or the soundbar switch below.',
      ],
    },
  },
  {
    id: 'water-heater',
    category: 'bathroom',
    title: {
      vi: 'Bình Nước Nóng Ariston & Vòi Sen Massage',
      en: 'Ariston Water Heater & Rain Shower',
    },
    iconName: 'ShowerHead',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    summary: {
      vi: 'Cách bật nước nóng an toàn, điều chỉnh nhiệt độ vòi sen nhiệt độ chống bỏng.',
      en: 'Safe hot water switch, thermostatic anti-scald rain shower controls.',
    },
    steps: {
      vi: [
        'Bật công tắc bình nóng lạnh bên ngoài cửa phòng tắm (công tắc có đèn LED đỏ báo sáng).',
        'Chờ khoảng 10 - 15 phút để nước đạt độ nóng lý tưởng 60°C.',
        'Khi tắm: Gạt cần vòi sen về bên trái (vạch màu đỏ) để lấy nước nóng, gạt sang phải (màu xanh) để thêm nước mát.',
        'Vòi sen cây có nút khóa an toàn 38°C để chống bỏng trẻ em, nhấn giữ chốt nếu muốn tăng nhiệt.',
      ],
      en: [
        'Flip the dedicated water heater wall switch outside the bathroom door (red indicator light turns on).',
        'Wait approximately 10 - 15 minutes for water to heat up properly.',
        'When showering: Turn lever towards the red indicator for hot, blue for cool.',
        'The thermostatic mixer has a 38°C (100°F) child safety stop lock; press button to unlock hotter water.',
      ],
    },
    troubleshooting: {
      vi: [
        'Nên tắt công tắc trước khi bước vào bồn tắm để đảm bảo an toàn điện tuyệt đối.',
        'Nếu nước không nóng sau 20 phút: Vui lòng kiểm tra cầu dao chống giật ELCB cạnh cửa.',
      ],
      en: [
        'We recommend turning off the switch prior to entering the shower for maximum safety.',
        'If no warm water after 20 mins: Check the circuit breaker switch beside the bathroom door.',
      ],
    },
  },
  {
    id: 'washer-dryer',
    category: 'kitchen',
    title: {
      vi: 'Máy Giặt Electrolux Inverter & Giàn Phơi',
      en: 'Electrolux Washer & Drying Rack',
    },
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    summary: {
      vi: 'Chế độ giặt nhanh 15 phút, vị trí nước giặt xả sinh học miễn phí.',
      en: '15-minute quick cycle, complimentary organic detergent in cabinet.',
    },
    steps: {
      vi: [
        'Nước giặt và nước xả Omo Matic nằm trong giỏ mây trên nóc máy giặt.',
        'Cho quần áo vào lồng giặt (tối đa 7kg, không nhét quá đầy).',
        'Đổ 1 nắp nước giặt vào ngăn I (ngăn ngoài cùng bên trái của khay).',
        'Xoay núm vặn sang chế độ [Quick 15] (giặt nhanh 15 phút) hoặc [Daily 60] (giặt hàng ngày).',
        'Nhấn nút [Start / Pause] hình tam giác để bắt đầu chu trình.',
      ],
      en: [
        'Complimentary laundry detergent pods are in the woven basket atop the machine.',
        'Load clothes into drum (maximum 7kg capacity, avoid overpacking).',
        'Add detergent into compartment I on the slide-out tray.',
        'Turn dial to [Quick 15] for light summer wear, or [Daily 60] for full wash.',
        'Press the triangular [Start / Pause] button to begin.',
      ],
    },
    troubleshooting: {
      vi: [
        'Cửa máy giặt khóa điện tử: Sau khi giặt xong, máy sẽ kêu bíp và cần chờ 2 phút để chốt cửa tự mở.',
        'Giàn phơi thông minh và móc áo gỗ được đặt tại ban công thoáng gió.',
      ],
      en: [
        'Safety door lock: The door remains locked for 2 minutes after the cycle finishes before clicking open.',
        'Wooden clothes hangers and a folding drying rack are located on your balcony.',
      ],
    },
  },
  {
    id: 'induction-cooktop',
    category: 'kitchen',
    title: {
      vi: 'Bếp Từ Bosch & Hút Mùi Cảm Ứng',
      en: 'Bosch Induction Cooktop & Range Hood',
    },
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    summary: {
      vi: 'Mở khóa trẻ em (Child Lock), điều chỉnh mức nhiệt nấu ăn an toàn.',
      en: 'Unlock child safety, adjust wattage, and operate quiet touch range hood.',
    },
    steps: {
      vi: [
        'Nhấn giữ nút hình ổ khóa 🔒 trong 3 giây để mở khóa bàn phím cảm ứng.',
        'Bấm phím nguồn để bật bếp, đặt nồi chảo có đáy từ lên vùng nấu tương ứng.',
        'Vuốt thanh trượt nhiệt từ 1 đến 9 (mức 5-7 thích hợp chiên xào, mức 8-9 đun nước sôi nhanh).',
        'Bật máy hút mùi bằng cách chạm vào nút quạt gió trên máy hút.',
      ],
      en: [
        'Press and hold the key lock symbol 🔒 for 3 seconds to release the child lock.',
        'Press Power button, place induction-compatible cookware onto designated ring.',
        'Slide finger from 1 to 9 (level 5-7 for sauteing, level 8-9 for boiling).',
        'Turn on the overhead range hood by tapping the fan icon to clear vapors.',
      ],
    },
    troubleshooting: {
      vi: [
        'Bếp chỉ hoạt động khi có nồi kim loại bắt từ đặt lên trên (nếu hiện chữ U nhấp nháy là chưa nhận nồi).',
        'Vui lòng lau khô đáy nồi trước khi đặt lên mặt kính bếp.',
      ],
      en: [
        'The burner only activates when magnetic cookware is detected (flashing "U" means no pot detected).',
        'Please wipe the bottom of pots dry before resting them on ceramic glass.',
      ],
    },
  },
  {
    id: 'room-safe',
    category: 'safety',
    title: {
      vi: 'Két Sắt Điện Tử Thông Minh Trong Tủ Quần Áo',
      en: 'In-Room Electronic Safety Box',
    },
    iconName: 'Lock',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    summary: {
      vi: 'Cách đặt mật khẩu cá nhân 4-6 số để cất giữ hộ chiếu, tiền mặt và trang sức.',
      en: 'How to set your private 4 to 6-digit pin for passport and jewelry storage.',
    },
    steps: {
      vi: [
        'Để mở khi nhận phòng: Cửa két đang mở sẵn.',
        'Để khóa và đặt mã mới: Đóng cửa két lại, nhập 4 đến 6 chữ số bất kỳ bạn muốn (ví dụ 1234), sau đó bấm phím [#] hoặc [LOCK].',
        'Chốt khóa sẽ tự động bung ra và két đã được khóa an toàn.',
        'Để mở lại két: Nhập đúng dãy số bạn vừa cài và bấm phím [#].',
      ],
      en: [
        'Upon arrival: The safe door is left ajar for you.',
        'To lock & set your pin: Close door, type any 4-6 digits of your choice, then press [#] or [LOCK].',
        'Motorized bolts will lock securely with an audible beep.',
        'To unlock: Type the same pin code followed by [#].',
      ],
    },
    troubleshooting: {
      vi: [
        'Nếu nhập sai quá 3 lần két sẽ tạm khóa trong 5 phút.',
        'Trường hợp quên mật khẩu: Quản lý khách sạn có chìa khóa cơ Master khẩn cấp để hỗ trợ bạn ngay lập tức.',
      ],
      en: [
        'Entering wrong code 3 times triggers a 5-minute safety lockdown.',
        'Forgotten code? Contact concierge for emergency physical Master Key override.',
      ],
    },
  },
];

export const LOCAL_PLACES: LocalPlace[] = [
  {
    id: 'food-1',
    category: 'food',
    title: {
      vi: 'Bánh Mì Phượng (Đặc Sản Hội An)',
      en: 'Banh Mi Phuong (Legendary Baguette)',
    },
    tag: {
      vi: 'Quán ăn biểu tượng',
      en: 'Iconic street food',
    },
    distance: '650m',
    walkingTime: '8 phút đi bộ / 3 phút xe đạp',
    priceLevel: '₫ (30.000đ - 45.000đ)',
    address: '2B Phan Chu Trinh, Cẩm Châu, Hội An',
    openingHours: '06:30 - 21:30',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Lời khuyên từ chủ nhà: Nên ghé vào lúc 08:30 sáng hoặc 15:00 chiều để không phải xếp hàng dài. Nhớ gọi ổ Bánh Mì Thập Cẩm số 9 nhiều pate và sốt bơ trứng đặc biệt!',
      en: 'Host insider tip: Visit around 8:30 AM or 3:00 PM to skip the line. Order Sandwich #9 (Mixed special) with extra homemade pate and egg butter sauce!',
    },
    mustTry: {
      vi: 'Bánh mì thập cẩm thịt nướng chả lụa & sữa đậu nành lá dứa mát lạnh.',
      en: 'Special combination banh mi & iced pandan soy milk.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Banh+Mi+Phuong+Hoi+An',
    phone: '0905 743 773',
  },
  {
    id: 'food-2',
    category: 'food',
    title: {
      vi: 'Cơm Gà Bà Buội (Gia Truyền Từ 1955)',
      en: 'Ba Buoi Chicken Rice (Since 1955)',
    },
    tag: {
      vi: 'Món truyền thống',
      en: 'Heritage recipe',
    },
    distance: '900m',
    walkingTime: '11 phút đi bộ',
    priceLevel: '₫₫ (55.000đ - 80.000đ)',
    address: '22 Phan Chu Trinh, Minh An, Hội An',
    openingHours: '10:30 - 20:30',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Cơm nấu bằng nước luộc gà vàng óng nghệ, gà ta thả vườn thịt chắc ngọt trộn hành tây rau răm Trà Quế thơm lừng.',
      en: 'Turmeric-infused rice cooked in rich chicken broth, topped with shredded free-range chicken and fresh Tra Que herbs.',
    },
    mustTry: {
      vi: 'Cơm gà đùi xé + đĩa gỏi gà trộn chua ngọt và canh lòng gà thanh mát.',
      en: 'Shredded chicken thigh rice + sweet & sour herb salad.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Com+Ga+Ba+Buoi+Hoi+An',
  },
  {
    id: 'coffee-1',
    category: 'coffee',
    title: {
      vi: 'Faifo Coffee (Rooftop Ngắm Hoàng Hôn Phố Cổ)',
      en: 'Faifo Coffee (Iconic Rooftop Sunset)',
    },
    tag: {
      vi: 'View ngói âm dương',
      en: 'Panoramic Rooftop',
    },
    distance: '1.1km',
    walkingTime: '14 phút đi bộ',
    priceLevel: '₫₫ (45.000đ - 75.000đ)',
    address: '130 Trần Phú, Cẩm Châu, Hội An',
    openingHours: '07:00 - 22:00',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Tầng thượng là góc check-in nổi tiếng nhìn trọn những mái ngói rêu phong của phố cổ. Nên đến lúc 16:45 để đón ánh hoàng hôn vàng ruộm.',
      en: 'Famous 3rd-floor terrace with sweeping views over historic tiled rooftops. Best visited around 4:45 PM for golden hour.',
    },
    mustTry: {
      vi: 'Cà phê dừa đá xay béo ngậy hoặc Cold Brew cam sả thanh mát.',
      en: 'Signature Coconut Iced Coffee or Lemongrass Cold Brew.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Faifo+Coffee+Hoi+An',
  },
  {
    id: 'coffee-2',
    category: 'coffee',
    title: {
      vi: 'Roving Chillhouse (Cà Phê Đồng Lúa Thanh Bình)',
      en: 'Roving Chillhouse (Scenic Rice Paddy Cafe)',
    },
    tag: {
      vi: 'View đồng lúa chill',
      en: 'Bucolic views',
    },
    distance: '2.4km',
    walkingTime: '7 phút đi xe máy / Grab',
    priceLevel: '₫₫ (50.000đ - 90.000đ)',
    address: 'Vòng xoay Cầu Đỏ, Thanh Tây, Cẩm Châu, Hội An',
    openingHours: '07:30 - 20:00',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Ngồi trên các tấm đệm lười gỗ vươn ra giữa cánh đồng lúa xanh ngát, ngắm đàn vịt bơi và đón gió chiều mát rượi. Quán có xe đạp miễn phí nếu mượn từ villa.',
      en: 'Wooden deck seating overlooking lush green rice paddies with gentle breezes. Highly recommended for afternoon sunset chill.',
    },
    mustTry: {
      vi: 'Trà sen củ năng thanh lọc hoặc Kombucha hoa cúc dưa lưới.',
      en: 'Lotus seed iced tea or craft melon kombucha.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Roving+Chillhouse+Hoi+An',
  },
  {
    id: 'sightseeing-1',
    category: 'sightseeing',
    title: {
      vi: 'Chợ Đêm Hội An & Thả Hoa Đăng Sông Hoài',
      en: 'Hoi An Night Market & Lantern Boats',
    },
    tag: {
      vi: 'Văn hóa & Đèn lồng',
      en: 'Nightlife & Culture',
    },
    distance: '1.2km',
    walkingTime: '15 phút đi bộ / 5 phút xe điện',
    priceLevel: '₫ (Hoa đăng 10.000đ / Thuyền 150k)',
    address: 'Đường Nguyễn Hoàng, An Hội, Hội An',
    openingHours: '17:30 - 23:00',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Giá đi thuyền gỗ ngắm hoa đăng được niêm yết cố định 150.000đ cho nhóm 1-3 người (20 phút). Hãy mua vé tại quầy chính thức thay vì qua cò mồi.',
      en: 'Boat rides are officially fixed at 150,000 VND (~$6 USD) per boat for 1-3 guests. Purchase tickets at official kiosks along the riverbank.',
    },
    mustTry: {
      vi: 'Thả 1 chiếc đèn hoa đăng cầu an lành và chụp ảnh cùng phố lồng đèn rực rỡ.',
      en: 'Release an eco-friendly floating paper lantern with a wish into the river.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Hoi+An+Night+Market',
  },
  {
    id: 'sightseeing-2',
    category: 'sightseeing',
    title: {
      vi: 'Bãi Biển An Bàng (Top Bãi Biển Đẹp Châu Á)',
      en: 'An Bang Beach (Top 25 Beaches in Asia)',
    },
    tag: {
      vi: 'Biển & Hải sản',
      en: 'Beach & Chill',
    },
    distance: '3.8km',
    walkingTime: '12 phút xe đạp / 8 phút taxi',
    priceLevel: 'Miễn phí vé vào',
    address: 'Đường Hai Bà Trưng, Cẩm An, Hội An',
    openingHours: 'Cả ngày',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Bãi biển cát trắng mịn, nước trong xanh. Nên ghé Soul Kitchen hoặc The DeckHouse để dùng nước và được nằm ghế tắm nắng miễn phí.',
      en: 'Pristine soft sand and clear surf. Grab a drink at Soul Kitchen or The DeckHouse to enjoy free lounge sunbeds all day.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=An+Bang+Beach+Hoi+An',
  },
  {
    id: 'essential-1',
    category: 'essential',
    title: {
      vi: 'Hiệu Thuốc Phổ Am (Mở Cửa 24/7)',
      en: 'Pho Am Pharmacy (24/7 Emergency Medicine)',
    },
    tag: {
      vi: 'Y tế & Cấp cứu',
      en: '24/7 Medical',
    },
    distance: '450m',
    walkingTime: '5 phút đi bộ',
    priceLevel: 'Theo giá niêm yết',
    address: '84 Cửa Đại, Cẩm Châu, Hội An',
    openingHours: '24/7 Cả ngày và đêm',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Dược sĩ nói tiếng Anh tốt, có đầy đủ thuốc cảm sốt, men tiêu hóa, thuốc chống dị ứng, bông băng và kem chống muỗi Soffell.',
      en: 'English-speaking pharmacist with essential travel medicines, digestive aids, painkillers, and mosquito repellent.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Pharmacy+Hoi+An',
    phone: '0235 392 4115',
  },
  {
    id: 'essential-2',
    category: 'essential',
    title: {
      vi: 'Siêu Thị WinMart+ & Cây ATM Techcombank',
      en: 'WinMart+ Grocery & 24h ATM',
    },
    tag: {
      vi: 'Tiện ích & Tiền mặt',
      en: 'Convenience & Cash',
    },
    distance: '300m',
    walkingTime: '4 phút đi bộ',
    priceLevel: 'Giá niêm yết chuẩn',
    address: '112 Trần Nhân Tông, Hội An',
    openingHours: '06:00 - 22:30',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    hostTip: {
      vi: 'Cửa hàng tiện lợi có hoa quả tươi, nước suối chai lớn, bia lạnh, kem và đồ ăn nhẹ. Cây ATM hỗ trợ rút thẻ quốc tế Visa/Mastercard.',
      en: 'Fully stocked mini-mart with cold beer, bottled water, snacks, and international Visa/Mastercard ATM.',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Winmart+Hoi+An',
  },
];

export const HOUSE_RULES: HouseRule[] = [
  {
    id: 'rule-quiet',
    iconName: 'Moon',
    title: {
      vi: 'Giờ Yên Tĩnh Từ 22:00 - 07:00 Sáng',
      en: 'Quiet Hours: 10:00 PM – 7:00 AM',
    },
    description: {
      vi: 'Vui lòng giữ âm lượng vừa phải, không mở loa kéo hoặc gây ồn ào ở ban công và hành lang để tôn trọng giấc ngủ của những vị khách khác.',
      en: 'Please keep noise to a minimum in rooms, corridors, and balconies to respect everyone’s restful retreat.',
    },
  },
  {
    id: 'rule-smoke',
    iconName: 'Ban',
    title: {
      vi: 'Nghiêm Cấm Hút Thuốc Trong Phòng',
      en: '100% Non-Smoking Inside Rooms',
    },
    description: {
      vi: 'Villa trang bị đầu báo khói nhạy cảm. Quý khách hút thuốc vui lòng di chuyển ra khu vực sân vườn hoặc ban công ngoài trời có gạt tàn riêng.',
      en: 'Sensitive smoke detectors installed. Smoking is strictly prohibited inside; please enjoy outdoor garden smoking lounges instead.',
    },
  },
  {
    id: 'rule-shoes',
    iconName: 'Footprints',
    title: {
      vi: 'Bỏ Giày & Dùng Dép Đi Trong Nhà',
      en: 'Outdoor Shoes Off at Entryway',
    },
    description: {
      vi: 'Dép bông êm ái được chuẩn bị sẵn tại kệ giày cạnh cửa ra vào để giữ sàn gỗ luôn sạch bóng và sạch khuẩn.',
      en: 'Comfortable indoor slippers are placed on the shoe rack by the door for your comfort and hygiene.',
    },
  },
  {
    id: 'rule-eco',
    iconName: 'Leaf',
    title: {
      vi: 'Lối Sống Xanh & Tiết Kiệm Năng Lượng',
      en: 'Eco-Conscious Green Stay',
    },
    description: {
      vi: 'Khăn tắm treo lên mắc có nghĩa là "tôi sẽ dùng tiếp", khăn để trong giỏ nghĩa là "vui lòng thay mới". Vui lòng tắt máy lạnh khi ra ngoài.',
      en: 'Hanging towels mean "I will reuse", towels in basket mean "please exchange". Turn off AC when stepping out.',
    },
  },
];

export const GUEST_REQUEST_OPTIONS: GuestRequestOption[] = [
  {
    id: 'req-towels',
    title: {
      vi: 'Thêm khăn tắm & áo choàng',
      en: 'Extra bath towels & bathrobes',
    },
    icon: 'Sparkles',
    timeEstimate: '10-15 phút',
  },
  {
    id: 'req-water',
    title: {
      vi: 'Thêm nước suối & trà cà phê',
      en: 'Extra bottled water & tea/coffee',
    },
    icon: 'Coffee',
    timeEstimate: '10 phút',
  },
  {
    id: 'req-bike',
    title: {
      vi: 'Mượn xe đạp dạo phố (Miễn phí)',
      en: 'Borrow city bicycle (Complimentary)',
    },
    icon: 'Bike',
    timeEstimate: 'Có sẵn tại sảnh',
  },
  {
    id: 'req-laundry',
    title: {
      vi: 'Dịch vụ giặt ủi nhanh lấy trong ngày',
      en: 'Express same-day laundry service',
    },
    icon: 'Shirt',
    timeEstimate: 'Giao sau 6 tiếng',
  },
  {
    id: 'req-late-checkout',
    title: {
      vi: 'Yêu cầu trả phòng muộn (Late checkout)',
      en: 'Request late check-out inquiry',
    },
    icon: 'Clock',
    timeEstimate: 'Tùy tình trạng phòng',
  },
];
