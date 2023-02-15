import css from "./guests.module.css";

export default function Guests({ onSelect, activeFilter, expanded, guests }) {
  

  
    return (
    <div
      onClick={onSelect}
      className={`${css.main} ${expanded && css.expandedFilterItem}`}
    >
      <div
        className={
          expanded && activeFilter === "guests"
            ? css.containerActive
            : css.container
        }
      >
        {expanded && <div className={css.uppercase}>Guests</div>}
        {guests <= 0 && <div className={css.placeholder}>Add guests</div>}
        {guests > 0 && <div>{guests} guest{guests > 1 && 's'}</div>}
      </div>
    </div>
  );
}
