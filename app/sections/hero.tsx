"use client";
import react from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Hero: react.FC = () => {
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
        <>
        <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 0, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
      }}
      
    >
        <div className="flex flex-col lg:hidden w-full h-screen relative  bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
          <div className="h-screen w-full absolute">
<Image src="/bg.png" alt="bg" fill className=" h-screen w-full object-cover "></Image>
</div>
<div className="absolute w-full h-1/2 bg-gradient-to-b from-black/50 via-black/0 to-black/0 "></div>
<div className="relative w-full h-full flex justify-center items-center flex-col gap-[16px] pt-[54px] pb-[40px]">
    <h1 className="uppercase md:text-xs text-[11px] text-[rgb(228,224,212)] bdog2">into ritual</h1>
    <h1 className="uppercase text-[28px] text-[rgb(228,224,212)] prata3 text-center md:text-[32px] ">from the sacred<br></br>
soil of Arca</h1>
</div>
<div className="absolute w-full bottom-[20px]  "><h1 className="bdog2 md:text-xs text-[11px] text-[rgb(228,224,212)] uppercase text-center  ">
        ORLANCE awakens the senses  through <br></br> a refined skincare ritual.
    </h1></div>
        </div>
        <div className="w-full h-screen hidden lg:flex flex-row ">
<div className="w-1/2 h-full relative ">
<div className="absolute w-full h-1/2 bg-gradient-to-b from-black/50 via-black/0 to-black/0 "></div>
<div className="absolute  left-[24px] bottom-[24px] flex items-end justify-start text-white z-2">
<h1 className="bdog2 text-xs text-[#fff6] tracking-wider">© ORLANCE 2025</h1>
</div>
<img src="/bg.png" className=" h-screen w-full object-cover "></img>

</div>
<div className="w-1/2 h-full relative ">

<img src="Screenshot_2.png" className="absolute w-full h-full ">

</img>
<div className="flex flex-col items-center justify-between pt-[54px] relative w-full h-full  pb-[40px]">
<img src="symbol.svg" className="h-[54px] max-w-[100%]"></img>
<div className="flex-col flex items-center justify-center text-[rgb(228, 224, 212)] w-full h-full gap-[24px]">
<h1 className="uppercase text-xs text-[rgb(228, 224, 212)] bdog2">into ritual</h1>
<h1 className="uppercase text-[40px] text-[rgb(228, 224, 212)] prata text-center  ">from the sacred<br></br>
soil of Arca</h1>
</div>
<div>
    <h1 className="bdog2 md:text-xs text-[11px] uppercase text-center ">
        ORLANCE awakens the senses <br></br> through a refined skincare ritual.
    </h1>
</div>
</div>
</div>
        </div>
        
        </motion.div>
        </>
    );
 }