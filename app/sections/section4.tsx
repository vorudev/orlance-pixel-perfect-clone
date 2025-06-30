"use client";
import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const Section4: React.FC = () => {
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
        <div className="flex lg:flex-row w-full  flex-col-reverse bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
          
<Link className="lg:flex  hidden  w-1/2  flex-col gap-[20px] items-center justify-between" href="/product/aura-veil-facial-cream">
<h1 className="bdog text-xs text-[rgb(35,25,22)] mt-[48px] uppercase  ">recommend</h1>
<div className="flex flex-col items-center lg:gap-[20px]">
  <div className="relative h-[460px] w-full">
<Image alt='' src="/item4.png" quality={30} height={460} width={460} className=" "></Image>
</div>
<div className="flex flex-col items-center gap-[16px] ">
<h1 className="prata1-1 text-[16px] text-center uppercase">aura veil facial cream</h1>
<p className="text-xs bdog2 ">$ 220.00 USD</p>
</div>
</div>
<div className="w-full py-[20px] group hover:bg-[rgb(35,25,22)] hover:text-[rgb(251,251,239)] transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer">

<div className="uppercase text-xs bdog flex-row flex items-center justify-center gap-2 cursor-pointer  ">
    VIEW more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(35,25,22)] group-hover:border-[rgb(251,251,239)] transition duration-300 flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-6 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</div>

</div>
 </Link>

 <div className="lg:w-1/2 flex relative  w-full   justify-between">
<div className="absolute hidden z-2 text-[rgb(35,25,22)] justify-between items-center lg:flex flex-col h-full w-full ">
<h1 className="bdog2 text-xs text-[rgb(251,251,239)] mt-[48px]  ">FORMULA</h1>
<p className="prata1-1 text-center text-[rgb(228,224,212)] text-[16px] mb-[48px]">Formed from volcanic ash, deep-layered spring<br></br> water, and wild herbs, our formula restores the<br></br> skin through purification, hydration, and calm — <br></br>in seamless harmony.</p>
</div>
<div className="relative aspect-[1/1.15] lg:aspect-[1/1.35] w-full"><Image alt="" src="/item4-hover-copy.webp"  sizes="(max-width: 768px) 100vw, 50vw" fill className=" object-cover"></Image></div>

</div>

 </div>
      </motion.div>
      
    );
};
/*  <div className="lg:w-1/2 flex relative w-full   justify-between">
<div className="relative z-2 text-[rgb(35,25,22)] justify-between items-center flex flex-col h-auto w-full ">
<h1 className="bdog text-xs text-[rgb(251,251,239)] mt-[48px]  ">FORMULA</h1>
<p className="prata1 text-center text-[rgb(251,251,239)] text-[16px] mb-[48px]">Formed from volcanic ash, deep-layered spring<br></br> water, and wild herbs, our formula restores the<br></br> skin through purification, hydration, and calm — <br></br>in seamless harmony.</p>
</div>
<div className="absolute  w-full"><img src="item4-hover.png" className="h-auto aspect-[1/1.15] w-full object-cover"></img></div>

</div> */