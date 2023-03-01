import React from "react";
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <body>
        <section class="background firstsection">
          <div class="box-main">
            <div class="firstHalf">
              <p class="text-big">Contact Us</p>

              <p class="text-small">
                You can Contact Us if you face any problem
              </p>

              <br></br>
              <p class="center">Click on the below options to Contact us</p>
            </div>
          </div>
        </section>
        <section className="service">
          <h1 class="h-primary center">Options to Contact</h1>
          <div id="service">
            <div class="box">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20211220070335/color.png"
                alt="color_image"
              />
              <br></br>

              <p className="center">
                People can fill up the form and send us the problem
              </p>
            </div>
            <div class="box">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20211220070335/color.png"
                alt="color_image"
              />
              <br></br>

              <p class="center">
                Use this Email to send us about the problem faced
              </p>
            </div>
            <div className="box">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20211220070335/color.png"
                alt="color_image"
              />
              <br></br>

              <p class="center">Toll Free Number:+1800 200 300 400</p>
            </div>
          </div>
        </section>
        <footer class="background">
          <p class="text-footer">Copyright @-All rights are reserved</p>
        </footer>
      </body>
    </div>
  );
}
