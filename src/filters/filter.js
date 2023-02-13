import { useState } from "react";
import Location from "./location/location.js";
import Guests from "./guests/guests.js";
import styles from "./filter.module.css";

export default function Filter() {
  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');

  return (
    <>
      <div
        className={`${styles.container} ${expanded && styles.expandedFilter}`}
        onClick={() => setExpanded(true)}
      >
        <div className={styles.grid}>
            <Location 
                expanded={expanded} 
                onSelect={() => setActiveFilter('location')}
            />
            <Guests expanded={expanded} />
            <button>S</button>
        </div>
      </div>
      <div
        className={`${styles.background} ${expanded && styles.expandedBackground}`}
        onClick={() => setExpanded(false)}
      ></div>
    </>
  );
}
