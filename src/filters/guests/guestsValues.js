import styles from "./guestsValues.module.css";

export default function GuestsValues({ expanded, activeFilter }) {
  return (
    <div
      className={`${expanded ? styles.visible : styles.hidden}
         ${
           expanded && activeFilter === "guests"
             ? styles.visible
             : styles.hidden
         }
         ${expanded ? '' : styles.fucked}`}
    >
      hi guest
    </div>
  );
}
