import React from "react";
import image1 from "./images/aboutImage1.jpg";
import image2 from "./images/aboutImage2.jpg";
import image3 from "./images/aboutImage3.jpg";


export default function About() {
  let users = [
    {
      image: image1,
      name: "john",
      title: "mishra",
      desc: "normal text",
      tel: "7464737",
    },
    {
      image: image2,
      name: "mike",
      title: "broad",
      desc: "normal text",
      tel: "7464737",
    },
    {
      image: image3,
      name: "adam",
      title: "watson",
      desc: "normal text",
      tel: "7464737",
    },
  
  
  ];
  return (
    <div>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="images/aboutImage3.jpg" alt="Jane" />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        {users.map((val) => (
          <div class="column">
            <div class="card">
              <img src={val.image} alt="Jane" />
              <div class="container">
                <h2>{val.name}</h2>
                <p class="title">{val.title}</p>
                <p>{val.desc}</p>
                <p>{val.tel}</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        ))}

        <div class="column">
          <div class="card">
            <img src="images/aboutImage2.jpg" alt="Mike" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="images/aboutImage1.jpg" alt="John" />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
