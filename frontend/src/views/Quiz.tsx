import { QuizCard, QuizContainer} from "../components"
import { motion, easeInOut } from "framer-motion"
import { useState } from "react"

const Quiz = () => {

  const [progress, setProgress] = useState(20)

  return (
    <motion.div
    key={'quizpage'}
    initial={{x: 800, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    exit={{x: -800, opacity: 0}}
    transition={{duration: 0.4, ease: easeInOut}}
    className="quiz"
    >

      <motion.div
      className="quizcard-container">
      <QuizCard title="Gemischt" progress={progress} delay={0.4}/>
      <QuizCard title="Gemischt" progress={progress} delay={0.8}/>
      <QuizCard title="Gemischt" progress={progress} delay={1.2}/>      
      </motion.div>
      <QuizContainer/>
    </motion.div>
  )
}

export default Quiz