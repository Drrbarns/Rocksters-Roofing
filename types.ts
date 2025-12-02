import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}