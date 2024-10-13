import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import '../styles//TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <span style={{color:'black'}}>Referral Link: <a href='#'>https://lizacoin.live/soft/member/register.php?r=26654903</a></span>

      {/* <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
        <FaTelegram />
        <FaWhatsapp />
      </div> */}
      <button>Copy</button>
    </div>
  );
};

export default TopBar;
