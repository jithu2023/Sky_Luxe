import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

function Search() {
  return (
    <div className="search container section">
      <div className="sectionContainer">
        <div className="btns flex">
          <div className="singleButton"><span>Economy</span></div>
          <div className="singleButton"><span>Business Class</span></div>
          <div className="singleButton"><span>First Class</span></div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to visit?" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleFill className="icon" />
            </div>
            <div className="texts">
              <h4>Travel</h4>
              <input type="text" placeholder="Add Guests" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          <button className="btn btnBlock">Search Flight</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
