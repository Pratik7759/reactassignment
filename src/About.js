import React from "react";
import image1 from "./images/aboutImage1.jpg";
import image2 from "./images/aboutImage2.jpg";
// import image3 from "./images/aboutImage3.jpg";

export default function About() {
  let users = [
    {
      image: image1,
      name: "Meg",
      title: "Lanning",
      desc: "Meghann Moira Lanning AM is an Australian cricketer who captains the national women's team. She has been a member of seven successful world championship campaigns.",
      email: "meg@gmail.com",
      tel: "7759075757",
    },
    {
      image: image2,
      name: "Alyssa",
      title: "Healy",
      desc: "Alyssa Jean Healy is an Australian cricketer who plays for the Australian women's national team and New South Wales in domestic cricket, as well as the Sydney Sixers in the WBBL",
      email: "Alyssa@gmail.com",
      tel: "9872594119",
    },
    {
      image: image2,
      name: "Ellyse",
      title: "Perry",
      desc: "Ellyse Alexandra Perry is an Australian sportswoman who has represented her country in cricket and association football.",
      email: "Ellyse@gmail.com",
      tel: "9709847423",
    },
    {
      image: image1,
      name: "Beth",
      title: "Mooney",
      desc: "Bethany Louise Mooney is an Australian professional cricketer who plays for the national cricket team as a batter in all three formats of the game.",
      email: "Beth@gmail.com",
      tel: "9771269420",
    },
    {
      image: image2,
      name: "Rachael",
      title: "Haynes",
      desc: "Rachael Louise Haynes is an Australian former international cricketer who has won six world championships as a member of the national women's team. A left-handed batter, Haynes was vice-captain of Australia from 2017 to 2022",
      email: "Rachael@gmail.com",
      tel: "7079827648",
    },
    {
      image: image1,
      name: "Jess",
      title: "Jonassen",
      desc: "Jessica Louise Jonassen is an Australian cricketer from Rockhampton, Queensland. A left-arm orthodox bowling all-rounder, Jonassen has been a member of the national women's team since ",
      email: "jess@gmail.com",
      tel: "9955844493",
    },
  ];
  return (
    
    <div class="container">
      <h1>employee's Details</h1>
      <div class="row justify-content-around">
        {users.map((val) => (
          <div class="col-sm-6">
            <img src={val.image} alt="John" />
            <h2>{val.name}</h2>
            <p>{val.title}</p>
            <p>{val.desc}</p>
            <p>{val.tel}</p>
            <p>{val.email}</p>
            <p>
              <button class="button">Contact</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
