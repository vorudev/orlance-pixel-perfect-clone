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
<p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)] ">Thera Soil is more than a skincare product—it’s a form of communication. Clay absorbs our heat, our breath, and in return offers its ancient calm. It contains minerals shaped by wind and erosion, holding stories from centuries past. When applied to the skin, the sensation is grounding and familiar. It doesn’t mask or exfoliate aggressively—it gently reintroduces you to the idea of slowness. Using it feels like pressing pause in a world that only wants forward motion.</p>
</div>
<div className="relative w-full aspect-square">

    {/* <Image alt="" fill src="/grid3.jpg" className="aspect-square object-cover"></Image>
    не работает на iphone 12 pro, не разобрался
     */}
<img alt=""  src="/grid3.jpg" loading="lazy" className="aspect-square object-cover"></img>
</div>
<div>
    <p className="prata10 text-[14px] md:text-[15px] lg:text-[14px] text-[rgb(51,51,51)]" >Healing doesn’t begin when the product touches your face—it begins when you decide to treat yourself with attention. Each use is a tactile ritual: warm clay, the scent of earth, the hush of a quiet room. The clay dries gradually, inviting you to wait with it. As you rinse, the experience lingers—not just on your skin but in your sense of rhythm. You’ve made space. You’ve chosen to listen to something older than language. That alone is healing.</p>
</div>
        </div>
        </div>
        </motion.div>
    );
};