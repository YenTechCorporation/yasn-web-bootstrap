import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "./header.css";
function Header() {
  const [info, setInfo] = useState({});

  const imageItems = [
    {
      original:
        "https://images.pexels.com/photos/719597/pexels-photo-719597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "Debat",
      date: "Mon 26/05/21",
      title:
        "L'administration Biden au prisme des alliés : perspectives croisées France-Japon.",
      by: "Alex",
    },
    {
      original:
        "https://images.pexels.com/photos/776636/pexels-photo-776636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "Santé",
      date: "Wed 23/06/21",
      title: "L'avancée du Covid19; Quelles perspectives pour 2021?",
      by: "Smith",
    },
  ];
  return (
    <div className="container mh-25">
      <>
        <div className="banner">
          <ImageGallery
            autoPlay={true}
            showThumbnails={false}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
            items={imageItems}
            onSlide={(currentIndex) => setInfo(imageItems[currentIndex])}
          />
        </div>

        <div className="container mh-20 bg-dark mr-auto description">
          <h3>{info.category} </h3>
          <p>{info.date}</p>
          <hr />
          <p>{info.title}</p>
          <p> By: {info.by}</p>
        </div>
      </>
    </div>
  );
}

export default Header;
