import { useState } from "react";
import Location from "./location/location.js";
import Guests from "./guests/guests.js";
import LocationValues from './location/locationValues.js';
import GuestsValues from './guests/guestsValues.js';
import styles from "./filter.module.css";

export default function Filter() {
  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');

  console.log(activeFilter);

  return (
    <>
      <div
        className={`${styles.container} ${expanded && styles.expandedContainer}`}
        onClick={() => setExpanded(true)}
      >
        <div className={`${styles.grid} ${expanded && styles.expandedGrid}`}>
            <div className={`${styles.filters} ${expanded && styles.expandedFilters}`}>
                <Location
                    expanded={expanded}
                    onSelect={() => setActiveFilter('location')}
                    />
                <Guests
                    expanded={expanded}
                    onSelect={() => setActiveFilter('guests')}
                />
            </div>
            <LocationValues
                expanded={expanded}
                activeFilter={activeFilter}
             />
            <GuestsValues
                expanded={expanded}
                activeFilter={activeFilter}
            />
            <span className={styles.searchButton}>Search</span>
        </div>
      </div>
      <div
        className={`${styles.background} ${expanded && styles.expandedBackground}`}
        onClick={() => setExpanded(false)}
      ></div>
    </>
  );
}
