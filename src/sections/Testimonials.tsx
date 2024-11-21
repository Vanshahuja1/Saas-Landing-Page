"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from 'react';


const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

 const firstColumn = testimonials.slice(0, 3);
 const secondColumn = testimonials.slice(3, 6);
 const thirdColumn = testimonials.slice(6, 9);

 const Column = (props:{className ?: string ;testimonials :typeof testimonials; duration?: number;}) => (
  <div className={props.className}>
  <motion.div
  animate={{
    translateY :'-50%'
  }}
  transition={{
    duration:props.duration || 10,
    repeat:Infinity,
    ease:"linear",
    repeatType:"loop",
  }}
   className="flex flex-col gap-7 pb-6 j">


          {[...new Array(2)].fill(0).map((_,index)=>(
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-5 hover:shadow-lg hover:-translate-y-1 transition-transform gap-6 ">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="font-semibold tracking-tight leading-5">{name}</span>
                  <span className="text-sm text-gray-500 leading-5 tracking-tight">{username}</span>
                </div>
              </div>
            </div>
          ))}

            </React.Fragment>
          ))}
          
        </motion.div>
    </div>
 )

export const Testimonials = () => {
  return (
    <section id="customers" className="bg-white">
      <div className="container">
        <div className = "section-heading">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <h2 className="title mt-5">What our users say</h2>
        <p className="under-title mt-5">
          From our design to powerful features, our app has become an essential tool for users around the world.
        </p>
        </div>
        <div className="flex justify-center gap-6 mt-6 [mask-image:linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75), transparent)] max-h-[738px] overflow-hidden">

        <Column testimonials={firstColumn} />
        <Column testimonials={secondColumn} duration ={15}  className="hidden md:block"/>
        <Column testimonials={thirdColumn} duration = {20} className="hidden lg:block"/>
        
        </div>
      </div>
    </section>
  );
};
