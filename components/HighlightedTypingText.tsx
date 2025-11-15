
import React, { useState, useEffect } from 'react';
import { BlinkingCursor } from './BlinkingCursor';
import { Highlight } from './Highlight';

interface HighlightedTypingTextProps {
  preText: string;
  highlightedText: string;
  speed?: number;
  onComplete?: () => void;
}

export const HighlightedTypingText: React.FC<HighlightedTypingTextProps> = ({ preText, highlightedText, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = preText + highlightedText;

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      setIsComplete(true);
      if (onComplete) {
        const completeTimeout = setTimeout(onComplete, 500);
        return () => clearTimeout(completeTimeout);
      }
    }
  }, [displayedText, fullText, speed, onComplete]);
  
  const pre = displayedText.substring(0, preText.length);
  const highlighted = displayedText.length > preText.length ? displayedText.substring(preText.length) : '';

  return (
    <p>
      {pre}
      {highlighted && <Highlight>{highlighted}</Highlight>}
      {!isComplete && <BlinkingCursor />}
    </p>
  );
};
