"use client";

import { IoMdMenu } from "react-icons/io";
import DropdownMenu from "../dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const onClick = () => {
    setMenu((prev) => !prev);
  };
  return (
    <header className='w-full h-[70px] z-50 flex justify-between fixed top-0 left-0 bg-none px-4 2xl:px-40'>
      <nav className='w-[75%] text-xl'>
        <ul className='flex items-center justify-between h-full'>
          <li className='flex items-center gap-3 w-[250px] h-[50px] rounded-2xl bg-[#1b1b1b] px-3 text-white'>
            <svg
              width='20'
              height='16'
              viewBox='0 0 20 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g id='logo'>
                <path
                  id='a'
                  d='M3.95833 0L0 15.9028H3.81944L5.90278 7.01389L16.3889 15.9028H20L16.0417 0H3.95833Z'
                  fill='#D7D9D6'
                />
                <path
                  id='triangle'
                  d='M13.403 3.19458H6.66687L15.278 10.6251L13.403 3.19458Z'
                  fill='#1B1B1B'
                  stroke='#D7D9D6'
                />
              </g>
            </svg>
            <p>
              <span className='text-[#8B8C8A]'>Terra -</span> Home
            </p>
          </li>
          <li className='hidden md:block'>Products</li>
          <li className='hidden md:block'>Reach out to us!</li>
        </ul>
      </nav>
      <div className='w-[25%] h-full flex items-center justify-end pr-4'>
        <IoMdMenu size={28} onClick={onClick} className='cursor-pointer' />
      </div>
      <DropdownMenu menu={menu} />
    </header>
  );
};

export default Header;
