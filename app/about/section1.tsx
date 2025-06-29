'use client';
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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
        <div className="h-[480px] w-full  md:h-[600px] relative">
<div className="absolute w-full h-full overflow-hidden ">
<img src="/bg-about.jpg" className="w-full h-full object-cover "></img>
</div>
<div className="w-full relative  h-full flex pl-[20px] pb-[20px] flex-col gap-[16px] justify-end">
<h1 className="prata3 uppercase text-[28px] md:text-[32px] lg:text-[40px] text-[rgb(228,224,212)]">from the sacred<br></br>soil of arca. </h1>
<Link href="/shop" className="uppercase md:text-xs text-[11px] bdog flex-row flex items-center justify-start gap-2 cursor-pointer  group">
    VIEW more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(228,224,212)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</Link>
</div>
        </div>
        </motion.div>
     );
 }