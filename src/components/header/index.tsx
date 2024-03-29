'use client';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { Shoot } from '@/payload-types';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { background, opacity } from './anim';
import Nav from './nav';

export default function Navbar({ shoots }: { shoots: Shoot[] }) {
    const navRef = React.useRef(null);
    const [isActive, setIsActive] = useState(false);
    useOnClickOutside(navRef, () => setIsActive(false));
    return (
        <div className='bg-[#E9E3D3]  sticky w-full box-border p-2' ref={navRef}>
            <div className='flex justify-center items-center justify-items-center uppercase text-2xl font-normal relative'>
                <Link className='no-underline text-black absolute left-0' href="/">Niklas</Link>
                <div onClick={() => { setIsActive(!isActive) }} className='flex items-center justify-center cursor-pointer gap-2 '>
                    <div className={` w-5
            h-px
            bg-black
            rounded-full
            transition-all
            duration-150
            before:content-['']
            before:absolute
            before:w-5
            before:h-px
            before:-translate-y-1
            before:bg-black
            before:rounded-full
            before:transition-all
            before:duration-150
            after:content-['']
            after:absolute
            after:w-5
            after:h-px
            after:bg-black
            after:rounded-full
            after:translate-y-1
            after:transition-all
            after:duration-150
                    ${isActive ?
                            'h-0 bg-transparent before:translate-y-1 before:rotate-45 after:translate-y-0 after:-rotate-45' : ""}`}></div>
                    <div className='relative flex items-center odd:absolute odd:opacity-0'>
                        <motion.p className=' m-0' variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p className='absolute m-0' variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className='bg-black h-full w-full absolute left-0 opacity-50 top-[100%]'></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav shoots={shoots} isActive={isActive} setIsActive={setIsActive} />}
            </AnimatePresence>
        </div>
    )
}
