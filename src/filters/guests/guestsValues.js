import styles from "./guestsValues.module.css";

export default function GuestsValues({ expanded, activeFilter }) {
  return (
    <div
      className={`
            ${
              expanded && activeFilter === "guests"
                ? styles.visible
                : styles.hidden
            }
            ${expanded ? "" : styles.notDisplayed}
         `}
    >
      hi guest
    </div>
  );
}
