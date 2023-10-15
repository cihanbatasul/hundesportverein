import { motion, easeInOut, AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom'

interface LoginpopProps {
    onLoginLinkClick: () => void
}
const Loginpop: React.FC<LoginpopProps>= ({onLoginLinkClick}) => {

  return (
    <AnimatePresence>
    <motion.div
    key="loginpopup "
    initial={{scale: 0, y: 83, x:-100 , opacity: 0}}
    animate={{scale: 1, opacity: 1}}
    exit={{scale: 0}}
    transition={{duration: 0.4, ease: easeInOut}}
    className="loginpopup"
    >
        <motion.div
        
        className="loginpopup-inner input-container"
        >
           <div className="user">
    <label>
        Email
        <input type="email" ></input>
    </label>
    </div>
    <div className="password">
      <label>
        Passwort
        <input type="password"></input>
      </label>
    </div>  
            <div className="submit-area">
                <div className="submit-button">Anmelden</div>
                <Link to="/register">
                <div className='forgot-password' onClick={onLoginLinkClick}>Haben sie noch kein Konto?</div></Link>
            </div>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Loginpop