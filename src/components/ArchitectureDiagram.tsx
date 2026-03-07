import { motion } from 'framer-motion';

interface ArchitectureDiagramProps {
  architecture: string[];
  dataFlow: string[];
}

const ArchitectureDiagram = ({ architecture, dataFlow }: ArchitectureDiagramProps) => {
  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="mb-5 text-xl font-semibold text-gray-100">Arquitectura del Sistema</h3>

        <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
          {architecture.map((node, index) => (
            <motion.div
              key={`${node}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center"
            >
              <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary md:text-base">
                {node}
              </div>
              {index < architecture.length - 1 && (
                <span className="mx-2 text-secondary">&#8594;</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h3 className="mb-5 text-xl font-semibold text-gray-100">Flujo de Datos</h3>
        <div className="space-y-3">
          {dataFlow.map((step, index) => (
            <motion.div
              key={`${step}-${index}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start rounded-lg border border-white/10 bg-background/60 p-3"
            >
              <span className="mr-3 mt-0.5 text-xs font-semibold text-secondary">{index + 1}</span>
              <p className="text-sm text-gray-300 md:text-base">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
