import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { Button } from '../ui/button'
import styles from '@/styles'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const Header = () => {
  return (
    <header className={`${styles.xPaddings} py-3 relative`}>
        
        <div className='wrapper flex items-center justify-between z-10'>
            <Link href="/" className="w-36">
                <Image 
                src="/logoclosed.svg" width={120} height={100}
                alt="logo" 
                />
            </Link>


            <SignedIn>
                <div className='md:flex-between  hidden w-full max-w-xs'>
                    <NavItems />
                </div>
            </SignedIn>

            <div className='flex flex-row w-32 justify-end gap-4'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' showName='true'/>
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">
                        Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>    
    </header>
  )
}

export default Header