import texte from '../static/texts.json'
import { motion } from 'framer-motion'

const Datenschutz = () => {
const texts = texte

    return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}
    className='datenschutz container'
    >
    <motion.div className=' haupt-title'>{texts.datenschutz.title}</motion.div>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
     transition={{ duration: 0.5 }} className='abschnitt allgemein'>
    <motion.div className='title'>{texts.datenschutz.allgemein.title}</motion.div>
    <motion.div className='subtitle'>{texts.datenschutz.allgemein.subtitle}</motion.div>
    <motion.div className='adress'>
      <motion.div>{texts.datenschutz.allgemein.vereinsname}</motion.div>
      <motion.div>{texts.datenschutz.allgemein.vorsitzender}</motion.div>
      <motion.div>{texts.datenschutz.allgemein.straße}</motion.div>
      <motion.div>{texts.datenschutz.allgemein.ort}</motion.div>
    </motion.div>
    <motion.div>{texts.datenschutz.allgemein.restliches}</motion.div>
    </motion.div>


    <motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   viewport={{ once: true }}
    transition={{ duration: 0.5 }} className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.widerruf.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.widerruf.text}</motion.div>
    </motion.div>


    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
     transition={{ duration: 0.5 }} className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.beschwerde.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.beschwerde.text + texts.datenschutz.beschwerde.link}</motion.div>

    </motion.div>


    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
     transition={{ duration: 0.5 }} className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.datenübertragbarkeit.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.datenübertragbarkeit.text}</motion.div>
    </motion.div>


    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
     transition={{ duration: 0.5 }} className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.auskunft.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.auskunft.text}</motion.div>
    </motion.div>


    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
     transition={{ duration: 0.5 }} className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.verschlüsselung.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.verschlüsselung.text}</motion.div>
    </motion.div>

    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
     transition={{ duration: 0.5 }} className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.newsletter.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.newsletter.text}</motion.div>
    </motion.div> 

    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
      transition={{ duration: 0.5 }}  className='abschnitt'>
    <motion.div className='title'>{texts.datenschutz.youtube.title}</motion.div>
    <motion.div className=''>{texts.datenschutz.youtube.text}</motion.div>
    </motion.div>   









    </motion.div>
  )
}

export default Datenschutz