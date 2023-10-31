import React, { useEffect } from 'react';

interface TwinklingStarsProps {
  numStars: number;
}

const TwinklingStars: React.FC<TwinklingStarsProps> = ({ numStars }) => {
  useEffect(() => {
    const container = document.getElementById('twinkling-stars-container');

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      container?.appendChild(star);
    }
  }, [numStars]);

  return (
    <div id="twinkling-stars-container" className="twinkling-stars-container">
      {/* Stars will be dynamically generated here */}
    </div>
  );
};

export default TwinklingStars;
