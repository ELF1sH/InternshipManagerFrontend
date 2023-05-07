import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ScaleProps {
  isVisible: boolean;
  children: React.ReactNode,
}

const Scale: React.FC<ScaleProps> = ({
  isVisible,
  children,
}) => (
  <AnimatePresence initial={false}>
    {isVisible && (
    <motion.div
      key="scale"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        type: 'spring',
        damping: 10,
        mass: 0.75,
        stiffness: 130,
      }}
    >
      { children }
    </motion.div>
    )}
  </AnimatePresence>
);

export default Scale;
