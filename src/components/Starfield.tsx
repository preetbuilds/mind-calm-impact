import { useEffect, useState } from "react";

export const Starfield = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="starfield">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
