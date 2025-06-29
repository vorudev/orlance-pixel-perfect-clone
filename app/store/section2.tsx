'use client';
import React from "react";
import { dataStore } from "./data";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
interface storeProps {
    title: string, 
    description: string, 
    link: string
}
const Section2Store: React.FC<storeProps> = ({ title, description, link }) => { 
    return (
        <div className="flex flex-col gap-[16px] pr-[20px]">
<h1 className="text-[20px] md:text-[22px] lg:text-[24px] prata7 uppercase " >
    {title}
</h1>
<p className="bdog2 text-[11px] md:text-xs uppercase text-[rgb(51,51,51)]" dangerouslySetInnerHTML={{ __html: description }}>
   
</p>
<div className="uppercase md:text-xs text-[11px] bdog2 flex-row flex items-center justify-start gap-2 cursor-pointer  group">
    VIEW more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</div>
        </div>
    )
 }
export const Section2 = () => {
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
        <div className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)] flex flex-row w-full  px-[20px]">
<div className="w-1/2 ">

</div>
<div className="w-1/2 grid mt-[48px] lg:mt-[60px] gap-y-[40px] lg:gap-y-[60px] lg:grid-cols-2">
{dataStore.map((card, index) => (
            <Section2Store key={index} title={card.title} description={card.description} link={card.link} />
))}
</div>
        </div>
        </motion.div>
    )
}