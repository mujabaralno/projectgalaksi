'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'
import { exploreWorlds } from '@/constants'
import ExploreCard from '@/components/shared/ExploreCard'
import { TypingText, TitleText } from '@/components/shared/CustomText'
import { staggerContainer } from '@/utils/motion'

const Explore = () => {
    const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Product" textStyles="text-center text-[#303030]" />
        <TitleText
          title={<>Choose the product you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center text-[#303030]"
         
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
    
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore