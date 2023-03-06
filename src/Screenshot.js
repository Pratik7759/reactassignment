import React from "react";
import image1 from "./images/screenshotImage1.jpg";
// import image2 from "./images/screenshotImage2.jpg";
import image3 from "./images/screenshotImage3.jpg";
import image4 from "./images/screenshotImage4.jpg";
import image5 from "./images/screenshotImage5.jpg";
// import image6 from "./images/screenshotImage6.jpg";

export default function Screenshot() {
  return (
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-sm-6">
          <img src={image1} alt="Nature" />
        </div>
        <div class="col-sm-6">
          <img src={image3} alt="Mountains" />
        </div>
        <div class="col-sm-6">
          <img src={image4} alt="Lights" />
        </div>
        <div class="col-sm-6">
          <img src={image5} alt="Nature" />
        </div>
        {/* <div class="col-sm-6">
          <img src={image6} alt="Nature" />
        </div>
        <div class="col-sm-6">
          <img src={image2} alt="Snow" />
        </div> */}
      </div>
    </div>
  );
}
