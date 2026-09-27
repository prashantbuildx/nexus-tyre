// Domain types for contact and site configuration

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface LocationInfo {
  address: string;
  mapsUrl: string;
  city: string;
  state: string;
  pincode: string;
}

export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  url: string;
  contact: ContactInfo;
  location: LocationInfo;
  businessHours: BusinessHours;
  social: SocialLinks;
  navigation: NavigationItem[];
}
