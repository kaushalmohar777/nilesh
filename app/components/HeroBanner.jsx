import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/hydrogen1.jpg',
    title: 'Clean Energy Future',
    subtitle: 'Powered by Hydrogen',
  },
  {
    id: 2,
    image: '/images/hydrogen2.jpg',
    title: 'Fuel the Planet',
    subtitle: 'Hydrogen for all',
  },
  {
    id: 3,
    image: '/images/hydrogen3.jpg',
    title: 'Green Revolution',
    subtitle: 'Sustainable, Clean, Efficient',
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5-second auto-slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="text-lg mt-2">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
