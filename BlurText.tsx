import React from 'react';
import { motion, Variants } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
}) => {
  const words = text.split(' ');
  const letters = text.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: direction === 'top' ? 20 : -20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  if (animateBy === 'letters') {
    return (
      <motion.div
        className={`flex flex-wrap ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={onAnimationComplete}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={itemVariants} className="inline-block">
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`flex flex-wrap gap-x-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={itemVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BlurText;