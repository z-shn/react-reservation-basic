import './searchItem.css';

// =================================== X =================================

function SearchItem() {
  //================================RETURN

  return (
    <div className="searchItem">
      <img
        className="siImage"
        src="https://cf.bstatic.com/xdata/images/hotel/square200/426561502.webp?k=2dd9a419cae8a3ec1a265d97672740d06227f64e042a6ecc191644607fc2abe4&o=&s=1"
        alt=""
      />
      <div className="siDescription">
        <h1 className="siTitle">ALTIDO Cosy and inviting house with patio</h1>
        <span className="siDistance">6.1 km from center</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span className="siSubtitle">
          ALTIDO Cosy and inviting house with patio has free WiFi and a garden.
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel alter, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$150</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
