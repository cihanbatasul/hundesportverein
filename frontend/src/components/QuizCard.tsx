import { easeInOut, motion } from "framer-motion"

interface QuizCard {
    title: string
    progress: number
    delay?: number
}
const QuizCard: React.FC<QuizCard> = ({title, progress, delay}) => {
  return (
    <motion.div className=" quizcard">
    <motion.div 
    initial={{opacity: 0, x: -30}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 0.4, delay: delay, ease: easeInOut, type: "spring"}}
    className='w-full  p-[1px]  shadow-card'
    >
<div 
className=' card-content '>
<h3 className='text-black text-[20px] font-bold text-center'>{title}</h3>
<p>{progress} %</p>
<motion.div>
<motion.div className="quiz-card-button">
  Start
</motion.div>
</motion.div>
</div>
    </motion.div>
</motion.div>

  )
}

export default QuizCard