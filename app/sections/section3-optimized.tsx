'use client';

import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { DataSection3 } from "./Data2";

interface Section3Props { 
    title: string;
    image: string;
    description: string;
  
}



    export const Section3Smart = () => { 
          const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, image } = DataSection3[activeIndex];
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
            <div>
                <div className="flex flex-col lg:flex-row w-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
          {/* Блок с изображением */}
          <div className="relative w-full lg:w-1/2 aspect-[1/1.15] lg:aspect-[1/1.35]">
            <Image fill 
              src={image}
              alt="Section Visual"
              className="  object-cover"> 
             </Image>
          </div>
          {/* Блок с текстом и иконками */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-between px-[40px] pt-[40px] pb-[80px] lg:pb-0 lg:px-0 lg:pt-0 relative">
            <h1 className="uppercase md:text-xs text-[11px] bdog text-center lg:mt-[48px]">material</h1>
            <div className="flex flex-col gap-[24px] lg:gap-[40px] items-center text-center mt-[24px] lg:mt-0">
              <h1 className="prata2  lg:text-[40px] md:text-[32px] text-[28px]  uppercase max-w-[360.875px] md:max-w-[412.422px]">
                {title}
              </h1>
              <p className="prata1 lg:text-[16px] text-[14px] md:text-[15px] max-w-[460px] ">
                {description}
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-[36px] lg:mt-0 mb-[20px] lg:mb-[48px] ">
                
              {DataSection3.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
             
            >
                <div  className={`
                rounded-full md:w-[74px] md:h-[74px] h-[46px] w-[46px] flex items-center justify-center cursor-pointer
                ${activeIndex === idx ? 'border-1 border-black' : 'border-1 border-transparent'}
              `}>
              <div className="rounded-full overflow-hidden w-[40px] h-[40px] md:w-[64px] md:h-[64px] relative">
                <Image
                  src={item.icon}
                  width={64}
                  height={64}
                  quality={1}
                  alt={item.title}
                  className="object-cover rounded-full"
                />
              </div>
              </div>
              
            </button>
            
          ))}
          
            </div>
            <div className="absolute lg:bottom-[30px] bottom-[85px] flex flex-row lg:gap-[62px] gap-[36px] md:gap-[62px] -translate-x-[2px]">
                <span className="uppercase bdog2 md:text-xs text-[11px]">bark</span>
                <span className="uppercase bdog2 md:text-xs text-[11px]">soil</span>
                <span className="uppercase bdog2 md:text-xs text-[11px]">ore</span>
            </div>
          </div>
        </div>
              
            </div>
            </motion.div>
         )
    }