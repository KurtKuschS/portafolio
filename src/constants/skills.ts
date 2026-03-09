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
      { name: 'Python', level: 78 },
      { name: 'Django', level: 76 },
      { name: 'Django REST Framework', level: 72 },
      { name: 'PHP', level: 70 },
      { name: 'Laravel', level: 68 },
    ],
    colorClass: 'from-primary to-accent',
    aggregate: 73,
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 78 },
      { name: 'TypeScript', level: 74 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML', level: 84 },
      { name: 'CSS', level: 76 },
    ],
    colorClass: 'from-secondary to-primary',
    aggregate: 78,
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'PostgreSQL', level: 76 },
      { name: 'MySQL', level: 74 },
      { name: 'Supabase', level: 66 },
    ],
    colorClass: 'from-accent to-secondary',
    aggregate: 72,
  },
  {
    title: 'DevOps / Cloud',
    items: [
      { name: 'Docker', level: 64 },
      { name: 'Render', level: 70 },
      { name: 'Vercel', level: 82 },
    ],
    colorClass: 'from-primary to-secondary',
    aggregate: 72,
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 84 },
      { name: 'Linux', level: 72 },
      { name: 'Postman', level: 78 },
    ],
    colorClass: 'from-accent to-secondary',
    aggregate: 79,
  },
] as const;

export const getRadarData = () =>
  SKILL_CATEGORIES.map((category) => ({
    category: category.title,
    value: category.aggregate,
  }));
