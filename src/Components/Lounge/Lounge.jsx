import React from 'react';
import gridImage1 from "../../assets/gridImage1.png"

function Lounge() {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        
        <div className="imgDiv">
          <img src={gridImage1} alt="Lounge" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">Help through the airport</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Care on the flight</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Priority boarding</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Chauffeur Drive Service</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lounge;
