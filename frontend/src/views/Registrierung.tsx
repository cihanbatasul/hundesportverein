import { motion, easeInOut } from "framer-motion"
import { RegisterForm } from "../components"
import icon from '../assets/icon5.svg'

const Registrierung = () => {
  return (
    <motion.div
    key={'registerpage'}
    initial={{x: 800, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    exit={{x: -800, opacity: 0}}
    transition={{duration: 0.4, ease: easeInOut}}
    className="register-page"
    >
    <RegisterForm/>
   
   <motion.div className="login-page-right"><img src={icon}></img></motion.div>
    
    </motion.div>
  )
}

export default Registrierung