import { useState } from "react";
import Location from "./location/location.js";
import Guests from "./guests/guests.js";
import LocationValues from "./location/locationValues.js";
import GuestsValues from "./guests/guestsValues.js";
import css from "./filter.module.css";

export default function Filter({ onGuestsChange, guests }) {
  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("location");


  return (
    <>
      <div
        className={`${css.container} ${expanded && css.expandedContainer}`}
        onClick={() => setExpanded(true)}
      >
        <div className={`${css.grid} ${expanded && css.expandedGrid}`}>
          <div className={`${css.filters} ${expanded && css.expandedFilters}`}>
            <Location
              expanded={expanded}
              activeFilter={activeFilter}  
              onSelect={() => setActiveFilter("location")}
            />
            <Guests
              expanded={expanded}
              activeFilter={activeFilter}  
              onSelect={() => setActiveFilter("guests")}
              guests={guests} 
              />
          </div>
          <LocationValues expanded={expanded} activeFilter={activeFilter} />
          <GuestsValues 
            expanded={expanded} 
            activeFilter={activeFilter} 
            guests={guests}
            onGuestsChange={onGuestsChange}
          />
          <span className={css.searchField}>
            {expanded && (
              <div className={css.searchButton}>
                <span className="material-symbols-rounded">search</span>
                <span>Search</span>
              </div>
            )}
            {!expanded && (
              <div className={css.search}>
                <span className={`material-symbols-rounded ${css.searchIcon}`}>search</span>
              </div>
            )}
          </span>
        </div>
      </div>
      <div
        className={`${css.background} ${expanded && css.expandedBackground}`}
        onClick={() => setExpanded(false)}
      ></div>
    </>
  );
}
