import "./img-Carousel.css";

import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImgCarousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const Images = [
    {
      image:
        "https://media.glamour.com/photos/5de95e1f8b03ef0008cfe0b1/master/w_2560%2Cc_limit/BookSplit_Social_Lede.jpg",
    },
    {
      image:
        "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/31/1501768255-best-books-of-2017.jpg",
    },
    {
      image:
        "https://api.time.com/wp-content/uploads/2018/09/harry-potter-books-featured-image.jpg?quality=85&w=1200&h=628&crop=1",
    },
    {
      image:
        "https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/05105825/1200x628_instagrammable.jpg",
    },
  ];

  const nextImg = () => {
    setCurrentImg(currentImg === Images.length - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? Images.length - 1 : currentImg - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextImg, 5000);
    return () => clearInterval(interval);
  });

  console.log(currentImg);
  return (
    <section className="img-carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevImg} />
      {Images.map((img, index) => {
        return (
          <div
            className={index === currentImg ? "slide active" : "slide"}
            key={img + index}
          >
            {index === currentImg && (
              <img src={img.image} alt="Books" className="image" />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextImg} />
    </section>
  );
};

export default ImgCarousel;
