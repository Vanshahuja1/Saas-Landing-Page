"use client";
import CheckerIcon from '@/assets/check.svg';
import { motion } from 'framer-motion';
import {twMerge} from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24" aria-label="Pricing section">
      <div className="container">
        <h2 className="title">Pricing</h2>
        <p className="text-center mt-5">
          Free Forever. Upgrade for unlimited tasks, better security, and exclusive features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular,inverse ,  features }, index) => (
            <div
              key={index}
              className={`p-10 border border-white/90 rounded-3xl shadow-[0_7px_14px_#EAEAEA] ${popular ? 'bg-black text-white/90' : ''}`}
            >
              <div className="flex justify-between">
                <h3 className={`text-lg font-bold text-black/50  ${popular ? 'bg-black text-white/90' : ''}`}>{title}</h3>
                {popular===true && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/30">
                    <motion.span 
                      animate={{
                        backgroundPositionX:'-100%'
                      }}
                      transition={{
                        duration:1,
                        repeat:Infinity,
                        ease:"linear",
                        repeatType:"loop",
                      }}
                    
                    className="bg-[linear-gradient(to_right,#DD7DD7,#E1CD86,#71C2EF,#bbcb92,#3BFFFF,#DD7DDF,#E1CD86,#71C2EF,#bbcb92,#3BFFFF,#FFFFFF,#FFFFFF)]  [background-size:200%] text-transparent bg-clip-text">
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className={`tracking-tight font-bold text-black/50 ${popular ? 'bg-black text-white/90' : ''}`}>/month</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm flex items-center gap-4">
                    <CheckerIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


