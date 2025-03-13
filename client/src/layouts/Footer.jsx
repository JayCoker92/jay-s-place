import React from 'react';
import facebook from "../assets/facebook .svg";
import twitter from "../assets/twitter.svg";
import x from "../assets/x-img.svg";
import youtube from "../assets/youtube .svg";
import instagram from "../assets/instagram.svg";
// import footerImg from "../assets/footerIcon.svg";
import navLogo from "../assets/eggysPlaceBurger.png";

const Footer = () => {
  return (
    <footer className="bg-[#100101] text-white md:py-6 py-4 ">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0 px-6">
        {/* <div>
          <img className='md:ml-27 mt-12 md:mb-6 w-40'  src={footerImg} alt="footerImg" />
        </div> */}
        <div to="/" className="flex gap-4 items-center ">
                    <img
                      className=" md:w-[70px] w-[55px] h-auto md:mx-10"
                      src={navLogo}
                      alt="nav-logo"
                    />
                  </div>
        
        {/* Logo */}
        {/* <div className="flex items-center space-x-4">
          <img src={twit} alt="Twitter Logo" className="h-10" />
        </div>  */}

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-[12px]">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline md:mr-8">Terms & Conditions</a>
        </nav>

        {/* Social Media Icons (Only Images) */}
        <div className="flex space-x-4 md:mr-27">
          <a href="#" className="hover:opacity-80"><img src={facebook} alt="Facebook" className="h-6 w-6 " /></a>
          <a href="#" className="hover:opacity-80"><img src={twitter} alt="Twitter" className="h-6 w-6 " /></a>
          <a href="#" className="hover:opacity-80"><img src={youtube} alt="YouTube" className="h-6 w-6 " /></a>
          <a href="#" className="hover:opacity-80"><img src={instagram} alt="Instagram" className="h-6 w-6 " /></a>
          <a href="#" className="hover:opacity-80"><img src={x} alt="X" className="h-6 w-4 " /></a>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-white my-4 mx-auto md:w-8/10" />

      {/* Footer Bottom */}
      <div className="container mx-auto flex flex-col md:flex-row px-7 md:text-sm" >
        <p className='md:ml-27  ml-3'>TM & Copyright 2025 Eggy's Corporation. All Rights Reserved.</p>
        <a href="#" className="hover:underline md:mr-27 md:ml-130 ml-3">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;