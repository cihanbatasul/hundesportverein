import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {motion, easeInOut} from 'framer-motion'
import picture from '../assets/icon1.svg'

interface props {
  opacity?: number
  posY?:number
}

const Hero: React.FC<props> = ({opacity, posY}) => {

  return (
    <motion.div 
    initial={{opacity: 0, y: -3000}}
    animate={{opacity: opacity, y: posY}}
    exit={{y: -3000, opacity: 0}}
    transition={{duration: 0.5, ease: easeInOut}}
    className='hero'>
        <motion.div className="hero-left">
        <motion.div 
        initial={{y: -50}}
        animate={{y: 0}}
        transition={{duration: 1.5}}
        className="hero-title text-4xl">
            Willkommen auf der Seite des Hundesportvereins Exten
        </motion.div>
        <motion.div 
        initial={{x: -50}}
        animate={{x: 0}}
        transition={{duration: 1.5}}
        className="hero-subtitle">Es ist uns eine Freude, gemeinsam Hundesport zu betreiben. Bei uns lernen sie, wie man den Hund davon abhält, aufs Sofa zu kacken.</motion.div>
        <motion.div>
        <Link to="/contact"><motion.button
        initial={{opacity: 0, x: +50}}
        animate={{opacity: 1, x: 0}}
        whileHover={{scale: 1.2, x: +10}}
        whileTap={{scale: 0.8}}
        transition={{
          duration: 1,    
          whileHover: { duration: 0.3 },
          whileTap: { duration: 0.2 },
        }}
        >Kontakt</motion.button></Link>
        </motion.div>
        </motion.div>
        <motion.div className="hero-right"><img src={picture}/></motion.div>
    </motion.div>
  )
}

export default Hero