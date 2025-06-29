'use client';
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// баг с этими ебанными margin которые делал долбаеб, я исправил, указать на гитхабе что я исправил
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
<h1 className="text-[20px] md:text-[22px] lg:text-[24px] prata7 uppercase">Moss Emulsion is not meant to perform—it is meant to comfort.</h1>
<div>

<p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)]">Its texture is cushiony, quiet, and deliberate. It sinks into the skin slowly, like fog settling over leaves. There is no immediate change, no flash of effect.Instead, it works in silence. You feel it more than you see it. It asks you to believe in subtlety again.</p>
</div>
<div className="relative w-full max-w-[560px] max-h-[840px] lg:max-w-[600px] lg:max-h-[900px]  aspect-[1/1.5]  ">
<Image alt="" fill src="/grid1web.webp" className="  max-w-[560px] max-h-[840px] lg:max-w-[600px] lg:max-h-[900px] aspect-auto object-cover"></Image>
</div>
<div>
    <p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)]" >I believe calm should be built layer by layer, like moss itself. This emulsion hydrates deeply but never overwhelms. It stays present on the skin in the gentlest way, like damp earth underfoot. With time, you begin to feel a steadiness return. Not just to your skin, but to your day. You realize softness is strength. And that the quietest things often last the longest.</p>
</div>
        </div>
        </div>
        </motion.div>
    );
};