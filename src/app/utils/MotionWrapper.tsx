'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionWrapperProps = {
  children: ReactNode;
  delay?: number; // <-- optional prop
};

export default function MotionWrapper({ children, delay = 0 }: MotionWrapperProps) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay, // <-- use the delay
      },
    },
  };

  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}
