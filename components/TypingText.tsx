

import React, { useState, useEffect } from 'react';
import { BlinkingCursor } from './BlinkingCursor';

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const TypingText: React.FC<TypingTextProps> = ({ text, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
        setIsComplete(true);
        if (onComplete) {
            const completeTimeout = setTimeout(onComplete, 500);
            return () => clearTimeout(completeTimeout);
        }
    }
  }, [displayedText, text, speed, onComplete]);

  return (
    <p>
      {displayedText}
      {!isComplete && <BlinkingCursor />}
    </p>
  );
};
