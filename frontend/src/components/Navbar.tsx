import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { useState, useEffect } from 'react'
import { motion, easeInOut, AnimatePresence} from 'framer-motion'
import {Loginpop} from '../components'
import { Menu, Home, ScrollText, LogIn, LogOut, FileSignature} from 'lucide-react'

const isMobileSize = () => {
  return window.matchMedia('(max-width: 600px)').matches
}


const Navbar = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const [isMenu, setIsMenu] = useState(false)


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 600)
  }

  useEffect(() => {
  
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
    window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  const handleLogin = () => {

    isMobile ?  navigate('/login') : setLogin(!login)
    setIsMenu(false)
  }

  const menuIconClick = () => {
    setIsMenu(!isMenu)
  }

  const handleLoginLinkClick = () => {
    setLogin(false);
  }



  if(isMobile)  {
    return (
      <div>

      
      <div className='navbar navbar-mobile'>
      <div>      <Link to="/"><Logo/></Link></div>
      <div className='menu' onClick={menuIconClick} > <Menu color='#229662'/> </div>
      
    </div>
    <AnimatePresence>

    {isMenu ? 
      <motion.div
      key="menuPopup"
      initial={{x: 500, opacity: 0}}
      animate={{x: 0, opacity:1}}
      exit={{x: 500, opacity: 0}}
      transition={{duration: 0.4, ease: easeInOut}}
      className='navbar-slide-down'
      >
        <div className='flex items-center justify-center'>
          <div className='mr-3'><Home /></div>
          <Link to="/">Home</Link>
          </div>
          
          <div className='flex items-center justify-center mb-4'>
          <div className='mr-3'><ScrollText/></div>
          <div><Link to="/quiz">Quiz</Link></div>
          </div>
        <motion.div
        className='login'
        >
        <div className='anmelden flex gap-2' onClick={handleLogin}><LogIn/>  Anmelden</div>
        {login ? <Loginpop/> : null}

      </motion.div>
      <div className='registrieren flex gap-2'><FileSignature/> <Link to="/register" onClick={handleLogin}>Registrieren</Link></div>
        </motion.div>
        : null}
        </AnimatePresence> 
    </div>
    )
  }


  return (
   <div className='navbar'>
    <div className='navbar-left'>
    <Link to="/"><Logo/></Link>
    <div><Link onClick={() => setIsMenu(false)} to="/">Home</Link></div>
    <div><Link  onClick={() => setIsMenu(false)} to="/quiz">Quiz</Link></div>
    </div>

    <div className='navbar-right'>
      <div className='find-us'>
      <svg viewBox="0 0 24 24" className="valign-middle" aria-hidden="true"><path d="M12 11.475c-1.479 0-2.679-1.176-2.679-2.625s1.2-2.625 2.679-2.625c1.479 0 2.679 1.176 2.679 2.625s-1.2 2.625-2.679 2.625M12 1.5c-4.146 0-7.5 3.287-7.5 7.35C4.5 14.363 12 22.5 12 22.5s7.5-8.137 7.5-13.65c0-4.063-3.354-7.35-7.5-7.35"></path></svg>
      </div>
      <div className='find-us'>
        Finden Sie zu uns
      </div>
     <motion.div
     className='login'
     >
     <div className='anmelden' onClick={handleLogin}>  Anmelden</div>
     {login ? <Loginpop  onLoginLinkClick={handleLoginLinkClick} /> : null}
     </motion.div>
      
      <Link to="/register"><div className='registrieren'> Registrieren</div></Link>
    </div>
   </div>

  )
}

export default Navbar