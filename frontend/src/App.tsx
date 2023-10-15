import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './store/AnimatedRoutes.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
<div className='test'>
<Router>
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>
    </Router>

</div>
  )
}

export default App
