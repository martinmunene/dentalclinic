export interface Service {
  id: string;
  title: string;
  category: 'cosmetic' | 'orthodontics' | 'restorative' | 'general' | 'surgical';
  categoryLabel: string;
  duration: string;
  painless: boolean;
  tag: string;
  description: string;
  perks: string[];
  image: string;
  priceEstimate?: string;
}

export interface Branch {
  id: string;
  name: string;
  pill: string;
  address: string;
  floor: string;
  hours: string;
  parking: string;
  phone: string;
  phoneRaw: string;
  proximity: string;
  mapUrl: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  credentials: string[];
  image: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  description: string;
  currency: string;
  amount: string;
  period: string;
  featured?: boolean;
  popularRibbon?: string;
  features: string[];
  serviceKey: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  status: 'Direct Billing' | 'Corporate Partner';
  category: 'insurance' | 'corporate';
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  location: string;
  rating: number;
  quote: string;
  initials: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  branch: string;
  service: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  insuranceScheme: string;
  notes: string;
}
