import nextImage from '@/images/1_KDMx1YspSrBcFJG-NDZgDg.webp';
import reactImage from '@/images/react-native-logo-square (1).webp';
import tailwindImage from '@/images/download (1).png';
import framerImage from '@/images/Screenshot 2024-11-18 130035.png';
import Image from 'next/image';

export const Tech = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container flex justify-center items-center gap-4 flex-wrap">
        <Image 
          src={nextImage} 
          height={50} 
          width={50} 
          alt="next" 
          className="w-[25px] h-auto "
        />
        <Image 
          src={reactImage} 
          height={50} 
          width={50} 
          alt="react" 
          className="w-[25px] h-auto "
        />
        <Image 
          src={tailwindImage} 
          height={50} 
          width={50} 
          alt="tailwind" 
          className="w-[25px] h-auto "
        />
        <Image 
          src={framerImage} 
          height={50} 
          width={50} 
          alt="framer" 
          className="w-[25px] h-auto "
        />
      </div>
    </footer>
  );
};
