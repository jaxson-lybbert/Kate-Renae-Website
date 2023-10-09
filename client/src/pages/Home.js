import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function Home() {
  //   const coverImages = [
  //     {
  //       label: "Sky of Dreams",
  //       imgPath: "https://source.unsplash.com/random",
  //     },
  //     {
  //       label: "World of Shadow",
  //       imgPath: "https://source.unsplash.com/random",
  //     },
  //     {
  //       label: "Death and Dusk",
  //       imgPath: "https://source.unsplash.com/random",
  //     },
  //   ];

  // Potential Carousel for top of Home Page??

  const data = ["1", "2", "3", "4"];

  const [index, setIndex] = useState(0);
  const carouselScroll = () => {
    if (index === data.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="carousel-container">
        {data.map((item, index) => {
          return (
            <h1
              className="carousel-item"
              style={{ transform: `translate(-${index * 100}%)` }}
              key={index}
            >
              {item}
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Home;
