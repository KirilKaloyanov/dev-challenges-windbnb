import styles from "./locationValues.module.css";

export default function LocationValues({ expanded, activeFilter }) {
  return (
    <div
      className={`${expanded ? styles.visible : styles.hidden}
         ${
           expanded && activeFilter === "location"
             ? styles.visible
             : styles.hidden
         }
         ${expanded ? '' : styles.fucked}`}
    >
      hi location
    </div>
  );
}
