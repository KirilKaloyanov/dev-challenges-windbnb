import styles from "./locationValues.module.css";

export default function LocationValues({activeFilter}) {
  return (
    <div className={activeFilter === "location" ? styles.visible : styles.hidden}>
      hi location
    </div>
  );
}
