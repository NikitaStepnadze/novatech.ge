import React from "react";

const MapsSection = () => {
  return (
    <div className="section pt-0">
        <div className="hero-container">
            <iframe
            loading="lazy"
            className="maps overflow-hidden"
            src="https://maps.google.com/maps?q=Tbilisi%2C%20Georgia&t=m&z=12&output=embed&iwloc=near"
            title="თბილისი, საქართველო"
            aria-label="თბილისი, საქართველო" 
            ></iframe>
        </div>
    </div>
  );
};

export default MapsSection;
