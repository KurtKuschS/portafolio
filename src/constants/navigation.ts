export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'timeline' | 'contact';

export interface MenuItem {
  name: string;
  href: `#${SectionId}`;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contacto', href: '#contact' },
] as const;
