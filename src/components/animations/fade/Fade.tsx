import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FadeProps {
  isVisible: boolean;
  children: React.ReactNode,
  fadeDuration?: number,
  fadeInDuration?: number;
  fadeOutDuration?: number;
  delay?: number,
}

const Fade: React.FC<FadeProps> = ({
  isVisible,
  children,
  fadeDuration = 0.2,
  fadeInDuration = fadeDuration,
  fadeOutDuration = fadeDuration,
  delay = 0,
}) => {
  const initial = {
    opacity: 0,
  };

  const animate = {
    opacity: 1,
    transition: {
      duration: fadeInDuration,
      delay,
    },
  };

  const exit = {
    opacity: 0,
    transition: {
      duration: fadeOutDuration,
      delay,
    },
  };

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          key="fade"
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            ease: 'easeInOut',
          }}
        >
          { children }
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Fade;
