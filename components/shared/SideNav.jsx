'use client'

import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import {
  
  AiOutlineArrowRight,
  AiOutlinePlus

} from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const SideNav = () => {
  const router = useRouter();
  const isActive = usePathname();
  const reloadPage = (e) => {
    e.preventDefault();
    window.location.reload();
    };
  return (
    <div className="scrollbar-trigger border-r-4 flex h-full w-full  flex-1 items-start ">
      <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
        <div className={`flex-col flex-1 overflow-y-auto border-b list-none border-white/20 sidebar`}>
          <div
              role="button"
              onClick={reloadPage}
              className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20"
            >
              <AiOutlinePlus className="h-4 w-4" />
              New chat
            </div>
          <a 
          href="/chatgpt"
          className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
          <AiOutlineArrowRight className="h-4 w-4" />
          Chat GPT
         </a>
            <a
            href="/summarytext"
            className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer  text-sm">
            <AiOutlineArrowRight className="h-4 w-4" />
            Summary Text
            </a>
            <a 
            href="/summaryarticle"
            className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
            <AiOutlineArrowRight className="h-4 w-4" />
            Summary Article
            </a>
       
        </div>
        
        
        <a href="/" 
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
          <MdLogout className="h-4 w-4" />
          Back Home
        </a>
        
      </nav>
    </div>
  )
}

export default SideNav
