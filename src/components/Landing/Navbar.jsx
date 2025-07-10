import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MainContent } from '../../constants/content/MainContent';
import Button from './Button';
import { Link } from 'react-router-dom';
import { AuthRoutes } from '../../constants/Routes';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Ecosystem", id: "ecosystem" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "Roadmap", id: "roadmap" }
  ];

  // Scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShow(false); 
  };
  
  return (
    <div className='flex justify-between items-center p-4 relative z-50'>
      <div>
        <img src={MainContent.appLogo} alt="Logo" className='h-12 w-12 lg:h-20 lg:w-20' />
      </div>

      <div className='hidden lg:flex gap-6'>
        {navItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className='hidden lg:flex gap-4'>
        <Button title="Contact Us" className='rounded-lg border px-6 py-3' />
       <Link to={AuthRoutes.LOGIN}>
       <Button  title="Login" className='rounded-lg px-6 py-3 bg-bg_color text-white' />
       </Link>
      </div>

      <div className='lg:hidden' onClick={() => setShow(true)}>
        <RxHamburgerMenu className='text-3xl cursor-pointer' />
      </div>

      <div className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-black text-white flex flex-col items-center p-8 transform ${show ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50`}>
        <button className="absolute top-4 right-4 text-white" onClick={() => setShow(false)}>
          <IoMdCloseCircleOutline size={24} />
        </button>

        <div className="flex flex-col gap-6 mt-16">
          {navItems.map((item, index) => (
            <div
              key={index}
              className='text-xl cursor-pointer hover:text-primary transition-colors'
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-4 mt-10 w-full items-center'>
          <Button title="Whitepaper" className='rounded-lg border px-6 py-3 w-40' />
          <Button title="Audit" className='rounded-lg px-6 py-3 bg-bg_color w-40' />
          <Button title="Win $100k" className='rounded-lg px-6 py-3 bg-bg_color w-40' />
        </div>
      </div>

      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
          onClick={() => setShow(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;