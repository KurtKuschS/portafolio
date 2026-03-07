import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Soy <span className="text-primary font-semibold">Ingeniero en Computación e Informática</span> con
            una sólida formación en desarrollo de software y un enfoque orientado a crear soluciones
            tecnológicas eficientes, escalables y mantenibles.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Me interesa profundamente el diseño e implementación de sistemas, el trabajo con herramientas
            técnicas modernas y la construcción de aplicaciones que resuelvan problemas reales con impacto.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            A futuro, busco especializarme en áreas avanzadas como <span className="text-secondary font-semibold">bioinformática</span>
            {' '}y <span className="text-secondary font-semibold">sistemas complejos</span>, combinando ingeniería,
            ciencia de datos y arquitectura de software para enfrentar desafíos de alta complejidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
