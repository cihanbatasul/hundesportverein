import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import Logo from "./Logo"

import text from '../static/texts.json'

const Footer = () => {
const texts = text 
const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  return (
    <motion.div className="footer">
        <motion.div className="footer-logo"><Logo/></motion.div>
        
        <motion.div className="privacy">
            <div className="datenschutz">
<Link to="/datenschutz">Datenschutz</Link>
            </div>
            <div className="impressum">
            <Link to="/impressum">Impressum</Link>

            </div>
        </motion.div>
        <motion.div className="social-media"></motion.div>
        <motion.div className="sitemap">
        <div className="general">
        <div className="title">Allgemein</div>

        <div className="link"><Link to="/">Home</Link></div>
        <div className="link"><Link to="/quiz">Quiz</Link></div>
        </div>
        
        <div className="account">
        <div className="title">Konto</div>
        <div className="link"><Link to="/login">Anmelden</Link></div>
        <div className="link"><Link to="/register">Registrieren</Link></div>

        
        </div>


        <div className="title contact-title">Kontakt</div>
        <motion.div className="contact-information">
            <div>
            <div className="adresse">
            <div>{texts.kontakt.adresse.straße}</div>
            <div>{texts.kontakt.adresse.ort}</div>
            </div>

            
            </div>
            
        </motion.div>
        <motion.div className="contact-information digital">
        <div className="telefon">
                <div><span>Tel</span> - {texts.kontakt.telefon}</div>
            </div>

            <div className="email">
                <div><span>Email</span> - {texts.kontakt.email}</div>
            </div>
        </motion.div>
        </motion.div>
       
        <motion.div className="copyright">{`Copyright © Exten e.V. - ${currentDate}`}</motion.div>
    </motion.div>
  )
}

export default Footer
