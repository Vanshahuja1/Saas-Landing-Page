import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/images/faq-logo.svg";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top notification bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-small gap-3">
        <p className="text-white/60 hidden md:block">
          Connect & Hire best With ArtConnect
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Welcome to our website</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-start" />
        </div>
      </div>

      {/* Main header section */}
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home">
                <Logo className="h-10 w-auto cursor-pointer" alt="logo" />
              </a>
            </div>

            {/* Navigation for desktop */}
            <nav className="hidden md:flex gap-6 text-gray-700 items-center">
              <a href="#about" className="hover:text-black">
                About
              </a>
              <a href="#features" className="hover:text-black">
                Features
              </a>
              <a href="#customers" className="hover:text-black">
                Customers
              </a>
              <a href="#updates" className="hover:text-black">
                Updates
              </a>
              <a href="#help" className="hover:text-black">
                Help
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex">
                Get it now
              </button>
            </nav>

            {/* Menu icon for mobile view */}
            <MenuIcon className="h-6 w-6 md:hidden text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};
