import { Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence } from 'framer-motion'

// Views

import { LandingPage, Quiz, Kontakt, Datenschutz, Impressum, Login, Registrierung, QuizHome} from '../views'

const AnimatedRoutes = () => {
    const location = useLocation()

  return (
    <div className='main'>

    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<LandingPage/>}/>
    <Route path='/quiz' element={<QuizHome/>}/>
    <Route path="/quiz/test" element={<Quiz/>}/>
    <Route path="/contact" element={<Kontakt/>}/>
    <Route path="/datenschutz" element={<Datenschutz/>}/>
    <Route path="/impressum" element={<Impressum/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Registrierung/>}/>

    </Routes>
    </AnimatePresence>
    </div>

  )
}

export default AnimatedRoutes