import React, { useEffect, useState } from 'react';

const Header = () => {
  const fullText = "Your to-do list: where small steps lead to big victories.";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 60); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="mt-4">
      <div>
        <span className="text-secondary font-bold text-3xl font-lucky ml-4">To-Do List</span>
      </div>
      <div className="mt-4 pl-4 text-center">
        <span id="type" className="text-secondary font-love text-2xl">
          {displayedText}
          <span className="animate-pulse font-bold text-3xl font-sans">|</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
