import { motion, easeInOut } from "framer-motion"
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'


interface User {
  email: string,
  first_name: string, 
  last_name: string,
  password: string,
}

interface UserForm extends User{
  password_confirm: string,
}

const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirmError, setPasswordConfirmError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  
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

const validateFirstName = (firstName: string ) => {
  let stmt 
  lastName.length < 1 ? stmt = false : stmt = true
  return stmt 
}

const validateLastName = (lastName: string ) => {
  let stmt 
  lastName.length < 1 ? stmt = false : stmt = true
  return stmt 
}

const handleSubmit = async (e) => {
  e.preventDefault();
  

  const isEmailValid = validateEmail(email)

  if (!isEmailValid) {
    setEmailError(true)
  } else {
    setEmailError(false)
  }

  const isPasswordValid = validatePassword(password)
  const isFirstNameValid = validateFirstName(firstName)
  const isLastNameValid = validateLastName(lastName)

  if(!isPasswordValid) {
    setPasswordError(true)
  } else {
    setPasswordError(false)
  }

  if(password !== passwordConfirm) {
    setPasswordConfirmError(true)
  } else {
    setPasswordConfirmError(false)
  }

  if (!isFirstNameValid) {
    setFirstNameError(true)
  }  else {
    setFirstNameError(false)
  }

  if(!isLastNameValid) {
    setLastNameError(true)
  } else {
    setLastNameError(false)
  }

  if (!isEmailValid || !isPasswordValid || password !== passwordConfirm || !isFirstNameValid || !isLastNameValid) {
    return
  }
  // const hashedPassword = bcrypt.hashSync(password, )
    const requestBody = {
      email,
      password,
      firstName,
      lastName,
    };

  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      console.log('Registration successful')
    } else {
      console.error('Registration failed')
    }
  } catch (error) {
    console.error('Error:', error)
  }

  setEmail("");
  setPassword("");
  setPasswordConfirm("");
  setFirstName("");
  setLastName("");
}


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
      <div className="info-text">Geben Sie Ihre Registrierungsdaten ein. Wenn Sie bereits ein Anmeldekonto haben, können sie sich hier <Link to="/login"><span className="link">anmelden</span></Link>.</div>
      </motion.div>  

    <motion.div initial={{opacity: 0, y: -30}}
    animate={{opacity:1, y: 0}}
    transition={{duration: 0.4, delay: 0.8, ease:easeInOut}} className="register">

    <div className="email">
      <div>
    <label>
        Email
        <input type="email" value={email}                   onChange={(e) => setEmail(e.target.value)}></input>
    </label>
    {emailError ? <span className="login-error">Stellen Sie sicher, dass das Format der Email-Adresse richtig ist (@, .com etc.).</span>
     : null }
    </div>

    </div>

    <div className="name">
    <div>
    <label>
        Vorname
        <input type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
    </label>
    {firstNameError ? <span className="login-error">Geben Sie Ihren Vornamen ein.</span>
     : null }
    </div>
   <div>
   <label>
        Nachname
        <input type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}/>
    </label>
    {lastNameError ? <span className="login-error">Geben Sie Ihren Nachnamen ein.</span>
     : null }
   </div>


    </div>
    <div className="register-password">
      <div>
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
      </div>
      <div>
      <label>
        Passwort bestätigen
        <div className="password-container">
        <input type={hidePassword? "password" : "text"} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>

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
      </div>
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
    console.log(e.key)
    handleSubmit(e)
  }
}}> 
    Anmelden
</motion.div>
    </motion.div>
  )
}

export default RegisterForm