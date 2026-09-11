import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 'dr-dean-kariuki',
    name: 'Dr. Dean Kariuki',
    role: 'Lead Dental Surgeon & Orthodontist',
    specialty: 'Orthodontics & Smile Design',
    bio: 'Specializing in digital smile design, traditional metal braces, aesthetic ceramic brackets, and Invisalign clear aligners. Over 18 years perfecting teeth alignment for children and adults.',
    credentials: [
      'BDS (Nbi), MSc Orthodontics',
      'KMPDC Reg. No. A3918',
      'Kenya Dental Association',
      'Invisalign Certified Provider'
    ],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-grace-wambui',
    name: 'Dr. Grace Wambui',
    role: 'Senior Aesthetic Dentist & Implantologist',
    specialty: 'Cosmetic Dentistry & Implants',
    bio: 'Expert in porcelain veneers, Philips Zoom laser teeth whitening, composite bonding, and dental implant prosthetics. Renowned for her gentle bedside manner and natural aesthetic touch.',
    credentials: [
      'BDS, Cert. Aesthetic Dentistry',
      'KMPDC Reg. No. A4720',
      'Smile Makeovers Fellow',
      'International Implantologist Assoc.'
    ],
    image: 'https://images.unsplash.com/photo-1594824813689-5674c5d5e546?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-brian-kiprono',
    name: 'Dr. Brian Kiprono',
    role: 'Pediatric & Oral Surgery Specialist',
    specialty: 'Pediatric Dentistry & Endodontics',
    bio: 'Specializes in child-friendly anxiety-free pediatric treatments, painless rotary root canal therapy, and atraumatic wisdom tooth extractions with rapid recovery protocols.',
    credentials: [
      'BDS, Dip. Oral Surgery',
      'KMPDC Reg. No. A5102',
      'Painless Extraction Specialist',
      'Pediatric Dental Society Kenya'
    ],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
  }
];
