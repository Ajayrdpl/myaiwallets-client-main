import React from 'react';
import { MdEmail } from "react-icons/md";

const GmailButton = () => {
  const handleGmailClick = () => {
    window.location.href = "mailto:myaiwallet@gmail.com";
  };

  return (
    <a
      onClick={handleGmailClick}
      className="fixed left-5 bottom-5 z-[100] cursor-pointer"
    >
      <MdEmail color='#EA4335' className="w-10 h-10 hover:scale-110 transition-transform" />
    </a>
  );
};

export default GmailButton;