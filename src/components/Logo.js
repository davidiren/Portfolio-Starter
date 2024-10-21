import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import { DiLogo } from './Icons';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <>
    <div className='flex items-center justify-center mt-2'>
        <motion.a href={"/"} target='_blank' whileHover={{scale:1.05}} whileTap={{scale:0.9}} className='w-full border border-transparent  rounded-full dark:fill-light'>
            <DiLogo />
        </motion.a>
    </div>
    {/*<div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-3xl font-bold 
          border border-solid border-transparent dark:border-light'
        whileHover={{
          backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition:{duration:1, repeat: Infinity}
        }}
        >DI</MotionLink>
    </div>*/}
    </>
    
  )
}

export default Logo