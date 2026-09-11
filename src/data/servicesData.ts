import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic',
    duration: '45 - 60 mins',
    painless: true,
    tag: 'Philips Zoom Laser',
    description: 'In-office laser whitening and custom take-home kits that lift coffee, tea, and tobacco stains up to 8 shades lighter in a single visit without sensitivity.',
    perks: [
      'Philips Zoom Laser Technology',
      'Sensitivity-barrier gum protection',
      'Free post-whitening touch-up pen'
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'KSh 25,000'
  },
  {
    id: 'braces-aligners',
    title: 'Affordable Braces & Clear Aligners',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    duration: 'Monthly Checkups',
    painless: true,
    tag: 'Teens & Adults',
    description: 'Straighten crowded, gapped, or crooked teeth with traditional metal brackets, tooth-colored ceramic brackets, or discreet Invisalign clear trays.',
    perks: [
      'Flexible monthly installment payments from KSh 7,500',
      '3D digital bite alignment simulation',
      'Complimentary retainers upon completion'
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'From KSh 60,000'
  },
  {
    id: 'dental-implants',
    title: 'Permanent Dental Implants',
    category: 'restorative',
    categoryLabel: 'Restorative',
    duration: 'Lifetime Durability',
    painless: true,
    tag: 'Zirconia Crown',
    description: 'Replace missing teeth permanently with biocompatible medical-grade titanium posts and custom zirconia porcelain crowns designed to look and chew like natural teeth.',
    perks: [
      '3D guided computer placement',
      'Prevents jawbone deterioration',
      'Single tooth to full-arch restorations'
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'From KSh 90,000'
  },
  {
    id: 'dental-cleaning',
    title: 'Dental Cleaning & Tartar Removal',
    category: 'general',
    categoryLabel: 'General',
    duration: '30 - 45 mins',
    painless: true,
    tag: 'Ultrasonic Scaling',
    description: 'Prevent gingivitis, bleeding gums, and bad breath with our gentle ultrasonic scaling procedure that breaks down stubborn calculus without scraping tooth enamel.',
    perks: [
      'Painless ultrasonic plaque breakdown',
      'Air-flow stain lift & fluoride polish',
      'Digital gum health evaluation'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'KSh 4,500'
  },
  {
    id: 'root-canal',
    title: 'Painless Root Canal Therapy',
    category: 'restorative',
    categoryLabel: 'Endodontics',
    duration: '60 mins',
    painless: true,
    tag: 'Immediate Relief',
    description: 'Eliminate acute tooth nerve pain and save severely damaged teeth from extraction. Using computerized rotary endodontics, we clean and seal internal roots safely.',
    perks: [
      'Profound localized numbness guarantee',
      'Rotary files for faster, safer cleaning',
      'Direct insurance cashless billing'
    ],
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'From KSh 18,000'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric & Kids Dental Care',
    category: 'general',
    categoryLabel: 'Pediatric',
    duration: 'Child Friendly',
    painless: true,
    tag: 'Anxiety-Free',
    description: 'Gentle checkups, dental sealants, and cavity fillings for toddlers and schoolchildren. Our friendly pediatric specialists make every visit entertaining and stress-free.',
    perks: [
      'Cavity prevention molar sealants',
      'Habit correction (thumb-sucking, tongue-thrust)',
      'Fun rewards & positive conditioning'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'KSh 4,000'
  },
  {
    id: 'veneers-crowns',
    title: 'Porcelain Veneers & Crowns',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic',
    duration: 'Smile Makeover',
    painless: true,
    tag: '10+ Yr Durability',
    description: 'Custom handcrafted ceramic shells bonded to front teeth to mask discoloration, chips, cracks, and small gaps for a stunning, natural Hollywood smile makeover.',
    perks: [
      'Ultra-thin natural translucent porcelain',
      'Highly resistant to coffee & tea stains',
      'Custom facial proportioning & color match'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'From KSh 35,000 / tooth'
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Teeth & Oral Surgery',
    category: 'surgical',
    categoryLabel: 'Surgical',
    duration: '30 - 60 mins',
    painless: true,
    tag: 'Painless Local Anesthetic',
    description: 'Atraumatic surgical removal of impacted, painful, or misaligned third molars. We prioritize minimal tissue disruption and quick healing with comprehensive post-op care.',
    perks: [
      'Digital panoramic 3D scan mapping',
      'Profound painless localized anesthesia',
      'Free follow-up healing assessment'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    priceEstimate: 'From KSh 8,500'
  }
];
