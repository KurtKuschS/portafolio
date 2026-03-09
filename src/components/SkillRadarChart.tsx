import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface SkillRadarDatum {
  category: string;
  value: number;
}

interface SkillRadarChartProps {
  data: SkillRadarDatum[];
}

const SkillRadarChart = memo(({ data }: SkillRadarChartProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait one frame so browser layout settles before Recharts measures the container.
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="glass-effect w-full min-w-0 rounded-2xl p-4 sm:p-6"
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-100">
        Skills Distribution
      </h3>

      <div className="mx-auto h-[320px] w-full max-w-2xl min-w-0">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="70%">
              <defs>
                <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.4} />
                </linearGradient>
              </defs>

              <PolarGrid stroke="rgba(148,163,184,0.18)" />

              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: '#cbd5e1', fontSize: 12 }}
              />

              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: '#111111',
                  border: '1px solid rgba(99,102,241,0.4)',
                  color: '#e2e8f0',
                  borderRadius: '12px',
                }}
              />

              <Radar
                name="Nivel"
                dataKey="value"
                stroke="#22d3ee"
                fill="url(#skillGradient)"
                fillOpacity={0.6}
                animationDuration={900}
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(99,102,241,0.6))',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full rounded-xl border border-white/10 bg-background/30" />
        )}
      </div>
    </motion.div>
  );
});

SkillRadarChart.displayName = 'SkillRadarChart';

export default SkillRadarChart;
