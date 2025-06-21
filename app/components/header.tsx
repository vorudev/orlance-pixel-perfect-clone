'use client';
import Link from "next/link";
import React, { use } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export const Header: React.FC = () => { 
 const transition = {
    ease: [0, 0, 0.58, 1] as [number, number, number, number],
    duration: 0.5
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
    const [scrolled, setScrolled] = useState(false);
   const mobileNavRef = useRef<HTMLDivElement>(null);
const handleMenuToggle = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.classList.remove('hidden');
      mobileNavRef.current.classList.add('flex');
      
      

      // Запрещаем прокрутку страницы: работаем с html-элементом
      
    }
  };

  // Функция для закрытия меню
  const handleMenuClose = () => {
    if (mobileNavRef.current) {
      
      
    }
    

    // По завершении анимации (500 мс) скрываем меню
    setTimeout(() => {
      if (mobileNavRef.current) {
        mobileNavRef.current.classList.add('hidden');
        mobileNavRef.current.classList.remove('flex');
      }
    }, 0);
  };
    useEffect(() => { 
const handleScroll = () => { 
    const scroll = window.scroll(); // Получаем текущую позицию прокрутки
    if (window.scrollY > 100) {
        console.log('Scrolled more than 100px');
        setScrolled(true);
    } else {
        setScrolled(false);
    } };

     window.addEventListener('scroll', handleScroll);

    return () => {
      // Очищаем слушатель при размонтировании компонента
      window.removeEventListener('scroll', handleScroll);
    };


    }, []);
    return (
         <>
         
         <div className="hidden w-full h-screen z-11 bg-[rgb(251,251,239)] flex-row fixed  "
         ref={mobileNavRef}>
          <div
        
        className={`w-full fixed z-10 px-[20px] py-[20px] transition duration-500 antialiased 
                    leading-[20px] bg-transparent lg:hidden`}
      >
        <div className="flex items-center justify-between">
          {/* Кнопка меню слева */}
          <div className="flex items-center justify-center gap-2">
              
              <div
                onClick={handleMenuClose}
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
        <div className="w-1/2 flex items-center gap-20">
          <img
            src='/window.svg'
            alt="Логотип"
            className="h-6 w-auto"
          />
          
        </div>
        {/* Правая колонка с корзиной и кнопкой меню */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center gap-8 uppercase text-xs bdog">
            
            <div className="flex items-center gap-2"
            onClick={handleMenuClose}>
              <a
                className={`cursor-pointer bdog 
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
<img src="/bg-menu.png" className="w-full h-full object-cover"></img>
<div className="absolute  pb-[40px] bottom-0 flex  text-[rgb(228,224,212)] items-center justify-center  w-full">
  <p className="prata5 text-[16px] max-w-[440px] text-center">Minerals left by volcanic ash, pure water flowing through layered earth, and wild botanicals nurtured in silence—each element is a product of time and nature’s refinement.</p>
</div>
</div>
<div className="lg:w-1/2 w-full h-full relative text-[rgb(35,25,22)]  flex items-center justify-center">
<div className="flex flex-col md:text-[54px] text-[40px] uppercase justify-center   text-center prata4">

<Link href="/shop" className="block lg:hidden">
shop
</Link>
<Link href="/shop" className="block lg:hidden">
journal
</Link>
<Link href="/shop" className="block lg:hidden">
store
</Link>
<Link href="/shop" className="block lg:hidden">
about
</Link>
<div
          className="group relative lg:inline-block hidden overflow-hidden"
          style={{ height: '54.8px', lineHeight: '57.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            shop
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            shop
          </div>
        </div>
        <div
          className="group relative lg:inline-block hidden overflow-hidden"
          style={{ height: '54.8px', lineHeight: '57.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            journal
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            journal
          </div>
        </div>
        <div
          className="group relative lg:inline-block hidden overflow-hidden"
          style={{ height: '54.8px', lineHeight: '57.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            store
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            store
          </div>
        </div>
        <div
          className="group relative lg:inline-block hidden overflow-hidden"
          style={{ height: '54.8px', lineHeight: '57.8px' }}
        >
          {/* Верхний текст: изначально на месте, при hover поднимается вверх */}
          <div className="transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
            about
          </div>
          {/* Нижний текст: изначально скрыт ниже контейнера, при hover перемещается наверх */}
          <div className="transition-transform duration-500 ease-in-out transform translate-y-full absolute inset-0 group-hover:translate-y-0">
            about
          </div>
        </div>
        



    

</div>
<div className="absolute lg:bottom-[40px] bottom-[20px] w-full flex justify-center">
<h1 className="bdog md:text-xs text-[11px]">© ORLANCE, 2025</h1>
</div>
</div>
         </div>
         
      {/* Мобильная версия хедера: до lg */}
      <div
        
        className={`w-full fixed z-10 px-[20px] py-[20px] transition duration-500 antialiased 
                    leading-[20px] ${scrolled ? 'bg-[rgb(251,251,239)]' : 'bg-transparent'} lg:hidden`}
      >
        <div className="flex items-center justify-between">
          {/* Кнопка меню слева */}
          <div className="flex items-center justify-center gap-2" 
          onClick={handleMenuToggle}>
              
              <div
                className={`w-[24px] h-[24px] flex items-center justify-center  border rounded-full ${
                  scrolled ? 'border-[rgb(35,25,22)]' : 'border-[rgb(228,224,212)]'
                }`}
              >
                <img
                  src="https://cdn.prod.website-files.com/6822f8342a36484c66267e9a/6835a60e41ac5ec8f3534042_menu.svg"
                  alt="Menu Icon"
                  className="h-[12px] w-[12px]"
                />
              </div>
              <a
                className={`cursor-pointer bdog uppercase md:text-xs text-[11px] ${
                  scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
                }`}
              >
                menu
              </a>
            </div>
          {/* Логотип по центру */}
          <img
            src={scrolled ? '/brown.svg' : '/window.svg'}
            alt="Логотип"
            className="h-[20px] w-auto absolute left-1/2 transform -translate-x-1/2"
          />
          {/* Корзина справа */}
          <button
            className={`cursor-pointer md:text-xs text-[11px] bdog uppercase ${
              scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
            }`}
          >
            cart
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
          <img
            src={scrolled ? '/brown.svg' : '/window.svg'}
            alt="Логотип"
            className="h-6 w-auto"
          />
          <nav className="text-xs flex flex-row gap-8 uppercase">
            <a
              className={`cursor-pointer bdog ${
                scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
              }`}
            >
              shop
            </a>
            <a
              className={`cursor-pointer bdog ${
                scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
              }`}
            >
              journal
            </a>
            <a
              className={`cursor-pointer bdog ${
                scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
              }`}
            >
              store
            </a>
            <a
              className={`cursor-pointer bdog ${
                scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
              }`}
            >
              about
            </a>
          </nav>
        </div>
        {/* Правая колонка с корзиной и кнопкой меню */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center gap-8 uppercase text-xs bdog">
            <a
              className={`cursor-pointer bdog ${
                scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
              }`}
            >
              cart
            </a>
            <div className="flex items-center gap-2"
            onClick={handleMenuToggle}>
              <a
                className={`cursor-pointer bdog ${
                  scrolled ? 'text-[rgb(35,25,22)]' : 'text-[rgb(228,224,212)]'
                }`}
              >
                menu
              </a>
              <div
                className={`w-[24px] h-[24px] flex items-center justify-center border rounded-full ${
                  scrolled ? 'border-[rgb(35,25,22)]' : 'border-[rgb(228,224,212)]'
                }`}
              >
                <img
                  src="https://cdn.prod.website-files.com/6822f8342a36484c66267e9a/6835a60e41ac5ec8f3534042_menu.svg"
                  alt="Menu Icon"
                  className="h-[12px] w-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}