'use client'  ;
import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Section2: React.FC = () => {
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
    <div className="w-full lg:pb-[160px] lg:pt-[160px] pt-[100px] pb-[100px] px-[40px] bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
        <div className="flex flex-col items-center justify-center gap-[32px] lg:gap-[60px] text-center  ">
<h1 className="uppercase text-xs bdog">material</h1>
<p className="prata1 lg:text-[16px]  text-[14px] max-w-[460px] ">Minerals left by volcanic ash, pure water flowing through<br className="lg:flex hidden"></br> layered earth, and wild botanicals nurtured in silence—<br className="lg:flex hidden"></br>each element is a product of time and nature’s refinement.</p>
<div className="uppercase text-xs bdog flex-row flex items-center justify-center gap-2 cursor-pointer  group">
    VIEW more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</div>
</div>

    </div>
    
        </motion.div>
    );
};