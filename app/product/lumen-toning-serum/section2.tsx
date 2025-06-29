'use client';
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Section2Item = () => {
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
        <div className="px-[40px] py-[100px] lg:py-[160px] bg-[rgb(251,251,239)] text-[rgb(35,25,22)] flex flex-col gap-[32px] lg:gap-[60px] items-center ">
<img src='https://cdn.prod.website-files.com/6822f8342a36484c66267e9a/68258c1e49f27f0540f92dcb_Icon.svg' className="w-[40px] h-auto"></img>
<p className="text-[14px] md:text-[15px] lg:text-[16px] prata1-2 text-center max-w-[460px]">Extracts of white lotus purify and awaken the complexion, while concentrated vitamin C enhances skin luminosity. White musk water supports hydration balance, preparing the skin for a refreshed beginning each morning.</p>
<p className="bdog2 uppercase text-[11px] md:text-[12px]">olra, pi choi</p>
        </div>
        </motion.div>
    );
};