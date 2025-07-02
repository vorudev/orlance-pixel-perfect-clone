'use client';
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useCart } from '../contexts/CartContext';
import { useInView } from "react-intersection-observer";
import CartItemComponent from "./cartprop";
import { useScrolled } from "./functions/scroll";
import Image from "next/image";
export const Header: React.FC = () => { 
  const scrolled = useScrolled(100);
   const [isVisible, setIsVisible] = useState(false);
     const { cart, clearCart, distinctItems } = useCart();
    
     
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const [isOpen, setIsOpen] = useState(false)
    const menuVariants = {
    hidden: { opacity: 0, filter: "blur(10px)"},
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.3,    // ждем, пока меню откроется
    staggerChildren: 0.1, } },
    exit: { opacity: 0, filter: "blur(10px)"},
    
  }
  
  const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

  const handleToggleCart = () => {
    setIsVisible(prev => !prev);
  };
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
    const headerRef = useRef<HTMLDivElement>(null);
 
 
const handleMenuToggle = () => {
    setIsOpen(true)
    // Блокируем прокрутку
    
  
    
  }

  const handleMenuClose = () => {
    setIsOpen(false)
  
  }

  
    return (
         <>
         <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="w-full flex h-screen z-11 bg-[rgb(251,251,239)] flex-row fixed "
            
          >
         
        
          <div
        
        className={`w-full fixed z-10 px-[20px] py-[20px] transition duration-500 antialiased 
                    leading-[20px] bg-transparent lg:hidden`}
      >
        <div className="flex items-center justify-between">
          {/* Кнопка меню слева */}
          <div className="flex items-center justify-center gap-2" onClick={handleMenuClose}>
              
              <div
                
                className={`w-[24px] h-[24px] flex items-center justify-center  border rounded-full 
                   border-[rgb(35,25,22)] 
                `}
              >
                <img
                  src="https://www.svgrepo.com/show/499592/close-x.svg"
                  alt="Menu Icon"
                  className="h-[15px] w-[15px]"
                />
              </div>
              <a
                className={`cursor-pointer bdog uppercase md:text-xs text-[11px] 
                  text-[rgb(35,25,22)] 
                `}
              >
                close
              </a>
            </div>
          {/* Логотип по центру */}
          
          {/* Корзина справа */}
          
        </div>
      </div>
          <div
      
        className={`w-full fixed z-10 px-6 py-6 transition duration-500 antialiased 
                    leading-[20px]  hidden lg:flex`}
      >
        {/* Левая колонка с логотипом и навигацией */}
        <div className="w-1/2 flex items-center gap-20 ">
        <Link href='/' className="cursor-pointer">
           <img
            src='/window.svg'
            alt="Логотип"
            className="h-6 w-auto cursor-pointer"
          />
          </Link>
          
        </div>
        {/* Правая колонка с корзиной и кнопкой меню */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center gap-8 uppercase text-xs bdog">
            
            <div className="flex items-center  cursor-pointer gap-2"
            onClick={handleMenuClose}>
              <a
                className={` bdog 
                   text-[rgb(35,25,22)]
                `}
              >
                close
              </a>
              <div
                className={`w-[24px] h-[24px] flex items-center justify-center border rounded-full 
                  border-[rgb(35,25,22)]
                `}
              >
                <img
                  src="https://www.svgrepo.com/show/499592/close-x.svg"
                  alt="Menu Icon"
                  className="h-[15px] w-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="w-1/2  hidden lg:flex relative">
<Image alt="" fill sizes="50vw" src="/bg-menu.webp" className=" object-cover"></Image>
<div className="absolute  pb-[40px] bottom-0 flex  text-[rgb(228,224,212)] items-center justify-center  w-full "
>
  <p className="prata5 text-[16px] max-w-[440px] text-center">Minerals left by volcanic ash, pure water flowing through layered earth, and wild botanicals nurtured in silence—each element is a product of time and nature’s refinement.</p>
</div>
</div>
<div className="lg:w-1/2 w-full h-full relative text-[rgb(35,25,22)]  flex items-center justify-center">
<div className="flex flex-col md:text-[54px] text-[40px] uppercase justify-center   text-center prata4 select-none ">

<motion.div
variants={childVariants} 
><Link href="/shop" className="block lg:hidden cursor-pointer">
shop
</Link></motion.div>
<motion.div
variants={childVariants} 
><Link href="/journal" className="block lg:hidden cursor-pointer">
journal
</Link></motion.div>
<motion.div
variants={childVariants} 
><Link href="/store" className="block lg:hidden cursor-pointer">
store
</Link></motion.div>
<motion.div
variants={childVariants} 
><Link href="/shop" className="block lg:hidden cursor-pointer">
about
</Link></motion.div>

<motion.div
variants={childVariants}>
<Link href="/shop"
          className="group relative lg:inline-block hidden overflow-hidden cursor-pointer"
          style={{ height: '45.8px', lineHeight: '56.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            shop
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            shop
          </div>
        </Link>
        </motion.div>
        <motion.div
variants={childVariants}>
        <Link href="/journal"
          className="group relative lg:inline-block hidden overflow-hidden cursor-pointer"
          style={{ height: '45.8px', lineHeight: '56.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            journal
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            journal
          </div>
        </Link>
        </motion.div>
        <motion.div
variants={childVariants}>
        <Link href="/store"
          className="group relative lg:inline-block hidden overflow-hidden cursor-pointer"
          style={{ height: '47.8px', lineHeight: '56.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            store
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            store
          </div>
        </Link>
        </motion.div>
        <motion.div
variants={childVariants}>
        <Link href="/about"
          className="group relative lg:inline-block hidden overflow-hidden cursor-pointer"
          style={{ height: '47.8px', lineHeight: '57.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            about
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            about
          </div>
        </Link>
        </motion.div>
        



    

</div>
<div className="absolute lg:bottom-[40px] bottom-[20px] w-full flex justify-center">
<h1 className="bdog md:text-xs text-[11px]">© ORLANCE, 2025</h1>
</div>
</div>
         
         </motion.div>
        )}
        </AnimatePresence>
        <AnimatePresence>
        {isVisible && (
          <motion.div
           initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed' }}
            className="w-full h-screen z-16"
          >
         <div className={` z-15  w-full h-screen `}>
            <div className="w-full h-full bg-black/50 flex justify-end" onClick={handleToggleCart}>
<div className=" lg:w-[480px]  w-full h-full bg-[rgb(251,251,239)] text-[rgb(35,25,22)] " onClick={(e) => e.stopPropagation()}>
<div className="pb-[16px] lg:px-[16px] px-[20px] h-full relative ">
    <div className="lg:pt-[32px] pb-[16px] pt-[25px] w-full flex items-center justify-between md:text-[12px] text-[11px] bdog uppercase">
        <p>cart</p>
        <button onClick={handleToggleCart} className="md:text-[12px] text-[11px] bdog uppercase cursor-pointer">close</button>

    </div>
     
      {cart.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
        <p className="bdog md:text-[12px] text-[11px] uppercase">cart is empty</p>
        </div>
      ) : (
     
        <ul style={{ listStyle: 'none', padding: 0 }}  >
          {cart.map((item) => (
            <CartItemComponent key={item.id} item={item} />
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="absolute bottom-0 lg:w-[480px] w-full pb-[16px] ">
            <div className="flex-col flex gap-[16px] lg:w-[480px] pr-[32px] ">
          <div className="w-full flex flex-row justify-between">
            <h2 className="text-[12px] uppercase bdog">subtotal</h2>
            <h2 className="text-[12px] uppercase bdog">$ {total.toFixed(2)} USD</h2>
            </div>
          <button 
          className="bg-[rgb(35,25,22)] text-[rgb(251,251,239)] w-full h-[48px] bdog text-[12px] uppercase"
          onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
        
      )}
     
    </div>
            </div>
            </div>
            

         </div>
         </motion.div>
        )}
        </AnimatePresence>
      {/* Мобильная версия хедера: до lg */}
      <div
        
        className={`w-full fixed z-10 px-[20px] py-[20px] transition duration-500 antialiased 
                    leading-[20px] ${scrolled ? 'bg-[rgb(251,251,239)]' : 'bg-transparent'} lg:hidden`}
      >
        <div className="flex items-center justify-between">
          {/* Кнопка меню слева */}
          <div className="flex items-center cursor-pointer  justify-center gap-2" 
          onClick={handleMenuToggle}>
              
              <div
                className={`w-[24px] h-[24px] flex items-center justify-center  border rounded-full ${
                 'border-[rgb(35,25,22)]' 
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill={ '#232522' }><path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"/></svg>
              </div>
              <a
                className={`bdog uppercase md:text-xs text-[11px] ${
                 'text-[rgb(35,25,22)]'
                }`}
              >
                menu
              </a>
            </div>
          {/* Логотип по центру */}
          <Link href="/" className="h-[20px] w-auto absolute left-1/2 transform -translate-x-1/2">
          <img
            src='/brown.svg' 
            alt="Логотип"
            className="h-[20px] w-auto"
          />
          </Link>
          {/* Корзина справа */}
          <button  onClick={handleToggleCart}
            className={`cursor-pointer md:text-xs text-[11px] bdog uppercase ${
              'text-[rgb(35,25,22)]' 
            }`}
          >
            cart<span className="ml-[4px]">{distinctItems > 0 && 
              `${distinctItems}`
              } </span>
          </button>
        </div>
      </div>

      {/* Десктоп версия хедера: lg и выше */}
      <div
        ref={headerRef}
        className={`w-full fixed z-10 px-6 py-6 transition duration-500 antialiased 
                    leading-[20px] ${scrolled ? 'bg-[rgb(251,251,239)]' : 'bg-transparent'} hidden lg:flex`}
      >
        {/* Левая колонка с логотипом и навигацией */}
        <div className="w-1/2 flex items-center gap-20">
        <Link href="/" className="cursor-pointer">
          <img
            src='/brown.svg'
            alt="Логотип"
            className="h-6 w-auto "
          />
          </Link>
          <nav className="text-xs flex flex-row gap-8 uppercase">
            <Link href="/shop"
              className={`cursor-pointer bdog2  ${
                 'text-[rgb(35,25,22)] underline-hover ' 
              }`}
            >
              shop
            </Link>
            <Link href="/journal"
              className={`cursor-pointer bdog2  ${
               'text-[rgb(35,25,22)] underline-hover ' 
              }`}
            >
              journal
            </Link>
            <Link href="/store"
              className={`cursor-pointer bdog2  ${
                 'text-[rgb(35,25,22)] underline-hover ' 
              }`}
            >
              store
            </Link>
            <Link href="/about"
              className={`cursor-pointer bdog2  ${
                'text-[rgb(35,25,22)] underline-hover ' 
              }`}
            >
              about
            </Link>
          </nav>
        </div>
        {/* Правая колонка с корзиной и кнопкой меню */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center gap-8 uppercase text-xs bdog">
            <button onClick={handleToggleCart}

              className={`cursor-pointer uppercase text-xs bdog2 ${
                 'text-[rgb(35,25,22)]' 
              }`}
            >
              cart <span className="ml-[4px]">{distinctItems > 0 && 
              `${distinctItems}`
              } </span>
            </button>
            <div className="flex items-center cursor-pointer gap-2"
            onClick={handleMenuToggle}>
              <a
                className={` bdog2 ${
                'text-[rgb(35,25,22)]' 
                }`}
              >
                menu
              </a>
              <div
                className={`w-[24px] h-[24px] flex items-center justify-center border rounded-full ${
                 'border-[rgb(35,25,22)]' 
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill={ '#232522' }><path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"/></svg>
                {/* Иконка меню <img
                  src="https://cdn.prod.website-files.com/6822f8342a36484c66267e9a/6835a60e41ac5ec8f3534042_menu.svg"
                  alt="Menu Icon"
                  className="h-[12px] w-[12px]"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}