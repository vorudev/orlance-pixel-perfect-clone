'use client';
import React from "react";
import { Section1Card } from "./section1-card";
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
        <div className="pt-[100px] lg:pt-[120px] bg-[rgb(251,251,239)] text-[rgb(35,25,22)] flex-col flex gap-[16px] ">
<h1 className="text-[28px] md:text-[32px] lg:text-[40px] prata3 uppercase pr-[40px] pl-[20px] lg:pt-[24px]">
    Inspiring tales <br></br>heartfelt moments
</h1>
<Section1Card />
        </div>
        </motion.div>
     );
 } 