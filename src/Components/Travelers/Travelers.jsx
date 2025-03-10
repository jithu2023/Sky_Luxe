import React from "react";
import traveler1 from "../../assets/traveler1.jpg";
import destination1 from "../../assets/destination1.jpg";
import traveler2 from "../../assets/traveler2.webp";
import destination2 from "../../assets/destination2.jpeg";
import traveler3 from "../../assets/traveler3.webp";
import destination3 from "../../assets/destination3.jpeg";

// Traveler data array
const travelers = [
  {
    id: 1,
    destinationImage: destination1,
    travelerImage: traveler1,
    travelerName: "Israa",
    socialLink: "@isratech",
  },
  {
    id: 2,
    destinationImage: destination2,
    travelerImage: traveler2,
    travelerName: "John Doe",
    socialLink: "@johndoe",
  },
  {
    id: 3, // Fixed duplicate id
    destinationImage: destination3,
    travelerImage: traveler3,
    travelerName: "Emily Smith",
    socialLink: "@emilysmith",
  },
];

function Travelers() {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top Travelers of This Month!</h2>
        <div className="travelersContainer grid">
          {travelers.map((traveler) => (
            <div className="singleTraveler" key={traveler.id}>
              <img
                src={traveler.destinationImage}
                alt="Destination"
                className="destinationImage"
              />
              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img
                    src={traveler.travelerImage}
                    alt={traveler.travelerName}
                    className="travelerImage"
                  />
                </div>
                <div className="travelerName">
                  <span>{traveler.travelerName}</span>
                  {traveler.socialLink}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Travelers;
