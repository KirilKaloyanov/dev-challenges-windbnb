import { useState } from "react";
import css from "./guestsValues.module.css";

export default function GuestsValues({ expanded, activeFilter, onGuestsChange }) {

    const [guests, setGuests] = useState( { adults: 0, children: 0 } );

    function changeGuests(command, guest) {
        const newValue = {...guests};
        if (command === 'add') newValue[guest]++;
        if (command === 'remove' && newValue[guest] > 0) newValue[guest]--;
        setGuests(newValue);
        onGuestsChange(newValue.adults + newValue.children);
    }

    return (
    <div
      className={`${css.main} 
            ${
              expanded && activeFilter === "guests"
                ? css.visible
                : css.hidden
            }
            ${expanded ? "" : css.notExpanded}
         `}
    >
        <div className={css.counter}>
            <div className={css.label}>Adults</div>
            <div className={css.ages}>Ages 13 and above</div>
            <div className={css.values}>
                <span 
                    onClick={() => changeGuests('remove', 'adults')}
                    className={css.button}
                >-</span>
                <span className={css.count}>{guests.adults}</span>
                <span 
                    onClick={() => changeGuests('add', 'adults')}
                    className={css.button}
                >+</span>
            </div>
        </div>
        <div className={css.counter}>
            <div className={css.label}>Children</div>
            <div className={css.ages}>Ages 2 - 12</div>
            <div className={css.values}>
                <span 
                    onClick={() => changeGuests('remove', 'children')}
                    className={css.button}
                >-</span>
                <span className={css.count}>{guests.children}</span>
                <span 
                    onClick={() => changeGuests('add', 'children')}
                    className={css.button}
                >+</span>
            </div>
        </div>
      
    </div>
  );
}
