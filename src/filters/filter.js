import { useState } from "react";
import Location from "./location/location.js";
import Guests from "./guests/guests.js";
import LocationValues from "./location/locationValues.js";
import GuestsValues from "./guests/guestsValues.js";
import css from "./filter.module.css";

export default function Filter({
  guests,
  location,
  locationsList,
  onGuestsChange,
  onLocationChange,
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("location");

  return (
    <>
      <div
        className={`${css.container} ${expanded && css.expandedContainer}`}
        onClick={() => setExpanded(true)}
      >
        {expanded && (
          <div className={css.controls}>
            <div>Edit your search</div>
            <span
              className="material-symbols-rounded"
              onClick={(e) => {e.stopPropagation(); setExpanded(false)}}
            >
              <strong>close</strong>
            </span>
          </div>
        )}
        <div className={`${css.grid} ${expanded && css.expandedGrid}`}>
          <div className={`${css.filters} ${expanded && css.expandedFilters}`}>
            <Location
              expanded={expanded}
              activeFilter={activeFilter}
              onSelect={() => setActiveFilter("location")}
              location={location}
            />
            <Guests
              expanded={expanded}
              activeFilter={activeFilter}
              onSelect={() => setActiveFilter("guests")}
              guests={guests}
            />
          </div>
          <LocationValues
            expanded={expanded}
            activeFilter={activeFilter}
            locationsList={locationsList}
            onLocationChange={onLocationChange}
          />
          <GuestsValues
            expanded={expanded}
            activeFilter={activeFilter}
            guests={guests}
            onGuestsChange={onGuestsChange}
          />
          <span className={css.searchField}>
            {expanded && (
              <div
                className={css.searchButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
              >
                <span className="material-symbols-rounded">search</span>
                <span>Search</span>
              </div>
            )}
            {!expanded && (
              <div className={css.search}>
                <span className={`material-symbols-rounded ${css.searchIcon}`}>
                  search
                </span>
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
