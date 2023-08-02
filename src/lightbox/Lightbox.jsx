import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Image2Thumb from "../images/image-product-2-thumbnail.jpg";
import Image3Thumb from "../images/image-product-3-thumbnail.jpg";
import Image4Thumb from "../images/image-product-4-thumbnail.jpg";
import Previous from "../images/icon-previous.svg";
import Next from "../images/icon-next.svg";
import CloseLightBox from "../images/icon-close.svg";
import { useState } from "react";
import "./Lightbox.css";
import "../index.css";

const Lightbox = () => {
  const [active, setActive] = useState(0);
  const [show, toggleShow] = useState(true);
  const images = [
    {
      image: Image1,
    },
    {
      image: Image2,
    },
    {
      image: Image3,
    },
    {
      image: Image4,
    },
  ];

  const thumbnail = [
    {
      image: Image1Thumb,
    },
    {
      image: Image2Thumb,
    },
    {
      image: Image3Thumb,
    },
    {
      image: Image4Thumb,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }
    setActive(newIndex);
  };
  const goToSlide = (i) => {
    setActive(i);
  };

  return (
    <>
      {show && (
        <div className="lightbox-view">
          <div className="lightbox-main">
            <div className="carousel">
              <div
                className="inner"
                style={{ transform: `translate(-${active * 100}%)` }}
              >
                {images.map((item, index) => (
                  <div key={index} className="light-box-image">
                    <img src={item.image} width={"100%"} />
                  </div>
                ))}
              </div>
            </div>
            <img
              src={Previous}
              onClick={() => {
                updateIndex(active - 1);
              }}
              className="previous"
            />
            <div className="product-thumb">
              {thumbnail.map((item, i) => (
                <img key={i} src={item.image} onClick={() => goToSlide(i)} />
              ))}
            </div>
            <img
              src={Next}
              onClick={() => {
                updateIndex(active + 1);
              }}
              className="forward"
            />
            <img
              src={CloseLightBox}
              className="closeLightBox"
              onClick={() => toggleShow(!show)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;
