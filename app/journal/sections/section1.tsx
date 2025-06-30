'use client';
import React from "react";
import { useState } from "react";
import { data } from "./data";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
interface CardProps {
    title: string;
    image: string;
    description: string;
    link: string;
}

const Section1CardProp: React.FC<CardProps> = ({ title, image, description, link }) => { 
    return (
        <Link className="flex flex-col gap-[24px] lg:gap-[40px] w-full items-center  "
        href={link}>
<div className="w-[180px] lg:w-[250px] overflow-hidden relative">
    <Image alt="Section Visual" width={250} height={250} src={image}
    className=" aspect-[1/1.40] object-cover ">
    </Image>
</div>
<div className="w-[260px] lg:w-[380px] md:w-[353px] flex-col flex gap-[16px] lg:gap-[24px] items-center">
    <h1 className="text-[20px] md:text-[24px] lg: prata7 uppercase text-center">
        {title}
    </h1>
    <p className="prata6 text-[13px] md:text-[14px] text-center">
        {description} 
    </p>
</div>
<div className="uppercase md:text-xs text-[11px] bdog flex-row flex items-center justify-center gap-2 cursor-pointer  group">
    read more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span className="inline-block transition-transform translate-x-1.5 duration-300 ease-in-out text-center group-hover:translate-x-5.5 scale-110 ">
    →
  </span>
  <span className="inline-block text-center -translate-x-5.5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:opacity-100 scale-110 ">
    →
  </span></div> 
</div>
        </Link>
    )
}
export const Section1 = () => {

const [selectedIndexes, setSelectedIndexes] = useState<number[] | null>(null);
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
        <div className="flex flex-col w-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
        <div className="pt-[100px] lg:pt-[120px] bg-[rgb(251,251,239)]  flex-col flex gap-[16px] lg:gap-[24px] ">
            <div className="flex w-full justify-center">
            <h1 className="text-[28px] md:text-[32px] lg:text-[40px] prata3 uppercase text-center">
                Stories Rooted <br></br>in Soil and Soul
            </h1>
            </div>
            <div className="flex flex-row gap-[16px] lg:gap-[24px] text-[#918c84] justify-center">
<div className="flex flex-row gap-[8px] items-center cursor-pointer" onClick={() => setSelectedIndexes([1])} >
<div className={`rounded-full h-[20px] w-[20px] border-[#918c84] border-1 flex items-center justify-center ${selectedIndexes?.includes(1) ? 'border-[rgb(35,25,22)] text-[rgb(35,25,22)]' : 'border-[#918c84] text-[#918c84]'}`}><h1 className="bdog1 text-[12px] text-center">1</h1></div>
<h1 className={`text-[11px]  md:text-[12px] bdog1 uppercase ${selectedIndexes?.includes(1) ? 'text-[rgb(35,25,22)]' : 'text-[#918c84]'}`}>
    ingredients
</h1>
</div>
<div className="flex flex-row gap-[8px] items-center cursor-pointer" onClick={() => setSelectedIndexes([2, 3])}>
<div className={`rounded-full h-[20px] w-[20px] border-[#918c84] border-1 flex items-center justify-center ${selectedIndexes?.length === 2 &&
    selectedIndexes.includes(2) &&
    selectedIndexes.includes(3) ? 'border-[rgb(35,25,22)] text-[rgb(35,25,22)]' : 'border-[#918c84] text-[#918c84]'}`}><h1 className="bdog1 text-[12px] text-center">2</h1></div>
<h1 className={`text-[11px]  md:text-[12px] bdog1 uppercase ${selectedIndexes?.length === 2 &&
    selectedIndexes.includes(2) &&
    selectedIndexes.includes(3)? 'text-[rgb(35,25,22)]' : 'text-[#918c84]'}`}>
    rituals
</h1>
</div> 
<div className="flex flex-row gap-[8px] items-center cursor-pointer" onClick={() => setSelectedIndexes([0])}>
<div className={`rounded-full h-[20px] w-[20px] border-[#918c84] border-1 flex items-center justify-center ${selectedIndexes?.includes(0)
   ? 'border-[rgb(35,25,22)] text-[rgb(35,25,22)]' : 'border-[#918c84] text-[#918c84]'}`}><h1 className="bdog1 text-[12px] text-center">3</h1></div>
<h1 className={`text-[11px] md:text-[12px] bdog1 uppercase ${selectedIndexes?.includes(0) ? 'text-[rgb(35,25,22)]' : 'text-[#918c84]'}`}>
    between
</h1>
</div>
</div>
        </div>
        <div className="grid   lg:px-[40px] w-full pt-[48px] lg:pt-[160px] gap-[40px]   lg:grid-rows-[555px_555px] lg:grid-cols-[610px_610px] justify-center lg:gap-y-[180px] lg:gap-x-[0px]">
{data.map((item, index) => {
  if (
    selectedIndexes === null || 
    selectedIndexes.includes(index)
  ) {
    return (
      <Section1CardProp
        key={index}
        title={item.title}
        image={item.image}
        description={item.description}
        link={item.link}
      />
    );
  }
  return null;
})}
        </div>
        
        </div>
        </motion.div>
    );
};