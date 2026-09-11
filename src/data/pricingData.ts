import { PricingPackage } from '../types';

export const pricingData: PricingPackage[] = [
  {
    id: 'cleaning',
    title: 'Dental Cleaning & Exam',
    description: 'Ultrasonic scaling, air-flow polishing & comprehensive oral cancer and gum screening.',
    currency: 'KSh',
    amount: '4,500',
    period: 'Full session • Direct Insurance Accepted',
    serviceKey: 'Dental Cleaning & Tartar Removal',
    features: [
      'Gentle ultrasonic plaque & calculus removal',
      'Stain lift & fluoride tooth polishing',
      'Comprehensive digital gum evaluation',
      'Oral hygiene home prescription'
    ]
  },
  {
    id: 'whitening',
    title: 'In-Office Laser Whitening',
    description: 'Advanced laser whitening up to 8 shades brighter in 60 minutes with zero enamel sensitivity.',
    currency: 'KSh',
    amount: '25,000',
    period: 'Single session • Immediate results',
    featured: true,
    popularRibbon: 'MOST POPULAR',
    serviceKey: 'Professional Teeth Whitening',
    features: [
      'Philips Zoom Laser Treatment (Full session)',
      'Desensitizing protective gum barrier',
      'Free take-home maintenance touch-up pen',
      'Up to 8 shades whiter guarantee'
    ]
  },
  {
    id: 'braces',
    title: 'Orthodontic Braces',
    description: 'Traditional metal or aesthetic ceramic brackets with convenient interest-free installment options.',
    currency: 'From KSh',
    amount: '60,000',
    period: 'Or KSh 7,500/month installment plan',
    serviceKey: 'Affordable Braces & Clear Aligners',
    features: [
      '3D digital bite mapping & facial simulation',
      'All monthly adjustments included',
      'Flexible 0% interest monthly installments',
      'Post-treatment retention retainers included'
    ]
  },
  {
    id: 'extraction',
    title: 'Painless Tooth Extraction',
    description: 'Simple and gentle extraction under localized anesthesia with gentle tissue handling.',
    currency: 'KSh',
    amount: '3,500',
    period: 'Starting per tooth • Insurance accepted',
    serviceKey: 'Wisdom Teeth & Oral Surgery',
    features: [
      '100% Painless localized numbing protocol',
      'Atraumatic extraction technique',
      'Post-op medication & recovery guidance'
    ]
  },
  {
    id: 'root-canal',
    title: 'Painless Root Canal',
    description: 'Relieve intense tooth pain and save your natural tooth with rotary computerized endodontics.',
    currency: 'From KSh',
    amount: '18,000',
    period: 'Covered by all major Kenyan insurers',
    serviceKey: 'Painless Root Canal Therapy',
    features: [
      'Digital apex locator precision guidance',
      'Rotary nickel-titanium files for rapid healing',
      'Crown preparation assessment included'
    ]
  },
  {
    id: 'implants',
    title: 'Permanent Dental Implant',
    description: 'Biocompatible titanium post with custom handcrafted zirconia porcelain crown.',
    currency: 'From KSh',
    amount: '90,000',
    period: 'Lifetime tooth replacement solution',
    serviceKey: 'Permanent Dental Implants',
    features: [
      '3D CT surgical guided implant placement',
      'Custom zirconia porcelain crown',
      'Natural appearance & full chew functionality'
    ]
  }
];
