'use client';
import React from "react";
import Link from "next/link";
import { cardsData } from "@/app/sections/Data";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
interface CardProps { 
    card: { title: string;
    image: string;
    price: string;  
    bgImage: string;
    link: string; }

} 

const Card: React.FC<CardProps> = ({ card }) => { 
     

    return (
        
        <Link className="flex flex-col lg:gap-[20px]  pt-[20px] cursor-pointer group relative overflow-hidden bg-[rgb(228,224,212)] lg:bg-transparent  h-full"  href={card.link}>
    <Image src={card.bgImage} fill quality={40} sizes="(max-width: 768px) 50vw, 25vw" alt="" className=" z-2 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    </Image>
    <div className="absolute h-full flex items-end justify-center pb-[20px] w-full  z-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="pt-[20px]  w-full bg-[rgba(255,255,255,0.2)] text-[rgb(228,224,212)]   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-[20px]">
<div className="uppercase text-xs bdog flex-row flex items-center justify-center  gap-2 cursor-pointer ">
    VIEW product <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(228,224,212)] flex overflow-hidden cursor-pointer` }> 
<span>
    →
    </span></div> 
</div>
</div>
    </div>
     <div className="flex flex-col   h-full lg:gap-[20px]">
<h1 className="uppercase  md:text-xs text-[11px]  bdog text-center ">
    recommend
</h1>
<div className="relative aspect-square">
<Image alt='' fill src={card.image} quality={70} sizes="(max-width: 768px) 50vw, 25vw" className="z-1">
</Image>
</div>
<div className="flex flex-col items-center h-full pb-[20px] lg:pb-0  lg:gap-[16px] gap-[8px] lg:px-[40px] px-[16px] ">
<h1 className="uppercase  text-center prata1-1 lg:text-[16px] md:text-[15px] text-[14px] ">{card.title}</h1>
<p className="md:text-xs text-[11px] bdog text-center ">
    {card.price} USD
</p>
</div>
<div className="pt-[12px] pb-[12px] lg:pt-[20px] lg:pb-[20px] lg:bg-transparent bg-[rgb(35,25,22)] text-[rgb(228,224,212)] lg:text-[rgb(35,25,22)]">
<div className="uppercase md:text-xs text-[11px] bdog2 flex-row flex items-center justify-center gap-2 cursor-pointer ">
    VIEW product <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full lg:border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span>
    →
    </span></div> 
</div>
</div>
</div>
        </Link>
    );
} 
export const Cards: React.FC = () => {
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
        <div className="w-full grid lg:grid-cols-4 grid-cols-2   bg-[rgb(251,251,239)] [grid-auto-rows:minmax(0,1fr)] text-[rgb(35,25,22)] ">

{cardsData.map((card, index) => (
            <Card key={index} card={card} />
))}

        </div>
        </motion.div>
    )
 }
