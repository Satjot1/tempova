'use client';

import React from "react";
import { AuroraBackground } from './ui/aurora-background';
import { motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {
    return (
        <div className="h-auto md:max-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
            <AuroraBackground className="w-screen">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-1"
                >
                    <div className="text-5xl md:text-8xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Temprova
                    </div>
                    <div className="font-extralight text-base md:text-xl dark:text-neutral-500 py-1">
                        - Let's make it easy
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        <Link href="/our-templates" >Explore templates</Link>
                        
                    </button>
                </motion.div>
            </AuroraBackground>
        </div>
    )
}

export default HeroSection