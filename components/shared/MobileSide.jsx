
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SideNav from './SideNav'
import Image from 'next/image'

const MobileSide = () => {
  return (
    <nav className='md:hidden w-6 bg-[#03001f]'>
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
        <SheetContent className="flex flex-col gap-6 bg-gray-700 md:hidden">
          <Image
            src="/next.svg"
            alt="logo"
            width={128}
            height={38}
          />
          
          <SideNav/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileSide
