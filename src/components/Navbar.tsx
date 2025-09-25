import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-[100px] bg-[rgba(32,32,32,0.1)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between px-20 z-50">
      {/* Logo */}
      <div className="w-16 h-12 flex-shrink-0">
        <Image
          src="/logo/iprlogo.svg"
          alt="IPR Karo Logo"
          width={64}
          height={48}
          priority
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-[15px] flex-1 h-[47px]">
        <div className="flex items-center gap-[50px]">
          <Link href = "/">
          <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300 absolute">
            Home
            <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>  
          </div>
          </Link>
          <Link href = "/services"> 
          <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300 absolute">
            Services
            <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          </Link>
          <Link href = "/blog"> 
          <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
            Blogs
            <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          </Link>
          <Link href = "/about"> 
          <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
            About Us
            <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          </Link>
          <Link href="/contact"> 
          <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
            Contact Us
            <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          </Link>
        </div>
      </div>

      {/* Sign Up Button */}
       <div
  className="inline-flex px-2 py-[4px] justify-center items-center gap-[10px] bg-transparent w-[110px] h-[40px] cursor-pointer transition-all duration-300 relative group"
  style={{
    border: "2px solid transparent",
    borderRadius: "20px",
    borderImage: "linear-gradient(to right, #FFFFFF 0%, #8A38F5 49%, #FFB703 88%) 1",
    borderImageSlice: 1,
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude"
  }}
>
        <span className="text-white text-[17px] font-normal leading-[17px] group-hover:text-[#FFB703] transition-colors duration-300">Sign Up</span>
      </div>
    </nav>
  );
}
