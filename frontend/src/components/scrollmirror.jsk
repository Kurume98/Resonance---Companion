// 🪞 ScrollMirror.jsx — Portal Reflection Node
import React, { useContext, useEffect, useRef } from 'react';
import { ResonanceContext } from '../context/ResonanceContext';

const ScrollMirror = () => {
  const { scrollState, tone } = useContext(ResonanceContext);
  const mirrorRef = useRef(null);

  useEffect(() => {
    if (!mirrorRef.current) return;

    const toneMap = {
      a: '--vowel-a',
      e: '--vowel-e',
      ẹ: '--vowel-ẹ',
      i: '--vowel-i',
      ị: '--vowel-ị',
      o: '--vowel-o',
      ọ: '--vowel-ọ',
      u: '--vowel-u',
    };

    const root = getComputedStyle(document.documentElement);
    const newColor = root.getPropertyValue(toneMap[tone] || '--vowel-a');

    mirrorRef.current.style.backgroundColor = newColor;
  }, [tone]);

  return (
    <div className="scroll-mirror-wrapper">
      <div className="scroll-mirror" ref={mirrorRef}>
        <p>{scrollState.message || 'Listening...'}</p>
      </div>
    </div>
  );
};

export default ScrollMirror;