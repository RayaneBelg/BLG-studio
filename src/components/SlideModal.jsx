import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SLIDE } from "../assets/data";

export default function SlideModal() {
  const [current, setCurrent] = useState(0); // Current index of SLIDE array
  const [imageIndex, setImageIndex] = useState(0); // Current index of slide array (nested images)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX); // Record where the touch started
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX); // Track touch movement
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right
      handlePrev();
    }}

  // Handle navigation for the slides
  const handlePrev = () => {
    setImageIndex((prev) =>
      prev === 0 ? SLIDE[current].slide.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setImageIndex((prev) =>
      prev === SLIDE[current].slide.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-80vh w-3/4 border-2 flex justify-between items-center relative">
        {/* Left Arrow */}
        <BsChevronLeft
          size={50}
          className="dark:text-rose text-lightText cursor-pointer"
          onClick={handlePrev}
        />

        {/* Slide Content */}
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <img
            className="h-[60vh] object-contain"
            src={SLIDE[current]?.slide[imageIndex]}
            alt={`Slide ${imageIndex}`}
          />
        </div>

        {/* Right Arrow */}
        <BsChevronRight
          size={50}
          className="dark:text-rose text-lightText cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
