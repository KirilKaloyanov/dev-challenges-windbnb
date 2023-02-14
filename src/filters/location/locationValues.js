import styles from "./locationValues.module.css";

export default function LocationValues({ expanded, activeFilter }) {
  return (
    <div
      className={`${styles.main} 
            ${
              expanded && activeFilter === "location"
                ? styles.visible
                : styles.hidden
            }
            ${expanded ? "" : styles.notDisplayed}
         `}
    >
      hi location
    </div>
  );
}
