import { useState } from "react";
import Location from "./location/location.js";
import Guests from "./guests/guests.js";
import LocationValues from './location/locationValues.js';
import GuestsValues from './guests/guestsValues.js';
import styles from "./filter.module.css";

export default function Filter() {
  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <>
      <div
        className={`${styles.container} ${expanded && styles.expandedContainer}`}
        onClick={() => setExpanded(true)}
      >
        <div className={`${styles.grid} ${expanded && styles.expandedGrid}`}>
            <div class={`${styles.filters} ${expanded && styles.expandedFilters}`}>
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
                activeFilter={activeFilter}
             />
            <GuestsValues
                activeFilter={activeFilter}
            />
            <div className={styles.searchButton}>S</div>
        </div>
      </div>
      <div
        className={`${styles.background} ${expanded && styles.expandedBackground}`}
        onClick={() => setExpanded(false)}
      ></div>
    </>
  );
}
