"use client";
import productImage from '@/assets/product-image.png';
import Image from 'next/image';

import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import MagicIcon from '@/images/magic.svg';
import {motion , useScroll , useTransform } from 'framer-motion';
import { useRef} from 'react';


export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef , 
    offset :["start end","end start"],


  });
  const translateY =  useTransform(scrollYProgress , [0,1],[250,-250]);
  return (
    <section id="features" ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto">
        {/* Content container */}
        <div className="max-w-[540px] mx-auto text-center">
          {/* Tagline */}
          <div className="flex justify-center">
            <div className="tag bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            <MagicIcon height={20} width={20} />
              Boost Your Productivity
              
            </div>
          </div>
          {/* Heading */}
          <h2 className="title mt-5">
            A more effective way to track progress
          </h2>
          {/* Paragraph */}
          <p className="under-title mt-5">
            Achieve your goals with enhanced efficiency and streamlined progress tracking.
            Our tools ensure you stay on top of your tasks with ease and motivation.
          </p>
        </div>
        {/* Image container */}
        <div className="relative flex justify-center mt-10">
          <Image src={productImage} alt="Product Image" className="max-w-full h-auto" />
          <motion.img src={pyramidImage.src} alt="pyramid Image" height={262} width={262} className='hidden md:block absolute -left-36 -top-32' style ={{translateY,}}  />
          <motion.img src={tubeImage.src} alt="tube Image"  height={248} width={262} className='hidden md:block absolute -bottom-24 -right-36' style ={{translateY,}} />

        </div>
      </div>
    </section>
  );
};
