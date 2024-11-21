"use client";
import {useRef} from 'react';
import ArrowRight from "@/assets/arrow-right.svg";
import Image from 'next/image';
import heroImage from "@/images/heroo.png"; // Ensure this path is correct
import nextImage from "@/assets/cylinder.png"; // Ensure this path is correct
import image from "@/assets/noodle.png";
import {motion , useScroll , useTransform , useMotionValueEvent } from 'framer-motion';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef , 
    offset :["start end","end start"],


  });
  const translateY =  useTransform(scrollYProgress , [0,1],[150,-150]);
  
  
  

  return (
    <section id="about" className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC6,#EAE_100%)] overflow-x-clip relative">
      <div className="container mx-auto">
        <div className="md:flex items-center">
          {/* Text Section */}
          <div className="md:w-[480px]">
            <div className="tag">
              Version 2.0 is here
            </div>
            <h1 className="t">
              Pathway to Productivity
            </h1>
            <p className="text-lg text-[#010D3E] mt-4">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>
            <div className="flex gap-3 items-center mt-8">
              <button className="btn btn-primary px-6 py-2 bg-[#183EC6] text-white rounded-lg shadow-lg hover:bg-[#152C99] transition-all hover:scale-105 focus:outline-none">
                Get for free
              </button>
              <button className="btn btn-text flex items-center text-[#183EC6] hover:underline transition-transform transform hover:scale-105">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* First Image */}
            <motion.img
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              src={heroImage.src}
              alt="Hero illustration"
              animate={{translateY :[-35,35] ,}}
              transition={{repeat:Infinity,repeatType:"mirror" , duration:4,ease:"easeInOut",}}

             
              
            />
            {/* Second Image */}
            <motion.img
              src={nextImage.src}
              width={252}
              height={252}
              alt="Second illustration"
              className="hidden md:block -top-8 -left-32 absolute "
              style={{translateY : translateY}}
              
            />
            {/* Third Image */}
            <motion.img
              src={image.src}
              width={252}
              height={252}
              className="hidden lg:block absolute top-[375px] left-[448px] rotate-[30deg] hover:rotate-[35deg] transition-transform duration-500"
              alt="Third image"
              style={{translateY : translateY}}

            />
          </div>
        </div>
      </div>
    </section>
  );
};
   