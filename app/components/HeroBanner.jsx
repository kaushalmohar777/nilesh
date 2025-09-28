import { useState, useEffect } from 'react';
import BgImg from '../assets/hero banner.png';
import box from '../assets/box.png'
const slides = [
  {
    id: 1,
    title: 'Vanaya Health\nSmart Growth Mix',
    subtitle: "A Smart Parent’s Daily Choice for Your Child’s Maximum Potential.",
    buttonText: 'Shop Now',
    image:box ,
    background: BgImg,
  },
  {
    id: 2,
    title: 'Boost Immunity\nwith Nature',
    subtitle: '100% Natural Ingredients. No Chemicals. Only Growth.',
    buttonText: 'Explore',
      image:box ,
    background: BgImg,
  },
  {
    id: 3,
    title: 'Fuel Your Child’s Brain',
    subtitle: 'Smart nutrients for sharp minds and strong bodies.',
    buttonText: 'Buy Now',
      image:box ,
    background: BgImg,
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url('${slide.background}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row w-full h-full items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-12">
            {/* Text */}
            <div className="text-white md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-[68px] md:text-5xl font-bold leading-tight whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="mt-4 text-xl">{slide.subtitle}</p>
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition duration-300 text-[15px]">
                {slide.buttonText}
              </button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-end">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-xs md:max-w-md drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators (dots) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
