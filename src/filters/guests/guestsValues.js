import styles from "./guestsValues.module.css";

export default function GuestsValues({ expanded, activeFilter }) {
  return (
    <div
      className={
        `${expanded ? styles.displayed : styles.notDisplayed }
         ${activeFilter === "guests" ? styles.visible : styles.hidden}`
      }
    >
      hi guest
    </div>
  );
}
