'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Section3grid = () => {
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
        <Link href="/the-earth-beneath-our-skin/under-the-moss-a-memory" className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)] w-full flex justify-center pt-[10px]">
            <div className="flex flex-col px-[72px] gap-[24px] lg:gap-[40px] items-center group">
<p className="text-[11px] md:text-xs uppercase bdog2">next</p>
<div className="relative w-[180px] h-[252px] lg:w-[250px] lg:h-[350px] overflow-hidden">
    <Image src="/grid4web.webp" fill alt="" className=" aspect-[1/1.4] w-[180px] h-[252px] lg:w-[250px] lg:h-[350px] object-cover group-hover:scale-103 transition duration-500"></Image>
</div>
<div className="flex flex-col gap-[16px] lg:gap-[24px] items-center "> 
<h1 className="text-[20px] md:text-[22px] lg:text-[24px] prata7 uppercase text-center lg:max-w-[380px] md:max-w-[353.328px] "> 
    under the moss, a memory
</h1>
<p className="text-[13px] lg:text-[14px] prata6 text-center">
    Moss doesn’t grow loudly—but it stays.
</p>

</div>
<div className="uppercase md:text-xs text-[11px] bdog2 flex-row flex items-center justify-center gap-2 cursor-pointer  group">
    read more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</div>
            </div>
        </Link>
        </motion.div>
    )
}