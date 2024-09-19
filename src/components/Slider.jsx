import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/cricket1.jpg',
  '/images/cricket2.jpg',
  '/images/cricket3.jpg',
  '/images/cricket4.jpg',
  '/images/cricket5.jpg',
  '/images/cricket6.jpg',
  '/images/cricket7.jpg',
  '/images/cricket8.jpg',
  '/images/cricket9.jpg'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  const updateVisibleImages = () => {
    if (window.innerWidth >= 1024) {
      setVisibleImages(3); // 3 images for large screens
    } else if (window.innerWidth >= 768) {
      setVisibleImages(2); // 2 images for medium screens
    } else {
      setVisibleImages(1); // 1 image for small screens
    }
  };

  useEffect(() => {
    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);
    return () => window.removeEventListener('resize', updateVisibleImages);
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const endIndex = currentIndex + visibleImages;
    return images.slice(currentIndex, endIndex).concat(
      images.slice(0, Math.max(0, endIndex - images.length))
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

      <div className="relative flex items-center justify-center">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 bg-white text-black p-3 rounded-full shadow-lg z-10"
        >
          &#8592;
        </button>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {getVisibleImages().map((src, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 sm:w-full p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full" style={{ paddingTop: '100%' }}> {/* 1:1 aspect ratio */}
                  <img
                    src={src}
                    alt={`Cricket ${index}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg'; 
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-4 bg-white text-black p-3 rounded-full shadow-lg z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
