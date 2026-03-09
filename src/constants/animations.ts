export const ANIMATION_TIMINGS = {
  stagger: {
    short: 0.05,
    medium: 0.1,
    long: 0.2,
    category: 0.2,
  },
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    card: 0.35,
  },
  delay: {
    skillItem: 0.08,
    skillCategory: 0.1,
  },
} as const;

export const EASING = {
  linear: 'linear' as const,
  easeInOut: 'easeInOut' as const,
  easeOut: 'easeOut' as const,
};
