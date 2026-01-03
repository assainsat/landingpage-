
import { NavItem, CommunityItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Roast', href: '#hero' },
  { label: 'Our Story', href: '#story' },
  { label: 'Community Wall', href: '#community' },
  { label: 'Share Your Brew', href: '#submit' },
];

export const INITIAL_COMMUNITY: CommunityItem[] = [
  {
    id: '1',
    type: 'story',
    author: 'Elena R.',
    content: 'The sun hitting the vintage mahogany tables at 8 AM is a ritual I can\'t live without. The double espresso here is the only thing that truly wakes up my soul.',
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: '2',
    type: 'idea',
    author: 'Marcus J.',
    content: 'How about a "Lavender & Smoked Honey" latte for the spring season? I think it would pair beautifully with your sourdough pastries.',
    timestamp: new Date(Date.now() - 172800000),
  },
  {
    id: '3',
    type: 'photo',
    author: 'Sarah L.',
    content: 'Captured this perfect latte art yesterday. The precision is just unmatched.',
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    timestamp: new Date(Date.now() - 259200000),
  }
];

// Added missing FEATURES export to fix error in Features.tsx
export const FEATURES = [
  {
    icon: '☕',
    title: 'Micro-Batch Roasting',
    description: 'Every bean is roasted in small batches to ensure the profile of the origin is perfectly preserved.'
  },
  {
    icon: '🌍',
    title: 'Direct Trade',
    description: 'Our beans are sourced directly from farmers, ensuring they receive above-market prices for their labor.'
  },
  {
    icon: '✨',
    title: 'Brewing Ritual',
    description: 'From hand-poured V60s to precision-pulled espresso, we treat every cup as a work of art.'
  }
];
