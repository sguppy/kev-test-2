



import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ScrambledTitleProps {
  text: string;
  isBooting: boolean;
}

const scrambleChars = '_/\\- |[]{}#*░▒▓█';

const ScrambledTitle: React.FC<ScrambledTitleProps> = ({ text: initialText, isBooting }) => {
  const [displayedText, setDisplayedText] = useState(initialText);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const revealed = new Set<number>();

    intervalRef.current = window.setInterval(() => {
        setDisplayedText(
            initialText
                .split('')
                .map((char, index) => {
                    if (char === ' ' || revealed.has(index)) {
                        return initialText[index];
                    }
                    return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                })
                .join('')
        );

        const unrevealedIndices = initialText
            .split('')
            .map((char, i) => (char !== ' ' && !revealed.has(i) ? i : -1))
            .filter(i => i !== -1);
            
        if (unrevealedIndices.length > 0) {
            const randomIndexToReveal = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            revealed.add(randomIndexToReveal);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setDisplayedText(initialText);
        }
    }, 40);
  }, [initialText]);

  useEffect(() => {
    if (isBooting) {
      setDisplayedText(
        initialText
          .split('')
          .map(char => (char === ' ' ? ' ' : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]))
          .join('')
      );
    } else {
      scramble();
    }
  }, [isBooting, initialText, scramble]);

  useEffect(() => {
    if (!isBooting) {
      const scheduleRandomScramble = () => {
        const delay = 180000; // 3 minutes
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          scramble();
          scheduleRandomScramble();
        }, delay);
      };
      
      scheduleRandomScramble();

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
  }, [isBooting, scramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return <>{displayedText}</>;
};

export default ScrambledTitle;