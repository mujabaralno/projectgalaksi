import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import NavItems from './NavItems'

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/next.svg"
            alt="logo"
            width={128}
            height={38}
          />
          
          <NavItems/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav