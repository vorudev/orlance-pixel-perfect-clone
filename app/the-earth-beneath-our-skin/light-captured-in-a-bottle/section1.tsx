'use client';
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const Section1grid = () => {
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
        <div className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)] pt-[100px] lg:pt-0 w-full">
            <div className="flex flex-col lg:flex-row lg:h-screen">
<div className="flex flex-col gap-[24px] px-[40px] items-center lg:w-1/2 lg:h-full lg:justify-center relative">
    <h1 className="text-[28px] md:text-[32px] lg:text-[40px] uppercase prata3 text-center max-w-[400px] ">light captured in a bottle</h1>
<div className="flex flex-col gap-[16px] lg:gap-0 w-full items-center lg:flex-row lg:absolute lg:items-end lg:h-full lg:pb-[24px] lg:px-[24px]">
<div className="flex-col flex items-center lg:items-start lg:w-1/2 ">
    <div className="flex flex-row gap-[4px] ">
        <p className="uppercase bdog2 text-[11px] md:text-xs ">text:</p>
        <p className="uppercase bdog2 text-[11px] md:text-xs">adrian legrand</p>
        </div>
        <div className="flex flex-row gap-[4px]">
        <p className="uppercase bdog2 text-[11px] md:text-xs">photos:</p>
        <p className="uppercase bdog2 text-[11px] md:text-xs">elena woo</p>
        </div>
</div>
<p className="text-[13px] prata6 lg:w-1/2 lg:text-[14px]">Light reveals, but also remembers.</p>
</div>

</div>
<div className="relative aspect-[1/1.15] w-full mt-[24px] lg:mt-0 lg:w-1/2 lg:aspect-auto">
    <Image fill alt="" src="/grid2web.webp" className="aspect-[1/1.15] lg:aspect-auto object-cover "></Image>
</div>
</div>
        </div>
        </motion.div>
    )
}