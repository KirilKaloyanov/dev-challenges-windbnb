import css from "./guests.module.css";

export default function Guests({ onSelect, activeFilter, expanded }) {
  return (
    <div
      onClick={onSelect}
      className={`${css.main} ${expanded && css.expandedFilterItem}`}
    >
      <div class={expanded && activeFilter === "guests" ? css.containerActive : css.container}>
        {expanded && <div>Guests</div>}
        <div>Add guests</div>
      </div>
    </div>
  );
}
