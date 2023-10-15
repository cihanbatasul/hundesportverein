import React, { FC } from 'react'
import { motion } from 'framer-motion'
interface TabProps {
    num: number,
    selectedTab: number
}


const QuizQuestionTab: FC<TabProps> = ({num, selectedTab}) => {

    const tabs = Array.from( {length: num}, (_, index) => (
        <motion.div key={index} className={selectedTab === index + 1 ?  'quiz-tab quiz-tab-selected' : 'quiz-tab'}>
        Frage {index + 1}
    </motion.div>
    )
    
    )

  return (
    <motion.div className='quiz-progress-tabs'>
        {tabs}
    </motion.div>
  )
}

export default QuizQuestionTab