import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SliderProps {
  numElements: number;
  currentComponent: number;
  setCurrentComponent: (index: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  numElements,
  currentComponent,
  setCurrentComponent,
}: SliderProps) => {
  const controls = useAnimation();

  useEffect(() => {
    
      // Start the animation loop when the component is selected
      ;
   
  }, [currentComponent, controls]);

  const handleSliderClick = (index: number) => {
    setCurrentComponent(index + 1);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentComponent > 1) {
        setCurrentComponent(currentComponent - 1);
      }
    } else {
      if (currentComponent < numElements) {
        setCurrentComponent(currentComponent + 1);
      }
    }
  };
 
  const sliderElements = Array.from({ length: numElements }, (_, index) => (
    <motion.div
      key={index}
      className={`slider-element ${currentComponent === index + 1 ? 'selected' : ''}`}
      animate={currentComponent === index +1  ? {y: [0, 10, 0], transition: {duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear'}} : {y: [0, 0, 0]}} // Apply the animation controls to the selected element
      onClick={() => handleSliderClick(index)}
    ></motion.div>
  ));

  return (
    <motion.div className="slider">
      <motion.div className="slider-arrow" onClick={() => handleArrowClick('prev')}>
        &larr;
      </motion.div>
      {sliderElements}
      <motion.div className="slider-arrow" onClick={() => handleArrowClick('next')}>
        &rarr;
      </motion.div>
    </motion.div>
  );
};

export default Slider;