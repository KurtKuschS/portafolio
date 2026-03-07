import { motion } from 'framer-motion';
import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contacto <span className="gradient-text">Profesional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Conectemos</h3>

            <div className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-gray-400 mb-2">Email</p>
              <a href="mailto:kurt.kusch@gmail.com" className="text-lg text-white hover:text-primary transition-colors">
                kurt.kusch@gmail.com
              </a>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-gray-400 mb-2">GitHub</p>
              <a
                href="https://github.com/KurtKuschS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:text-primary transition-colors"
              >
                github.com/KurtKuschS
              </a>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-gray-400 mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/kurt-dereck-kusch-sep%C3%BAlveda-222bb0129/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:text-primary transition-colors"
              >
                linkedin.com/in/kurt-dereck-kusch-sepulveda
              </a>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-emerald-400/50 transition-colors">
              <p className="text-gray-400 mb-2">WhatsApp</p>
              <a
                href="https://wa.me/56942886459"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-emerald-400/50 px-4 py-2 text-lg text-emerald-300 transition-colors hover:bg-emerald-400/10"
              >
                Contactarme al +56 9 4288 6459
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold glow-button"
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
