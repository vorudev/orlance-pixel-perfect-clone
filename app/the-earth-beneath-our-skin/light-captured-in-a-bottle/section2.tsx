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
<p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)] ">Lumen is a tribute to light’s quieter forms. It draws inspiration from the way sunlight plays on skin, how it warms stone, how it fades into gold. Its ingredients were chosen to reflect, absorb, and refract light without creating a fake shine. Instead, it brings skin to life in a way that feels internal. You don’t apply it to stand out—you use it to feel in tune with the time of day. It becomes part of your mood, part of your hour. In this way, it is light, held gently.</p>
</div>
<div className="relative w-full max-w-[560px] max-h-[840px] lg:max-w-[600px] lg:max-h-[900px]  aspect-[1/1.5]">
<Image alt="" fill src="/grid4web.webp" className="max-w-[560px] max-h-[840px] lg:max-w-[600px] lg:max-h-[900px]  aspect-[1/1.5] object-cover"></Image>
</div>
<div>
    <p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)]" >The serum shifts as your skin shifts. It understands tone, adapts to texture, and reflects rather than covers. Applying Lumen is like stepping into a slow morning. The scent is quiet, the finish is calm. You’ll find yourself reaching for it not just to treat your skin, but to realign your senses. It teaches you how to move through light again, more consciously. And eventually, you stop thinking of it as a product. You think of it as part of your daily weather.</p>
</div>
        </div>
        </div>
        </motion.div>
    );
};