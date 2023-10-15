import { motion, easeInOut } from "framer-motion"
import gutschein from '../assets/Gutschein.jpg'
import texte from "../static/texts.json"

interface props {
  opacity?: number
  posY?: number
}

const Gutschein: React.FC<props> = ({opacity, posY}) => {
  const texts = texte.gutschein


  return ( 
    <motion.div
    initial={{opacity: 0, y: +2000}}
    animate={{opacity: opacity, y: posY}}
    exit={{y: +2000, opacity: 0}}
    transition={{duration: 0.5}}
    className="gutschein"
    >
        <motion.div className="gutschein-links">
       <motion.div className="gutschein-links-bild">
       <motion.img src={gutschein}></motion.img>
       </motion.div>
        </motion.div>

        <motion.div className="gutschein-rechts">
        <motion.div 
        initial={{y: -50}}
        animate={{y: 0}}
        transition={{duration: 1}}className="gutschein-rechts-title ">{texts.title}</motion.div>
        <motion.div 
        initial={{x: -50}}
        animate={{x: 0}}
        transition={{duration: 1}}className="gutschein-rechts-subtitle">{texts.description}</motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Gutschein