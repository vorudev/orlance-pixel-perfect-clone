'use client';
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
export const Section4 = () => {
    const controls = useAnimation();
      const [ref, inView] = useInView({
        triggerOnce: true,   // Animate only the first time it appears
        threshold: 0.2,      // Percentage of element visibility to trigger
      });
    
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    return (
        
        <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 0, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
              }}
              
            >
        <div className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)] lg:pt-[200px] pt-[120px] w-full">
                <div className="flex flex-col lg:gap-[80px] gap-[20px] lg:px-[24px] px-[20px]">
                <div className="flex lg:flex-row flex-col w-full ">
<div className="lg:w-1/2 w-full flex-col flex lg:gap-[40px] gap-[16px] items-start justify-start">
<h1 className="prata2 lg:text-[40px] md:text-[32px] text-[28px] max-w-[440px] md:max-w-[480px] uppercase leading-[48px] tracking-[-0.4px] max-md:leading-[33.8px] max-md:tracking-[-0.28px]"
>
    A forgotten place, reawakened.
</h1>
<Link href="/shop" className="uppercase lg:text-xs text-[11px] bdog flex-row flex items-center justify-start gap-2 cursor-pointer  group">
    VIEW product <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</Link>
</div>
<div className="lg:w-1/2 mt-[48px] pr-[40px] lg:mt-0 w-full">
<p className="prata1 lg:text-[16px] text-[14px] max-w-[380px] md:max-w-[420px] md:text-[15px]">Inspired by the sacred temple of Arca, ORLANCE reimagines skincare through earth-born formulas.</p>
</div>
                </div>
                
                <div className="grid lg:grid-cols-4  grid-cols-2 gap-[8px] lg:gap-[16px] ">
<div className="overflow-hidden"><img src="/about-grid0.jpg" className="aspect-square object-cover hover:scale-103 transition duration-300 cursor-pointer "></img></div>
<div className="overflow-hidden"><img src="/about-grid1.jpg" className="aspect-square object-cover hover:scale-103 transition duration-300 cursor-pointer"></img></div>
<div className="overflow-hidden"><img src="/about-grid2.jpg" className="aspect-square object-cover hover:scale-103 transition duration-300 cursor-pointer"></img></div>
<div className="overflow-hidden"><img src="/about-grid3.jpg" className="aspect-square object-cover hover:scale-103 transition duration-300 cursor-pointer"></img></div>
                </div>
                </div>
                
            </div>
            </motion.div>
    )
}