import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { useFormValidation } from '../hooks/useFormValidation';

export const ContactForm = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting, submitStatus } = useFormValidation();

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-4">
        <FormInput
          name="name"
          label="Name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />
        <FormTextArea
          name="message"
          label="Message"
          value={values.message}
          error={errors.message}
          onChange={handleChange}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
          flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50
          disabled:cursor-not-allowed transition-all relative overflow-hidden group"
      >
        <span className="relative z-10">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
        <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/10 text-green-500'
              : 'bg-red-500/10 text-red-500'
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}
    </motion.form>
  );
};