export type Theme = 'light' | 'dark';

export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  imageUrl: string;
}