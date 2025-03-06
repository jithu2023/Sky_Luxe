import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck, BsBookmarkCheck } from "react-icons/bs";

function Info() {
  return (
    <div className="info">
      <div className="infoContainer">
        <div className="titleDiv">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">View All</button>
        </div>
        
        <div className="cardsDiv">
          <div className="singleCard">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleCard">
            <div className="iconDiv colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Safe & Secure</span>
            <p>Our services ensure a safe and secure journey for you.</p>
          </div>

          <div className="singleCard">
            <div className="iconDiv colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="cardTitle">Easy Booking</span>
            <p>Get the best deals and book your trip with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
