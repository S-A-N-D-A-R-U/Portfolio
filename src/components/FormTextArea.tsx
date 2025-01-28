import { motion, HTMLMotionProps } from 'framer-motion';
import { TextareaHTMLAttributes } from 'react';

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextArea = ({ label, error, ...props }: FormTextAreaProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
          error ? 'border-red-500' : 'border-white/10'
        } text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all min-h-[120px]`}
        {...(props as HTMLMotionProps<"textarea">)}
      />
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500"
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};