'use client';
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export const Section3Item = () => {
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
        <div className="bg-[rgb(251,251,239)] text-[rgb(228,224,212)] w-full flex flex-col lg:flex-row ">
            <div className="lg:w-1/2 overflow-hidden relative lg:aspect-[1/1.35] aspect-[1/1.15]">
                                    <Image fill alt='' sizes="100vw" src="/item3-hoverfull.webp" className="lg:aspect-[1/1.35] aspect-[1/1.15] object-cover "></Image></div>
            <div className="   lg:w-1/2 aspect-[1/1.15] overflow-hidden bg-[rgb(57,68,23)]"> 
<div className="px-[60px] flex-col flex items-center justify-center h-full relative lg:px-[100px] ">
<h1 className="absolute top-[20px] lg:top-[48px] bdog1 uppercase text-[11px] md:text-xs">formula</h1>
<img src="/itempage3.webp" className="max-w-[100%]" ></img>
<div className="absolute bottom-[20px] px-[40px] lg:bottom-[48px]">
<p className="text-center text-[14px] md:text-[15px] lg:text-[16px] prata1-1 md:max-w-[380px]"> A nourishing hair oil that mirrors the lush vitality of moss, restoring shine and strength to every strand.</p>
</div>
</div>
            </div>
        </div>
        </motion.div>
    );
};