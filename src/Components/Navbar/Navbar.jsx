import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const navData = [
  { id: 1, title: "Music", link: "/music" },
  { id: 2, title: "Podcast", link: "/podcast" },
  { id: 3, title: "Live", link: "/live" },
  { id: 4, title: "Radio", link: "/radio" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-fit flex pl-8 gap-20 nav_con">
        <ul className="w-fit flex gap-8 h-10 items-center ">
          {navData.map((item) => (
            <li key={item.id} className="rounded hover:bg-[#0E0E0E] px-4">
              <Link className="text-white font-semibold" to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center relative">
          <input
            className="inp_search w-[20em] h-10 bg-[#2C0000] rounded-full pl-4 placeholder:font-normal placeholder:text-white text-white font-normal"
            type="text"
            placeholder="Search..."
          />
          <FiSearch className="w-6 h-6 absolute right-3 text-white cursor-pointer" />
        </div>
      </div>

      {/* mobile view */}
      <div className=" m_con -mt-6 flex items-center justify-around">
        <div>
          <GiHamburgerMenu onClick={handleOpenClose} className=" text-white h-6 w-6" />

          {isOpen && (
            <ul className="flex flex-col gap-y-1 absolute z-10">
              {navData.map((item) => (
                <li key={item.id} className="rounded hover:bg-[#0E0E0E] px-4">
                  <Link className="text-white font-semibold" to={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center relative">
          <input
            className="max-w-[20em] h-10 bg-[#2C0000] rounded-full pl-4 placeholder:font-normal placeholder:text-white text-white font-normal"
            type="text"
            placeholder="Search..."
          />
          <FiSearch className="w-6 h-6 absolute right-3 text-white cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
