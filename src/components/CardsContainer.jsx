import React from "react";

function CardsContainer({ clubName, presidentName }) {
  return (
    <>
      <div className="cards-container">
        <div className="cards-banner">
          <img src="" alt="" />
        </div>
        <div className="cards-content">
          <p className="card-title">{clubName}</p>
          <p className="card-subtitle">{presidentName}</p>
        </div>
      </div>
    </>
  );
}

export default CardsContainer;
