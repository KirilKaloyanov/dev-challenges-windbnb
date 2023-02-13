import { useState } from "react";
import styles from "./filter.module.css";

export default function Filter() {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    if (expanded) setExpanded(false);
    else setExpanded(true);
  }

  return (
    <>
      <div
        className={`${styles.container} ${expanded && styles.expandedFilter}`}
        onClick={expand}
      >
        <span>Location</span>
        <span>Guests</span>
        <button>S</button>
      </div>
    </>
  );
}
