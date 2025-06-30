'use client';
import React from "react"; 
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Section3: React.FC = () => {
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
    const [openSection, setOpenSection] = useState<number | null>(null);
    const toggleSection = (sectionId: number) => {
  if (openSection === sectionId) {
    setOpenSection(null);
  } else {
    setOpenSection(sectionId);
  }
};
const renderSectionContent = (sectionId: number) => { 
    switch (sectionId) {
    case 1:
      return (
        <div className="flex flex-col lg:flex-row w-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
  {/* Блок с изображением */}
  <div className="relative w-full lg:w-1/2">
    <img
      src="/section3.png"
      alt="Section Visual"
      className="w-full h-auto aspect-[1/1.15] lg:aspect-[1/1.35] object-cover"
    />
  </div>
  {/* Блок с текстом и иконками */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-between px-[40px] pt-[40px] pb-[80px] lg:pb-0 lg:px-0 lg:pt-0">
    <h1 className="uppercase md:text-xs text-[11px] bdog text-center lg:mt-[48px]">material</h1>
    <div className="flex flex-col gap-[24px] lg:gap-[40px] items-center text-center mt-[24px] lg:mt-0">
      <h1 className="prata2  lg:text-[40px] md:text-[32px] text-[28px]  uppercase max-w-[360.875px] md:max-w-[412.422px]">
        The origin of clarity
      </h1>
      <p className="prata1 lg:text-[16px] text-[14px] md:text-[15px] max-w-[460px] ">
        Born from ancient volcanic traces, this fine mineral ash
        purifies the skin and absorbs impurities, helping restore its
        natural balance.
      </p>
    </div>
    <div className="flex flex-row gap-4 mt-[36px] lg:mt-0 mb-[20px] lg:mb-[48px] ">
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(1)}
          className="rounded-full border border-black flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3.png"
              alt="bark"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">bark</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(2)}
          className="rounded-full flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-2.png"
              alt="soil"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">soil</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(3)}
          className="rounded-full flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-3.png"
              alt="ore"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">ore</h1>
      </div>
    </div>
  </div>
</div>
      );
    case 2: 
      return (
        <div className="flex flex-col lg:flex-row w-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
  {/* Блок с изображением */}
  <div className="relative w-full lg:w-1/2">
    <img
      src="/section3-2.png"
      alt="Section Visual"
      className="w-full h-auto aspect-[1/1.15] lg:aspect-[1/1.35] object-cover"
    />
  </div>
  {/* Блок с текстом и иконками */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-between px-[40px] pt-[40px] pb-[80px] lg:pb-0 lg:px-0 lg:pt-0">
    <h1 className="uppercase md:text-xs text-[11px] bdog text-center lg:mt-[48px]">material</h1>
    <div className="flex flex-col gap-[24px] lg:gap-[40px] items-center text-center mt-[24px] lg:mt-0">
      <h1 className="prata2  lg:text-[40px] md:text-[32px] text-[28px]  uppercase max-w-[360.875px] md:max-w-[412.422px]">
        Life grown in silence
      </h1>
      <p className="prata1 lg:text-[16px] text-[14px] md:text-[15px] max-w-[460px] ">
        Sourced from untouched highlands and forests, these wild herbs bring raw vitality, soothing the skin and protecting it from external stressors.
      </p>
    </div>
    <div className="flex flex-row gap-4 mt-[36px] lg:mt-0  mb-[20px] lg:mb-[48px]">
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(1)}
          className="rounded-full  flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:w-[64px] md:h-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3.png"
              alt="bark"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">bark</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(2)}
          className="rounded-full flex items-center border border-black justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:w-[64px] md:h-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-2.png"
              alt="soil"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">soil</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(3)}
          className="rounded-full flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-3.png"
              alt="ore"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">ore</h1>
      </div>
    </div>
  </div>
</div>
    )
    case 3: 
      return (
        <div className="flex flex-col lg:flex-row w-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
  {/* Блок с изображением */}
  <div className="relative w-full lg:w-1/2">
    <img
      src="/section3-3.png"
      alt="Section Visual"
      className="w-full h-auto aspect-[1/1.15] lg:aspect-[1/1.35] object-cover"
    />
  </div>
  {/* Блок с текстом и иконками */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-between px-[40px] pt-[40px] pb-[80px] lg:pb-0 lg:px-0 lg:pt-0">
    <h1 className="uppercase md:text-xs text-[11px] bdog text-center lg:mt-[48px]">material</h1>
    <div className="flex flex-col gap-[24px] lg:gap-[40px] items-center text-center mt-[24px] lg:mt-0">
      <h1 className="prata2  lg:text-[40px] md:text-[32px] text-[28px]  uppercase max-w-[360.875px] md:max-w-[412.422px]">
        Water that remembers the earth
      </h1>
      <p className="prata1 lg:text-[16px] text-[14px] md:text-[15px] max-w-[460px] ">
        Filtered slowly through layers of earth, this spring water is naturally purified over centuries. It deeply hydrates and calms the skin with nature’s flow.
      </p>
    </div>
    <div className="flex flex-row gap-4 mt-[36px] lg:mt-0 mb-[20px] lg:mb-[48px] ">
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(1)}
          className="rounded-full  flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3.png"
              alt="bark"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">bark</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(2)}
          className="rounded-full flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-2.png"
              alt="soil"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">soil</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(3)}
          className="rounded-full flex items-center border border-black justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-3.png"
              alt="ore"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">ore</h1>
      </div>
    </div>
  </div>
</div>
    );
    default: 
    return (
        <div className="flex flex-col lg:flex-row w-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
  {/* Блок с изображением */}
  <div className="relative w-full lg:w-1/2">
    <img
      src="/section3.png"
      alt="Section Visual"
      className="w-full h-auto aspect-[1/1.15] lg:aspect-[1/1.35] object-cover"
    />
  </div>
  {/* Блок с текстом и иконками */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-between px-[40px] pt-[40px] pb-[80px] lg:pb-0 lg:px-0 lg:pt-0">
    <h1 className="uppercase md:text-xs text-[11px] bdog text-center lg:mt-[48px]">material</h1>
    <div className="flex flex-col gap-[24px] lg:gap-[40px] items-center text-center mt-[24px] lg:mt-0">
      <h1 className="prata2  lg:text-[40px] md:text-[32px] text-[28px]  uppercase max-w-[360.875px] md:max-w-[412.422px]">
        The origin of clarity
      </h1>
      <p className="prata1 lg:text-[16px] text-[14px] md:text-[15px] max-w-[460px] ">
        Born from ancient volcanic traces, this fine mineral ash
        purifies the skin and absorbs impurities, helping restore its
        natural balance.
      </p>
    </div>
    <div className="flex flex-row gap-4 mt-[36px] lg:mt-0 mb-[20px] lg:mb-[48px]">
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(1)}
          className="rounded-full border border-black flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3.png"
              alt="bark"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">bark</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(2)}
          className="rounded-full flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-2.png"
              alt="soil"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">soil</h1>
      </div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => toggleSection(3)}
          className="rounded-full flex items-center justify-center md:w-[74px] md:h-[74px] h-[46px] w-[46px] cursor-pointer"
        >
          <div className="rounded-full md:h-[64px] md:w-[64px] h-[40px] w-[40px] overflow-hidden">
            <img
              src="/section3-3.png"
              alt="ore"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="uppercase text-[11px] md:text-xs bdog text-center mt-[8px]">ore</h1>
      </div>
    </div>
  </div>
</div>

    )
            
           
};  }
    return ( 
        <div className="bg-[rgb(251,251,239)] ">
        <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 0, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
      }}
      
    >
        <div>{renderSectionContent(openSection as number)}</div>
        </motion.div>
      </div>
    );
 }

