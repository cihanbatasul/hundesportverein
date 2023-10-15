import { motion } from "framer-motion"
import { useState } from "react"

interface Question {
  id: number
  question: string
  answers: Answer[]
}

interface Answer {
  id: number
  answer: string
  is_correct: number
}

const QuizContainer = () => {

  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [questions, setQuestions] = useState<Question[]>([])
  const progressBarWidth = (currentQuestion / 20) * 100

  const date = new Date();
  let currentDay= String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;



  console.log(progressBarWidth)
   const  getQuestions = async () => {
    try {
      const response = await fetch('http://localhost:5000/quiz', {
        method: 'GET',
        headers: {
          'CONTENT-TYPE': 'application/json',
        },
      })

      if(response.ok) {
        const data: Question[]  = await response.json()
        setQuestions(data)
        console.log(data)
      } else {
        console.error("Failed to fetch questions.")
      }
    } catch (error) {
      console.log("Error fetching questions: ", error)
    }
  }

  // getQuestions()
  
  return (
    <motion.div className="quiz-container">
    <motion.div className="quiz-progress-container">
        <motion.div className="quiz-infos">
          <div className="quiz-infos-left"> 
          <div className="quiz-title-icon">
            <svg
  width="50"
  height="50"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#359672"
    d="M472 80H352V32H80v416h272z"
  />
  <path
    fill="#9c640c"
    d="M480 32H352v48h128z"
  />
  <path
    fill="#359672"
    d="M80 32H208v48H80z"
  />
  <path
    fill="#fff"
    d="M472 80H352V32H80v48h128v368h264z"
  />
  <path
    fill="#f76d57"
    d="M224 144h64v64h-64zM352 144h64v64h-64z"
  />
  <path
    fill="#ec4e20"
    d="M464 16h-16c8.837 0 16 7.163 16 16v432c0 8.837-7.163 16-16 16h16a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8z"
  />
  <path
    fill="#ffcb00"
    d="M352 144h64v64h-64z"
  />
  <path
    fill="#d1d3d4"
    d="M352 208h64v64h-64z"
  />
  <path
    fill="#9c640c"
    d="M464 16h-16c8.837 0 16 7.163 16 16v64h-64V32c0-8.837 7.163-16 16-16z"
  />
  <path
    fill="#ffac33"
    d="M352 352h64v64h-64z"
  />
  <path
    fill="#f76d57"
    d="M416 432H352v-64h64zM224 144h64v64h-64z"
  />
  <path
    fill="#ec4e20"
    d="M288 144h64v64h-64z"
  />
  <path
    fill="#ffac33"
    d="M352 352h64v64h-64z"
  />
  <path
    fill="#d1d3d4"
    d="M416 432H352v-64h64zM288 144h64v64h-64z"
  />
  <path
    fill="#ec4e20"
    d="M224 144h64v64h-64z"
  />
</svg>
            </div> 

          <div className="quiz-infos-title">
    <div>
    IMM250F 2018 Midterm Test

    
          </div>
          <div className="quiz-infos-date">
            Handed In on Oct 16 2018
          </div>
          </div>
          </div>

          <div className="quiz-infos-right">
            <div className="quiz-infos-question-index">
             Frage 1 von 20
            </div>
          </div>
        </motion.div>

        <motion.div className={`quiz-progress-bar w-[${progressBarWidth}%]`}>
        </motion.div>
    </motion.div>        

    <motion.div className="quiz-canvas">
    <div className="question-area">
    <div className="question-info">
      <div className="question-info-left">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="questioncloud" viewBox="0 0 232 214.1438" enable-background="new 0 0 232 214.1438"  width="28" height="28">
<g>
	<path fill="#D0E8FF" d="M184.5722,95.4366c-0.6953,0-1.3848,0.0176-2.0703,0.0547c-1.0762,0.0703-2.1699-0.334-2.9668-1.0898   c-0.7988-0.7559-1.25-1.8066-1.25-2.9043c-0.0001-31.0078-25.8908-56.1855-57.7131-56.1854   c-25.2695,0.0001-47.3789,15.7208-55.0194,39.1213c-0.5801,1.7812-2.3281,2.9316-4.1953,2.7383   c-1.5742-0.1543-3.1719-0.2344-4.7852-0.2344C29.7889,76.9371,7.9999,99.0036,8,126.1247s21.7892,49.1874,48.5724,49.1873   c0.7109,0,1.4199-0.0156,2.125-0.0469c0.2793-0.0059,0.5469,0.0039,0.8105,0.0469l126.6582-0.0004   c0.1523-0.0273,0.3086-0.0449,0.4648-0.0527c20.9551-1.0919,37.3691-18.6115,37.369-39.8849   C224,113.3525,206.3124,95.4366,184.5722,95.4366z M124.0001,155.3118l-8,0l0-8l8,0L124.0001,155.3118z M124,127.3284   l0.0001,15.9854l-8,0L116,119.6243l4.1562,0v-0.002c11.1133,0,20.1543-9.0411,20.1542-20.1544   c0-11.1133-9.0411-20.1562-20.1544-20.1562c-11.1133,0-20.1562,9.043-20.1562,20.1563l-8,0   c0-15.5254,12.6308-28.1563,28.1562-28.1563c15.5234-0.0001,28.1543,12.6308,28.1544,28.1562   C148.3105,113.6843,137.7068,125.4436,124,127.3284z"/>
	<path fill="#1C71DA" d="M186.16,87.464c-2.1095-33.5176-30.7209-60.1523-65.5881-60.1521   c-27.6641,0.0001-52.0175,16.6193-61.578,41.676c-0.8066-0.0332-1.6152-0.0508-2.4219-0.0508   C25.3787,68.9371-0.0001,94.5915,0,126.1247s25.3791,57.1874,56.5724,57.1873c0.6035,0,1.2031-0.0098,1.8027-0.0293   c0.1582,0.0195,0.3203,0.0293,0.4824,0.0293l128-0.0004c0.3047,0,0.6055-0.0371,0.8945-0.1055   c24.8691-1.6661,44.248-22.5392,44.2479-47.8322C232,109.4775,211.58,88.3135,186.16,87.464z M186.631,175.2589   c-0.1562,0.0078-0.3125,0.0254-0.4648,0.0527L59.508,175.312c-0.2637-0.043-0.5312-0.0527-0.8105-0.0469   c-0.7051,0.0312-1.4141,0.0469-2.125,0.0469C29.7892,175.3121,8.0001,153.2458,8,126.1247S29.7889,76.9371,56.5721,76.937   c1.6133,0,3.2109,0.0801,4.7852,0.2344c1.8672,0.1934,3.6152-0.957,4.1953-2.7383c7.6406-23.4004,29.7499-39.1212,55.0194-39.1213   c31.8223-0.0001,57.713,25.1776,57.7131,56.1854c0,1.0977,0.4512,2.1484,1.25,2.9043c0.7969,0.7559,1.8906,1.1601,2.9668,1.0898   c0.6855-0.0371,1.375-0.0547,2.0703-0.0547C206.3124,95.4366,224,113.3525,224,135.374   C224.0001,156.6474,207.5861,174.167,186.631,175.2589z"/>
	<path fill="#1C71DA" d="M120.1561,71.3118c-15.5254,0-28.1562,12.6309-28.1562,28.1563l8,0   c0-11.1133,9.0429-20.1563,20.1562-20.1563c11.1133,0,20.1543,9.0429,20.1544,20.1562c0,11.1133-9.041,20.1543-20.1542,20.1544   v0.002l-4.1562,0l0.0001,23.6895l8,0L124,127.3284c13.7068-1.8848,24.3105-13.6441,24.3105-27.8604   C148.3104,83.9426,135.6795,71.3118,120.1561,71.3118z"/>
	<rect x="116.0001" y="147.3118" fill="#1C71DA" width="8" height="8"/>
</g>
<path fill="#FF5D5D" d="M176.3851,22.1438c-1.0239,0-2.0474-0.3906-2.8286-1.1714c-1.562-1.5625-1.562-4.0947,0-5.6572  l14.142-14.1421c1.5625-1.5615,4.0947-1.5615,5.6572,0c1.562,1.5625,1.562,4.0947,0,5.6572l-14.142,14.1421  C178.4324,21.7532,177.409,22.1438,176.3851,22.1438z"/>
<path fill="#FF5D5D" d="M190.5272,22.1418c-1.0239,0-2.0474-0.3906-2.8286-1.1714l-14.1421-14.142  c-1.562-1.5625-1.562-4.0947,0-5.6572c1.5625-1.5615,4.0947-1.5615,5.6572,0l14.1421,14.142c1.562,1.5625,1.562,4.0947,0,5.6572  C192.5745,21.7512,191.5511,22.1418,190.5272,22.1418z"/>
<path fill="#00D40B" d="M186.3857,214.1438c-7.7197,0-14-6.2802-14-14c0-7.7197,6.2802-14,14-14s14,6.2802,14,14  C200.3857,207.8634,194.1054,214.1437,186.3857,214.1438z M186.3856,194.1438c-3.3086,0-6,2.6914-6,6c0,3.3086,2.6914,6,6,6  s6-2.6914,6-6C192.3856,196.8352,189.6942,194.1438,186.3856,194.1438z"/>
<path fill="#FFC504" d="M31.6988,36.7695c-1.0239,0-2.0474-0.3906-2.8286-1.1714L17.5567,24.2846  c-1.562-1.5625-1.562-4.0947,0-5.6567l11.3135-11.314c0.7505-0.7505,1.7676-1.1719,2.8286-1.1719  c1.061,0,2.0781,0.4214,2.8286,1.1714l11.314,11.314c0.75,0.7505,1.1714,1.7676,1.1714,2.8286s-0.4214,2.0781-1.1719,2.8286  l-11.314,11.3135C33.7462,36.3788,32.7223,36.7695,31.6988,36.7695z M26.0421,21.456l5.6567,5.6567l5.6572-5.6567l-5.6572-5.6572  L26.0421,21.456z"/>
</svg>
      </div>
      <div>
      Frage 1
      </div>
      </div>

      <div className="question-info-right">
      {currentDate}
      </div>

    </div>
    
    <div className="question">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorem earum! Eligendi, perspiciatis? Mollitia itaque ipsa sapiente ab vel modi ea neque quibusdam veniam, voluptates necessitatibus explicabo fuga incidunt nam.
    </div>
    </div>

    <div className="answers">
<div className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus perspiciatis necessitatibus incidunt dolore labore itaque autem voluptatum, odio eos eum a non fugit sed vel consequuntur accusantium deleniti commodi?</div>
<div className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus perspiciatis necessitatibus incidunt dolore labore itaque autem voluptatum, odio eos eum a non fugit sed vel consequuntur accusantium deleniti commodi?</div>
<div className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus perspiciatis necessitatibus incidunt dolore labore itaque autem voluptatum, odio eos eum a non fugit sed vel consequuntur accusantium deleniti commodi?</div>
    </div>

<div className="quiz-navigation-buttons">
  <div className="navigation-button previous">Zurück</div>
  <div className="navigation-button continue">Weiter</div>
</div>
    
    </motion.div>
    </motion.div>
)
}

export default QuizContainer