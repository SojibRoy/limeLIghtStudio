import React from "react";
import about1 from "../../../images/about1.jpg";

const AboutUs = () => {
  return (
    <div className="d-flex flex-lg-row flex-column flex-md-column justify-content-between align-items-center">
      <div className="w-50">
        <img className="img-fluid rounded-circle" src={about1} alt="" />
      </div>
      <div className="mx-auto m-3">
        <h1 className="text-primary">About Us</h1>
        <div className="fs-5">
          <p>Lime-Light Studio was founded in 2022. We are expert in:</p>

          <ul>
            <li>Making your memories memorable.</li>
            <li>Video and Photo editing.</li>
            <li>Using hi-tech camera and technology.</li>
            <li>Providing props and Studios</li>
            <li>Finishing projects in less possible time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
// d-lg-block d-none
