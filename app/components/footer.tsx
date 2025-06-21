import React from "react";
import Link from "next/link";
export const Footer: React.FC = () => {
    return ( 
<div className="pt-[100px] lg:pt-[200px] flex-col w-full pb-[20px] lg:pb-[24px] px-[20px] lg:px-[24px] gap-[48px] lg:gap-[80px] flex bg-[rgb(251,251,239)] text-[rgb(35,25,22)]">
    <div className="flex-col flex gap-[48px] lg:gap-0 lg:flex-row  w-full">
<div className="flex flex-col gap-[24px] lg:w-1/2">
<img src="/brown.svg" className="w-[112px] lg:w-[134px] h-auto"></img>
<p className="prata1 text-[14px] md:text-[15px] lg:text-[16px] max-w-[360px] ">ORLANCE awakens the senses through a refined skincare ritual.</p>
</div>
<div className="flex flex-row w-full lg:w-1/2 ">
<div className="flex-col flex w-1/2 gap-[12px]">
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">shop</Link>
<Link href='' className="bdog text-[11px] md:text-[12px]  uppercase">journal</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">about</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">store</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">shipping & returns</Link>
</div>
<div className="flex-col flex w-1/2 gap-[12px]">
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">instagram</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">contact</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">licence</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">changelog</Link>
<Link href='' className="bdog text-[11px] md:text-[12px] uppercase">design system</Link>
</div>
</div>
</div>
<h1 className="uppercase bdog text-[11px] md:text-[12px]">© ORLANCE 2025, all right reserved</h1>
</div>
    )
 } 
