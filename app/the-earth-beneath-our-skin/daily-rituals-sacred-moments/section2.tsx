'use client';
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const Section2grid = () => {
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
                            <div className="flex w-full justify-center"> 
        <div className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)] pt-[80px] pb-[90px] lg:pt-[160px] lg:pb-[160px] flex flex-col px-[20px] gap-[42.4px] md:px-0 max-w-[600px] md:max-w-[500px] lg:max-w-[600px]">

<div>

<p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)] ">Bloom Hair Oil was designed for these intimate rituals. It’s not about transformation—it’s about contact, about attention. The oil carries a soft fragrance: something green, something citrus, something like memory. It smooths, yes—but more than that, it centers. When I use it, I feel like I’m offering care to more than just my hair. It’s a way of making time visible, of seeing myself as worth the moment.</p>
</div>
<div className="relative w-full max-w-[560px] max-h-[840px] lg:max-w-[600px] lg:max-h-[900px]  aspect-[1/1.5]  ">
<Image alt="" fill src="/item2-hoverfull.webp" className="  max-w-[560px] max-h-[840px] lg:max-w-[600px] lg:max-h-[900px] aspect-auto object-cover"></Image>
</div>
<div>
    <p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)]" >These rituals become sacred not because they are grand, but because they are yours. With each use, I come back into rhythm. The oil doesn’t just shine—it hums. It speaks in texture, in patience, in the slow unfolding of routine. Over time, your hair becomes healthier. But more importantly, you begin to associate your reflection with care. With effort. With calm. And that changes everything.</p>
</div>
        </div>
        </div>
        </motion.div>
    );
};