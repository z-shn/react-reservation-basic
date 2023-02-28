import './featuredProperties.css';
import React from 'react';

function FeaturedProperties() {
  return (
    <div className="fpList">
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"
          alt=""
          className="fpListImage"
        />
        <span className="fpName">
          6 Continents Apartments by Prague Residences
        </span>
        <span className="fpCity">Prague 1, Czech Republic, Prague</span>
        <span className="fpPrice">Starging from $61</span>
        <div className="fpRating">
          <button>8.3</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1"
          alt=""
          className="fpListImage"
        />
        <span className="fpName">Villa Domina</span>
        <span className="fpCity">Split City Center, Croatia, Split</span>
        <span className="fpPrice">Starging from $47</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="fpListImage"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpPrice">Starging from $90</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
          alt=""
          className="fpListImage"
        />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Madrid City Center, Spain, Madrid</span>
        <span className="fpPrice">Starging from $122</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
