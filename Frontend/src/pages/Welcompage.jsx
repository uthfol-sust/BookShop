import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Welcomepage = () => {
  const slides = [
    {
      id: 1,
      text: "Welcome to Our Website!",
    },
    {
      id: 2,
      text: "Discover Amazing Features",
    },
    {
      id: 3,
      text: "Join Us Today!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize navigate function

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-full mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 bg-white flex items-center justify-center h-[75vh]" // 3/4 screen height
            >
              <h2 className="text-2xl font-semibold">{slide.text}</h2>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#8594;
        </button>

        {/* Indicators
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div> */}
      </div>

      {/* Get Started Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50"
          onClick={handleGetStarted} // Trigger navigation
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcomepage;
