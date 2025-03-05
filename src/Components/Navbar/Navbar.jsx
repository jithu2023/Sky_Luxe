import React, { useState } from 'react';
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import wlogo from '../../assets/wlogo.png';

function Navbar() {
  // State to manage the visibility of NavBarMenu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="navBar">
      {/* Top Navigation Bar */}
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" /> {/* Added icon class */}
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="navBarTwo flex">
        {/* Logo on Top-Left */}
        <div className="logoDiv">
          <img src={wlogo} className="Logo" alt="Logo" /> {/* Added alt attribute */}
        </div>

        {/* NavBarMenu in the Middle */}
        <div className={`NavBarMenu ${isMenuVisible ? 'active' : ''}`}>
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Seat</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Destination</li>
          </ul>
          <button className="btn btnOne">Contact</button>
        </div>

        {/* Toggle Icon on Top-Right */}
        <div className="toggleIcon" onClick={toggleMenu}>
          <CgMenuGridO className="icon" /> {/* Added icon class */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;