'use client';

import { motion } from 'framer-motion';

import styles from '@/styles';
import { fadeIn } from '@/utils/motion';
import { SignedIn } from '@clerk/nextjs';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, route }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8  flex justify-start w-full flex-col   rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <h2 className="mb-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <SignedIn>
        <div
          className={`${styles.flexCenter} px-4 py-3 w-[100px] rounded-[24px] glassmorphism mb-[16px]`}
        >
        <a className="font-normal text-[16px] leading-[20.16px] text-white uppercase "
        href={route}
        >
          Enter
        </a>
        </div>
        </SignedIn>
        
      </div>
    )}
  </motion.div>
);

export default ExploreCard;