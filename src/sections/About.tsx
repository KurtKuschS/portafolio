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
            Ingeniero en Computación e Informática con experiencia en el desarrollo de sistemas web
            enfocados en gestión administrativa, plataformas de ventas y reservas.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Con enfoque <span className="text-primary font-semibold">Junior Backend / Full Stack</span>, me especializo
            en desarrollo backend con Python y Django, Django REST Framework, y PHP con Laravel,
            trabajando con bases de datos relacionales como PostgreSQL y MySQL.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            También cuento con experiencia en frontend moderno usando React y TypeScript, y en despliegue
            de aplicaciones en plataformas cloud como Render y Vercel. Mi foco es construir software
            mantenible, escalable y bien estructurado, siguiendo buenas prácticas de ingeniería.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
