import { useState, useEffect } from "react";
import { Hero, Gutschein, Slider } from "../components";
import { easeInOut, motion, AnimatePresence} from "framer-motion";

// Stellen Sie sicher, dass Ihre Komponenten korrekt importiert sind

const LandingPage = () => {
  const [currentComponent, setCurrentComponent] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [y, setY] = useState(0)
  const components = 2
 
  const handleComponentChange = useEffect(() => {
    setOpacity(1)
    setY(0)
  }, [currentComponent])
  
  
  return (
    <motion.div 
    key={'landingpage'}
    exit={{x: -800, opacity: 0}}
    transition={{duration: 0.4, ease: easeInOut}}
    className="container">
              <AnimatePresence mode="wait">

      <div className="landing-page">
        {currentComponent  === 1 && <Hero opacity={opacity} posY={y} />} 
        {currentComponent  === 2 &&  <Gutschein opacity={opacity} posY={y} />}
        
      </div>
      </AnimatePresence>
      <Slider numElements={components} setCurrentComponent={setCurrentComponent} currentComponent={currentComponent}/>
    </motion.div>
  );
};

export default LandingPage;