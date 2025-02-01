//
"use client";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="container  fixed top-4 right-0 left-0 z-50 bg-black rounded-full shadow-xl py-2  md:ps-8   px-4 pe-2 flex items-center justify-between text-white"
    >
      {/* logo */}
      <Link href="/" className="block">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>

      {/* navs */}
      <ul
        className={`lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-4 text-xl absolute lg:static bg-black lg:bg-transparent w-full lg:w-auto top-24  lg:top-auto left-0 lg:left-auto px-4 lg:px-0 py-6 lg:py-0 transition-all duration-300 ease-in-out rounded-3xl max-md:space-y-6 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#about"
            className="capitalize font-semibold hover:text-lime-400 transition-all duration-300"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="capitalize font-semibold hover:text-lime-400 transition-all duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experinces"
            className="capitalize font-semibold hover:text-lime-400 transition-all duration-300"
          >
            Experiences
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="capitalize font-semibold hover:text-lime-400 transition-all duration-300"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="capitalize font-semibold hover:text-lime-400 transition-all duration-300"
          >
            Contact me
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        {/* download cv */}
        <a
          href="/Kerolos Nessim - Frontend Developer.pdf"
          download
          className=" font-semibold capitalize lg:text-lg text-black bg-lime-400 h-14 flex items-center gap-2 px-6 rounded-full border-2 border-transparent hover:border-lime-400 hover:bg-black hover:text-lime-400 transition-all duration-300"
        >
          Download CV
          <FiDownload size={24} />
        </a>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black bg-lime-400 font-semibold border-2 border-transparent hover:border-lime-400 hover:bg-black hover:text-lime-400 transition-all duration-300 size-14 rounded-full flex items-center justify-center"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
