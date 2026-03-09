import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Campo trampa para bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam: honeypot field (si está lleno, es un bot)
    if (formData.honeypot) {
      console.warn('Spam detected: honeypot field filled');
      return;
    }

    // Anti-spam: rate limiting (1 mensaje cada 60 segundos)
    const now = Date.now();
    const cooldownMs = 60000; // 60 segundos
    if (now - lastSubmitTime < cooldownMs) {
      const secondsLeft = Math.ceil((cooldownMs - (now - lastSubmitTime)) / 1000);
      setIsError(true);
      setStatusMessage(`Espera ${secondsLeft} segundos antes de enviar otro mensaje.`);
      return;
    }

    // Validación: mensaje mínimo 10 caracteres
    if (formData.message.trim().length < 10) {
      setIsError(true);
      setStatusMessage('El mensaje debe tener al menos 10 caracteres.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsError(true);
      setStatusMessage('Falta configurar EmailJS en variables de entorno.');
      return;
    }

    try {
      setIsSubmitting(true);
      setIsError(false);
      setStatusMessage(null);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey }
      );

      setStatusMessage('Mensaje enviado correctamente. Te responderé pronto.');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setLastSubmitTime(now);
    } catch {
      setIsError(true);
      setStatusMessage('No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.');
    } finally {
      setIsSubmitting(false);
    }
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
              {/* Honeypot field - campo oculto para detectar bots */}
              <input
                type="text"
                id="website"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje <span className="text-gray-500 text-xs">(mínimo 10 caracteres)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-white/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/1000</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold glow-button"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>

              {statusMessage && (
                <p
                  className={`text-sm ${
                    isError ? 'text-rose-300' : 'text-emerald-300'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
