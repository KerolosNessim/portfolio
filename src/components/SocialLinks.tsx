import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="  flex gap-4 items-center justify-center lg:justify-start ">
      {/* linkedin */}
      <a
        href="https://www.linkedin.com/in/kerolosnessim"
        className=" size-14 border-2 border-black flex items-center justify-center text-black rounded-xl hover:bg-black hover:text-lime-400 transition-all duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      {/* github */}
      <a
        href="https://github.com/kerolosnessim"
        className=" size-14 border-2 border-black flex items-center justify-center text-black rounded-xl hover:bg-black hover:text-lime-400 transition-all duration-300"
      >
        <FaGithub size={24} />
      </a>
      {/* facebook */}
      <a
        href="https://www.facebook.com/share/1BnEZYyCrX/"
        className=" size-14 border-2 border-black flex items-center justify-center text-black rounded-xl hover:bg-black hover:text-lime-400 transition-all duration-300"
      >
        <FaFacebook size={24} />
      </a>
      {/* instagram */}
      <a
        href="https://www.instagram.com/keronessim?igsh=MWE2ZzJlbTFqODBuMA=="
        className=" size-14 border-2 border-black flex items-center justify-center text-black rounded-xl hover:bg-black hover:text-lime-400 transition-all duration-300"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
