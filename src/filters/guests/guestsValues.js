import { useState } from "react";
import styles from "./guestsValues.module.css";

export default function GuestsValues({ expanded, activeFilter, onGuestsChange }) {

    const [guests, setGuests] = useState( { adults: 0, children: 0 } );

    function changeGuests(command, guest) {
        const newValue = Object.assign({}, guests);
        if (command === 'add') newValue[guest]++;
        if (command === 'remove' && newValue[guest] > 0) newValue[guest]--;
        setGuests(newValue);
        console.log(newValue);
        onGuestsChange(newValue.adults + newValue.children);
    }

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
        
      <button onClick={() => changeGuests('add', 'adults')}>Add adult</button>
      <button onClick={() => changeGuests('remove', 'adults')}>Remove adult</button>
      <button onClick={() => changeGuests('add', 'children')}>Add child</button>
      <button onClick={() => changeGuests('remove', 'children')}>Remove child</button>
      
    </div>
  );
}
