'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  words: string[];
  interval?: number;
  className?: string;
  style?: CSSProperties;
};

export default function RotatingWord({ words, interval = 2400, className = '', style }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid overflow-visible align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '60%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-60%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {/* Inner span holds the gradient — isolated from opacity animation */}
          <span className={className} style={style}>
            {words[index]}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
