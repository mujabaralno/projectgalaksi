'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '@/utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center mt-[10px] right-[10px] items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          WELCOME 
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>To closeAI</h1>
        </motion.div>
          
      </div>

      <motion.div
        variants={staggerContainer(1.5)}
        initial="hidden"
        whileInView="show"
        className="relative w-full md:mt-[70px]  flex justify-end items-center flex-col jumpinganim"
      >
      
       <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/downarrow.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
      <motion.p
       variants={fadeIn('up', 'tween', 0.2, 1)}
       className="mt-[8px] font-normal sm:text-[15px] text-[20px] text-center text-[#303030]"
      >
        Scroll Down
      </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;