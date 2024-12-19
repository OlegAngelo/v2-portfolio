import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* left-side social */}
      <div className="hidden md:block xxl:flex fixed bottom-[10px] -left-[80px] rotate-90">
        <div className="flex items-center gap-5 text-[#7c7cb3] cursor-pointer">
          <a href="https://www.linkedin.com/in/nbalagtas/"><FaLinkedin size={30} className='duration-100 -rotate-90 hover:scale-110' /></a>
          <a href="https://github.com/OlegAngelo"><FaGithub size={30} className='duration-100 -rotate-90 hover:scale-110' /></a>
          <hr className="w-[250px] border-2 border-gray-300 overflow-hidden" />
        </div>
      </div>

      {/* right-side email */}
      <div className="hidden md:block xxl:flex fixed bottom-[160px] right-[-160px] rotate-90">
        <div className="flex items-center gap-3 text-[#7c7cb3]">
          <p className="font-semibold">angelonino1999@gmail.com</p>
          <hr className="w-[250px] border-2 border-gray-300 overflow-hidden" />
        </div>
      </div>
    </footer>
  );
}

export default Footer