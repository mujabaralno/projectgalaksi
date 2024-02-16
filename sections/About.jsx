'use client'

import React from 'react'
import styles from '@/styles'
import {motion} from 'framer-motion'
import { TypingText } from '@/components/shared/CustomText'
import { staggerContainer, fadeIn } from '@/utils/motion'

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center text-[#303030]" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[#303030]"
      >
        <span className="font-extrabold text-black">Welcome</span> your hub for in-depth and up-to-date insights into artificial intelligence. With an intuitive design, we provide informative articles, practical guides, and the latest news, guiding users from beginners to AI experts.{' '}
        <span className="font-extrabold text-black">
        Explore fundamental AI concepts,
        </span>{' '}
        industry applications, and discover learning resources to support your skill development. Join our discussion forum to engage with the {' '}
        <span className="font-extrabold text-black">AI</span> community, exchange experiences, and stay connected with the latest developments in the world of intelligent technology. Let's together {' '}
        <span className="font-extrabold text-black">explore</span> and understand the limitless potential of artificial intelligence.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/downarrow.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
  )
}

export default About