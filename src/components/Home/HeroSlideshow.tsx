import { useEffect, useState } from "react";
import { TiUser, TiMail, TiHeart } from "react-icons/ti";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80",
    title: "Supporting Families",
    subtitle: "Empowering caregivers with resources and community",
    overlay: "bg-purple-900/50",
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    title: "Building Community",
    subtitle: "Connecting families for mutual support and growth",
    overlay: "bg-purple-900/50",
  },
  {
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80",
    title: "Making a Difference",
    subtitle: "Advocating for better support and recognition",
    overlay: "bg-purple-900/50",
  },
];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`absolute inset-0 ${slide.overlay}`} />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl animate-fade-in-delayed">
              {slide.subtitle}
            </p>
            <div className="flex gap-4 flex-wrap justify-center animate-fade-in-up">
              <Link
                to="/join-community"
                className="bg-white text-purple-900 text-base font-semibold flex items-center gap-2 justify-center cursor-pointer px-8 py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-all hover:scale-105 hover:shadow-lg"
              >
                <TiUser className="text-xl" />
                <span>Join Community</span>
              </Link>
              <Link
                to="/send-letter"
                className="bg-white text-purple-900 text-base font-semibold flex items-center gap-2 justify-center cursor-pointer px-8 py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-all hover:scale-105 hover:shadow-lg"
              >
                <TiMail className="text-xl" />
                <span>Send Advocacy Letter</span>
              </Link>
              <Link
                to="/find-support"
                className="bg-white text-purple-900 text-base font-semibold flex items-center justify-center gap-2 cursor-pointer px-8 py-4 rounded-lg border border-purple/20 hover:bg-gray-50 transition-all hover:scale-105 hover:shadow-lg"
              >
                <TiHeart className="text-xl" />
                <span>Find Support</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}; 