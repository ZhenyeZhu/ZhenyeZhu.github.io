import ProfilePhoto from "../images/ProfilePhoto.png";

import { FcContacts, FcBriefcase, FcIdea, FcRules } from "react-icons/fc";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-48 bg-sky-100 shadow-lg flex flex-col">
      <div className="basis-1/4 flex flex-col place-content-center px-8">
        <img
          src={ProfilePhoto}
          className="rounded-full self-center"
          alt="Porfile"
        />
        <div className="text-center text-2xl mt-2 font-bold">Zhenye</div>
      </div>

      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-sky-200 hover:shadow-inner"
        to="/"
      >
        <FcContacts className="w-7 h-7 self-center mr-2" /> About
      </Link>
      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-sky-200 hover:shadow-inner"
        to="/experience"
      >
        <FcBriefcase className="w-7 h-7 self-center mr-2" /> Experience
      </Link>
      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-sky-200 hover:shadow-inner"
        to="/resume"
      >
        <FcRules className="w-7 h-7 self-center mr-2" /> Resume
      </Link>
      <Link
        className="text-xl font-bold flex pl-6 py-2 hover:bg-sky-200 hover:shadow-inner"
        to="/projects"
      >
        <FcIdea className="w-7 h-7 self-center mr-2" /> Projects
      </Link>
    </div>
  );
}

export default Navbar;
