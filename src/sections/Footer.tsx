// Importing required assets and images
import Logo from "@/images/faq-logo.svg";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-LinkedIn.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

// Footer Component
export const Footer = () => {
  return (
    <footer
      id="help"
      className="bg-black text-[#BCBCBC] text-sm py-10 text-center"
    >
      {/* Main container for footer content */}
      <div className="container">
        {/* Logo with gradient background */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF , #FB92CF , #FFDD98 , #C2F0B1 , #2FD8FE)] before:absolute">
          {/* Company Logo */}
          <Logo className="h-10 w-auto relative" alt="logo" />
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
          <SocialPin />
        </div>

        {/* Footer copyright text */}
        <p className="mt-6">
          &copy; 2024 Your Company, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
