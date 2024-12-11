"use client"

import ArrowRight from '@/assets/arrow-right.svg';
import StarImage from '@/assets/star.png';
import SpringImage from '@/assets/spring.png';

import Outlines from '@/images/bg-outlines.svg';
import { motion ,useScroll ,useTransform } from 'framer-motion';
import { useRef } from 'react';


export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef , 
    offset :["start end","end start"],


  });

  const translateY  = useTransform(scrollYProgress , [0,1],[200,-200]);


  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-black/40 py-24 overflow-x-clip">
      <div className="container relative">
        {/* Positioned Outlines image */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <Outlines className="w-full h-auto max-w-3xl" />
        </div>

        <div className="section-heading text-center">
          <h2 className="title">Signup for free today</h2>
          <p className="under-title mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
          </p>
          
          <motion.img 
            src={StarImage.src} 
            alt="star image" 
            width={300} 
            className="hidden md:block absolute -left-[170px] -top-[120px]"
            style ={{translateY,}} 
          />
          <motion.img 
            src={SpringImage.src} 
            alt="spring image" 
            width={300} 
            className="hidden md:block absolute -right-[131px] -top-[5px]" 
            style ={{translateY,}}
          />
        </div>
        
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get it for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
