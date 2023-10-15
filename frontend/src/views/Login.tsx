import { motion, easeInOut } from "framer-motion"
import { LoginForm } from "../components"
import icon from '../assets/icon5.svg'
const Login = () => {
  return (
    <motion.div
    key={'loginpage'}
    initial={{x: 800, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    exit={{x: -800, opacity: 0}}
    transition={{duration: 0.4, ease: easeInOut}}
    className="login-page"
    >
    
    <LoginForm/>
   
   <motion.div className="login-page-right"><img src={icon}></img></motion.div>
    </motion.div>
  )
}

export default Login