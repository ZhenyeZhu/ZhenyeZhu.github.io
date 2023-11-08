import ProfilePhoto from "../images/ProfilePhoto.png";

import { FcContacts, FcBriefcase, FcIdea, FcRules } from "react-icons/fc";

import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-48 shrink-0 bg-light-blue-50 shadow-lg flex flex-col overflow-auto scrollbar-hide">
      <div className="basis-1/4 flex flex-col place-content-center px-8 mt-2 mb-4">
        <img
          src={ProfilePhoto}
          className="rounded-full self-center"
          alt="Porfile"
        />
        <div className="text-center text-2xl mt-2 font-bold">Zhenye</div>
      </div>

      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-light-blue-100 hover:shadow-inner"
        to="/"
      >
        <FcContacts className="w-7 h-7 self-center mr-2" /> About
      </Link>
      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-light-blue-100 hover:shadow-inner"
        to="/experience"
      >
        <FcBriefcase className="w-7 h-7 self-center mr-2" /> Experience
      </Link>
      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-light-blue-100 hover:shadow-inner"
        to="/resume"
      >
        <FcRules className="w-7 h-7 self-center mr-2" /> Resume
      </Link>
      <Link
        className="text-xl font-bold flex pl-6 py-2 mb-4 hover:bg-light-blue-100 hover:shadow-inner"
        to="/projects"
      >
        <FcIdea className="w-7 h-7 self-center mr-2" /> Projects
      </Link>

      <div className="mt-auto w-full flex self-center justify-center gap-3 mb-4">
        <a
          href="https://www.linkedin.com/in/zhenye-zhu-a1b5481a3/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            size="sm"
            className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
          >
            <FaLinkedin size={25} />
          </IconButton>
        </a>

        <a href="https://github.com/ZhenyeZhu" target="_blank" rel="noreferrer">
          <IconButton
            size="sm"
            className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"
          >
            <FaGithub size={25} />
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
