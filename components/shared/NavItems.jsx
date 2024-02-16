'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants';
import Link from 'next/link'

const NavItems = () => {
    const usepath = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {navLinks.map((link) => {
            const isActive = usepath === link.route;
            
            return(
                <li className={`${
                    isActive ? 'text-gray-700' : 'text-gray-500'
                  } flex-center p-medium-16 whitespace-nowrap`}
                  key={link.route}
                >
                    <Link
                    href={link.route}
                    >
                        {link.label}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems