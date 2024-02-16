'use client';

import { motion } from 'framer-motion';
import { socials } from '@/constants';

import styles from '@/styles';
import { footerVariants } from '@/utils/motion';
import Image from 'next/image';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-[#303030] opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <Image 
          src="/logoclosed.svg" width={120} height={100}
          alt="logo" 
          />
          <p className="font-normal text-[14px] text-[#303030] opacity-50">
            Copyright © 2024 ClosedAI. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
              key={social.name}
              href={social.linkto}
              >
                <img
                  
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;