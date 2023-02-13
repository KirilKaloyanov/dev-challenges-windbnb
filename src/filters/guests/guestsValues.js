import styles from './guestsValues.module.css';

export default function GuestsValues({activeFilter}) {
    return (
        <div 
            className={activeFilter==='guests' ? styles.visible : styles.hidden}
        >hi guest</div>
    );
}