import css from "./locationValues.module.css";

export default function LocationValues({
  expanded,
  activeFilter,
  locationsList,
  onLocationChange,
}) {
  return (
    <div
      className={`${css.main} 
            ${
              expanded && activeFilter === "location" ? css.visible : css.hidden
            }
            ${expanded ? "" : css.notExpanded}
         `}
    >
      <div className={css.locations}>
        {locationsList.map((l) => (
          <div
            key={l.id}
            className={css.locationItem}
            onClick={() => onLocationChange(l.city)}
          >
            <span className="material-symbols-rounded">location_on</span>
            {`${l.city}, ${l.country}`}
          </div>
        ))}
      </div>
    </div>
  );
}
