import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
      <a href='/' className='logo'>ॐ</a>
        <nav className='nav'>
          <li>
            <a href='/'>Home</a>
          </li>
        </nav>
        <div className='contact'>
          <a href='/contact'>Mr Deepak & Mrs Nanditha</a>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
