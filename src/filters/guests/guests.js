import styles from './guests.module.css';

export default function Guests({ onSelect, expanded }) {
  return ( 
    <div 
    onClick={onSelect} 
    className={`${styles.main} ${expanded && styles.expandedFilterItem}`}
>
      {expanded && <div>Guests</div>}
      <div>Add guests</div>
    </div>
  );
}
