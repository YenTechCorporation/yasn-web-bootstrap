import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./header.css";
import db from "../../firebase";
import logo from "../../images/logo.jpeg";
function Header() {
  const [info, setInfo] = useState({});
  const [events, setEvents] = useState([]);
  

  const noEvents = [
    {
      original: logo,
    },
  ];

  useEffect(() => {
    db.collection("events")
      .orderBy("lastupdate", "asc")
      .onSnapshot((snapshot) =>
        setEvents(
          snapshot.docs.map((doc) => ({
            original: doc.data().src.src,
            category: doc.data().category,
            date: doc.data().date,
            title: doc.data().title,
            by: doc.data().authorId,
          }))
        )
      );
    if (events.length === 0) {
      setEvents(noEvents);
    }
  }, [events.length]);
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
            items={events}
            onSlide={(currentIndex) => setInfo(events[currentIndex])}
          />
        </div>

        <div className="container mh-20 bg-dark mr-auto description">
          {events[0]?.title ? (
            <>
              <h3>{info.category} </h3>
              <p>{info.date}</p>
              <hr />
              <p>{info.title}</p>
              <p> By: {info.by}</p>
            </>
          ) : (
            <p>No events</p>
          )}
        </div>
      </>
    </div>
  );
}

export default Header;
