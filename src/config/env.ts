interface EnvConfig {
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

const validateEnv = (): EnvConfig => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('⚠️ EmailJS no está configurado. El formulario de contacto estará deshabilitado.');
    console.warn('Variables requeridas: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
    
    return {
      emailjs: {
        serviceId: '',
        templateId: '',
        publicKey: '',
      },
    };
  }

  return {
    emailjs: { serviceId, templateId, publicKey },
  };
};

export const env = validateEnv();

export const isEmailJSConfigured = (): boolean => {
  return Boolean(env.emailjs.serviceId && env.emailjs.templateId && env.emailjs.publicKey);
};
