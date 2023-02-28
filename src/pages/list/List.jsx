import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from '../../components/searchItem/SearchItem';
import './list.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

// =================================== X =================================

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.dateState);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  //================================RETURN
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            {/* destination */}
            <div className="listItem">
              <label htmlFor="txtDestination">Destination</label>
              <input
                type="text"
                name="txtDestination"
                id=""
                placeholder={destination}
              />
            </div>
            {/* checkin */}
            <div className="listItem">
              <label>Check-in Date</label>
              <span
                className="checkinDate"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to
                ${format(date[0].endDate, 'MM/dd/yyyy')} `}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                />
              )}
            </div>
            {/* options */}
            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min price <small> (per night)</small>
                  </span>
                  <input type="number" min={0} placeholder="" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max price <small> (per night)</small>
                  </span>
                  <input type="number" min={0} placeholder="" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input type="number" min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
}
