import React from "react";
import image1 from './images/screenshotImage1.jpg'
import image2 from './images/screenshotImage2.jpg'
import image3 from './images/screenshotImage3.jpg'
import image4 from './images/screenshotImage4.jpg'
import image5 from './images/screenshotImage5.jpg'
import image6 from './images/screenshotImage6.jpg'
export default function Screenshot() {
  return (
    <div>
      <div class="row">
        <div class="column">
          <img
            src={image1}
            alt="Nature"
            onclick="myFunction(this);"
          />
        </div>
        <div class="column">
          <img
            src={image2}
            alt="Snow"
            onclick="myFunction(this);"
          />
        </div>
        <div class="column">
          <img
            src={image3}
            alt="Mountains"
            onclick="myFunction(this);"
          />
        </div>
        <div class="column">
          <img
            src={image4}
            alt="Lights"
            onclick="myFunction(this);"
          />
        </div>
        <div class="column">
          <img
            src={image5}
            alt="Nature"
            onclick="myFunction(this);"
          />
        </div>
        <div class="column">
          <img
            src={image6}
            alt="Nature"
            onclick="myFunction(this);"
          />
        </div>
      </div>

      <div class="container">
        <span
          onclick="this.parentElement.style.display='none'"
          class="closebtn"
        >
          &times;
        </span>

        {/* <img id="expandedImg" style="width: 100%" /> */}

        <div id="imgtext"></div>
      </div>
    </div>
  );
}
