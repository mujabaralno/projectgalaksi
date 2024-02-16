'use client'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { staggerContainer, fadeIn, slideIn  } from '@/utils/motion'
import { TypingText, TitleText } from '@/components/shared/CustomText'
import { newFeatures } from '@/constants'
import NewFeatures from '@/components/shared/NewFeatures'

const WhatNews = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" textStyles='text-[#303030]'/>
        <TitleText title={<>What's new About us?</>}  textStyles="text-[#303030]" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={`flex-1 ml-3 ${styles.flexCenter}`}
      >
        <img
          src="/intro.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
    </section>
  )
}

export default WhatNews