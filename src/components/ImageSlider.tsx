import React from "react";
import Slider from "react-slick";
import image1 from "../images/image_1.png";
import image2 from "../images/image_2.png";
import image3 from "../images/image_3.png";
import image4 from "../images/image_4.jpg";
import image5 from "../images/image_5.png";
import image6 from "../images/image_6.png";
import image7 from "../images/image_7.png";
import image8 from "../images/image_8.png";
import image9 from "../images/image_9.png";
import image10 from "../images/image_10.png";
import image11 from "../images/image_11.jpg";
import image12 from "../images/image_12.png";
import image13 from "../images/image_13.png";
import image14 from "../images/image_14.png";
import image15 from "../images/image_15.png";
import "../App.css"; // Add your global styling for the app if needed

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        paddingTop: "2px",
        borderRadius: "9px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        paddingTop: "2px",
        borderRadius: "9px",
      }}
      onClick={onClick}
    />
  );
};

const ImageSlider = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            id="chiatura-here"
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
            className="my-name"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: index !== 13 ? "80%" : "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
