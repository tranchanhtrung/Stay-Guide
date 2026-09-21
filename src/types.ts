export type Language = 'vi' | 'en';

export interface PropertyInfo {
  id: string;
  name: {
    vi: string;
    en: string;
  };
  tagline: {
    vi: string;
    en: string;
  };
  address: string;
  googleMapsUrl: string;
  heroImage: string;
  roomName: string;
  guestName: string;
  wifi: {
    ssid: string;
    password: string;
    speed: string;
    security: string;
    notes: {
      vi: string;
      en: string;
    };
  };
  checkIn: {
    time: string;
    doorCode: string;
    keyboxCode?: string;
    instructions: {
      vi: string[];
      en: string[];
    };
  };
  checkOut: {
    time: string;
    checklist: {
      vi: string[];
      en: string[];
    };
    luggageDrop: {
      vi: string;
      en: string;
    };
  };
  contacts: {
    hostName: string;
    hostRole: {
      vi: string;
      en: string;
    };
    phone: string;
    zaloPhone: string;
    whatsapp: string;
    receptionHours: string;
    emergencyPhone: string;
  };
  announcement?: {
    vi: string;
    en: string;
    active: boolean;
  };
  otaLinks: {
    airbnb?: string;
    booking?: string;
    agoda?: string;
    google?: string;
    tripadvisor?: string;
  };
}

export interface ApplianceGuide {
  id: string;
  category: 'climate' | 'entertainment' | 'kitchen' | 'bathroom' | 'safety';
  title: {
    vi: string;
    en: string;
  };
  iconName: string;
  image: string;
  summary: {
    vi: string;
    en: string;
  };
  steps: {
    vi: string[];
    en: string[];
  };
  troubleshooting?: {
    vi: string[];
    en: string[];
  };
  ecoTip?: {
    vi: string;
    en: string;
  };
}

export interface LocalPlace {
  id: string;
  category: 'food' | 'coffee' | 'sightseeing' | 'essential' | 'transport';
  title: {
    vi: string;
    en: string;
  };
  tag: {
    vi: string;
    en: string;
  };
  distance: string;
  walkingTime: string;
  priceLevel: string; // "₫", "₫₫", "₫₫₫"
  address: string;
  openingHours: string;
  image: string;
  hostTip: {
    vi: string;
    en: string;
  };
  mustTry?: {
    vi: string;
    en: string;
  };
  googleMapsUrl: string;
  phone?: string;
}

export interface HouseRule {
  id: string;
  iconName: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
}

export interface GuestRequestOption {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  icon: string;
  timeEstimate: string;
}
