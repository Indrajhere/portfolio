import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import {FaSquareXTwitter} from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-4xl font-bold mx-2 tracking-[3px] select-none">IS</p>
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://github.com/Indrajhere">
        <FaGithub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/indrajbir/">
        <FaLinkedin />
        </a>
        <FaInstagram/>
      </div>
    </nav>
  );
};

export default Navbar;
