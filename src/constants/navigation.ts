export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'timeline' | 'contact';

export interface MenuItem {
  key: string;
  href: `#${SectionId}`;
}

export const MENU_ITEMS: MenuItem[] = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.timeline', href: '#timeline' },
  { key: 'nav.contact', href: '#contact' },
] as const;
