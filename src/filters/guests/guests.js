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
        {expanded && <div>Guests</div>}
        {guests <= 0 && <div>Add guests</div>}
        {guests > 0 && <div>{guests} guests</div>}
      </div>
    </div>
  );
}
