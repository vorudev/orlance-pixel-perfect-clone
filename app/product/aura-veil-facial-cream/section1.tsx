'use client';
import React from "react";
import { useCart } from "@/app/contexts/CartContext";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Section1Item = () => {
        const { cart, addToCart } = useCart();
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
      const product = {
    id: 2,
    name: "aura veil facial cream",
    price: 220.00,
    image: "/item4.png",
  };
        const isInCart = cart.some((item) => item.id === product.id);
        
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
        <div className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)] w-full flex lg:justify-center lg:aspect-[1/1.35] ">
            <div className="px-[20px] py-[20px] lg:py-0 lg:px-0 flex flex-col gap-[24px] lg:gap-[40px] h-full w-full lg:w-[380px] lg:justify-center">
                <div className="flex flex-col w-full items-start lg:items-center gap-[16px] lg:gap-[24px] pr-[32px] lg:pr-[24px] lg:pl-[24px] max-w-[360px] lg:max-w-[380px]">
<p className="uppercase text-[11px] bdog2 md:text-[12px] ">face</p>
<h1 className="uppercase text-[20px] md:text-[22px] lg:text-[24px] prata7 ">
   {product.name}
</h1>
<p className="text-[13px] lg:text-[14px] lg:text-center  prata6 ">
A veil-like cream that gently settles on the skin—sealing in moisture, light, and serenity.
</p>
<p className="uppercase text-[11px] md:text-xs bdog1 ">$ {product.price} USD</p>
            </div>
           <button className={`bg-[rgb(35,25,22)] text-[rgb(228,224,212)] w-full h-[48px] bdog text-[12px] uppercase  ${isInCart ? "" : "cursor-pointer"
           }`}   onClick={() => addToCart(product)}
        disabled={isInCart}> 

{isInCart ? "Added to Cart" : "Add to Cart"}
            </button>

          

            </div>

        </div>
        </motion.div>
    ) }