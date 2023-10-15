import { motion, easeInOut } from "framer-motion"
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'

//import bcrypt from 'bcryptjs'


const LoginForm = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)

  // const salt = bcrypt.genSaltSync()
  const validateEmail = (email: string ) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return false;
    }

    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/
    return passwordRegex.test(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      email: email,
      password: password,
    }

    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    if (!isEmailValid) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }

    if(!isPasswordValid) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }

    if(!isEmailValid || !isPasswordValid) {
      return
    }
    // const hashedPassword = bcrypt.hashSync(password, )
    
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Authentication successful, you can redirect or perform other actions here
        console.log('Authentication successful');
      } else {
        // Authentication failed, show an error message to the user
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setEmail("")
    setPassword("")
  };
 
  return (
    <motion.div
    className="loginform login-page-left"
    >
    
    <motion.div
    className="loginform-inner">

    <motion.div 
    initial={{opacity: 0, y: -30}}
    animate={{opacity:1, y: 0}}
    transition={{duration: 0.4, delay: 0.4, ease:easeInOut}}
    className="login-welcome">
      <div className="title">Willkommen</div> 
      <div className="info-text">Geben Sie Ihre Anmeldedaten ein. Wenn Sie noch kein Anmeldekonto haben, können sie sich hier <Link to="/register"><span className="link">registrieren</span></Link>.</div>
      </motion.div>  

    <motion.div initial={{opacity: 0, y: -30}}
    animate={{opacity:1, y: 0}}
    transition={{duration: 0.4, delay: 0.8, ease:easeInOut}} className="input-container">
    <div className="user">
    <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
    </label>
    {emailError ? <span className="login-error">Stellen Sie sicher, dass das Format der Email-Adresse richtig ist (@, .com etc.).</span>
     : null }
     </div>
    <div className="password">
      <label>
        Passwort
        <div className="password-container">
        <input type={hidePassword? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)}/>

        {hidePassword ? 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setHidePassword(!hidePassword)}>
<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setHidePassword(!hidePassword)}>
<path d="M2 2L22 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
</div>
      </label>
      {passwordError ? <span className="login-error">Stellen Sie sicher, dass das Password mehr als 8 Zeichen sowie Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen beinhaltet.</span> : null}
    </div>  
    </motion.div>    
    </motion.div>

<motion.div
initial={{opacity: 0, y: -30}}
animate={{opacity:1, y: 0}}
transition={{duration: 0.4, delay: 1.2, ease:easeInOut}} 
className="login-button"
onClick={handleSubmit}
onKeyPress={(e) => {
  if (e.key === "Enter") {
    handleSubmit(e)
  }
}}> 
Anmelden
</motion.div>
    </motion.div>
  )
}

export default LoginForm