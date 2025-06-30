'use client';
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { data } from "./data";
import { Cards } from "../../sections/cards";
import Image from "next/image";

interface CardProps { 
    title: string;
    image: string;
    price: string;  
    link: string;
} 

const Section1CardProp: React.FC<CardProps> = ({ title, image, price, link }) => { 
return (
    <Link className="flex flex-col lg:gap-[20px]  pt-[20px] lg:pt-[48px] cursor-pointer group relative overflow-hidden bg-[rgb(228,224,212)] lg:aspect-[1/1.35]  h-full lg:w-1/2 "  href={link}>

   
    
<h1 className="uppercase  md:text-xs text-[11px]  bdog text-center ">
    recommend
</h1>

<div className="flex flex-col items-center lg:justify-center h-full pb-[20px] lg:pb-0  lg:gap-[16px] gap-[8px] px-[40px] ">
    <div className="flex justify-center items-center realative">
<Image alt='' width={460} height={460} src={image} className=" ">

</Image>
</div>
<h1 className="uppercase  text-center prata1 lg:text-[16px] md:text-[15px] text-[14px] ">{title}</h1>
<p className="md:text-xs text-[11px] bdog text-center ">
    {price} USD
</p>
</div>
<div className="pt-[12px] pb-[12px] lg:pt-[0px] lg:pb-[20px] lg:bg-transparent bg-[rgb(35,25,22)] text-[rgb(251,251,239)] lg:text-[rgb(35,25,22)]">
<div className="uppercase md:text-xs text-[11px] bdog flex-row flex items-center justify-center gap-2 cursor-pointer ">
    VIEW more <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full lg:border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span>
    →
    </span></div> 
</div>
</div>
        </Link>
)
} 
export const Section1Card = () => { 
    const [ index, setIndex ] = useState(0);
    
    return ( 
        
        <div className="flex flex-col ">
<div className="flex flex-row gap-[16px] text-[#918c84] pr-[40px] pl-[20px]">
<div className="flex flex-row gap-[8px] items-center cursor-pointer" onClick={() => setIndex(0)} >
<div className={`rounded-full h-[20px] w-[20px] border-[#918c84] border-1 flex items-center justify-center ${index === 0 ? 'border-[rgb(35,25,22)] text-[rgb(35,25,22)]' : 'border-[#918c84] text-[#918c84]'}`}><h1 className="bdog1 text-[12px] text-center">1</h1></div>
<h1 className={`text-[11px]  md:text-[12px] bdog1 uppercase ${index === 0 ? 'text-[rgb(35,25,22)]' : 'text-[#918c84]'}`}>
    face
</h1>
</div>
<div className="flex flex-row gap-[8px] items-center cursor-pointer" onClick={() => setIndex(1)}>
<div className={`rounded-full h-[20px] w-[20px] border-[#918c84] border-1 flex items-center justify-center ${index === 1 ? 'border-[rgb(35,25,22)] text-[rgb(35,25,22)]' : 'border-[#918c84] text-[#918c84]'}`}><h1 className="bdog1 text-[12px] text-center">2</h1></div>
<h1 className={`text-[11px]  md:text-[12px] bdog1 uppercase ${index === 1 ? 'text-[rgb(35,25,22)]' : 'text-[#918c84]'}`}>
    body
</h1>
</div> 
<div className="flex flex-row gap-[8px] items-center cursor-pointer" onClick={() => setIndex(2)}>
<div className={`rounded-full h-[20px] w-[20px] border-[#918c84] border-1 flex items-center justify-center ${index === 2 ? 'border-[rgb(35,25,22)] text-[rgb(35,25,22)]' : 'border-[#918c84] text-[#918c84]'}`}><h1 className="bdog1 text-[12px] text-center">3</h1></div>
<h1 className={`text-[11px] md:text-[12px] bdog1 uppercase ${index === 2 ? 'text-[rgb(35,25,22)]' : 'text-[#918c84]'}`}>
    hair
</h1>
</div>
</div>
<div className="pt-[48px] lg:pt-[60px] flex-col w-full lg:flex-row h-full flex">
    
    <Section1CardProp
      title={data[index].title}
      image={data[index].image}
      price={data[index].price}
      link={data[index].link}
    />

      <div className="w-full lg:w-1/2 relative">
        <Image alt='' fill sizes="100vw" quality={80} src="/grid1.webp" className="aspect-[1/1.15] lg:aspect-[1/1.35] object-cover "></Image>
      </div>
</div>
<Cards />
        </div>
        
    )
} 