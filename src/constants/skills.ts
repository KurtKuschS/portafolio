export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
  colorClass: string;
  aggregate: number;
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', level: 82 },
      { name: 'Django', level: 80 },
      { name: 'Django REST Framework', level: 76 },
      { name: 'PHP', level: 74 },
      { name: 'Laravel', level: 72 },
    ],
    colorClass: 'from-primary to-accent',
    aggregate: 77,
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 62 },
      { name: 'TypeScript', level: 60 },
      { name: 'JavaScript', level: 68 },
      { name: 'HTML', level: 70 },
      { name: 'CSS', level: 60 },
    ],
    colorClass: 'from-secondary to-primary',
    aggregate: 64,
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'PostgreSQL', level: 76 },
      { name: 'MySQL', level: 62 },
      { name: 'Supabase', level: 55 },
    ],
    colorClass: 'from-accent to-secondary',
    aggregate: 64,
  },
  {
    title: 'DevOps / Cloud',
    items: [
      { name: 'Docker', level: 56 },
      { name: 'Render', level: 70 },
      { name: 'Vercel', level: 82 },
    ],
    colorClass: 'from-primary to-secondary',
    aggregate: 69,
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 84 },
      { name: 'Linux', level: 72 },
      { name: 'Postman', level: 58 },
    ],
    colorClass: 'from-accent to-secondary',
    aggregate: 74,
  },
] as const;

export const getRadarData = () =>
  SKILL_CATEGORIES.map((category) => ({
    category: category.title,
    value: category.aggregate,
  }));
