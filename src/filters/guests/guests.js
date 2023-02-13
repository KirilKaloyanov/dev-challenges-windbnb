import styles from './guests.module.css';

export default function Guests({ onSelect }) {
  return (
    <div onClick={onSelect} className={styles.main}>
      <div>Guests</div>
    </div>
  );
}
