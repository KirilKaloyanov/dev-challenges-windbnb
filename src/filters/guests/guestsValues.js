import styles from "./guestsValues.module.css";

export default function GuestsValues({ expanded, activeFilter, onGuestsChange, guests }) {

 console.log(guests);
    return (
    <div
      className={`${styles.main} 
            ${
              expanded && activeFilter === "guests"
                ? styles.visible
                : styles.hidden
            }
            ${expanded ? "" : styles.notDisplayed}
         `}
    >
      <button onClick={() => onGuestsChange(1)}>Add</button>
      
    </div>
  );
}
