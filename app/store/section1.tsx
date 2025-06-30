'use client';
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const Section1 = () => {
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
        <div className="h-[480px] w-full relative md:h-[600px]">
            
            <div className="absolute w-full h-full">
<Image src="/storebg.webp" fill sizes="100vw" alt="storebg" className="object-cover"></Image>
            </div>
            <div className="absolute w-full h-full bg-gradient-to-b from-black/20 via-black/20 to-black/20 "></div>
            <div className="relative z-1 flex flex-col w-full h-full pb-[20px] pl-[20px] lg:pl-[24px] lg:pb-[24px] pr-[40px] gap-[16px] lg:gap-[24px] justify-end ">
                <h1 className="prata2 uppercase text-[28px] md:text-[32px] lg:text-[40px] text-[rgb(228,224,212)]">
                    Where to find us <br></br> around the world.
                </h1>
                <div className="uppercase md:text-xs text-[11px] bdog2 flex-row flex items-center text-[rgb(228,224,212)] justify-start gap-2 cursor-pointer  group">
    VIEW more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(228,224,212)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</div>
            </div>

        </div>
        </motion.div> )
        }