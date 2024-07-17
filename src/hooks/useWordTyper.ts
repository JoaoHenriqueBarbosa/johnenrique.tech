import { useEffect, useState } from "react";

export const useWordTyper = (words: string[]) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const isWordComplete = displayedText === currentWord;

      if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setDisplayedText((prevText) => prevText.slice(0, -1));
        }
      } else {
        if (isWordComplete) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }
      }

      setTypingSpeed(isDeleting ? 100 : 200); // Faster deleting speed
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, words, currentWordIndex]);

  return displayedText;
};
