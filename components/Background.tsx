import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  opacity: number;
}

const Background: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 6 + Math.random() * 10,
        delay: Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-200 text-4xl"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            opacity: heart.opacity,
            animation: `float ${heart.animationDuration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default Background;