import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

// =================================== X =================================

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123865.jpg?k=79f297920b5f77c06e694c2e3f77e5c640609c4c795f053439842e50203d7898&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123848.jpg?k=05b2510c7634d0a9d54a39697396760402b968e91229338c5e30669c3d119732&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123839.jpg?k=338eea5e8b46b4d4062a6c2ebe362425d3e1e15a26841ff82e9442e07e05e30c&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123824.jpg?k=448c20615729b827642508060c74781b3624fc6bf543935557c5241350ff5c0b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123842.jpg?k=cd591f2f48fe08895ecbdfbafbc65422d2580a29b8210ed351e7134ffe2d0df6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405123809.jpg?k=fa3641ea9d3fb705e029e297b7b9c5efcadcf8c1b91981a5e37f23462abd1723&o=&hp=1',
    },
  ];

  const handlePhotoClick = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleSliderArrow = (type) => {
    let newSlideNumber;
    let lastImageIndex = photos.length - 1;

    if (type === 'left') {
      newSlideNumber = slideNumber === 0 ? lastImageIndex : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === lastImageIndex ? 0 : slideNumber + 1;
    }
    console.log(newSlideNumber);
    setSlideNumber(newSlideNumber);
  };
  //================================RETURN
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleSliderArrow('left')}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImage"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleSliderArrow('right')}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Islington, London, EC1M 4AN, United Kingdom</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handlePhotoClick(index)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of london</h1>
              <p className="hotelDesc">
                Offering free WiFi, Central 1 Bedroom Apartment in Farringdon is
                located in the center of London within a 12-minute walk of St
                Paul's Cathedral and 1.8 km from Liverpool Street Tube Station.
                This apartment is 2.4 km from Royal Opera House and 2.6 km from
                Lyceum Theatre. The apartment features 1 bedroom, a fully
                equipped kitchen with a fridge and an oven, and 1 bathroom with
                a shower and free toiletries. Towels and bed linen are featured
                in the apartment. Sky Garden is 2.3 km from the apartment, while
                British Museum is 2.4 km away. The nearest airport is London
                City Airport, 13 km from Central 1 Bedroom Apartment in
                Farringdon. This is our guests' favorite part of London,
                according to independent reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of london, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                $945<b>(9 nights)</b>
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  );
}
